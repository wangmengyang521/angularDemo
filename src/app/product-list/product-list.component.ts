import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list', // 该选择器是当 Angular 组件在页面中渲染出 HTML 元素时使用的名字。
  // templateUrl: './product-list.component.html',
  template: `
    <div *ngFor="let product of products; index as productId" class="storeSize">
      <h3>
        <a [title]="product.name+' details'" [routerLink]="['/products', productId]">
          名称：{{ product.name }}
        </a>
        <div *ngIf="product.price > 100">
          价格：{{ product.price }}
        </div>
        <!-- *ngIf 只有在当前有值得情况下才会渲染标签 -->
        <div *ngIf="product.description">
          描述：{{ product.description }}
        </div>
      </h3>
      <div>
        <button (click)="share(product)">分享</button>
        <!-- 按钮事件组件 -->
        <app-product-alerts [product]="product" (notify)="onNotify($event)"></app-product-alerts>
      </div>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // 属性
  products = products;
  arr = [1,2,3,4,5,6,7,8,9]

  // 方法
  share(params) {
    window.alert('prompt message');
  };

  onNotify(params) {
    window.alert(params+'超过700显示');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/