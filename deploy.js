const ethers = require("ethers")
const fs = require("fs-extra")


async function main(){
    //http://127.0.0.1:7545
    const node_url = "http://127.0.0.1:7545";
    const provider = new ethers.providers.JsonRpcProvider(node_url);
    const wallet = new ethers.Wallet("917297fde3c86d688ef11def3d66b82be91a88e515235606d1623d4ea38d718a", provider);
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8")
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8")
    const contractFactory = new ethers.contractFactory(abi, binary, wallet)



    
}

main().then(() => process.exit(0)).catch((error) => )