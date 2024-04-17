import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { IKnownFacts } from '../types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-known-facts',
  standalone: true,
  imports: [NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
    <div
      class="flex  flex-col  justify-start gap-2 pt-3 px-3 pb-4  rounded-[20px] bg-primary-light text-black font-primary font-regular text-body-small leading-20 tracking-xs"
    >
      <div class="w-[288px]">
        <img
          [src]="facts.imageUrl"
          [alt]="facts.description"
          class=" h-[120px] w-full rounded-[20px] object-cover"
        />
      </div>
      <p
        class="font-primary leading-20 text-body-regular font-regular tracking-xs"
      >
        {{ facts.description }}
      </p>
    </div>
  `,
  styles: ``,
})
export class KnownFactsComponent {
  @Input() facts!: IKnownFacts;
}
