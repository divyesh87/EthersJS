const ethers = require('ethers');

async function main() {
    const provider = await new ethers.providers.AlchemyProvider("homestead", "process.env.ALCHEMY_API_KEY")

    const ERC_20_ABI = [
        "function name() view returns(string)",
        "function balances(address) view returns(uint256)"
    ]
    const CONTRACT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    const contract = new ethers.Contract(CONTRACT_ADDRESS, ERC_20_ABI, provider);
    
    const name = await contract.name();
    const balanceof = await contract.balances("0x5041ed759dd4afc3a72b8192c143f72f4724081a")

    console.log(balanceof.toString() / 1000000);

}

main()

