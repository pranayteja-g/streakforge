import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddHabitComponent } from "./component/add-habit/add-habit.component";
import { HomeComponent } from "./component/home/home.component";
import { NavigationComponent } from "./component/navigation/navigation.component";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddHabitComponent, HomeComponent, NavigationComponent,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'streakforge';
}
