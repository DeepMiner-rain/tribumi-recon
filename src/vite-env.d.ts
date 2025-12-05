/// <reference types="vite/client" />

// Declare figma:asset module type
declare module 'figma:asset/*' {
  const content: string;
  export default content;
}
