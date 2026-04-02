import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  cardContent  = [
    {title: 'Manage Tasks',
    description: 'Organize your daily tasks and boost your productivity with our intuitive task manager.',
    icon: 'task-manager'
  },
  {title: ' Stay Organized',
    description: 'Keep track of your progress and never miss important deadlines.',
    icon: 'schedule'
  },
  {
    title: 'Achieve Goals',
    description: 'Focus on what matters and accomplish your daily objectives.',
    icon: 'flag'
  }


]
}
