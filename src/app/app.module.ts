import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleCardComponent } from './search-page/components/people-card/people-card.component';
import { HeaderComponent } from './search-page/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    PeopleCardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    DragDropModule,
    NgxLoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff'
 
   })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
