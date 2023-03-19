// SPDX-License-Identifier: MIT

pragma solidity >=0.7.8 <0.9.0;

contract Counter{
    uint counter;

    constructor(uint _counter){
        counter=_counter;
    }

    function getCounter()public view returns(uint) {
        return counter;
    }

    function increment() public {
        counter++;
    }
}