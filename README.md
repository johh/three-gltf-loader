# three.js glTF loader
![three.js version](https://img.shields.io/badge/three.js-v0.99.0-green.svg?style=flat-square)
![license](https://img.shields.io/npm/l/three-gltf-loader.svg?style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/johh/three-gltf-loader.svg?style=flat-square)](https://github.com/johh/three-gltf-loader/issues)


## Installation
```
yarn add three-gltf-loader
```
```
npm i --save three-gltf-loader
```

## Description
three.js's r99 [GLTFLoader](https://threejs.org/docs/#examples/loaders/GLTFLoader) wrapped as a module for easy importing, [TypeScript type definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/three/three-gltfloader.d.ts) included.

## Usage
```javascript
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

const loader = new GLTFLoader();
```
For further documentation, see [the GLTFLoader docs](https://threejs.org/docs/#examples/loaders/GLTFLoader).

## Reporting Issues
Please note that this is just a wrapper for the [glTF loader provided by three.js](https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js). Therefore, any issues regarding the loader should be reported directly via the [three.js issue tracker](https://github.com/mrdoob/three.js/issues/).
TypeScript definitions are provided by the [official three package on DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/three).

For issues directly related to the wrapper or this package specifically, feel free to contact me.
