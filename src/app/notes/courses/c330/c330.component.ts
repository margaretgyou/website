import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-c330',
  templateUrl: './c330.component.html',
  styleUrls: ['./c330.component.css']
})
export class C330Component implements OnInit {
  public pdfSrc: string = 'assets/pdf/330.pdf';
  public buttonDisplay = 'Show Notes';
  public show:boolean = false;

  show330() {
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
