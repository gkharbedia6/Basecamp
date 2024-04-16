import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swiper from 'swiper';
import { register, SwiperContainer, SwiperSlide } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <h1 class="text-3xl font-bold underline text-red-500">Hello world!</h1>
    <router-outlet />
    <div class="flex  justify-center items-center w-full">
      <div class="w-[300px]">
        <swiper-container
          navigation="true"
          pagination="true"
          pagination-clickable="true"
        >
          <swiper-slide>
            <img src="./assets/images/main-image.jpeg" alt="Main Image" />
          </swiper-slide>
          <swiper-slide>
            <img src="./assets/images/main-image.jpeg" alt="Main Image" />
          </swiper-slide>
          <swiper-slide>
            <img src="./assets/images/main-image.jpeg" alt="Main Image" />
          </swiper-slide>
          ...
        </swiper-container>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'basecamp';
}
