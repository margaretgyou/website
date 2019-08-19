import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-c303',
  templateUrl: './c303.component.html',
  styleUrls: ['./c303.component.css']
})
export class C303Component implements OnInit {
  public pdfSrc: string = 'assets/pdf/303.pdf';
  public buttonDisplay = 'Show Notes';
  public show:boolean = false;

  show303() {
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
    doc.save('303.pdf');
  }
  constructor() { }

  ngOnInit() {
  }

}
