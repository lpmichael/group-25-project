import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'form', component: FormComponent}
];
