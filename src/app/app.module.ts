import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './../stories/input.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { SideBarComponent } from '../stories/side-bar/side-bar.component';
import { ButtonstoryComponent } from '../stories/buttonstory/buttonstory.component';


@NgModule({
  declarations: [
    AppComponent,
    
    SideBarComponent,
    
    
          ButtonstoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    InputComponent,
    TextAreaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
