import { Injectable } from '@angular/core';
import { Habit } from '../models/habits.model';

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

  // Add new habit
  addHabit(name: string, goal: number) {
    const habits = this.getHabits();
    // ✅ Ensure unique IDs by using max ID + 1
    const newId = habits.length > 0 ? Math.max(...habits.map((h: Habit) => h.id)) + 1 : 1;
    const newHabit: Habit = {
      id: newId, // Simple unique ID
      name,
      streak: 0,
      goal,
      createdDate: new Date()
    };
    habits.push(newHabit);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(habits));
  }

  // Delete habit
  deleteHabit(habitId: number) {
    const habits: Habit[] = this.getHabits().filter((h: Habit) => h.id !== habitId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(habits));
  }

  // Log an activity for a habitn 
  logActivity(habitId: number): boolean {
    const habits = this.getHabits();
    const habit = habits.find((h: Habit) => h.id === habitId);

    if (!habit) {
      throw new Error('Habit not found');
    }

    if (habit.streak >= habit.goal) {
      return false; // Goal already reached
    }

    habit.streak++;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(habits));
    return true; // Activity logged successfully
  }
}
