import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularModule } from '@sinco/angular';

import { MenuPrincipalComponent } from './components/menu/menu-principal.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ListComponentsModule } from './components/list-components/list-components.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

const componentesGenerales = [
  MenuPrincipalComponent,
  MainPageComponent,
  HeaderPageComponent
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
    AngularModule,
    ListComponentsModule
  ],
  // FormsModule,
  // ReactiveFormsModule,
  exports: [
    ListComponentsModule,
    AngularModule,
    CommonModule,
    BrowserAnimationsModule,
    ...componentesGenerales],
  bootstrap: [AppComponent]
})
export class AppModule { }
