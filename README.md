# DrConsulta

This app performs simple tasks like scheduling appointments based on a specialty category.

# Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))

- [Watchman](https://facebook.github.io/watchman)

- [Xcode 12](https://developer.apple.com/xcode)

- [Cocoapods 1.10.1](https://cocoapods.org)

- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)

- [Android Studio and Android SDK](https://developer.android.com/studio)

- [Yarn 1+](https://classic.yarnpkg.com/lang/en)

# Usage

###  1: Install dependencies

- Go to your project's root folder and run:
```bash
yarn install
```

###  2: Install `CocoaPod's` project dependencies

- Go to your project's root `ios` folder and run:
```bash
pod install
```

###  3: Setup enviroment

- Go to your project's root folder and rename `.env.example` to `.env`

###  4: Run application

- Android
```bash
yarn android
```

- iOS
```bash
yarn ios
```

# Folder structure

This template follows a very simple project structure:
```
|-- src
|   `--assets
|   `--components
|   `--config
|   `--constants
|   `--contexts
|   `--routes
|   `--screens
|   `--services
|   `--styles
|   `--utils
|   `-- app.js
`-- index.js
```

# Webhook

- Query result can be found at:

```bash
https://webhook.site/7dfe8b9f-0ca1-41cf-bd7b-b0cd32b1b25a
```

# ToDo
- Improve hard-code strings
