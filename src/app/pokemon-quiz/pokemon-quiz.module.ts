import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { PokemonQuizService } from './pokemon-quiz.service';
import { CreatePokemonQuizDirective } from './create-pokemon-quiz.directive';
import { PokemonQuizComponent } from './pokemon-quiz.component';
import { PokemonQuizRoutingModule } from './pokemon-quiz-routing.module';

@NgModule({
  imports: [CommonModule, PokemonQuizRoutingModule, CardModule],
  declarations: [PokemonQuizComponent, CreatePokemonQuizDirective],
  providers: [PokemonQuizService],
})
export class PokemonQuizModule { }
