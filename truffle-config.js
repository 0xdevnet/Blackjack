const path = require("path");

module.exports = {
    contracts_build_directory: path.join(__dirname, "client/src/contracts"),

    compilers: {
        solc: {
            version: "0.6.12",
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },

    networks: {

        development: {
            host: "127.0.0.1",
            port: "8545",
            network_id: "*",
            gas: 5500000,
        },
    },
};
