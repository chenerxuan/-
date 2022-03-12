## 3 JavaScript

ECMAScript JavaScript 语法
DOM 文档对象模型
BOM 浏览器对象模型

翻译器有两种翻译方式，区别在翻译的时间不同：

1. 编译 编译器是在代码执行之前进行编译，生成中间代码文件
2. 解释 解析器是在运行时进行及时解释，并立即执行

//输入框
prompt('');
//警示框
alert('');
//控制台输出
console.log('')

var 是 JS 关键字，用来声明变量(variable)，声明变量时赋值称为变量的初始化

变量命名严格区分大小写，由字母、数字、下划线、$ 组成；不能以数字开头

只声明未赋值 undefined

数据类型
根据数据所占存储空间不同，定义了不同的数据类型。JavaScript 是一种弱类型或动态语言，只有在程序运行时根据实际值来确定的，且变量的数据类型可变

- 简单数据类型(number、boolean、string、undefined、null)
- 复杂数据类型(object)

number 类型 无穷大 Infinity，非数字 NaN(Not a Number) 方法 isNaN()

string 字符串型 推荐单引号'' 转义字符,反斜杠开头 字符串长度.length 字符串的拼接+

typeof 获取变量的数据类型

数据类型转换

转换为字符串 .toString() String()函数强制转换 +''隐式转换

转换数字型 parseInt()函数 parseFloat()函数 Number(强制转换) - \* /隐式转换

转换为布尔型 Boolean()函数 代表空、否定的词被转换为 flase 如 ''、 0、 NaN、 null、 undefined

运算符(operator)

算数运算符
数字、运算符、变量组成的式子称为表达式，表达式的值称为返回值

比较运算符 ==有隐式转换

逻辑运算符 与&& 或|| 非！ 与优先级高于或

流程控制

- 顺序流程控制
- 分支流程控制
- 循环流程控制

三元表达式

转换、开关

```javascript
switch(表达式){
  case value1:
    执行语句1;
    break;
  case value1:
    执行语句1;
    break;
  ...
  default:
      执行最后的语句;
}
```

创建数组两种方式

- var arr = new Array();
- var arr = [];
- var arr1 = [1, 2, 'PINK', true];

冒泡排序(数组排序)

函数就是封装了一段可以被重复执行调用的代码块，目的是让大量代码重复使用；函数的封装是一个或多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口

function 函数名 () {
函数体;
}

函数的声明方式 1. 利用函数关键字定义函数(命名函数) 2. 函数表达式(匿名函数)

arguments 是当前函数的内置对象，存储了传递的所有实参，该对象是一个伪数组，具有 length 属性，按索引方式存储数据，但不具有数组的 pop、push 等方法

作用域链：内部函数访问外部函数的变量，采取的是链式查找的方式，就近原则.

JavaScript 代码是由浏览器中的 JavaScript 解析器来执行的。分两步执行：预解析和代码执行

- 解析器把所有的 var 和 function 提升到当前作用域的最前面
- 按照代码书写的顺序从上往下执行

预解析分为 变量预解析(变量提升)和 函数预解析(函数提升)

1. 变量提升 把所有变量声明提升到当前的作用域最前面，不提升赋值操作
2. 函数提升 把所有函数声明提升到当前作用域的最前面 不调用函数

对象(object)
对象是一个具体的事物，JavaScript 中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等

对象是由属性(property) 和方法组成的，属性是事物的特征、方法是事物的行为

创建方式

- 字面量创建 {}包含对象的属性和方法
- new Object()
- 构造函数 new 构造函数();首字母要大写

调用属性方法 对象名.属性名 或 对象名['属性名']

构造函数泛指某一大类(class), 通过 new 关键字创建对象的过程也称为对象的实例化

遍历对象 for...in 用于对数组或者对象的属性进行循环操作

```javascript
for (var k in obj) {
  console.log(k); //属性名
  console.log(obj[k]); //属性值
}
```

JavaScript 内置对象
Math Date Array String

Math.floor() //向下取整
Math.ceil() //向上取整
Math.round() //四舍五入

