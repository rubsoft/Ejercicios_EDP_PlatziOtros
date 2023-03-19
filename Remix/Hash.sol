// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Hash {

    bytes32 public lastHash;

    function hash(string memory _text) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_text));
    }

    function changeHash(string memory _text) public returns (bytes32) {
        lastHash = keccak256(abi.encodePacked(_text));
        return lastHash;
    }
}