import RNLanguages from 'react-native-languages'
import i18n from 'i18n-js'

const en = require('../locale/en.json')
const zh = require('../locale/zh.json')

i18n.locale = RNLanguages.language
i18n.fallbacks = true
i18n.translations = { en, zh }

export default i18n
