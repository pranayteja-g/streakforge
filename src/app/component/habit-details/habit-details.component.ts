import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HabitService } from '../../services/habit.service';
import { Habit } from '../../models/habits.model';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habit-details',
  imports: [
    CommonModule,
    NavigationComponent,
    RouterLink,
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
  constructor(private router: Router,private habitService: HabitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHabit();
  }
  getHabit() {
    const habitId = Number(this.route.snapshot.paramMap.get('id'));
    this.habit = this.habitService.getHabits().find((h: Habit) => h.id === habitId);
  }
  logActivity() {
    if (this.habit) {
      this.habitService.logActivity(this.habit.id);
      this.getHabit(); // Refresh habit data
    }
  }

  deleteHabit(habitId: number) {
    this.habitService.deleteHabit(habitId);
    this.router.navigate(['/home']);
  }
}
