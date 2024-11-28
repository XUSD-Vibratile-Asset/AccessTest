import {task} from "hardhat/config";
import {isAddress, keccak256} from "ethers";


/**
 * some maintenance tasks
 */

task("roles", "remove roles assigned to addresses")
    .addPositionalParam("contract")
    .setAction(async (taskArgs, hre) => {
        console.log(taskArgs);

        const accessManager = await hre.ethers.getContractAt("AccessManager", '0xCB13Ca54A9744aFA2586E6232b94a58cF9B5E25C');


        let value = await hre.ethers.provider.getStorage(accessManager, 0);
        let length = BigInt(value);
        console.log('array length at storage 0:', length)

        //  first element
        const slothash = keccak256("0x0000000000000000000000000000000000000000000000000000000000000000");
        console.log('labelhash [0]:', slothash);

        let slotNumber = BigInt(slothash);
        for (let i = 0; i < length; i++) {
            let address = await hre.ethers.provider.getStorage(accessManager, slotNumber + BigInt(i));
            let convertedAddress = '0x' + address.substring(address.length -40);
            if (isAddress(convertedAddress)) {
                let rank = await accessManager.getAccountRank(convertedAddress);
                console.log('value at :', i, convertedAddress, rank);
            } else {
                console.log(isAddress(address.substring(address.length -40)));
                console.log('invalid value at :', i, convertedAddress,);
                console.log('original :', address);
            }


        }

    });

