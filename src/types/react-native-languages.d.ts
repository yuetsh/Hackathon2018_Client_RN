declare module 'react-native-languages' {
  interface LanguageMap {
    language: string
    languages: string[]
  }

  type Callback = (obj: LanguageMap) => void

  interface RNLanguages extends LanguageMap {
    addEventListener(name: string, cb: Callback): void
    removeEventListener(name: string, cb: Callback): void
  }

  const RNLanguages: RNLanguages
  export default RNLanguages
}
