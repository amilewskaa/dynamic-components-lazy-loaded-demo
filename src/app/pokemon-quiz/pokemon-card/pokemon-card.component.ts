import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { CardModule } from './../../card/card.module';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() question!: any;
  @Output() questionAnswered = new EventEmitter<string>();
  imageSrc!: string;
  answered: boolean = false;

  ngOnInit() {
    this.imageSrc = `assets/images/${this.question.imageHidden}`;
  }

  selectAnswer(answer: string) {
    if (this.question.correctAnswer === answer) {
      this.questionAnswered.next(answer);
      this.imageSrc = `assets/images/${this.question.imageActive}`;
      this.answered = true;
    }
  }
}
@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CardModule, CommonModule],
})
class PokemonCardModule { }
