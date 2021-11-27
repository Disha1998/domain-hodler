require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "0625a19e9662496eac15a4d713be4eb9"

module.exports = {
  solidity: "0.8.4",
  networks:{
    ropsten:{
      url:`https://ropsten.infura.io/v3/${projectId}`,
      accounts:[privateKey],
      gas: 2100000,
      gasPrice: 8000000000
    },
  },

};
