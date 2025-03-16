import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HabitService } from '../../services/habit.service';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { CommonModule } from '@angular/common';
import { Habit } from '../../models/habits.model';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatBottomSheetModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  habits: Habit[] = []; // ✅ Explicitly define the type

  constructor(private habitService: HabitService) {
    this.refresh();
  }

  refresh() {
    this.habits = this.habitService.getHabits();
  }

  deleteHabit(habitId: number) {
    this.habitService.deleteHabit(habitId);
    this.refresh(); // ✅ Ensure UI updates after deletion
  }
}
