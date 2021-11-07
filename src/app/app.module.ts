import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { MainNoteComponent } from './main-note/main-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    MainNoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
