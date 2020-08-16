import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokerComponent } from './poker/poker.component';

const routes: Routes = [
  { path: 'poker', component: PokerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
