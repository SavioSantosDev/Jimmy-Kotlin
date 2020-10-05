import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { TrabalhosModule } from './user/trabalhos/trabalhos.module';
import { ContatoModule } from './user/contato/contato.module';
import { HomeModule } from './user/home/home.module';
import { BlogModule } from './user/blog/blog.module';
import { SobreModule } from './user/sobre/sobre.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    UserModule,
    AdminModule,
    TrabalhosModule,
    ContatoModule,
    HomeModule,
    BlogModule,
    SobreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
