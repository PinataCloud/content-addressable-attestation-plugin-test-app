import { ethers, Wallet } from "ethers";
import axios from "axios";
import dotenv from "dotenv"
dotenv.config()

export const signCID = async (cid: string, isoDateString: string) => {
  const wallet = Wallet.fromPhrase(process.env.SEED_PHRASE!)
  const message = ethers.solidityPackedKeccak256(
    // Array of types: declares the data types in the message.
    ['address', 'string', 'string'],
    // Array of values: actual values of the parameters to be hashed.
    [wallet.address, cid, isoDateString])
 
  const signature = await wallet.signMessage(ethers.toBeArray(message));
  console.log(signature)

  let signerAddress = ethers.verifyMessage(ethers.toBeArray(message), signature);
  //  Test to make sure the signature worked properly by validating it and comparing the address
  if(wallet.address !== signerAddress) {
    throw new Error("invalid signature - addresses do not match")
  }

  const res = await axios.post(`${process.env.API_URL}/ipfs/signature/${cid}`, { signature }, {
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.PINATA_JWT}`
    }
  })

  console.log(res.data);
  return res.data;
}

export const getSignatureFromCIDResponse = async (cid: string) => {
  const res = await axios.head(`${process.env.GATEWAY_URL}/ipfs/${cid}`)
  console.log(res.headers['pinata-signature'])
  return res.headers['pinata-signature']
}