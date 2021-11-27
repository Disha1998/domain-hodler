// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract userProfile {
  using Counters for Counters.Counter;
  Counters.Counter private _itemIds;
  struct User {
    uint itemId;
    string userName;
    address userAddress;
    string userBio;
    string userEmail;
    string userImage;
  }
   mapping(uint256 => User) public users;
   
  function create(string memory name, address userAdd, string memory bio, string memory email, string memory image) public {
    _itemIds.increment();
    uint256 itemId = _itemIds.current();
    users[itemId] = User(itemId, name,userAdd, bio, email, image);
  }
  function get(address userAdd) view public returns(uint, string memory, address, string memory, string memory, string memory) {
    uint i = _find(userAdd);
    return(users[i].itemId, users[i].userName, users[i].userAddress, users[i].userBio, users[i].userEmail, users[i].userImage);
  }
  function update(string memory name, address userAdd, string memory bio, string memory email, string memory image) public {
    uint i = _find(userAdd);
    users[i].userName = name;
    users[i].userAddress = userAdd;
    users[i].userBio = bio;
    users[i].userEmail = email;
    users[i].userImage = image;
  }
  function _find(address userAdd) view internal returns(uint) {
      uint itemCount = _itemIds.current();
    for(uint i = 0; i < itemCount; i++) {
      if(users[i + 1].userAddress == userAdd) {
        return i + 1;
      }
    }
    revert('User does not exist!');
  }
}