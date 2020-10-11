import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { FotosComponent } from './fotos/fotos.component';
import { AlbunsComponent } from './albuns/albuns.component';

const routes: Routes = [
  // /trabalhos
  { path: '', component: TrabalhosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'albuns', component: AlbunsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabalhosRoutingModule { }
