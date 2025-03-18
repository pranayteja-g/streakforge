import { Component } from '@angular/core';
import { HabitService } from '../../services/habit.service';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-habit',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-habit.component.html',
  styleUrl: './add-habit.component.css'
})
export class AddHabitComponent {
  habitName: string = '';
  habitGoal: number = 1; //default goal value

  constructor(private habitService: HabitService, private router: Router) { }

  addHabit() {
    if (this.habitName.trim() && this.habitGoal > 0) {
      this.habitService.addHabit(this.habitName, this.habitGoal);
      this.habitName = ''; // clear input
      this.habitGoal = 1; // reset goal
      this.router.navigate(['/home']);
    }
  }
}
