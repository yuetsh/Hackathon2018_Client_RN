const baseConfig = {
  prefix: 'zhenxiang/v1/'
}

const config = {
  dev: {
    host: 'http://localhost:3010/'
  },
  prod: {
    host: 'https://api.yueyue.work/'
  }
}

export default Object.assign(config.prod, baseConfig)
