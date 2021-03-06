# ES
ES 全称EcmaScript，是脚本语言的规范，JavaScript是EcmaScript的一种实现，ES新特性实际指的是JavaScript的新特性

优势：
1. 语法简洁，功能丰富
2. 框架开发应用
3. 前端开发职位要求

### let 声明变量 
1. 变量不能重复声明  
2. 属块级作用域 {} 只在块内有效  *
3. 不存在变量提升 
4. 不影响作用域链  

### const 声明常量
值不能修改的量称为常量
1. 一定要赋初始值 
2. 一般大写 
3. 常量的值不能修改 
4. 块级作用域  {} 只在块内有效  *
5. 对于数组和对象的元素修改，不算做对常量的修改
   1. 因为常量所指向的地址没有发生改变
   2. 建议数组和对象用const(避免误操作)

### 变量解构赋值 6
ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值
主要用于从对象中结构方法

### 模板字符串
新的声明字符串的方式  ``  
1. 可直接出现换行符 
2. 变量拼接  ` ${} `

### 对象的简化写法
ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法

### 箭头函数    () => {}  
1. this 是静态的 始终指向函数声明时所在作用域下的this的值  
2. 不能作为构造函数实例化对象 
3. 不能使用arguments变量  
4. 箭头函数的缩写 
   1. 省略小括号，当形参有且只有一个的时候 
   2. 省略花括号，当代码体只有一条语句的时候，return必须省略，语句的执行结果就是函数的返回值


> 适合与this无关的回调，定时器，数组的方法回调
> 不适合与this有关的回调，事件回调，对象的方法

### 函数参数的默认值
1. 允许给函数参数赋值初始值 
   1. 具有默认值的参数，一般位置要靠后 
2. 与解构赋值结合

### rest参数 
用于获取函数的实参，用来代替arguments  
- ...args 必须放到参数最后

### 扩展运算符 ... 
- 能将 数组 转换为逗号分隔的 参数序列 
- 可用于数组合并 
  - [...kuaizi, ...fenghuang]
- 数组的克隆 
- 将伪数组转为真正的数组

### Symbol 
新的原始数据类型，表示独一无二的值，JS的第七种数据类型，是一种类似字符串的数据类型 

- 值是唯一的
- 不能与其他数据进行运算  
- 定义的对象属性不能使用for...in循环遍历 但可以使用Reflect.ownKeys来获取对象的所有键名
- 不能与其他数据进行运算

JavaScript七种数据类型记忆
USONB  you are so niubility
- U undefined
- S string symbol
- O object
- n null number
- b boolean

Symbol 可以可对象添加属性和方法表示独一无二

Symbol.hasInstance 控制类型检测
Symbol.isConcatSpreadable 控制数组是否可以展开
控制对象在特定场景下的表现

### 迭代器(Iterator) 19
迭代器是一种接口，为各种不同的数据结构提供统一的访问机制。
任何数据只要部署了Iterator接口(即属性)，就可以完成遍历操作。
1. 主要供 for...of 消费
2. 自定义遍历数据

### 生成器 20 21 22 ？？？没听懂
生成器是一种特殊的函数，用来异步编程

### Promise
异步编程的解决方案
```javascript
const p = new Promise((resolve, reject) => {
   resolve(value);
   reject(reason);
})
p.then(function(value){}, function(reason){})
```

P27 ??

then.then 链式调用

promise的catch方法

### 集合与API
Set (集合) 类似于数组，但成员唯一 集合实现了iterator接口，可以使用扩展运算符和for...of
集合的属性和方法

### MAP与API

### class 类

### 构造函数继承

extends

### get set