import { Component, Input } from '@angular/core';
import { IOtherNews } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-news',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-[20px] px-4 py-[24px] h-fit w-full">
      <div class="flex items-center gap-4 flex-col h-full">
        <img
          [src]="otherNews.imageUrl"
          alt="Main Image"
          class="rounded-[20px] w-full object-cover"
          [ngClass]="{
            'h-[280px]': otherNews.height === 'big',
            'h-[160px]': otherNews.height === 'small'
          }"
        />

        <div class="w-full h-fit flex flex-col gap-2">
          <div class="flex flex-row items-center justify-start gap-[10px]">
            <p
              class="px-2 py-[6px] rounded-2xl bg-primary-light text-body-small tracking-sm leading-16 font-semibold"
            >
              {{ otherNews.date }}
            </p>
            <p
              class="px-2 py-[6px] rounded-2xl bg-primary-light text-body-small tracking-sm leading-16 font-semibold"
            >
              {{ otherNews.category }}
            </p>
          </div>
          <h2
            class="fomt-primary font-regular text-body-medium font-primary leading-[24px] tracking-xs"
          >
            {{ otherNews.description }}
          </h2>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class OtherNewsComponent {
  @Input() otherNews!: IOtherNews;
}
