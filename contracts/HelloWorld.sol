pragma solidity ^0.4.4;

contract HelloWorld {

  string message = "Im aliiiiveeee!";

  function HelloWorld() {
    // constructor
  }

  function GetMessage() returns (string) {
    return message;
  }
}
