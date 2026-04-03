import { Tasks } from './../tasks/tasks';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

interface Task {
    name: string;
    priority:string,
    completed: boolean;
  }


@Component({
  selector: 'app-form-task',
  imports: [ReactiveFormsModule,MatIcon],
  templateUrl: './form-task.html',
  styleUrl: './form-task.css',
})

export class FormTask {

  private storageKey = 'tasks';

  isEditMode = false;
  currentIndex : number | null = null;

  taskForm : FormGroup = new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(2)]),
    priority :new FormControl("", [Validators.required])
  })

  // Tableau de task de type interface Task
  tasks = signal<Task[]>([

  ]);


  //  sauvegarder les taches dans le localstorage
  saveToLocalStorage(){
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks()))
  }

  // Charger les tâches au démarrage
  loadFromLocalStorage(){
    const data = localStorage.getItem(this.storageKey);
    if(data){
      this.tasks.set(JSON.parse(data));


    }

  }
  // Appel du loadFomLocalstorage au démarage de l'app
  constructor() {
  this.loadFromLocalStorage();
}
  //methode pour creer un tache

  createTask() {

  if (this.taskForm.invalid) return;

  const newTask: Task = {
    name: this.taskForm.value.name,
    priority: this.taskForm.value.priority,
    completed: false
  };

  if (this.isEditMode && this.currentIndex !== null) {


    this.tasks.update(tasks =>
      tasks.map((task, index) =>
        index === this.currentIndex
          ? { ...task, ...newTask } // remplace la tâche
          : task
      )
    );

  } else {

    this.tasks.update(tasks => [...tasks, newTask]);
  }

  // reset mode
  this.isEditMode = false;
  this.currentIndex = null;

  // reset form
  this.taskForm.reset({
    name: '',
    priority: ''
  });
  // ajout de la methode après la création de taches
  this.saveToLocalStorage();
}
      editTask(task: Task, index: number) {
        this.taskForm.setValue({
          name: task.name,
          priority: task.priority
        });

        this.isEditMode = true;
        this.currentIndex = index;
          // ajout de la methode après l'edition de taches

          this.saveToLocalStorage();

      }


      toggleTask(index: number) {
        this.tasks.update(tasks => {
          tasks[index].completed = !tasks[index].completed;
          return [...tasks];
        });
          // ajout de la methode après la mise à jour du completed

          this.saveToLocalStorage();

      }
      /// Penser à ajouter id à l"interface pour ne plus utiliser index
      deleteTask(index: number) {
      this.tasks.update(tasks => tasks.filter((_, i) => i !== index));
          // ajout de la methode après la suppression de taches

      this.saveToLocalStorage();

    }
}

