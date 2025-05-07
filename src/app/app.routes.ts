import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ColorpaintingtableComponent } from './colorpaintingtable/colorpaintingtable.component';
import { Component } from '@angular/core';
import { DatabaseComponent } from './database/database.component';
import { IntroComponent } from './intro/intro.component';


export const routes: Routes = [
    {path: '', component: Component},
    {path: 'home', component: IntroComponent},
    {path: 'about', component: AboutComponent},
    {path: 'colorgeneration', component: ColorpaintingtableComponent},
    {path: 'database', component: DatabaseComponent} //yay database tab

];
