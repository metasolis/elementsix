const { expect, assert } = require('chai');

before('Get & Deploy Factories', async function () {
    // Get Factories
    this.Contrakt = await hre.ethers.getContractFactory('ElementSix');
    this.ContraktA = await hre.ethers.getContractFactory('ES6A');

    // Deploy Factories
    this.eleSix = await this.Contrakt.deploy();
    this.eSixA = await this.ContraktA.deploy();

});    


describe("ElementSix Contract Tests", function() {

    it('checking Element Six Contract name and symbol', async function () {
        assert(await this.eleSix.name() === "ElementSix");
        assert(await this.eleSix.symbol() === "E6");
    })

    it("Checking baseUri", async function () {
        assert(await this.eleSix.viewBaseUri() === "");
    });

});

describe("ES6A Contract Tests", function() {

    it('checking ES6A Contract name and symbol', async function () {
        expect(await this.eSixA.name()).to.equal("ES6A");
        expect(await this.eSixA.symbol()).to.equal("ES6A");
    })

    it("Checking baseUri", async function () {
        expect(await this.eSixA.viewBaseUri()).to.equal("");
    });    

});