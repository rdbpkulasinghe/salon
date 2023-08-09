import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-saloons',
  templateUrl: './saloons.component.html',
  styleUrls: ['./saloons.component.css'],
})
export class SaloonsComponent {
  ratingcount = 0;
  totalrating = 0;
  Finalrating: any;
  ratingcontrol = new FormControl(0);

  GetRating() {
    this.ratingcount++;
    this.totalrating += this.ratingcontrol?.value || 0;
    this.Finalrating = (this.totalrating / this.ratingcount).toFixed(2);
  }
}
