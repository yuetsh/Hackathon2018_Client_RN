import React from 'react'
import imageCacheHoc from 'react-native-image-cache-hoc'
import { Image } from 'react-native'
import Indicator from './Indicator'

const CachedImage = imageCacheHoc(Image, {
  fileHostWhitelist: ['localhost', 'i.imgur.com'],
  fileDirName: 'zhen-xiang-app-image-cache',
  defaultPlaceholder: {
    component: Indicator,
    props: { style: { height: 200 } }
  }
})

export default CachedImage
