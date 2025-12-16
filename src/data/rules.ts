export type Rule = {
  title: string
  description: string
}

export type CardRuleset = Record<Rank, Rule>


export const rules: CardRuleset = {
  "A": {
    title: "Waterfall",
    description: "Everyone starts drinking when you start. No one can stop until the person to their right stops, continuing around the circle."
  },
  "2": {
    title: "You",
    description: "Choose any player. That person must take a drink."
  },
  "3": {
    title: "Me",
    description: "You drink. No choice, no escape."
  },
  "4": {
    title: "Ladies",
    description: "All women playing must take a drink."
  },
  "5": {
    title: "Thumb Master",
    description: "At any moment, you may place your thumb on the table. The last player to notice and copy drinks. You keep this power until another 5 is drawn."
  },
  "6": {
    title: "Gentlemen",
    description: "All men playing must take a drink."
  },
  "7": {
    title: "Heaven",
    description: "Point upward. The last player to do so drinks."
  },
  "8": {
    title: "Mate",
    description: "Pick someone who becomes your ‘mate’. Whenever you drink, they must drink as well—for the rest of the game or until another 8 is drawn."
  },
  "9": {
    title: "Rhyme",
    description: "Say a word. Going clockwise, each player must say a rhyming word. Hesitation or repetition causes a drink."
  },
  "10": {
    title: "Categories",
    description: "Choose a category. Players take turns naming items from that category. First mistake drinks."
  },
  "J": {
    title: "Rule Card",
    description: "Create a new rule that everyone must follow. If anyone breaks it, they drink until another Jack is drawn."
  },
  "Q": {
    title: "Question Master",
    description: "If you ask a question and a player answers you, they must drink. You stay Question Master until another Queen is drawn."
  },
  "K": {
    title: "King's Cup",
    description: "Pour some of your drink into the King's cup. The player who draws the fourth King drinks the entire cup."
  }
};


export const deerGameRules: CardRuleset = {
  A: { title: 'Finish Your Drink', description: 'Drink your entire cup.' },
  '2': { title: 'Give Two', description: 'Give out two drinks.' },
  // ...
  K: { title: 'Deer King', description: 'Special deer rule.' },
}
