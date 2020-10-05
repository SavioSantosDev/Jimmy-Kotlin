import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // /
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule)
  },
  {
    path: 'trabalhos',
    loadChildren: () => import('./trabalhos/trabalhos.module').then(mod => mod.TrabalhosModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then(mod => mod.ContatoModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then(mod => mod.SobreModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
