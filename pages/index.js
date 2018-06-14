import React, { Component } from 'react'
import factory from '../ethereum/factory'
import Layout from '../components/layout'
import {Button, Card} from 'semantic-ui-react'
import map from 'lodash/map'
import {Link} from '../routes'

export default class Index extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call()
        return {campaigns}
    }
    renderCampaigns(){
       const items = map(this.props.campaigns, (address) => {
           return {
               header: address,
               description: 
                <Link route={`/campaigns/${address}`}>
                    <a> View Campaign </a>
                </Link>,
               fluid: true
           }
       })
        return <Card.Group items={items} />
    }
  render() {
    return (
        <Layout>
            <div>   
                <h1>Open Campaigns</h1>
                <Link route='/campaigns/new'> 
            <a className='item'><Button 
                    content='Create Campaign'
                    floated='right'
                    icon='add circle'
                    primary
                    /></a> 
        </Link>
                
                {this.renderCampaigns()} 
            </div>
        </Layout>
    )
  }
}
