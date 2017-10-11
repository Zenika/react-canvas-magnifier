import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV
const isProd = env === 'production'

export default {
  input: 'src/main.jsx',
  output: {
    file: `dist/react-canvas-magnifier.js`,
    format: 'umd',
  },
  plugins: [
    nodeResolve({
      jsnext: true,
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    isProd && uglify()
  ]
}
