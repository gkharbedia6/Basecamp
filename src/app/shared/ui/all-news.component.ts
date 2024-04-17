import { Component, Input } from '@angular/core';
import { IAllNews } from '../types';

@Component({
  selector: 'app-all-news',
  standalone: true,
  imports: [],
  template: `
    <div
      class="flex flex-col gap-2 pb-4 items-start jusify-start border-b-2 border-primary-light border-dashed "
    >
      <div
        class="flex flex-row justify-start gap-2 items-center text-primary font-primary font-bold text-body-small leading-16"
      >
        {{ news.time
        }}<svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="4" rx="2" fill="#585EE3" />
        </svg>
        {{ news.date }}
      </div>
      <p
        class="font-primary leading-20 text-body-regular font-regular tracking-xs"
      >
        {{ news.description }}
      </p>
    </div>
  `,
  styles: ``,
})
export class AllNewsComponent {
  @Input() news!: IAllNews;
}
