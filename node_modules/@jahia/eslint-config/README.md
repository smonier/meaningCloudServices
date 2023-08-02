<h1 align="center">Welcome to @jahia/eslint-config 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="../../LICENSE.txt" target="_blank">
    <img alt="License: JAHIA'S DUAL LICENSING" src="https://img.shields.io/badge/License-JAHIA'S DUAL LICENSING-yellow.svg" />
  </a>
  <a href="https://twitter.com/Jahia" target="_blank">
    <img alt="Twitter: Jahia" src="https://img.shields.io/twitter/follow/Jahia.svg?style=social" />
  </a>
</p>

> Provide Jahia ESLint shareable config to lint your JS projects.

## Install

Add this package to the `devDependencies` of the project you intend to add ESLint to.
This can be accomplished using `yarn` with the following command:

```sh
yarn add -D @jahia/eslint-config
```

or using `npm` with the following one:

```npm i -D @jahia/eslint-config ```


## Configure

Create a file named `.eslintrc.json` as a sibling of your `package.json`, with the following content:

    ```json
    {
      "extends": "@jahia"
    }
    ```

Update the scripts in your `package.json` to something like:

    ```json
    {
      "build": "yarn lint && yarn webpack",
      "lint": "eslint --ext js,jsx .",
      "lint:fix": "eslint --ext js,jsx --fix ."
    }
    ```

Additionally you may want to add a file `.eslintignore` as a sibling of your `package.json`, with the following content:
    ```
    node
    node_modules
    target
    build
    ```

Also depending on your need your can override some rules in the `.eslintrc.json` file by redefining them.

**Many IDE support eslint configuration, do not forget to activate the option**

## Usage

If you added the scripts in your `package.json`, you can do: 

```sh
yarn lint
```

or with *npm*:

```sh
npm run lint
```

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
