# Andaluh-electron

Transliterate español (spanish) spelling to andaluz electron app transcriptor.

![app_image](https://user-images.githubusercontent.com/30650412/93900411-a3972480-fcf5-11ea-83ed-600805a35ba9.png)

## Table of Contents

- [Description](#description)
- [Run](#run)
- [Build](#build)
- [Installation](#installation)
  - [deb](#deb)
  - [rpm](#rpm)
  - [Snap](#snap)
  - [AppImage](#appimage)
- [Support](#support)
- [Contributing](#contributing)

## Description

The **Andalusian varieties of [Spanish]** (Spanish: *andaluz*; Andalusian) are spoken in Andalusia, Ceuta, Melilla, and Gibraltar. They include perhaps the most distinct of the southern variants of peninsular Spanish, differing in many respects from northern varieties, and also from Standard Spanish. Further info: https://en.wikipedia.org/wiki/Andalusian_Spanish.

This app uses the [Andaluh-js](https://github.com/andalugeeks/andaluh-js).

As there's no official or standard andaluz spelling, andaluh-js is adopting the **EPA proposal (Er Prinzipito Andaluh)**. Further info: https://andaluhepa.wordpress.com. Other andaluz spelling proposals are planned to be added as well.

## Run

Andaluh-electron requires `nodejs` >= 12.x.x to run. Running is as simple as installing dependencies with `npm install` and then running the scripts `npm run-script start:react` and `npm run-script start:electron` as follows:

```
$ npm install

> core-js@2.6.11 postinstall ~/andaluh-electron/node_modules/babel-runtime/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js@3.6.5 postinstall ~/andaluh-electron/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.6.5 postinstall ~/andaluh-electron/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"


> electron@10.1.2 postinstall ~/andaluh-electron/node_modules/electron
> node install.js


> nodemon@2.0.4 postinstall ~/andaluh-electron/node_modules/nodemon
> node bin/postinstall || exit 0

npm WARN andaluh-electron@1.0.0 No repository field.
npm WARN andaluh-electron@1.0.0 license should be a valid SPDX license expression
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/webpack-dev-server/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/watchpack-chokidar2/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/react-scripts/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/jest-haste-map/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 2114 packages from 853 contributors and audited 2119 packages in 40.051s

87 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ npm run-script start:react & npm run-script start:electron
```

*Note*: You may have to run the two scripts of the last command above on different terminals.

## Build

Thanks to `electron-builder` several packages (`deb`, `rpm`, `snap (unsigned)`, `appImage`) are build with a single command: `npm run-script build`.  You need to have the following dependencies installed in order to generate the packages: `dpkg`, `rpm`, `snap`.


```
$ npm run-script build

> andaluh-electron@1.0.0 prebuild ~/andaluh-electron
> node tasks/prebuild.js

Removing ~/andaluh-electron/build
Removing ~/andaluh-electron/dist

> andaluh-electron@1.0.0 build ~/andaluh-electron
> npm run build:react && npm run build:electron


> andaluh-electron@1.0.0 build:react ~/andaluh-electron
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  134.07 KB  build/static/js/2.8b009245.chunk.js
  12.68 KB   build/static/js/main.7e1f83c8.chunk.js
  780 B      build/static/js/runtime-main.edf38bd2.js
  159 B      build/static/css/main.8f082792.chunk.css

The project was built assuming it is hosted at ./.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  bit.ly/CRA-deploy


> andaluh-electron@1.0.0 build:electron ~/andaluh-electron
> electron-builder

  • electron-builder  version=22.8.1 os=4.15.0-118-generic
  • loaded configuration  file=package.json ("build" field)
  • writing effective config  file=dist/builder-effective-config.yaml
  • packaging       platform=linux arch=x64 electron=10.1.2 appOutDir=dist/linux-unpacked
  • building        target=snap arch=x64 file=dist/andaluh-transcriptor-1.0.0-amd64.snap
  • building        target=AppImage arch=x64 file=dist/andaluh-transcriptor-1.0.0-x86_64.AppImage
  • building        target=deb arch=x64 file=dist/andaluh-transcriptor-1.0.0-amd64.deb
  • building        target=rpm arch=x64 file=dist/andaluh-transcriptor-1.0.0-x86_64.rpm
```

## Installation

### DEB

For `debian` or `ubuntu` linux systems, run the following command after package build:

```
$ sudo dpkg -i dist/andaluh-transcriptor-1.0.0-amd64.deb
```

### RPM

For `redhat` or `fedora` linux systems, run the following command after package build:

```
$ sudo rpm i dist/andaluh-transcriptor-1.0.0-x86_64.rpm
``` 

### Snap

A cross linux distro `snap` installation package is also available. It is distributed unsigned (so far), so please use the followign command to install the snap package after build:

```
$ sudo snap install --dangerous /dist/andaluh-transcriptor-1.0.0-amd64.snap
```

### appImage

A cross linux distro `appImage` executable is also available. You can just execute it as-is without installing

```
$ ./dist/andaluh-transcriptor-1.0.0-x86_64.AppImage
```

## Support

Please [open an issue](https://github.com/andalugeeks/andaluh-electron/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and open a pull request.
