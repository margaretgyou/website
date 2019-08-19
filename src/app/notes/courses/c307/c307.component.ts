import { Component, OnInit } from '@angular/core';
import * as jsPDF from "jspdf";

@Component({
  selector: 'app-c307',
  templateUrl: './c307.component.html',
  styleUrls: ['./c307.component.css']
})
export class C307Component implements OnInit {
  public pdfSrc: string = 'assets/pdf/307.pdf';
  public buttonDisplay = 'Show Notes';
  public show:boolean = false;

  show307() {
    this.show = !this.show;
    if (this.show) {
      this.buttonDisplay = 'Hide Notes';
    } else {
      this.buttonDisplay = 'Show Notes';
    }
  }
  download() {
    const doc = new jsPDF();
    doc.text('some text', 10, 10);
    doc.save('307.pdf');
  }
  constructor() { }

  ngOnInit() {
  }

}