Date() 日期对象 是一个构造函数
总毫秒数(时间戳) date.valueOf() date.getTime() +new Date() Date.now()
案例：倒计时
d = parseInt(总秒数 / 60 / 60 / 24); //天数
h = parseInt(总秒数 / 60 / 60 % 24); //小时
m = parseInt(总秒数 / 60 % 60); //分钟
s = parseInt(总秒数 % 60); //秒

检查是否为数组 instanceof 运算符 instanceof Array
Array.isArray()

添加删除数组元素方法 .unshift() .push() 返回新数组的长度
.pop() 删除最后一个元素，返回删除的元素 .shift()

反转数组 .reverse() 数组排序 .sort(function (a, b) {return a - b})

数组索引 .indexOf(数组元素) 只返回第一个满足条件的索引 .lastIndexOf(数组元素) 从后往前查

数组转换为字符串 .toString() join(分隔符) concat() 连接两个或多个数组，不影响原数组；slice() 数组截取，返回被截取项目的新数组；splice()数组删除，返回被删除的新数组

基本包装类型：把简单类型包装成复杂数据类型，简单类型就有了属性和方法

获取元素的属性值
element.属性 获取内置属性 element.getAttribute('属性')获取自定义属性
设置属性值
element.属性 = '值' 设置内置属性值 element.setAttribute('属性', '值'); .removeAttribute('')

H5 规定自定义属性以 data-开头 element.dataset.自定义属性 或者 element.dataset['自定义属性']

节点(node)
nodeType(节点类型) 元素为 1 属性为 2 文本为 3
nodeName(节点名称) nodeValue(节点值)

.parentNode 得到离元素最近的父级节点
parentNode.childNodes 所有子节点，包含元素节点、文本节点 .firstChild .lastChild
parentNode.children 所有子元素节点，更常用 .firstElementChild .lastElementChild

兄弟节点 .nextSibling 包含元素节点、文本节点 .previousSibling
.nextElementSibling .previousElementSibling

创建节点 document.createElement('tagName')
添加节点 node.appendChild(child); node 父级 child 子级 追加，类似 push
node.insertBefore(child, 指定元素);
删除节点 node.removeChild(child)
复制节点 node.cloneNode() 若参数为空或者 false 为浅拷贝，只复制标签不复制内容，若 true，复制所有内容

DOM 操作，针对元素，主要有创建、增、删、改、查、属性操作、事件操作

动态创建

1. document.write 若页面文档流加载完毕，将导致页面重绘
2. innerHTML
3. createElement

改

1. 元素属性：src、href、title 等
2. 元素内容：innerHTML、innerText
3. 表单元素：value、type、disabled
4. 元素样式：style、className

查 主要获取 dom 元素
getElementById getElementsByTagName 古老用法
querySelector querySelectorAll
利用节点 父(parentNode) 子(children) 兄(previousElementSibling nextElementSibling)

属性操作 主要针对自定义属性

1. setAttribute 设置 dom 属性值
2. getAttribute 得到 dom 属性值
3. removeAttribute 移除属性

事件操作 给元素注册事件 事件源.事件类型 = 事件处理程序

#### 注册事件

注册事件(绑定事件) 分为 传统方式 和 方法监听注册方式

eventTarget.addEvenListener(type, listener[, useCapture])

解绑事件
传统 = null 监听 .removeEventListener(type, listener)

#### 事件流

事件流 描述的是从页面中 接收事件的顺序。
事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即 DOM事件流

1. 捕获阶段  true 
2. 当前目标阶段
3. 冒泡阶段

#### 事件对象

event(evt e)事件对象，在侦听函数的小括号里，当形参看，自动创建，是与事件相关的信息的集合，有很多属性和方法

e.target 返回触发事件的元素 e.currentTarget等于this
e.type  返回事件的类型
e.preventDefault();  return false 阻止默认行为 让链接不跳转或按钮不提交

#### 阻止事件冒泡

e.stopPropagation();

#### 事件委托

亦称事件代理 jQuery里称为事件委派
不需给子节点单独设置事件监听器，将事件监听器设置到父节点上，利用冒泡事件影响子节点

