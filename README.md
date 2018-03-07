# three.js glTF loader

## Installation
```
yarn add three-gltf-loader
```
```
npm i --save three-gltf-loader
```

## Description
three.js's [GLTFLoader](https://threejs.org/docs/#examples/loaders/GLTFLoader) wrapped as a module for easy importing.

## Usage
```javascript
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

const loader = new GLTFLoader();
```
For further documentation, see [the GLTFLoader docs](https://threejs.org/docs/#examples/loaders/GLTFLoader).

## Reporting Issues
Please note that this is just a wrapper for the [glTF loader provided by three.js](https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js). Therefore, any issues regarding the loader should be reported directly via the [three.js issue tracker](https://github.com/mrdoob/three.js/issues/).
For issues directly related to the wrapper or this package specifically, feel free to contact me.