import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'comics', component: ComicsComponent}
];

