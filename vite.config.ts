// // THIS FILE IS JUST FOR UNOCSS VSCODE TO RECOGNIZE THAT UNO IS USED
// // PLEASE DON'T REMOVE IT

// import { defineConfig } from "vite";
// import Unocss from "unocss/vite";
// import { presetIncmix } from "./packages/theme/src/unoConfig";
// import { presetAttributify, presetUno } from "unocss";

// export default defineConfig({
//   plugins: [
//     Unocss({
//       presets: [
//         presetIncmix(),
//         presetAttributify({}),
//         presetUno({}),
//       ],
//     }),
//   ],
//   build: {
//     target: "esnext",
//     polyfillDynamicImport: false,
//     outDir: "../docs",
//   },
// }); 

// vite.config.ts
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'

export default {
  plugins: [
    Unocss({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        // ...custom presets 
      ]
    })
  ]
}