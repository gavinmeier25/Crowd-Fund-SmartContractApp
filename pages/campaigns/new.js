import React, { Component } from 'react'
import Layout from '../../components/layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Button, Input, Form, Message} from 'semantic-ui-react'
import {Router} from '../../routes'

export default class New extends Component {
    state={
        minimumContribution: '',
        errorMessage: '',
        loading: false,
    }
    onSubmit =  async (event) => {
        event.preventDefault()
        this.setState({ loading: true, errorMessage:''})
        try{
        const accounts = await web3.eth.getAccounts()
        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            })
        Router.pushRoute('/')
        } catch(err){
                this.setState({ errorMessage: err.message})
            }
        this.setState({loading: false})

    }
  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit} error={this.state.errorMessage}>
            <Form.Field>
                <label>Minimum Contribution</label>
                <Input 
                    label='wei' 
                    labelPosition='right'
                    value={this.state.minimumContribution}    
                    onChange={
                        event => this.setState({ minimumContribution: event.target.value}) 
                    }
                />
            </Form.Field>
            <Message error header='Oops' content={this.state.errorMessage} />
            <Button
                primary
                loading={this.state.loading}
            >
            Create Campaign
            </Button>
        </Form>
      </Layout>
    )
  }
}
