export class Card {
  id: string;
  name: string;
  description: string;

  constructor(id: string = '', name: string = '', description: string = '') {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  generateId(cards: Array<Card>): string {
    while (true) {
      const newId = this.getUUID();
      const obj = cards.findIndex(card => card.id === newId);
      if (obj === -1){
        return newId;
      }
    }
  }

  getUUID(): string {
    return this.generate() + this.generate(true) + this.generate(true) + this.generate();
  }

  generate(s?): string {
    const p = (Math.random().toString(16) + '000000000').substr(2, 8);
    return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
  }
}
