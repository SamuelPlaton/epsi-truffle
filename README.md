```
// install truffle
npm i truffle -g
// launch truffle env
truffle develop
migrate
// retrieve a contract
let contract = await MetaCoin.deployed()
// get balance of account then display it
let balance = await contract.getBalanceInEth(accounts[1])
balance.toNumber()
// send coins from an account to another
let send = await contract.sendCoin(accounts[1], 57, {from: accounts[0]})
let balance2 = await contract.getBalance(accounts[1])
balance2.toNumber() // should display 57

truffle develop --network Mumbai
truffle console --network Mumbai
```