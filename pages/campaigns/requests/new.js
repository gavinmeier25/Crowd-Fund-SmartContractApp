import React, { Component } from 'react'
import {Button, Form, Input, Message } from 'semantic-ui-react'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import {Link, Router} from '../../../routes'
import Layout from '../../../components/layout'

export default class New extends Component {
    state = {
        description: '',
        value: '',
        recipient: '',
        loading: false,
        errorMessage: '',
    }
    static async getInitialProps(props){
        const { address } = props.query
        return {address} 
    }
    onSubmit = async e => {
        e.preventDefault()

        const campaign = Campaign(this.props.address)
        const { description, value, recipient} = this.state
        this.setState({loading:true, errorMessage: ''})
        
        try{
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value),
                recipient
            ).send({
               from: accounts[0],
            })
            console.log('pushing')
            Router.pushRoute(`/campaigns/${this.props.address}/requests`)
        }catch (err){
            console.log(err.message)
            this.setState({errorMessage: err.message})
        }
        this.setState({loading:false})
        
    }
  render() {
    return (
     <Layout>

         <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
             <h3>Create Request</h3>
             <Form.Field>
                 <label>
                     Description
                 </label>
                 <Input
                 value={this.state.description}
                 onChange={
                     e => this.setState({description: e.target.value})
                 }
                 />
             </Form.Field>
             <Form.Field>
                 <label>
                     Value in Ether
                 </label>
                 <Input
                 value={this.state.value}
                 onChange={
                     e => this.setState({value: e.target.value})
                 }
                 />
             </Form.Field>
             <Form.Field>
                 <label>
                     Recipient 
                 </label>
                 <Input
                 value={this.state.recipient}
                 onChange={
                     e => this.setState({recipient: e.target.value})
                 }
                 />
             </Form.Field>
             <Message error header='Oops' content={this.state.errorMessage} />
             <Button loading={this.state.loading} primary>Create</Button>
         </Form>
     </Layout>
    )
  }
}
