import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="text-3xl font-bold underline text-red-500">Hello world!</h1>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'basecamp';
}
