import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "solidity-coverage";
import 'dotenv/config'
import "./tasks/tasks"

const config: HardhatUserConfig = {

    solidity: {
        compilers: [
            {
                version: "0.8.11",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            }, {
                version: '0.8.18',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 199,
                    },
                },
            },
            {
                version: "0.6.6",
            },
            {
                version: "0.8.24",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 5,
                    },
                },
            },


            {
                version: "0.8.26",
                settings: {
                    viaIR: true,
                    optimizer: {


                        enabled: true,
                        runs: 5,

                    },
                },

            },
        ],
    },

    networks: {
        // pulsechain network,  we will be just reading from here
        pulsechain: {
            url: 'https://rpc.pulsechain.com',
            // just and well known address for just reading.  not valuable
            accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
        },
        hardhat: {
            loggingEnabled: false,
            mining: {
                mempool: {
                    order: "fifo"
                }
            }
        },

    },


}


export default config;

