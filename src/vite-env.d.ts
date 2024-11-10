/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg?react' {
    import * as React from 'react'
    const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    export default SVG
}
  
declare module '*.svg' {
    const content: string
    export default content
}