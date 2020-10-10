import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { window } from 'rxjs/operators';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  // templateUrl: './cart.component.html',
  template: `
    <div>
      <h3>购物车</h3>
      <h3 (click)="onClear()" *ngIf="items.length">清空</h3>
      <p>
        <a routerLink="/Shipping">Shipping Prices</a>
      </p>
    </div>
    <div class="cart-item fontSize" *ngFor="let item of items">
      <span *ngIf="item.name">名称：{{ item.name }}</span>
      <span *ngIf="item.price">价格：{{ item.price | currency }}</span>
      <span *ngIf="item.name" (click)="onDel(item)" class="delBtn">DEL</span>
    </div>
    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit(checkoutForm.value)">
      <div>
        <label for="name">
          Name
        </label>
        <input id="name" type="text" formControlName="name">
      </div>
      <div>
        <label for="address">
          Address
        </label>
        <input id="address" type="text" formControlName="address">
      </div>
      <button class="button" type="submit">购买</button>
    </form>
    <br />
    <br />
    <button (click)="onBack()">back</button>
  `,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItem();
  };

  onDel(item) {
    this.items = this.items.filter(ite=>{
      return ite.id !== item.id
    })
  }

  onClear() {
    this.items = this.cartService.clearCart()
    alert('已清空!');
  }

  onBack() {
    history.go(-1)
  };

  // 表单提交
  onSubmit(customerData) {
    if(!this.cartService.getItem().length) {
      return alert('暂无商品')
    }
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    alert('购买成功')
    console.warn('Your order has been submitted', customerData);
  }

}