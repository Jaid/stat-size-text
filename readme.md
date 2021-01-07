# stat-size-text


<a href="https://raw.githubusercontent.com/jaid/stat-size-text/master/license.txt"><img src="https://img.shields.io/github/license/jaid/stat-size-text?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor stat-size-text"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/stat-size-text/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fstat-size-text%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/stat-size-text/commits"><img src="https://img.shields.io/github/commits-since/jaid/stat-size-text/v0.1.0?style=flat-square&logo=github" alt="Commits since v0.1.0"/></a> <a href="https://github.com/jaid/stat-size-text/commits"><img src="https://img.shields.io/github/last-commit/jaid/stat-size-text?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/stat-size-text/issues"><img src="https://img.shields.io/github/issues/jaid/stat-size-text?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/stat-size-text"><img src="https://img.shields.io/npm/v/stat-size-text?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/stat-size-text/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/stat-size-text?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/stat-size-text"><img src="https://img.shields.io/npm/dm/stat-size-text?style=flat-square&logo=npm" alt="Downloads"/></a>

**Promise that returns the size of a file or directory as string.**





## Installation

<a href="https://npmjs.com/package/stat-size-text"><img src="https://img.shields.io/badge/npm-stat--size--text-C23039?style=flat-square&logo=npm" alt="stat-size-text on npm"/></a>

```bash
npm install --save stat-size-text@^0.1.0
```

<a href="https://yarnpkg.com/package/stat-size-text"><img src="https://img.shields.io/badge/Yarn-stat--size--text-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="stat-size-text on Yarn"/></a>

```bash
yarn add stat-size-text@^0.1.0
```

<a href="https://github.com/jaid/stat-size-text/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/stat--size--text-24282e?style=flat-square&logo=github" alt="@jaid/stat-size-text on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/stat-size-text@^0.1.0
```



## Example


```javascript
import statSizeText from "stat-size-text"

const result = statSizeText("pikachu_8x8.png")
```

Variable `result` will be:

```javascript
"129 B"
```

















## Development



Setting up:
```bash
git clone git@github.com:jaid/stat-size-text.git
cd stat-size-text
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/stat-size-text/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
