import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonQuizComponent } from './pokemon-quiz.component';

const routes: Routes = [
  { path: '', component: PokemonQuizComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonQuizRoutingModule { }
