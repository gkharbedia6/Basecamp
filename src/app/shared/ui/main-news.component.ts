import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { IMainNews } from '../types';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-main-news',
  standalone: true,
  imports: [NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <swiper-container
      css-mode="true"
      navigation="true"
      pagination="true"
      scrollbar="true"
      class="w-full tbt:w-[928px] sm:w-[840px] lg:w-[976px] relative flex flex-col items-center pt-3 pb-6 px-4 bg-white rounded-[20px] mt-4 tbt:mt-10"
    >
      <swiper-slide
        class="gap-4 flex flex-col  relative"
        *ngFor="let news of mainNews"
      >
        <img
          [src]="news.imageUrl"
          alt="Main Image"
          class="rounded-[20px] h-[280px] tbt:h-[406px]"
        />

        <div class="w-full h-fit flex flex-col gap-2">
          <div class="flex flex-row items-center justify-start gap-[10px]">
            <p
              class="px-2 py-[6px] rounded-2xl bg-primary-light text-body-small tracking-sm leading-16 font-semibold"
            >
              {{ news.date }}
            </p>
            <p
              class="px-2 py-[6px] rounded-2xl bg-primary-light text-body-small tracking-sm leading-16 font-semibold"
            >
              {{ news.category }}
            </p>
          </div>
          <h2
            class="fomt-primary font-semibold text-[20px] font-primary leading-[32px] tracking-[0.35px]"
          >
            {{ news.heading }}
          </h2>
          <p
            class="hidden tbt:block text-body-regular font-primary font-regular text-black-600 leading-24 tracking-sm"
          >
            {{ news.description }}
          </p>
        </div>
      </swiper-slide>
    </swiper-container>
  `,
  styles: [
    `
      swiper-container::part(button-prev) {
        position: absolute;
        top: 140px;
        left: 12px;
      }
      swiper-container::part(button-next) {
        position: absolute;
        top: 140px;
        right: 12px;
      }
      swiper-container::part(pagination) {
        position: absolute;
        width: 184px;
        top: 252px;
        height: 8px;
        left: 72px;
      }
      @media screen and (min-width: 1024px) {
        swiper-container::part(button-prev) {
          position: absolute;
          top: 192px;
          left: 24px;
        }
        swiper-container::part(button-next) {
          position: absolute;
          top: 192px;
          right: 24px;
        }
        swiper-container::part(pagination) {
          position: absolute;
          width: 184px;
          top: 378px;
          height: 8px;
          left: 360px;
        }
      }
      @media screen and (min-width: 1024px) {
        swiper-container::part(pagination) {
          position: absolute;
          width: 184px;
          top: 378px;
          height: 8px;
          left: 316px;
        }
      }
    `,
  ],
})
export class MainNewsComponent {
  @Input() mainNews!: IMainNews[];
}
