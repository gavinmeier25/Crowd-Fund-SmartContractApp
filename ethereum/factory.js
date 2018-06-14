import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xdF26d9e9e8e7bA519bc6363950A82812d65f119a'
)
export default instance 