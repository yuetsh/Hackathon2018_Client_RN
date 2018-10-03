import config from './config'

export async function listMemes (): Promise<string[]> {
  const res = await fetch(config.host + 'memes')
  const json = await res.json()
  return json.data
}

interface CreateMemeBody {
  name: string
  subs: string[]
  format?: 'gif' | 'mp4'
}
export async function createMeme (body: CreateMemeBody) {
  const res = await fetch(config.host + 'meme', {
    method: 'post',
    body: JSON.stringify(body)
  })
  console.log(res)
}
