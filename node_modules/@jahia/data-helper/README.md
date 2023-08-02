<h1 align="center">Welcome to @jahia/data-helper 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="../../LICENSE.txt" target="_blank">
    <img alt="License: SEE LICENSE IN ../../LICENSE.txt FILE" src="https://img.shields.io/badge/License-SEE LICENSE IN ../../LICENSE.txt FILE-yellow.svg" />
  </a>
  <a href="https://twitter.com/Jahia" target="_blank">
    <img alt="Twitter: Jahia" src="https://img.shields.io/twitter/follow/Jahia.svg?style=social" />
  </a>
</p>

> Provide helpers (react hooks, utily function, ...) to manipulate jahia datas

## Install

```sh
yarn add @jahia/data-helper
```

## Usage

@jahia/data-helper include graphql fragment to reduce the size of the graphql queries and help you with mandatory field to update apollo cache.

You can use it like this:

```js
import gql from 'graphql-tag';
import {PredefinedFragments} from '@jahia/data-helper';

export const ContentPickerFilledQuery = gql`
    query contentPickerFilledQuery($uuid: String!, $language: String!, $needToFetch: Boolean!) {
        jcr @include(if: $needToFetch) {
            result: nodeById(uuid: $uuid) {
                displayName(language: $language)
                primaryNodeType {
                    displayName(language: $language)
                    icon
                }
                ...NodeCacheRequiredFields
            }
        }
    }
    ${PredefinedFragments.nodeCacheRequiredFields.gql}
`;
```

## Author

👤 **Jahia**

* Website: https://www.jahia.com
* Twitter: [@Jahia](https://twitter.com/Jahia)
* Github: [@Jahia](https://github.com/Jahia)
* LinkedIn: [@Jahia](https://linkedin.com/in/Jahia)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://jira.jahia.org/).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jahia](https://github.com/Jahia).<br />
This project is [SEE LICENSE IN ../../LICENSE.txt FILE](../../LICENSE.txt) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
