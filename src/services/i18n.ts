import i18n from 'i18n-js'
import RNLanguages from 'react-native-languages'

const en = require('../assets/locale/en.json')
const zh = require('../assets/locale/zh.json')

i18n.locale = RNLanguages.language
i18n.fallbacks = true
i18n.translations = { en, zh }

export default i18n
