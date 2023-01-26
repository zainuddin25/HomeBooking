import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForSaleComponent } from '../for-sale/for-sale.component';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {

  forSale: boolean = true
  forRent: boolean = false

  constructor(private router : Router) {
  }

  forRentPage() {
    this.forSale = false
    this.forRent = true
  }

  forSalePage() {
    this.forSale = true
    this.forRent = false
  }
}
