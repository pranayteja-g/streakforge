import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitService } from '../../services/habit.service';
import { Habit } from '../../models/habits.model';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habit-details',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  templateUrl: './habit-details.component.html',
  styleUrl: './habit-details.component.css'
})
export class HabitDetailsComponent implements OnInit {
  habit?: Habit;
  constructor(
    private router: Router,
    private habitService: HabitService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getHabit();
  }
  getHabit() {
    const habitId = Number(this.route.snapshot.paramMap.get('id'));
    const foundHabit = this.habitService.getHabits().find((h: Habit) => h.id === habitId);

    if (!foundHabit) {
      this.snackBar.open('Habit not found', 'Close', { duration: 3000 });
      this.router.navigate(['/home']);
    } else {
      this.habit = foundHabit;
    }
  }

  logActivity(): void {
    if (this.habit) {
      const success = this.habitService.logActivity(this.habit.id);

      if (success) {
        this.habit.streak++; // Update the streak locally
        this.snackBar.open('Activity logged successfully!', 'Close', { duration: 3000 });
      } else {
        this.snackBar.open('Congrats! You have reached your goal!', 'Close', { duration: 3000 });
      }
    }
  }
  deleteHabit(habitId: number) {
    this.habitService.deleteHabit(habitId);
    this.snackBar.open('Habit deleted', 'Close', { duration: 3000 });
    this.router.navigate(['/home']);
  }
}
