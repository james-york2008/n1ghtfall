import type { Player } from '../types/player'

export const players: Player[] = [
  {
    id: 'player1',
    avatarLink: 'swim1905.png',
    name: 'Swim1901',
    role: 'IGL',
    preferredCharacters: [
      {
        id: 'swim1901CharacterOne',
        characterImageLink: 'michele.png',
        altText: 'Swim1901 prefers to play Michele on defense'
      },
      
      {
        id: 'swim1901CharacterTwo',
        characterImageLink: 'reiichi.png',
        altText: 'Swim1901 prefers to play Reiichi on attack'
      }
    ]
  },

  {
    id: 'player2',
    avatarLink: 'swim1905.png',
    name: 'Swim1902',
    role: 'Entry',    
    preferredCharacters: [
      {
        id: 'swim1902CharacterOne',
        characterImageLink: 'flavia.png',
        altText: 'Swim1902 prefers to play Flavia on defense'
      },
      
      {
        id: 'swim1902CharacterTwo',
        characterImageLink: 'ming.png',
        altText: 'Swim1902 prefers to play Ming on attack'
      }
    ]  
  },
  
  {
    id: 'player3',
    avatarLink: 'swim1905.png',
    name: 'Swim1903',
    role: 'Sniper',
    preferredCharacters: [
      {
        id: 'swim1903CharacterOne',
        characterImageLink: 'kokona.png',
        altText: 'Swim1903 prefers to play Kokona on defense'
      },
      
      {
        id: 'swim1903CharacterTwo',
        characterImageLink: 'kanami.png',
        altText: 'Swim1903 prefers to play Kanami on attack'
      }
    ]
  },

  {
    id: 'player4',
    avatarLink: 'swim1905.png',
    name: 'Swim1904',
    role: 'Support',  
    preferredCharacters: [
      {
        id: 'swim1904CharacterOne',
        characterImageLink: 'celestia.png',
        altText: 'Swim1904 prefers to play Celestia on defense'
      },
      
      {
        id: 'swim1904CharacterTwo',
        characterImageLink: 'celestia.png',
        altText: 'Swim1904 prefers to play Celestia on attack'
      }
    ]
  },    

  {
    id: 'player5',
    avatarLink: 'swim1905.png',
    name: 'Swim1905',
    role: 'Flex',
    preferredCharacters: [
      {
        id: 'swim1905CharacterOne',
        characterImageLink: 'yugiri.png',
        altText: 'Swim1905 prefers to play Yugiri on defense'
      },
      
      {
        id: 'swim1905CharacterTwo',
        characterImageLink: 'meredith.png',
        altText: 'Swim1905 prefers to play Meredith on attack'
      }
    ]  
  },
]