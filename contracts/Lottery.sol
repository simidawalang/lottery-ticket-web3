
pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    constructor () public {
        manager = msg.sender;
    }

    modifier restricted () {
        require(msg.sender == manager);
        _;
    }

    function enter () public payable {
        require(msg.value > 0.01 ether);
        players.push(msg.sender);
    }

    function getPlayers () public view returns (address[]) {
        return players;
    }

    function randomNumber () public returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }

    function pickWinner () public restricted {
        uint index = randomNumber() % players.length;
        players[index].transfer(this.balance);
    }
    
}