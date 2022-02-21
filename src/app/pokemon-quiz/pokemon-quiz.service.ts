import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonQuizService {
  private questions = [
    {
      imageActive: 'bulbasaur.png',
      imageHidden: 'bulbasaur-hidden.png',
      possibleAnswers: ['Bulbasaur', 'Ivysaur', 'Jigglypuff'],
      correctAnswer: 'Bulbasaur',
    },
    {
      imageActive: 'butterfree.png',
      imageHidden: 'butterfree-hidden.png',
      possibleAnswers: ['Pikachu', 'Butterfree', 'Sandshrew'],
      correctAnswer: 'Butterfree',
    },
    {
      imageActive: 'charmander.png',
      imageHidden: 'charmander-hidden.png',
      possibleAnswers: ['Caterpie', 'Charmander', 'Jigglypuff'],
      correctAnswer: 'Charmander',
    },
    {
      imageActive: 'diglett.png',
      imageHidden: 'diglett-hidden.png',
      possibleAnswers: ['Diglett', 'Digtrio', 'Weedle'],
      correctAnswer: 'Diglett',
    },
    {
      imageActive: 'jigglypuff.png',
      imageHidden: 'jigglypuff-hidden.png',
      possibleAnswers: ['Pidgeot', 'Jigglypuff', 'Rattata'],
      correctAnswer: 'Jigglypuff',
    },
    {
      imageActive: 'kakuna.png',
      imageHidden: 'kakuna-hidden.png',
      possibleAnswers: ['Clefairy', 'Vulpix', 'Kakuna'],
      correctAnswer: 'Kakuna',
    },
    {
      imageActive: 'pikachu.png',
      imageHidden: 'pikachu-hidden.png',
      possibleAnswers: ['Oddish', 'Pikachu', 'Meowth'],
      correctAnswer: 'Pikachu',
    },
    {
      imageActive: 'ponyta.png',
      imageHidden: 'ponyta-hidden.png',
      possibleAnswers: ['Muk', 'Poliwhirl', 'Ponyta'],
      correctAnswer: 'Ponyta',
    },
    {
      imageActive: 'rattata.png',
      imageHidden: 'rattata-hidden.png',
      possibleAnswers: ['Gengar', 'Rattata', 'Hypno'],
      correctAnswer: 'Rattata',
    },
    {
      imageActive: 'squirtle.png',
      imageHidden: 'squirtle-hidden.png',
      possibleAnswers: ['Squirtle', 'Wartortle', 'Blastoise'],
      correctAnswer: 'Squirtle',
    },
  ];

  getQuestion(index: number) {
    return this.questions[index];
  }
}
