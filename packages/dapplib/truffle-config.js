require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food plastic return machine upgrade ice light army ghost'; 
let testAccounts = [
"0x2bbe27b5509614b86d775ed8b27779ef1a328f5a14163421bac6e0144d6512bf",
"0xe3c551a718454c2af7657e126b065b152b27c0067a6c92685f3f3dfd7ad23d00",
"0x032753fc558451203520a504907aa3fab78247593c61762130d6bb1463a817d0",
"0x79e5d1e182a6b1135e8b19b5e112555f36c85d9c86793ab9fd85477e82acf6c0",
"0x23b9dbe0b731ecde713ccca0a7b324ecfa5d0d5492df8defe17236def0cc38ee",
"0x84d83bd2f61944f692f49aaeeae61c9d1aff437974bb681b25b9b57897c71ec4",
"0xa42c5d9198d79ff2c8ffb9364cce72e42929037d2af7e531941c887ab24f5ba9",
"0xed13e8b7e44f02892375ad5c345289959dca8f6f4f6afc2e388dab726b29b837",
"0xe43883c86e96f6a062663775365ca8f0f996944eb12a52a4b20aecc5ac62b382",
"0x5732db303ab77f58ca47c7da2ca9f4f1fc2acdcebbba56800d40fc007ab65666"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


