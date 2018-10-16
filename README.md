## Lightning network simnet development environment

The purpose of this talk is to get a local lightning network development environment set up
to do local development.  This is based on the [lightning tutorial](https://dev.lightning.community/tutorial/01-lncli/index.html).

We will follow the the basic idea from there and in addition we will connect the zap
wallet to get a feel for what the simulated setup looks like, we will create channels 
and send funds from there instead of manually as in the tutorial.
Also I will provide some additional simple code examples of interacting with the setup
using the grpc api.

### Install lnd and btcd

Follow [instructions](https://dev.lightning.community/guides/installation/)

### commands

`./run.sh`

`source ./aliases.sh`

### funding

Follow [instructions](https://dev.lightning.community/tutorial/01-lncli/index.html#funding-alice)

`ln-alice sendcoins rXo6fJSQUJTtMLd62Bcx5kfkrkzMGgjTEz 2000000`

### unlock wallets

`ln-alice unlock`

`alicepass`

`ln-bob unlock` 

`bobpasss`(must be 8 characters)

`ln-charlie unlock`

`charliepass`

### pub keys
alice "024da749d97627bc6ba19ff46bdb74472c2b18672f75653bbe1d4527f44291f18a"

bob "0208c49665537360e0f94a6403ac2c2776b4ea87b66c084f9f52bf7014f80c6238"

charlie "036ff69f785964f009e9839266ac60e715263afb69612b2824cd7fb8b0695a889c"


### using grpc

`npm install grpc`

`node index.js`