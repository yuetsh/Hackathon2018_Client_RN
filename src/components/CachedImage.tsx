import React from 'react'
import imageCacheHoc from 'react-native-image-cache-hoc'
import { Image } from 'react-native'
import Indicator from './Indicator'
import { Size } from '../services/uikit'

const CachedImage = imageCacheHoc(Image, {
  fileHostWhitelist: ['localhost', 'i.loli.net'],
  fileDirName: 'zhen-xiang-app-image-cache',
  defaultPlaceholder: {
    component: Indicator,
    props: { style: { height: Size.MemeHeight } }
  }
})

export default CachedImage
