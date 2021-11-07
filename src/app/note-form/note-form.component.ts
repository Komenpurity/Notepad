import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  
  formTitle: string = "Enter the Note";
  noteTitle!: string;
  noteMessage!: string;
  newNote!: any;

  notes: Note[] = [
    new Note("School Assignment", "Finish up the data structures assignment")

  ];

  formSubmit(){
    this.newNote = new Note(this.noteTitle,this.noteMessage);
    this.notes.push(this.newNote);
  }


  ngOnInit(): void {
  }

}
