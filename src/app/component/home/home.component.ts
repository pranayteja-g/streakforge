import { Component } from '@angular/core';
import { HabitService } from '../../services/habit.service';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  habits?: any[];

  constructor(private habitService: HabitService) {
    this.getHabits();
  }

  getHabits() {
    this.habits = this.habitService.getHabits();
  }

  logActivity(habitName: string) {
    this.habitService.logActivity(habitName);
    this.habits = this.habitService.getHabits();
  }

  deleteHabit(habit: string) {
    this.habitService.deleteHabit(habit);
    this.habits = this.habitService.getHabits();
  }

  refresh() {
    this.habits = this.habitService.getHabits();
  }
}
