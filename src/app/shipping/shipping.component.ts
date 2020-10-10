import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-shipping',
  // templateUrl: './shipping.component.html',
  template: `
    <div>
      <br />
      <h4>
        Shipping Prices
      </h4>
      <div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
        <span>{{ shipping.type }}</span>
        <span>{{ shipping.price | currency }}</span>
      </div>
      <br />
      <button (click)="onBack()">back</button>
    </div>
  `,
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  onBack() {
     history.go(-1);
  };

}