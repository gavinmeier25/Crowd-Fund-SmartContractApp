const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

const compiledFactory = require('../ethereum/build/CampaignFactory.json')
const compiledCampaign = require('../ethereum/build/Campaign.json')

let accounts
let factory
let campaignAddress
let campaign

beforeEach( async () => {
    accounts = await web3.eth.getAccounts()

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' })

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    })
    const addresses = await factory.methods.getDeployedCampaigns().call()
    campaignAddress = addresses[0]
    //alternative way to write this would be to write [campaignAddress ] = await factory.methods.getDeployedCampaigns().call()
    campaign = new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    )
})

describe('Campaigns', () => {
    it('deploys a Campaign Contract and a Campaign Factory', () => {
        assert.ok(factory.options.address)
        assert.ok(campaign.options.address)   
    })
    it('Marks caller as campaign manager', async () => {
        const manager = await campaign.methods.manager().call()
        assert.equal(accounts[0], manager )
    })
    it('allows people to contribute and marks them as approvers', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1],
        })
        const isContributor = await campaign.methods.approvers(accounts[1]).call()
        assert(isContributor)
    })
    it('requires the minimum amount to contribute', async () => {
        try{
            await campaign.methods.contrubte().send({
                value: '5',
                from: accounts[1]
            })
            assert(false)
        }catch(err){
            assert(err)
        }
    })
    it('allows a manager to make a request for payment', async () => {
        await campaign.methods
            .createRequest('Buy new computers', '100', accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            })
        const request = await campaign.methods.requests(0).call()
        assert.equal('Buy new computers', request.description)
    })
    it('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        })
        await campaign.methods
            .createRequest('Checker', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({ from: accounts[0], gas: '1000000'})
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })
        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })
        let balance = await web3.eth.getBalance(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        balance = parseFloat(balance)
        //console.log('Balance of Account: ',balance)
        assert(balance > 104)
    })
})
