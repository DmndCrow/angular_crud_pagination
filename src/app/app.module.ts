import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { PageLimitComponent } from './page-limit/page-limit.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    CardComponent,
    InputComponent,
    PageLimitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
