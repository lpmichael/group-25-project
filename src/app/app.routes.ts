import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UppertableComponent } from './uppertable/uppertable.component';
import { ColorpaintingtableComponent } from './colorpaintingtable/colorpaintingtable.component';
import { Component } from '@angular/core';


export const routes: Routes = [
    {path: '', component: Component},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'uppertable', component: UppertableComponent}, //Hopefully temporary: OO
    {path: 'colorpaintingtable', component: ColorpaintingtableComponent} //also hopefully temp
    
];
