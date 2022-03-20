require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note shift protect hidden kitchen surge general'; 
let testAccounts = [
"0x35e1147c2a0129f54debc2ab12d4adf2d7e6fe5ac8c813683d59c60d4cca295a",
"0xcb4148daab70ffea0d4c244b31fe8202c265fa28dc87ed0cea9748142a5a6f62",
"0x0c0d83cca09e654c46e2d1106056312a62f55416d3a3feeda6895a92df19012d",
"0x5efd3d1a660c1014607ec183c92d7ef29095a798526e952ae033552ca4572944",
"0x6d50e30ba40bd1f546b4b2416e5a56d87317938e8d734ef5a6e7e65fe4e783fe",
"0x4793fe32cd691179ac88ab19eb5e51cd2037bf4099168a6413f83e08fe80dacd",
"0x773edb42397ebbf24b1d5ee7904d4fb3bad300127abb2f96e364e6d7501b63c7",
"0xfc7f3e87928d3e60401a66353e50a90a97f9c47384824029062d4fd28a35e6a5",
"0x5e8be36f0e201b781c648001d70e6aad051740d5f9aee8c9054503a82f04a429",
"0xbc6691b34db61d2d4866093ff088a183156dd170ea302aea404e8d4ca72bc169"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

