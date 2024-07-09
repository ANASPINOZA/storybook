import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './../stories/input.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { SideBarComponent } from '../stories/side-bar/side-bar.component';
import { InputTextComponent } from '../stories/input-text/input-text.component';
import { ButtonComponent } from '../stories/buttonstory/button.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SideBarComponent,
   InputTextComponent,
                  
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
