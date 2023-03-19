const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter Contract", () => {
    it("Shoul increment the counter", async () => {
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy(0);
        await counter.increment();
        const updateCounter = counter.getCounter();

        expect(updatedCounter).to.equal(1);
    });
});