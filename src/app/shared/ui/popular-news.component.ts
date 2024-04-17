import { Component, Input } from '@angular/core';
import { IPopularNews } from '../types';

@Component({
  selector: 'app-popular-news',
  standalone: true,
  imports: [],
  template: `
    <div
      class="flex flex-col gap-2 pb-4 items-start jusify-start border-b-2 border-primary-light border-dashed "
    >
      <div
        class="flex flex-row justify-start gap-2 items-center text-black font-primary font-regular text-body-small leading-20 tracking-xs"
      >
        <img [src]="news.imageUrl" [alt]="news.description" class="w-24 h-24" />
        <p
          class="font-primary leading-20 text-body-regular font-regular tracking-xs"
        >
          {{ news.description }}
        </p>
      </div>
    </div>
  `,
  styles: ``,
})
export class PopularNewsComponent {
  @Input() news!: IPopularNews;
}
