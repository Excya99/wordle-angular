import { Component, OnInit } from '@angular/core';
import { GetRandomWordService } from '../get-random-word.service';
import { Guess } from '../guess';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  guess: Guess;
  previousGuesses: Array<Guess>;
  winstreak: number;
  targetWord: any;

  constructor(private getWordService: GetRandomWordService) {
    this.guess = new Guess("", 0, 0, "");
    this.previousGuesses = [];
    this.winstreak = 0;
  }

  checkGuess() {
    var currentGuess = this.guess.guess.toLowerCase();
    var length = ""
    var same_letters = 0
    var same_letter_positions = 0
    if (currentGuess == this.targetWord) {
      // Correct guess
      this.winstreak++;
      alert("YOU GUESSED " + this.targetWord + " CORRECT!" + "\n" + "---------------------" + "\n" + "PRESS [START GAME] TO PLAY MORE")
      return;
    }
    else {
      // Incorrect guess
      this.winstreak = 0;
      // Determine length
      if (currentGuess.length > this.targetWord.length) {
        length = "Too long"
        for(var i=0; i<this.targetWord.length; i++) {
          // number of matching characters
          if (currentGuess.indexOf(this.targetWord[i]) > -1) {
            same_letters++;
          }
          // number of matching characters in correct position
          if (currentGuess[i] == this.targetWord[i]) {
            same_letter_positions++;
          }
        }
      }
      else {
        length = "Too short"
        for(var i=0; i<currentGuess.length; i++) {
          // number of matching characters
          if (this.targetWord.indexOf(currentGuess[i]) > -1) {
            same_letters++;
          }
          // number of matching characters in correct position
          if (currentGuess[i] == this.targetWord[i]) {
            same_letter_positions++;
          }
        }
      }
    }
    this.guess = new Guess(this.guess.guess, same_letters, same_letter_positions, length);
    this.previousGuesses.push(this.guess);
    this.guess = new Guess("", 0, 0, length);
  }

  startGame() {
    this.previousGuesses = [];
    this.getWordService.callAPI().subscribe((responseData) => {
      //returned data from PHP
      this.targetWord = responseData.random_word;
    });
  }

  ngOnInit(): void {
  }
}