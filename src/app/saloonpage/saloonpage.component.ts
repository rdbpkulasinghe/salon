import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saloonpage',
  templateUrl: './saloonpage.component.html',
  styleUrls: ['./saloonpage.component.css'],
})
export class SaloonpageComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
    console.log('hi');
  }
}
