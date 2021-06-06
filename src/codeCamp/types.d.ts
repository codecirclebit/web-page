interface ICard {
  season: string
  status: 'open' | 'closed' | 'ongoing' | 'ended' | 'upcoming'
  RegForm: string
}

interface IFaqCard {
  question: string
  answer: string
  disp: boolean
}
