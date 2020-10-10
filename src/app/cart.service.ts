import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }
  items = [];

  addToCart(product) {
    this.items.push(product)
  }

  // 获取
  getItem() {
    return this.items;
  }

  // 删除选中
  filterItem(item) {
    return  JSON.parse(JSON.stringify(this.items)).filter(ite=>{
      return ite.id !== item.id
    })
  }

  // 清空
  clearCart() {
    this.items = [];
    return this.items;
  }

  // 运送价格
  getShippingPrices() {
    return this.http.get('/assets/shipping.json')
  }
}
