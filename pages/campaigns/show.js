import React, { Component } from 'react'
import Layout from '../../components/layout'
import Campaign from '../../ethereum/campaign'
import {Button, Card, Grid} from 'semantic-ui-react'
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/contributeForm'
import {Link} from '../../routes'

export default class Show extends Component {

  static async getInitialProps(props){
    const campaign = Campaign(props.query.address)
    const summary = await campaign.methods.getSummary().call()
    return{
      address: props.query.address,
      minContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]

    }
  }

  renderCards(){
    const {
      balance,
      manager,
      minContribution,
      requestCount,
      approversCount 
    } = this.props

    const items = [
      {
      header: manager,
      meta: 'Address of Manager',
      description: 'Created campaign and can requests to withdraw money',
      style: { overflowWrap: 'break-word'}
    },
    {
      header: minContribution,
      meta: 'Minimum Contribution (Wei)',
      description: 'Minimum amount that a user can donate to the contract'
    },
    {
      header: requestCount,
      meta: 'The number of requests on a contract',
      description: 'A request tries to draw money from the contract, request are created by managers.'
    },
    {
      header: approversCount,
      meta: 'Number of Approvers',
      description: 'Number of people that have contributed to the contract campaign.'
    },
    {
      header: web3.utils.fromWei(balance, 'ether'),
      meta: 'Balance of the Contract (Ether)',
      description: 'This is the balance of the contract'
    }
    ]
    return <Card.Group items={items} />
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3> 
        <Grid>
          <Grid.Row>
          <Grid.Column width={10}>
            {this.renderCards()}
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column>
            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button primary>View Requests</Button>
              </a>
            </Link>
          </Grid.Column>
          </Grid.Row>
        </Grid> 
      </Layout>
    )
  }
}
