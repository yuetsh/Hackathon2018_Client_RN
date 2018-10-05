declare module 'react-native-image-cache-hoc' {
  import React from 'react'
  import { Image, ImageProps } from 'react-native'

  interface Options {
    // Allow http urls.
    // Defaults to https only.
    validProtocols: string[]

    // Use domain host whitelist.
    // Defaults to allowing urls from all domain hosts.
    fileHostWhitelist: string[]

    // Namespace the directory that stores files to avoid collisions with other app libraries.
    // Defaults to 'react-native-image-cache-hoc'.
    fileDirName: string

    // Max size of file cache in bytes before pruning occurs.
    // Note that cache size can exceed this limit,
    // but sequential writes to the cache will trigger cache pruning
    // which will delete cached files until total cache size is below this limit before writing.
    // Defaults to 15 MB.
    cachePruneTriggerLimit: number

    // Default placeholder component to render while remote image file is downloading.
    // Can be overridden with placeholder prop like <CacheableImage placeholder={placeHolderObject} />.
    //
    // Placeholder Object is structed like:
    // const placeHolderObject = {
    //   component: ReactComponentToUseHere,
    //    props: {
    //      examplePropLikeStyle: componentStylePropValue,
    //      anotherExamplePropLikeSource: componentSourcePropValue
    //   }
    // };
    //
    // Defaults to <Image> component with style prop passed through.
    defaultPlaceholder: {
      component: any
      props: { style?: any }
    }
  }

  interface CacheableImage extends React.ComponentClass<ImageProps> {
    cacheFile(url: string): Promise<any>

    flush(): Promise<any>
  }

  function imageCacheHoc(
    comp: React.ReactType,
    options: Partial<Options>
  ): CacheableImage

  export default imageCacheHoc
}
