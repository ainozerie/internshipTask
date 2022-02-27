// visma-identity://login?source=severa
// visma-identity://confirm?source=netvisor&paymentnumber=102226
// visma-identity://sign?source=vismasign&documentid=47ed9186-2ba0-4e8b-b9e2-7123575fdd5b

const process = require('process');
const deepLinkIdentifier = require('./deepLinkIdentifier');

const URL = process.argv.slice(2).toString();

let vismaCheck = new deepLinkIdentifier(URL);

console.log(vismaCheck.getAction());
console.log(vismaCheck.getParameters('source'));
console.log(vismaCheck.getParameters('paymentnumber'));
console.log(vismaCheck.getParameters('documentid'));

// how to launch a client correctly
// you need to type " node client.js" and URL in quotes

// examples:
// node client.js 'visma-identity://login?source=severa'
// node client.js 'visma-identity://confirm?source=netvisor&paymentnumber=102226'
// node client.js 'visma-identity://sign?source=vismasign&documentid=47ed9186-2ba0-4e8b-b9e2-7123575fdd5b'