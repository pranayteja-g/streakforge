import { Component } from '@angular/core';
import { HabitService } from '../../services/habit.service';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-add-habit',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-habit.component.html',
  styleUrl: './add-habit.component.css'
})
export class AddHabitComponent {

  constructor(private habitService: HabitService) { }

  addHabit(habit: string) {
    if (habit?.trim()) {
      this.habitService.addHabit(habit);
    }
  }
}
