const path = require('path')
const args = process.argv
const isOpenDevTools = args.includes('--devtools')
import packageData from '../package.json'
import ComponentsPlugin from 'unplugin-vue-components/webpack'

console.log('args-----', args)

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

// 自动按需引入
const NutUIResolver = () => {
  return name => {
    if (name.startsWith('Nut')) {
      const partialName = name.slice(3)
      return {
        name: partialName,
        from: '@nutui/nutui-taro',
        sideEffects: `@nutui/nutui-taro/dist/packages/${partialName.toLowerCase()}/style`
      }
    }
  }
}

const config = {
  projectName: 'mini3',
  date: '2022-9-27',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html', 'taro-plugin-pinia'],
  defineConstants: {
    IS_H5: process.env.TARO_ENV === 'h5',
    IS_WEAPP: process.env.TARO_ENV === 'weapp'
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  compiler: 'webpack4',
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  mini: {
    miniCssExtractPluginOption: {
      ignoreOrder: true
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain, webpack) {
      chain.merge({
        module: {
          rule: [
            {
              test: /.js$/,
              loader: 'babel-loader'
            }
          ]
        }
      })
      // 自动按需引入
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          resolvers: [NutUIResolver()]
        })
      )
    }
    // webpackChain(chain, webpack) {
    //   chain.plugin('analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    // }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro'],
    postcss: {
      pxtransform: {
        enable: true
      },
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    router: {
      mode: 'hash',
      customRoutes: {
        // "页面路径": "自定义路由"
        // '/pages/index/indexPage': '/index'
      }
    },
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          resolvers: [NutUIResolver()]
        })
      )
    }
  }
}

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return merge({}, config, require('./dev'))
  }
  if (process.env.NODE_ENV === 'test') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return merge({}, config, require('./test'))
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return merge({}, config, require('./prod'))
}
