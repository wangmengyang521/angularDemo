### 项目创建

如果没有安装过angular执行，执行过直接下一步

```js
npm install -g @angular/cli
```

运行ng new projectName 来创建你的项目,[`ng new`](https://angular.cn/cli/new) 命令用来创建一个新的 Angular CLI 工作空间：

```js
ng new my-project-name
```

查看package.json的运行命令，执行即可

```js
npm run start
```

github远程仓库https://github.com/wangmengyang521/angularDemo

远程仓库链接地址HTTPS：https://github.com/wangmengyang521/angularDemo.git

### other

接收的变量类型的指定：![image-20201009144102337](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201009144102337.png)



## angular组件传值

#### 父传子

父组件：

![image-20201009135818674](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201009135818674.png)

子组件：

![image-20201009140030468](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201009140030468.png)

总结：父组件在子组件标签上写上需要传入的属性，子组件通过引入angular的input方法，来接收传递过来的属性；





### 父组件使用子组件的方法

类似vue的$emit事件分发，封装组件常用

子组件：

![image-20201009142448955](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201009142448955.png)

![image-20201009143016629](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201009143016629.png)

父组件：

![image-20201009142728942](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201009142728942.png)

![image-20201009143206638](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201009143206638.png)

总结：子组件通过angular的output和eventemitter两个属性来定义分发的属性；在html模板中通过事件的方式将需要传递的属性发送至父级，看图示；父组件通过子组件定义的属性来拿到传递的参数值；