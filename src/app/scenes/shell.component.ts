import { Component, Output } from '@angular/core';
import { NavComponent } from '../components/nav.component';
import { MainNewsComponent } from '../shared/ui/main-news.component';
import { NgFor } from '@angular/common';
import {
  allNewsMock,
  knownFactsMock,
  mainNewsMock,
  otherNewsMock,
  popularNewsMock,
} from '../../assets/mock-data';
import { AllNewsComponent } from '../shared/ui/all-news.component';
import { PopularNewsComponent } from '../shared/ui/popular-news.component';
import { KnownFactsComponent } from '../shared/ui/known-facts.component';
import { OtherNewsComponent } from '../shared/ui/other-news.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    NavComponent,
    MainNewsComponent,
    NgFor,
    AllNewsComponent,
    PopularNewsComponent,
    KnownFactsComponent,
    OtherNewsComponent,
  ],
  template: ` <app-nav></app-nav>
    <div
      class="tbt:px-12 absolute top-24 sm:px-[56px] w-full overflow-x-hidden lg:px-[304px] pb-24 bg-background min-h-screen  "
    >
      <app-main-news [mainNews]="mainNews"></app-main-news>
      <div
        class="w-full bg-white rounded-[20px] px-4 py-[25px] overflow-scroll h-[330px] mt-6 "
      >
        <h2
          class="heading-mobile mb-[27px] font-semibold   font-accent leading-24 tracking-sm"
        >
          ყველა სიახლე
        </h2>
        <div class="flex gap-4 flex-col">
          <ng-container *ngFor="let news of allNews">
            <app-all-news [news]="news"></app-all-news>
          </ng-container>
        </div>
      </div>
      <div
        class="w-full bg-white rounded-[20px] px-4 py-[25px] overflow-scroll h-[330px] mt-6 "
      >
        <h2
          class="heading-mobile mb-[27px] font-semibold   font-accent leading-24 tracking-sm"
        >
          პოპულარული
        </h2>
        <div class="flex gap-4 flex-col">
          <ng-container *ngFor="let news of popularNews">
            <app-popular-news [news]="news"></app-popular-news>
          </ng-container>
        </div>
      </div>
      <div
        class=" bg-white rounded-[20px] px-4 py-[25px] overflow-x-scroll overflow-y-hidden h-[320px] mt-6 "
      >
        <h2
          class="heading-mobile mb-[27px] font-semibold   font-accent leading-24 tracking-sm"
        >
          ცნობილი ფაქტები
        </h2>
        <div class="flex gap-4 flex-row">
          <ng-container *ngFor="let facts of knownFactsMock">
            <app-known-facts [facts]="facts"></app-known-facts>
          </ng-container>
        </div>
      </div>
      <div class="flex flex-col w-full h-full gap-6 mt-8">
        <ng-container *ngFor="let news of otherNews">
          <app-other-news [otherNews]="news"></app-other-news>
        </ng-container>
      </div>
    </div>`,
  styles: ``,
})
export class ShellComponent {
  mainNews = mainNewsMock;
  allNews = allNewsMock;
  popularNews = popularNewsMock;
  knownFactsMock = knownFactsMock;
  otherNews = otherNewsMock;
}
