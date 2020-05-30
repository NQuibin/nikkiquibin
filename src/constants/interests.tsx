import React from 'react'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import FastfoodIcon from '@material-ui/icons/Fastfood'

interface Interest {
  key: string,
  name: string,
  description: string,
  icon: React.ReactNode
}

export const interests: Interest[] = [
  {
    key: 'videoGames',
    name: 'Video Games',
    description: `
      Been an avid gamer ever since I played games on the SNES. Currently I
      enjoy the Nintendo Switch and playing Pokemon. I'm looking forward to
      the next gen games.
    `,
    icon: <SportsEsportsIcon />
  },
  {
    key: 'finance',
    name: 'Finance',
    description: `
      The world of finance is astonishing. When I first learned about
      compound interest, it blew my mind. I'm heavily interested in
      personal finance and building wealth.
    `,
    icon: <MonetizationOnIcon />
  },
  {
    key: 'food',
    name: 'Food',
    description: `
      I love food! I'm open minded to all types of food and always
      looking for new places to eat. My favourite is seafood,
      especially raw oysters. Let me know your food suggestions!
    `,
    icon: <FastfoodIcon />
  }
]
