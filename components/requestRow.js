import React, { Component } from 'react'
import {Button,Table, Message} from 'semantic-ui-react'
import web3 from '../ethereum/web3'
import Campaign from '../ethereum/campaign'

export default class RequestRow extends Component {
  state = {
    loading: false,
    errorMessage: '',
    loadingFinal: false,
  }

  onApprove = async () => {
    const campaign = Campaign(this.props.address)
    const accounts = await web3.eth.getAccounts()
    this.setState({loading:true, errorMessage: ''})
    try{
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    })
    }catch (error){
      this.setState({errorMessage: error.message})
    }
    this.setState({loading:false})
  }
  onFinalize = async () => {
    const campaign = Campaign(this.props.address)
    const accounts = await web3.eth.getAccounts()
    this.setState({loadingFinal: true, errorMessage: ''})
    try{
      await campaign.methods.finalizeRequest(this.props.address).send({
        from: accounts[0]
      })
    }catch(error){
      this.setState({errorMessage: error.message})
    }
  }
  render() {
    const {Row, Cell } = Table
    const {id, request, approversCount } = this.props
    const readytoFinalize = request.approvalCount > request.approversCount / 2
    return (
      <Row disabled={request.complete} positive={readytoFinalize && !request.complete }>
        <Cell> {id} </Cell>
        <Cell> {request.description} </Cell>
        <Cell> {request.recipient}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.approvalCount}/{approversCount}</Cell>
        <Cell>
          { request.complete ? null : (
          <Button 
            color='green'
            basic
            onClick={this.onApprove}
            loading={this.state.loading}
            >
            Approve
          </Button> 
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
          <Button
            color='teal'
            basic 
            onClick={this.onFinalize}
            loading={this.state.loadingFinal}
          >
            Finalize
          </Button>
          )}
        </Cell>
      </Row>
    )
  }
}
