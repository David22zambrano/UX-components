import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AngularModule } from '@sinco/angular';

import { MenuPrincipalComponent } from './components/menu/menu-principal.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ModelComponentsComponent } from './components/model-component/model-components.component';
import { ListComponentsModule } from './components/list-components/list-components.module';
import { RatingExampleComponent } from './components/list-components/rating-example/rating-example.component';

const componentesGenerales = [
  MenuPrincipalComponent,
  HeaderPageComponent,
  MainPageComponent,
  ModelComponentsComponent
];
const componenteSincoAngular = [
  RatingExampleComponent
];


@NgModule({
  declarations: [
    AppComponent,
    ...componentesGenerales
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    AngularModule,
    ListComponentsModule,
    componenteSincoAngular
  ],
  exports: [MaterialModule, ListComponentsModule, AngularModule, ...componentesGenerales, ...componenteSincoAngular],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
