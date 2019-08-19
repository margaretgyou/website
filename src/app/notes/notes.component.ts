import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public collapsed = true;
  public sidebarWidth;
  public wrapperPadding;
  public pageMargin;
  public notesMain = true;
  public c307 = false;
  public c330 = false;
  public c417 = false;
  public c303 = false;
  public ang = false;
  public alg = false;
  public web = false;
  constructor() { }

  ngOnInit() {
  }
  comp303() {
    this.c307 = false;
    this.c330 = false;
    this.c417 = false;
    this.c303 = true;
    this.ang = false;
    this.alg = false;
    this.web = false;
    this.notesMain = false;
  }
  webdev() {
    this.c307 = false;
    this.c330 = false;
    this.c417 = false;
    this.c303 = false;
    this.ang = false;
    this.alg = false;
    this.web = true;
    this.notesMain = false;
  }
  angul() {
    this.c307 = false;
    this.c330 = false;
    this.c417 = false;
    this.c303 = false;
    this.ang = true;
    this.alg = false;
    this.web = false;
    this.notesMain = false;
  }
  algor() {
    this.c307 = false;
    this.c330 = false;
    this.c417 = false;
    this.c303 = false;
    this.ang = false;
    this.alg = true;
    this.web = false;
    this.notesMain = false;
  }
  comp307(){
    this.c307 = true;
    this.c330 = false;
    this.c417 = false;
    this.notesMain = false;
    this.c303 = false;
    this.ang = false;
    this.alg = false;
    this.web = false;
  }
  comp330(){
    this.c307 = false;
    this.c330 = true;
    this.c417 = false;
    this.notesMain = false;
    this.c303 = false;
    this.ang = false;
    this.alg = false;
    this.web = false;
  }
  comp417(){
    this.c307 = false;
    this.c330 = false;
    this.c417 = true;
    this.notesMain = false;
    this.c303 = false;
    this.ang = false;
    this.alg = false;
    this.web = false;
  }
  notemain(){
    this.c307 = false;
    this.c330 = false;
    this.c417 = false;
    this.notesMain = true;
    this.c303 = false;
    this.ang = false;
    this.alg = false;
    this.web = false;
  }

  getMargin() {
    return this.collapsed === false ? '0px 0px 0px 0px' : '0px 250px';
  }
  collapse(collapse) {
    if (collapse) {
      this.sidebarWidth = '250px';
      this.wrapperPadding = '250px';
      this.pageMargin = '-250px';
      this.collapsed = !collapse;
    } else {
      this.sidebarWidth = '0px';
      this.wrapperPadding = '0px';
      this.pageMargin = '0px';
      this.collapsed = !collapse;
    }
  }

}
