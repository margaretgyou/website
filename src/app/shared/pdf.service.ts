import { Injectable } from '@angular/core';

@Injectable()
export class PdfService {

  constructor() { }

  get417PDF(): string {
    return '/assets/417.pdf';
  }
}
