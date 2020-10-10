import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  // templateUrl: './product-details.component.html',
  template: `
    <div *ngIf="product" style="font-size: 14px">
      <h3>名称：{{ product.name }}</h3>
      <!-- 数字转换美元 过滤器 管道符号 -->
      <h3>价格：{{ product.price | currency }}</h3>
      <p>
        描述：{{ product.description }}
      </p>
      <button (click)="addToCart(product)">buy</button>
      <br />
      <br />
      <button (click)="onBack()">back</button>
    </div>
    `,
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  log() {
    return console.log(...arguments)
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.log(params, 'params')
      this.product = products[+params.get('productId')];
    });
  };

  addToCart(product) {
    this.cartService.addToCart(product)
    window.alert('您选择的商品已添加到购物车!');
  };

  onBack() {
     history.go(-1);
  };
}