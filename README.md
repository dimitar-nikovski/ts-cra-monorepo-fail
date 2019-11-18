# ts-cra-monorepo-fail

### What's wrong?
The CRA inside `ionic` imports a component `CompOne` from `app1`.
Despite configured loaders with seemigly correct `test` and `include` properties in `/ionic/config/webpack.config.js` this import fails.

To make it fail
```
cd ionic
yarn start
```
