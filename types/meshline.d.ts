// src/types/meshline.d.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'meshline' {
  export const MeshLineGeometry: unknown;
  export const MeshLineMaterial: unknown;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
