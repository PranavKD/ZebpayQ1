var ethereum_address = require('ethereum-address');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter address: ', (address) => {
	if (ethereum_address.isAddress(address)) {
	  console.log('Valid ethereum address.');
	} else {
	  console.log('Invalid Ethereum address.');
	}
	rl.close();
});
