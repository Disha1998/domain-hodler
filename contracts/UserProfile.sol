// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract UserProfile is ReentrancyGuard {
  using Counters for Counters.Counter;
  Counters.Counter private _userIds;

  struct User {
    uint userId;
    address userAddress;
    string name;
    string userBio;
    string userImage;
    string email;
  }

  mapping(uint256 => User) private users; 
 
  function createUser(
    address userAddress,
    string memory name,
    string memory userBio,
    string memory image,
    string memory email
  ) public  {

    _userIds.increment();
    uint256 userId = _userIds.current();
  
    users[userId] =  User(
      userId,
      userAddress,
      name,
      userBio,
      image,
      email
    );

  }
   function getUser(address userAdd) public view returns (User memory) {
       uint itemCount = _userIds.current();
       User memory currentUser;
      for (uint i = 0; i < itemCount; i++) {
      if (users[i + 1].userAddress == userAdd) {
        uint currentId = users[i + 1].userId;
        currentUser = users[currentId];
      }
    }
    return currentUser;
  }

}