import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor() { }
  private readonly STORAGE_KEY = 'habits';

  // Get all habits
  getHabits() {
    const habits = localStorage.getItem(this.STORAGE_KEY);
    return habits ? JSON.parse(habits) : [];
  }

  // add new habit
  addHabit(habit: any) {
    const habits = this.getHabits();
    habits.push({ name: habit, streak: 0 });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(habits));
  }

  // delete habit
  deleteHabit(habitName: string) {
    const habits = this.getHabits();
    const updatedHabits = habits.filter((h: any) => h.name !== habitName);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHabits));
  }

  // log an activity for a habit
  logActivity(habitName: string) {
    const habits = this.getHabits();
    const habit = habits.find((h: any) => h.name === habitName);
    if (habit) {
      habit.streak++;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(habits));
    }
  }
}
