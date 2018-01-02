var HelloWorld = artifacts.require('./HelloWorld.sol'); //Import contract

contract('HelloWorld:GetMessage', function(accounts) {
  it('Should return the correct string', async function() {
    var hello_eth_salon = await HelloWorld.deployed(); //Deploy contract and wait until it's deployed
    var result = await hello_eth_salon.GetMessage.call(); //Get message and wait
    assert.isTrue(result === 'Im aliiiiveeee!'); // Assert
  });
});
