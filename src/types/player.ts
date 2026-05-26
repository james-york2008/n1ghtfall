interface preferredCharacters {
  id: string,
  characterImageLink: string,
  altText: string
}

export type Player = {
  id: string,
  avatarLink: string,
  name: string,
  role: string,
  preferredCharacters: preferredCharacters[]
}