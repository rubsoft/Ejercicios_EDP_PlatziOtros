require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
solidity: "0.8.18",
networks: {
  goerli: {
    url:"https://eth-goerli.g.alchemy.com/v2/fKZot3dY7itoW5i4Rv7V8D18vIg8frNP",
    accounts: [
      "xxxxx"
    ]
  }
},
};
