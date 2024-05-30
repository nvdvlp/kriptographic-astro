import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

@Component({
    selector:'app-aboutUs',
    imports: [ NgClass, NgIf, GLTFLoader],
    standalone:true,
    template:``,
    templateUrl: './aboutUs.component.html',
    styleUrl:'./aboutUs.component.css',
})


export class AboutUsComponent{
    //create scene
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    
    //load a 3dModel
    // const loader = new GLTFLoader();
    // loader.load( '/3d_models/robot_rk11', function (gltf){
    //     scene.add(gltf.scene);
    // }, undefined, function (error) {    
    //     console.error( error );
    // });

}