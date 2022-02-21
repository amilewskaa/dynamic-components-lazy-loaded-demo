import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { take } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { PokemonQuizService } from './pokemon-quiz.service';

@Directive({
  selector: '[createPokemonQuiz]',
})
export class CreatePokemonQuizDirective {
  private _index = 0;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private pokemonQuizService: PokemonQuizService,
    private renderer: Renderer2
  ) { }

  @HostListener('click') onClick() {
    const question = this.pokemonQuizService.getQuestion(this._index);
    this.renderPokemonCardComponent(question);
    this.toogleStartButton(false);
  }

  async renderPokemonCardComponent(question: any) {
    const { PokemonCardComponent } = await import(
      './pokemon-card/pokemon-card.component'
    );

    const element = this.renderer.createText(`Question ${this._index + 1}: `);

    const componentRef = this.viewContainerRef.createComponent(
      PokemonCardComponent,
      {
        projectableNodes: [[element]],
      }
    );

    componentRef.instance.question = question;

    componentRef.instance.questionAnswered
      .pipe(take(1))
      .subscribe(() => this.correctAnswerCallback());
  }

  private correctAnswerCallback() {
    this._index++;

    const newQuestion = this.pokemonQuizService.getQuestion(this._index);
    if (newQuestion === undefined) {
      this.renderCompleteQuizCard();
      return;
    }
    this.renderPokemonCardComponent(newQuestion);
  }

  private renderCompleteQuizCard() {
    const element = this.renderer.createText('Quiz completed!');

    const otherElement = this.renderer.createElement('div');
    const text = this.renderer.createText('Refresh =>');
    otherElement.style.cursor = 'pointer';
    this.renderer.appendChild(otherElement, text);
    this.renderer.listen(otherElement, 'click', this.refreshQuiz.bind(this));

    // const newNode = document.createElement('div');
    // newNode.innerHTML = 'Quiz completed';

    this.viewContainerRef.createComponent(CardComponent, {
      projectableNodes: [[element, otherElement]],
    });
  }

  private refreshQuiz() {
    this.viewContainerRef.clear();
    this.toogleStartButton(true);
    this._index = 0;
  }

  private toogleStartButton(shouldDisplay: boolean) {
    shouldDisplay
      ? (this.elementRef.nativeElement.style.display = 'block')
      : (this.elementRef.nativeElement.style.display = 'none');
  }
}
