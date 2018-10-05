import config from '../config'
import { Alert } from 'react-native'
import i18n from './i18n'

const API_URL = config.host + config.prefix

export interface Meme {
  name: string
  name_en: string
  cover: string
  gif: string
  placeholders: string[]
}

export async function listMemes (): Promise<Meme[]> {
  const res = await fetch(API_URL + 'memes')
  const json = await res.json()
  return json.data
}

interface CreateMemeBody {
  name: string
  subs: string[]
}

interface NewMeme {
  id: string
  link: string
  name: string
  width: number
  height: number
  type: 'images/gif'
}

export async function createMeme (
  body: CreateMemeBody
): Promise<NewMeme | void> {
  try {
    const res = await fetch(API_URL + 'meme', {
      method: 'post',
      body: JSON.stringify(body)
    })
    const json = await res.json()
    return json.data
  } catch (e) {
    Alert.alert(i18n.t('fail_to_create' + e))
  }
}
