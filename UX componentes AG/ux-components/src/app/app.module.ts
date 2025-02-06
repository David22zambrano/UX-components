import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularModule } from '@sinco/angular';

import { MenuPrincipalComponent } from './components/menu/menu-principal.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ListComponentsModule } from './components/list-components/list-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    ListComponentsModule,
    BrowserAnimationsModule  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
