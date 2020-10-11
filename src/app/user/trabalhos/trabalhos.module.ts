import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TrabalhosRoutingModule } from './trabalhos-routing.module';
import { AlbunsComponent } from './albuns/albuns.component';
import { FotosComponent } from './fotos/fotos.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { BoxImgComponent } from './box-img/box-img.component';


@NgModule({
  declarations: [
    AlbunsComponent,
    FotosComponent,
    TrabalhosComponent,
    BoxImgComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TrabalhosRoutingModule
  ]
})
export class TrabalhosModule { }
