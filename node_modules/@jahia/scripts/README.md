<h1 align="center">Welcome to @jahia/scripts 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="../../LICENSE.txt" target="_blank">
    <img alt="License: JAHIA'S DUAL LICENSING" src="https://img.shields.io/badge/License-JAHIA'S DUAL LICENSING-yellow.svg" />
  </a>
  <a href="https://twitter.com/Jahia" target="_blank">
    <img alt="Twitter: Jahia" src="https://img.shields.io/twitter/follow/Jahia.svg?style=social" />
  </a>
</p>

> Jahia internal build script

## Install

In your project:

```sh
yarn add @jahia/scripts
```

Then add in your `package.json` those scripts:

```json
"scripts": {
  "babel:js": "jahia-babel-js",
  "babel:module": "jahia-babel-module",
  "react2dts": "jahia-react2dts",
  "publish-script": "jahia-publish",
  "prepare-build": "jahia-prepare-build",
  "build": "jahia-build",
  "build-umd": "jahia-build-umd"
}
```

## Usage
Once installed the following scripts are available and can be used in package.json :

- jahia-babel-js : generates transpiled JS files in build/js folder, used for "main" entry
- jahia-babel-module : generates transpiled JS files, keeping module import/exports, in build/esm folder, used for "module" entry
- jahia-prepare-build : copy d.ts and resource files to builds directories
- jahia-build : calls jahia-prepare-build , jahia-babel-js and jahia-babel-module
- jahia-publish : publish the module ( deprecated )
- jahia-react2dts  : just call react2dts to generate typings from react component
- jahia-build-umd : build the umd file based on rollup ( deprecated )

## Author

👤 **Jahia**

* Website: https://www.jahia.com
* Twitter: [@Jahia](https://twitter.com/Jahia)
* Github: [@Jahia](https://github.com/Jahia)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://jira.jahia.com).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Jahia](https://github.com/Jahia).<br />
This project is [JAHIA'S DUAL LICENSING](../../LICENSE.txt) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
