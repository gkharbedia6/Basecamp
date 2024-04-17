import { Routes } from '@angular/router';
import { ShellComponent } from './scenes/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [],
  },
];
