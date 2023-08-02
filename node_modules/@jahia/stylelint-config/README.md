<h1 align="center">Welcome to @jahia/stylelint-config 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="../../LICENSE.txt" target="_blank">
    <img alt="License: JAHIA'S DUAL LICENSING" src="https://img.shields.io/badge/License-JAHIA'S DUAL LICENSING-yellow.svg" />
  </a>
  <a href="https://twitter.com/Jahia" target="_blank">
    <img alt="Twitter: Jahia" src="https://img.shields.io/twitter/follow/Jahia.svg?style=social" />
  </a>
</p>

> Provide Jahia Stylelint shareable config to lint your style.

We extend this configurations :
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-config-css-modules](https://github.com/pascalduez/stylelint-config-css-modules)

We use this plugins :
- [stylelint-order](https://github.com/hudochenkov/stylelint-order) to check the order of content and properties within declaration blocks
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss) to check scss synthax


## Install

Add `stylelint` and this package to the `devDependencies` of the project.
This can be accomplished using `yarn` with the following command:

```sh
yarn add -D stylelint @jahia/stylelint-config
```

or using `npm` with the following one:

```sh
npm i -D stylelint @jahia/eslint-config
```


## Configure

Create a file named `.stylelintrc.json` as a sibling of your `package.json`, with the following content:

    ```json
    {
      "extends": "@jahia/stylelint-config"
    }
    ```

Update the scripts in your `package.json` to something like:

    ```json
    {
      "build": "yarn stylelint && yarn webpack",
      "stylelint": "stylelint './src/**/*.scss'",
      "stylelint:fix": "stylelint './src/**/*.scss' --fix ."
    }
    ```

Additionally you may want to add a file `.stylelintignore` as a sibling of your `package.json`, with the following content:
    ```
    node
    node_modules
    target
    build
    ```

Also depending on your need your can override some rules in the `.stylelintrc.json` file by redefining them.

**IDE integrate stylelint configuration or has a stylelint plugin to do it, do not forget to activate it**

- For IntelliJ : [Activating and configuring Stylelint](https://www.jetbrains.com/help/idea/using-stylelint-code-quality-tool.html)
- For Atom : [Install linter-stylelint](https://github.com/AtomLinter/linter-stylelint)
- For VS Code : [Install vscode-stylelint](https://github.com/stylelint/vscode-stylelint)


## Usage

If you added the scripts in your `package.json`, you can do:

```sh
yarn stylelint
```

or with *npm*:

```sh
npm run stylelint
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
