/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CDN_URL: string;
  // add more env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