#### 常用鼠标事件
onclick 鼠标左键单击  onmouseover 鼠标经过触发  onmouseout 鼠标离开触发
onfocus 获得鼠标焦点触发  onblur  失去鼠标焦点触发  onmousemove 鼠标移动触发
onmouseup 鼠标弹起触发  onmousedown 鼠标按下触发
contextmenu 禁止鼠标右键菜单 e.preventDefault();
selectstart 禁止鼠标选中

#### 鼠标事件对象

MouseEvent  

clientX 鼠标在可视区的X坐标
pageX  鼠标在文档中的坐标

案例 跟随鼠标移动的天使 mousemove document事件 图片绝对定位 x, y坐标作为图片top left值

KeyboardEvent

onkeyup 键盘按键被松开时触发 keyup
onkeydown 键盘按键被按下时触发 keydown
onkeypress  键盘按键被按下时触发  不识别功能键 ctrl shift 箭头 等

e.keyCode   keyup和keydown不区分大小写  keypress区分大小写

案例 按下s键，光标顶到搜索框里  keyup  keyCode focus()
案例 快递单号大字号显示 提供大号字体盒子，将value传递给innerHTML，value为空，隐藏盒子

### BOM
BOM(Browser Object Model)即 浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window，BOM由一系列相关对象组成，每个对象都提供很多方法和属性

window对象是浏览器的顶级对象 它是JS访问浏览器窗口的一个接口

window.onload是窗口加载事件，当文档全部加载完后触发该事件 
DOMContentLoaded 仅当DOM加载完成，不包含图片等

窗口大小调整事件 resize   window.innerWidth 当前窗口宽度

#### 定时器 
setTimeout(回调函数, [延迟的毫秒数]);  回调函数callback  
clearTimeout(); 停止定时器

setInterval(回调函数, [间隔的毫秒数]);
clearInterval(intervalID);

案例：发送短信

#### this

this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this指向谁，一般情况下，this的最终指向是那个调用它的对象

1. 全局作用域或者普通函数中this指向全局对象window
2. 方法中谁调用this指向谁
3. 构造函数中this指向构造函数的实例

#### JS执行机制

JavaScript的特点是 单线程 同一时间只能做一件事

HTML5提出Web Worker标准，利用多核CPU的计算能力，允许JavaScript建立多个线程

同步
前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的
同步任务 都在主线程上执行，形成一个执行栈

异步
做一件会花费很长时间的事情时，可以去处理其他事情
异步任务 通过回调函数实现，一般有三种类型，添加到任务队列(消息队列)
1. 普通事件，click、resize等
2. 资源加载， load、error等
3. 定时器，setInterval、setTimeout等

执行机制
1. 先执行 执行栈中的同步任务
2. 异步任务(回调函数)放入任务队列中
3. 当执行栈中的所有同步任务执行完毕，系统按次序读取任务队列中的异步任务，被读取的异步任务结束等待状态，进入执行栈开始执行

由于主线程不断地重复 获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环(event loop)

#### location对象
location属性 用于获取或设置窗体的 URL，可用于解析URL 该属性返回一个对象，所以这个属性也称为location对象

URL格式
protocol://host[:port]/path/[?query]#fragment

location.href 返回URL  location.search 返回参数 location.link 返回锚点
location.assign() 跟href一样，也可以跳转页面(重定向页面)
location.replace() 替换当前页面，因为不记录历史，故不能后退页面
location.reload() 重新加载页面。相当于F5,如果参数为true强制刷新ctrl + f5

#### navigator 对象
navigator 对象包含有关浏览器的信息，有很多属性，最常用的是userAgent，该属性可以返回由客户机发送服务器的user-agent头部的值

#### history 对象
该对象与浏览器历史记录进行交互，该对象包含用户(在浏览器窗口中)访问过的URL

history.back(); 后退功能   history.back(); 前进功能   go(参数) 前进后退功能，参数1 前进一个页面 -1 后退一个页面

$('video')[0].onended=()=>{$('.bilibili-player-video-btn-next').click()}

$('bwp-video')[0].onended=()=>{$('.bilibili-player-video-btn-next').click()}

#### 偏移量 offset
动态的得到该元素的位置(偏移)、大小等
element.offsetTop  返回元素相对 带有定位父元素 上方 的偏移(若无父亲或父亲无定位，返回body偏移量)
offsetHeight  offsetWidth  返回元素的宽高，包括内容区、边框、padding 只读
.style.width 得到行内样式 带有单位 不包含padding、border 可读写

