/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

export enum CardNumber {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
}

type Card = [Suit, CardNumber];

function createDeck(): Card[] {
  const allSuits = Object.keys(Suit).slice(0, 4);
  const allCards = Object.keys(CardNumber).slice(0, 13);

  return allSuits.reduce((all: Card[], suit: string) => {
    return allCards.reduce((acc: Card[], card: string) => {
      return [...acc, <Card>[Number(suit), Number(card)]];
    }, all);
  }, []);
}

export class Dealer {
  cards: Card[] = [];

  constructor() {
    this.cards = createDeck();
    shuffleArray(this.cards);
  }

  getLength(): number {
    return this.cards.length;
  }

  readCard(card: Card): string {
    const [suit, cardNumber] = card;
    return `${CardNumber[cardNumber]} of ${Suit[suit]}`;
  }

  dealHand(numCards: number): Card[] {
    if (numCards > this.cards.length) throw new Error('Not enough cards');
    if (numCards < 0) throw new Error('Cannot give negative cards');
    return this.cards.splice(0, numCards);
  }
}
