const createInstance = require('./gprcinstance')
const bitcoind = process.argv.length > 2 && process.argv[2] == 'bitcoind'

let grpcAlice = createInstance('alice', 10001, bitcoind)
let grpcBob = createInstance('bob', 10002, bitcoind)


// simple example of creating an invoice and paying in code
// this would normally not be on the same machine but makes a easy illustrationa
grpcBob.addInvoice({
    memo: "created in code",
    value: 2030,
}, (errInv, inv) => {
    console.log('payment request recieved', inv.payment_request)
    grpcAlice.sendPaymentSync({
        payment_request: inv.payment_request
    }, (e, pay) => {
        console.log('payment sent', e, JSON.stringify(pay, null, 2))
    })
})
