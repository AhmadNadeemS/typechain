"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "2020202020202", "", "Hello", 123456);
// const genesisBlock2 = new Block(1, "2020202020202", "", "Hello2", 123456);
let blockchain = [genesisBlock];
// blockchain.push(genesisBlock2);
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    console.log(previousBlock.hash);
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
};
console.log(blockchain);
console.log(createNewBlock("hello"));
console.log(createNewBlock("bye bye"));
// console.log(getBlockchain);
// console.log(getNewTimeStamp());
//# sourceMappingURL=index.js.map