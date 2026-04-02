import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasks',
  imports: [FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  Tasks = signal([
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
  ]);

newTask = signal({
  title: '',
  completed: false
});
addTask() {
  const title = this.newTask().title.trim();
  console.log(this.Tasks());


  console.log( this.newTask());

  if (title !== '') {
    this.Tasks.update(tasks => [
      ...tasks,
      {
        id: Math.max(...tasks.map(t => t.id)) + 1, // Générer un nouvel ID

        title,

        completed: false

      }



    ]);
    // Optionnel : réinitialiser le champ
    this.newTask.set({ title: '', completed: false });
  }
  console.log(this.Tasks());

  }
  toggleTask(checked: boolean, id: number) {
  this.Tasks.update(tasks =>
    tasks.map(task =>
      task.id === id ? { ...task, completed: checked } : task
    )
  );
    console.log('Tâche mise à jour :', id, 'complétée =', checked);

}
    filteredTasks() {
  return this.Tasks().filter(task => !task.completed);  }
}
