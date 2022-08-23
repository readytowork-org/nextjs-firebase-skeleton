# Setup

### Install `firebase`

```
npm install -g firebase-tools
```

### Login to `firebase`

```
firebase login
```

### Install packages

```
yarn bootstrap
```

# Development

### Start dev mode

```
yarn dev
```

### Start [Functions shell](https://firebase.google.com/docs/functions/local-emulator)

```
firebase use dev
yarn start-functions
yarn shell
```

### Build

```
yarn build
yarn build-storybook
```

### Build and Run locally with emulator

```
yarn build
rm -rf functions/.next
cp -a .next functions/.next
yarn build-functions
cd functions
firebase emulators:start
```
