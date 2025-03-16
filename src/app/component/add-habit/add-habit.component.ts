import { Component } from '@angular/core';
import { HabitService } from '../../services/habit.service';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavigationComponent } from "../navigation/navigation.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-habit',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NavigationComponent
],
  templateUrl: './add-habit.component.html',
  styleUrl: './add-habit.component.css'
})
export class AddHabitComponent {
  habitName: string = '';
  habitGoal: number = 1; //default goal value

  constructor(private habitService: HabitService) { }

  addHabit() {
    if (this.habitName.trim() && this.habitGoal > 0) {
      this.habitService.addHabit(this.habitName, this.habitGoal);
      this.habitName = ''; // clear input
      this.habitGoal = 1; // reset goal
    }
  }
}
