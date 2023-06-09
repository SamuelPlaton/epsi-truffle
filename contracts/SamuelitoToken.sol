pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SamuelitoToken is ERC20 {
    constructor() ERC20("Samuelito", "SMT") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}