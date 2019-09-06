import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import nodeResolver from 'rollup-plugin-node-resolve';

//@ts-ignore
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  plugins:[
    builtins(),
    nodeResolver(),
    typescript({
      typescript: require('typescript'),
    })
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es'
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]
}