const ethers = require('ethers');
require("dotenv").config()

async function main() {
    const provider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_API_KEY)


    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)


    const latestBlock = await provider.getBlockNumber();

    const block = await provider.getBlock(latestBlock);

    console.log(block);

}

main()

