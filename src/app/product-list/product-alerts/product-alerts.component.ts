import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// 提示组件
@Component({
  selector: 'app-product-alerts', // 用于标识该组件 如果该文件作为组件来使用 那么标签名 就是这个
  // templateUrl: './product-alerts.component.html', // 链接到外部的html模板
  template: `
      <p *ngIf="product.price > 700">
        <button (click)="onEmit('子组件的值')">价格 > 700</button>
      </p>
    `, // 内部html模板
  styleUrls: ['./product-alerts.component.css'] // 链接到外部的样式文件
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // product即为传递过来的值 不指定变量类型
  // @Input() product; //  指定传递的变量类型
  @Output() notify = new EventEmitter(); // 不指定变量类型
  // @Output() notify = new EventEmitter<String>(); // 指定传递的变量类型
  // 在组件类中，用 @Output() 装饰器和一个事件发射器 EventEmitter() 实例定义一个名为 notify 的属性。
  // 这可以让商品提醒组件在 notify 属性发生变化时发出事件。

  constructor() { }

  ngOnInit() {
  };

  // 事件分发 将子组件的事件发送给 父组件 父组件来调用即父组件监听子组件的事件
  onEmit(params) {
    this.notify.emit(params)
  }

}