offsetParent  返回该元素带有定位的父级元素 如果父级没有定位则返回body

#### 模态框(登录框)

案例：点击 登录 显示登录框 可以拖动

#### 元素可视区 client 系列
client 客户端 可用client系列相关属性来获取元素可视区的相关信息，动态得到元素边框大小、元素大小等

element.clientTop 返回元素上边框的大小
element.clientWidth 返回自身值包括padding、内容区的宽度，不含边框，不带单位
 
(function() {})()  立即执行函数 (function() {} ()) 最大的作用是创建了一个独立的作用域

#### 淘宝flexible分析
dpr物理像素比

#### scroll 元素滚动系列

scrollHeight  不包含border 包含padding 实际内容的大小

scrollTop   被卷上去的距离  

#### 仿淘宝固定侧边栏
window.pageYOffset

#### mouseenter 和 mouseover 区别

mouseover经过自身盒子会触发，经过子盒子也会触发，mouseenter只会经过自身盒子触发，因为mouseenter不会冒泡，搭配mouseleave，鼠标离开。同样不会冒泡

#### 动画原理
通过定时器setInerval()不断移动盒子的位置

#### 缓速动画

让盒子每次移动的距离慢慢变小，速度就会慢慢落下来
核心算法：(目标值 - 现在位置) / 10 作为每次移动的步长

回调函数原理：函数可以作为一个参数，将这个该函数作为一个参数传到另一个函数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程就叫做回调

因为以后经常会用到这个动画函数，可以单独封装到一个JS文件里，使用的时候引用这个JS文件即可

#### 轮播图

#### 本地存储

本地存储特性
1. 数据存储在用户浏览器中
2. 设置、读取方便、甚至页面刷新不丢失数据
3. 容量较大，sessionStorage约5M,localStorage约20M
4. 只能存储字符串，可以将对象JSON.stringify()编码后存储

sessionStorage.setItem('uname', val); sessionStorage.getItem('uname') sessionStorage.removeItem('uname');   sessionStorage.clear();

#### jQuery

$("div").css("color", "red");
隐式迭代 遍历内部DOM元素(伪数组形式存储)的过程就叫做隐式迭代 给匹配到的所有元素进行遍历循环，执行响应的方法



筛选选择器  $("ul li:first")  $("ul li:eq(2)") 索引号为2 $("ul li:odd")

$("li").parent(); 父级  $("li").parents(); 祖先元素
$("ul").children("li")  相当于 $("ul>li") 子代选择器
$("ul").find("li"); 相当于$("ul li") 后代选择器
$("ol .item").siblings("li") 查找兄弟节点 不含自身
$("ul li").eq(2)  索引号方法
$("div:first").hasClass("current"); 判断是否有某个类名

排他思想  
$(this).index()  得到当前元素索引号
链式编程 节省代码量 更优雅  
$(this).css('color', 'red').sibling().css('color', '');

样式操作 参数只写属性名，返回的是属性值 $(this).css("color"); 参数可以是对象形式，属性不用加引号，复合属性采取驼峰命名法，属性值如果不是数字需要加引号

修改样式操作类  $(this).addClass("current");  $(this).removeClass("current");
切换类 $(this).toggleClass("current");

jQuery效果
显示隐藏 .show();  .hide()  .toggle([speed], [easing], [fn])
滑动  slideDown();  slideUp();  slideToggle();
事件切换 .hover(over, out); 就是鼠标经过离开的复合函数 只写一个函数，经过和离开都会触发这个函数  slideToggle();
停止动画队列 stop()  在动画前面加
淡入淡出  fadeIn()  fadeOut()  fadeToggle()  修改透明度fadeTo([speed], opacity, [easing], [fn])

自定义动画 animate(params, [speed], [easing], [fn])

属性操作
prop() 设置或获取元素固有属性值
attr() 设置或获取元素自定义属性
data() 在指定的元素上存取数据，不会修改DOM元素结构，一旦页面刷新，数据被移除

内容文本值 
html()  text()
表单 .val()
保留小数位 toFixed();
