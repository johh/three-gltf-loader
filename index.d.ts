declare module 'three-gltf-loader' {
	import { AnimationClip, Camera, Loader, LoadingManager, Scene } from 'three';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
	import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader';

	interface GLTF {
		animations: AnimationClip[];
		scene: Scene;
		scenes: Scene[];
		cameras: Camera[];
		asset: object;
	}

	class GLTFLoader extends Loader {

		constructor( manager?: LoadingManager );
		dracoLoader: DRACOLoader | null;
		ddsLoader: DDSLoader | null;

		load( url: string, onLoad: ( gltf: GLTF ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
		setDRACOLoader( dracoLoader: DRACOLoader ): GLTFLoader;
		setDDSLoader( ddsLoader: DDSLoader ): GLTFLoader;
		parse( data: ArrayBuffer | string, path: string, onLoad: ( gltf: GLTF ) => void, onError?: ( event: ErrorEvent ) => void ) : void;

	}

	export default GLTFLoader;
}
