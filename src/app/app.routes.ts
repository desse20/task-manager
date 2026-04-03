import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Tasks } from './components/tasks/tasks';
import { About } from './components/about/about';
import { Notfound } from './components/notfound/notfound';
import { FormTask } from './components/form-task/form-task';

export const routes: Routes = [

    {
      path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    },

    {
      path: 'home',
      component: Home
    },
    {
      path: 'tasks',
      component: Tasks
    },
    {
      path: 'formTask',
      component: FormTask
    },

    {
      path: 'about',
      component: About
    },

    {
      path: '**',
      component: Notfound
    }
];
