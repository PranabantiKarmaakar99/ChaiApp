require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

const ALCHEMY_API_KEY = "gpVJleCp2DGIII5tQwsL-3filxJRBAK3";
const SEPOLIA_PRIVATE_KEY = "050b9d226ef23286da115e24bcbbd6d86e9aeb7cf03c4eb07118262bdabe1b4c";

/** @type import('hardhat/config').HardhatUserConfig */

// const GOERLI_URL= process.env.GOERLI_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.19",
  networks:{
    
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }

  },
  
};
