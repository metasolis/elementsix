import hre from 'hardhat';
import { assert } from 'chai';

before('get factories', async function () {
    this.Contrakt = await hre.ethers.getContractFactory('ElementSix');
    // this.ContraktV2 = await hre.ethers.getContractFactory('ElementSixV2');
});

it('checking Element Six', async function () {
    const eleSix = await this.Contrakt.deploy();

    assert(await eleSix.name() === "ElementSix");
})