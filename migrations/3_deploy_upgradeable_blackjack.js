const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Blackjack = artifacts.require('Blackjack');

module.exports = async function (deployer) {
    await deployProxy(Blackjack);
};
