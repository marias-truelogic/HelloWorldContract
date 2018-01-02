pragma solidity ^0.4.17;

contract HelloWorld {

  string message = "Im aliiiiveeee!";

  function HelloWorld() public {
    // constructor
  }

  function getMessage() public view returns (string) {
    return message;
  }
}
