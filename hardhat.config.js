require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const ALCHEMY_API_KEY = "pqr-VAfSii011IkFlqrZTxCgzK5fWegs";


module.exports = {
  solidity: "0.8.4",
  networks:{
    matic:{
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[privateKey],
      gas: 2100000,
      gasPrice: 8000000000
    },
  },

};
