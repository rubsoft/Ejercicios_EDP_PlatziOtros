require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
solidity: "0.8.18",
networks: {
  goerli: {
    url:"https://eth-goerli.g.alchemy.com/v2/fKZot3dY7itoW5i4Rv7V8D18vIg8frNP",
    accounts: [
      "21aef447a4b816678c3ea11a038d2e43bc9700beb8c9d0bb0459a5206d49b437"
    ]
  }
},
};