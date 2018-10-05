declare module 'react-native-image-progress' {
  import React from 'react'
  import { ImageProps } from 'react-native'

  interface ProgressImageProps extends ImageProps {
    indicator: any
    indicatorProps?: any
    imageStyle?: any
    threshold?: number

    renderIndicator?(): void

    renderError?(error: any): void
  }

  class ProgressImage extends React.Component<ProgressImageProps> {}

  export default ProgressImage
}
