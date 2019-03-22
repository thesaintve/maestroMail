import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { TemplateMailComponet } from './maestroTemplateMail/TemplateMail.componet';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    TemplateMailComponet,
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [TemplateMailComponet]
})
export class AppModule { }
