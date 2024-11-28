# XUSD Backend contract development


### Building


### Running tests

Perform unit tests  

````shell
npm run test
````

Generate coverage report

```shell
npm run coverage
```


### Docker container for  running in test enviromnent

Basic docker setup is provided  in **Dockerfile** It shall be enough to run deploy bare network into contaniner -  for CI Tests or 
whatever we deem necessary

````shell
    docker build . -t xusd-contract-chain
````


### useful invocations

extract roles of deployed AccessManager
````shell
 npx hardhat --network pulsechain roles 0xC53Fe22Be4386F7856648FC663d504acD0725960

````# AccessTest
# AccessTest
# AccessTest
