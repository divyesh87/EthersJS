const ethers = require('ethers');
require("dotenv").config()

async function main() {
    const provider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_API_KEY)


    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    const tx = await wallet.sendTransaction({
        to: "0x2e1a3c300458a847928B5b58748FC442E5FA16DA",
        value: ethers.utils.parseEther("0.003")
    })

    const txReceipt = await tx.wait();
    console.log(txReceipt);
}

main()

