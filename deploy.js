// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const { interface, bytecode } = require("./compile");
// const Web3 = require("web3");

// const mnemonic =
//   "neither result gorilla brother library deer simple work mail clever ecology prize";
// const rinkebyInfura =
//   "https://rinkeby.infura.io/v3/0caa3951bef646b0b7d71f48103ecfbc";

// const provider = new HDWalletProvider(mnemonic, rinkebyInfura);

// const web3 = new Web3(provider);

// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();
//   const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({
//       data: bytecode,
//     })
//     .send({
//       from: accounts[0],
//       gas: "1000000",
//     });
//   console.log("Contract deployed to: ", result.options.address);

//   provider.engine.stop();
// };

// deploy();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const { interface, bytecode } = require("./compile");
const Web3 = require('web3');

const mnemonic = "neither result gorilla brother library deer simple work mail clever ecology prize";
const rinkebyInfura = "https://rinkeby.infura.io/v3/0caa3951bef646b0b7d71f48103ecfbc";

const provider = new HDWalletProvider(mnemonic, rinkebyInfura);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });
    console.log('Contract deployed to: ', result.options.address);
    provider.engine.stop();
}

deploy();