# three.js glTF loader
![three.js version](https://img.shields.io/badge/three.js-v0.111.0-green.svg?style=flat-square)
![license](https://img.shields.io/npm/l/three-gltf-loader.svg?style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/johh/three-gltf-loader.svg?style=flat-square)](https://github.com/johh/three-gltf-loader/issues)


## Note for `three` >= v0.103.0
Please note, that starting with three.js r103, `GLTFLoader` is included in the `three` package itself and installing `three-gltf-loader` is no longer necessary.

It can be accessed via

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
```
However, this package will still be maintained.


## Installation
```
yarn add three-gltf-loader
```
```
npm i --save three-gltf-loader
```

## Description
three.js's r111 [GLTFLoader](https://threejs.org/docs/#examples/loaders/GLTFLoader) wrapped as a module for easy importing, TypeScript type definitions included.

## Usage
```javascript
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

const loader = new GLTFLoader();
loader.load(
	'path/to/your/file.gltf',
	( gltf ) => {
		// called when the resource is loaded
		scene.add( gltf.scene );
	},
	( xhr ) => {
		// called while loading is progressing
		console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
	},
	( error ) => {
		// called when loading has errors
		console.error( 'An error happened', error );
	},
);
```
For further documentation, see [the GLTFLoader docs](https://threejs.org/docs/#examples/loaders/GLTFLoader).

## Reporting Issues
Please note that this is just a wrapper for the [glTF loader provided by three.js](https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js). Therefore, any issues regarding the loader should be reported directly via the [three.js issue tracker](https://github.com/mrdoob/three.js/issues/).

For issues directly related to the wrapper or this package specifically, feel free to contact me.
