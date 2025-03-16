import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddHabitComponent } from "./component/add-habit/add-habit.component";
import { HomeComponent } from "./component/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddHabitComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'streakforge';
}
