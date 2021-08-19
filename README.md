# Protocol translation in microservices

A simple demonstration of *REST -> Async request-response* protocol translation in microservices.

## Prerequisites

1. NodeJS
2. Docker

## Usage

1. Clone the repo and run `npm i` to install dependencies.
2. Change into repo directory and run the following in separate terminals.
   1. Start NATS server: `npm run start:nats`.
   2. Start `gateway` application that does the protocol translation: `npm start`.
   3. Start the microservice application `ms1`: `nx serve ms1`.
3. Send http request (through browser, tool like Postman or good-old curl): `http://localhost:3333/api/greet` and receive a cheerful `Hello World!` message :).
4. Read the source code of `gateway` and `ms1` applications:
   * [./apps/gateway/src/main.ts](./apps/gateway/src/main.ts)
   * [./apps/gateway/src/app/app.module.ts](./apps/gateway/src/app/app.module.ts)
   * [./apps/gateway/src/app/app.controller.ts](./apps/gateway/src/app/app.controller.ts)
   * [./apps/ms1/src/main.ts](./apps/ms1/src/main.ts)
   * [./apps/ms1/src/app/app.controller.ts](./apps/ms1/src/app/app.controller.ts)
