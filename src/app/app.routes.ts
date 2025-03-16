import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddHabitComponent } from './component/add-habit/add-habit.component';
import { HabitDetailsComponent } from './component/habit-details/habit-details.component';
import { StatsComponent } from './component/stats/stats.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'addHabit', component: AddHabitComponent },
    { path: 'habit/:id', component: HabitDetailsComponent },
    { path: 'stats', component: StatsComponent }
];
