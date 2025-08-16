// global.d.ts

// Hapus atau komentari deklarasi 'meshline' dan 'global JSX' yang lama
// declare module 'meshline' { ... }
// declare global { ... }

// Impor tipe-tipe yang relevan jika belum ada
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { Object3DNode } from '@react-three/fiber';

// Gunakan cara modern untuk memperluas tipe elemen R3F
declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}

// Anda masih memerlukan ini untuk file .glb dan .png
declare module '*.glb';
declare module '*.png';