import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { IconComponent } from '../stories/icon/icon.component';
import { SidebarComponent } from '../stories/sidebar/sidebar.component';
import { InputsComponent } from '../stories/input/input.component';
import { FormsModule } from '@angular/forms';
import { MainbuttonComponent } from '../stories/buttons/mainbutton.component';
import { LangbuttonComponent } from '../stories/langbutton/langbutton.component';
import { ProfilbuttonComponent } from '../stories/profilbutton/profilbutton.component';
import { NotificationbuttonComponent } from '../stories/notificationbutton/notificationbutton.component';
import { CommentsCountComponent } from '../stories/comments-count/comments-count.component';
import { ProcessingStatusTableComponent } from '../stories/table/table';
import { DropdownComponent } from '../stories/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    SidebarComponent,
    InputsComponent,
    MainbuttonComponent,
    LangbuttonComponent,
    ProfilbuttonComponent,
    NotificationbuttonComponent,
    CommentsCountComponent,
    ProcessingStatusTableComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TextAreaComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
