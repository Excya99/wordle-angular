export class Guess {
    constructor (
        public guess: string,
        public same_letter: number,
        public same_letter_position: number,
        public length: string
    ) {}
}