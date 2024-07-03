import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './../stories/button.component';
import { TextAreaComponent } from './../stories/textArea.component';
<<<<<<< HEAD
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
=======
import { IconComponent } from '../stories/icon/icon.component';
import { SidebarComponent } from '../stories/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, IconComponent, SidebarComponent],
>>>>>>> 1f3b7cfa004870588a44a1b89fc9fc0af6bd7b38
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    TextAreaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
