import config from './config'

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

export async function createMeme (body: CreateMemeBody) {
  const res = await fetch(API_URL + 'meme', {
    method: 'post',
    body: JSON.stringify(body)
  })
  console.log(res)
}
