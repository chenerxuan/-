https://www.bilibili.com/video/BV1js411g7Fw

# 0x00 HTTP协议概念及工作流程

重要性：
无论是以后用webserverice, 还是用rest做大型架构，都离不开对HTTP协议的认识。
webserverice = HTTP协议 + XML
rest = HTTP协议 + json
各种API，一般是用HTTP + XML/json
对AJAX的学习很有帮助

原理：
1. 形象理解HTTP协议
2. 动手试试HTTP协议
3. HTTP协议3部分介绍

实战：
4. PHP + socket编程发送HTTP请求
5. PHP批量发帖
6. HTTP协议防盗链

优化：
7. HTTP协议与缓存控制
8. HTTP协议与COOKIE
9. 持久连接

什么是协议：
答：计算机中的协议和现实中的协议是一样的，一式双份/多份。双方/多方都遵从同一个规范，这个规范就可以称为协议。

计算机之所以能全世界互通，协议是功不可没，如果没有协议，计算机各说各话，根本谁都听不懂谁。

FTP HTTP STMP POP TCP/IP协议

HTTP协议即按一定规则，向服务器要数据，或发送数据。而服务器按一定规则，回应数据

HTTP协议的工作流程  当你打开一个页面时，发生了什么？
客户端       Web服务器(Apache Nginx ... iis)
0：原始状态：客户端和服务器没有关系
发送请求：建立连接(连接就是网络上的虚拟电路)
发送响应，返回响应信息
客户端收到HTML文件 解析
断开连接

HTTP请求信息和响应信息的格式
头信息结束后和主体信息之间要空一行
POST比GET多了主体信息，头信息里要标明content-length content-type:application/x-www-form-urlencoded

请求：
1. 请求行
   1. 请求方法 method (web server 未必支持所有的方法)
      1. GET
      2. POST
      3. HEAD(和GET基本一致，不返回具体内容)
      4. PUT
      5. DELETE
      6. TRACE 用代理访问的时候看代理有没有修改你的HTTP请求
      7. OPTIONS 返回服务器可用的请求方法
   2. 请求路径 URL的一部分
   3. 所用协议 HTTP/1.1
2. 请求头信息 Host:localhost
CRLF空行
3. 请求主体信息

响应：
1. 响应行  协议版本 状态码 状态文字
2. 响应头信息  key: value
CRLF空行
3. 响应体

Request Headers (请求头信息)

Response Headers (响应头信息)
key: value
key: value
content-length: 接下来主体的长度

# 0x01 HTTP协议之方法与状态码

状态码 是用来反应服务器响应情况的
最常见的如 200 OK， 404 NOT FOUND
状态文字是用来描述状态码的 便于人观察

|状态码|定义|说明|
|1xx|


200 - 服务器成功返回网页
301/2 - 永久/临时重定向
header('Location: http://www.baidu.com', true, 301);
304 Not Modified - 未修改    keep-alive
307 - 重定向后保持原有的请求数据

失败的状态码：
404 - 请求的网页不存在
503 - 服务器暂时不可用
500 - 服务器内部错误

# 0x02 socket编程发送GET请求

PHP + socket编程 发送HTTP请求
要求能完成 模拟下载 注册 登录

```php
// http请求类的接口
interface proto {
  // 连接url
  function conn($url);

  // 发送get查询
  function get();

  // 发送post查询
  function post();

  // 关闭连接
  function close();
}

class Http implements Proto {

  const CRLF = "/r/n";

  protected $url = null;
  protected $version = 'HTTP/1.1';
  protected $fh = null;
  
  protected $line = array();
  protected $header = array();
  protected $body = array();

  public function __construct($url) {
    $this->conn($url);
    $this->setHeader('Host:'.$this->url['host']);
  }

  // 此方法负责写请求行
  protected function setLine($method) {
    $this->line[0] = $method . '' . $this->url['path'] . ''. $this->version;
  }

  // 此方法负责写头信息
  protected function setHeader($headerline) {
    $this->header[] = $headerline;
  }
  
  // 此方法负责写主体信息
  protected function setBody() {}
  
  
  // 连接url
  public function conn($url) {
    $this->url = parse_url($url);
    // 判断端口
    if(!isset($this->url['port'])) {
      $this->url['port'] = 80;
    }
    $this->fh = fsockopen($this->url['host'],$this->url['port']);
  };

  // 构造get的数据
  public function get() {
    $this->setLine('GET');
  };

  // 构造post查询的数据
  public function post() {};

  // 真正请求
  public function request() {
    // 拼接请求行 头信息 实体信息 放在一个数组里
    $req = array_merge($this->line, $this->header, array(''), $this->body, array(''));
    // print_r($req);
    $req = implode(self::CRLF,$req)
    fwrite($this->fh, $req);
    while(!feof($this->fh)) {
      $this->response.= fread($this->fh, 1024);
    }
    this->close();
  }

  // 关闭连接
  public function close() {};
}

$url = '';
$http = new Http($url);
$http->get();

// $http->request();
```
HTTP标准协议 换行/r/n

# 0x03 socket编程批量发帖
抓包

# 0x04 HTTP协议模拟登录发贴

# 0x05 HTTP之referer防盗链

服务器怎么知道图片是在站外被引用的？
网站的统计结果，统计用户从何而来？
统计时是如何得知用户是从哪来到本网站呢？

HTTP协议中 头信息里 有一个重要的选项Referer
Referer:代表网页的来源，即上一页的地址

如果是直接在浏览器上输入地址，则没有referer头

这也是为什么服务器知道我们的图片是从哪引用的，也知道我们的客户是从哪个链接点进来的

问题：如何配置apache服务器，用于图片防盗链

原理：在web服务器层面，根据http协议的referer头信息来判断，如果来自站外，则统一重写一个防盗链提醒图片放上去

具体步骤：
1. 打开apach重写模块 mod_rewrite
2. 在需要防盗链的网站或目录，写.htaccess文件，并指定防盗链规则

如何制定？
分析referer信息，如果不是来自本站则重写

重写规则：哪种情况重写：
是jpeg/jpg/gif/png图片时 
是referer头与localhost不匹配时 

怎么重写？ 
统一rewrite到 某个防盗链图片

# 0x06 http缓存详解
HTTP协议缓存控制
我们观察图片的下载，往往
第一次请求时 200 OK
第二次请求时 304 Not Modified 未修改状态

解释：在网络上，有一些缓存服务器，另，浏览器自身也有缓存功能。
当我们第一次访问某图片时，返回值 200
基于一个前提，图片不会经常改动，服务器在返回200的同时，还返回该图片的"签名"-- Etag (签名可理解为图片的指纹)。  当浏览器再次访问该图片时，去服务器校验"指纹"，如果图片没有变化，就直接使用缓存中的图片，这样就减轻了服务器的负担

抓包观察：响应头

第二次响应信息 Status Code：304 Not Modified

如果网站比较大，有N台缓存服务器，那么这N台缓存服务器，如何处理主服务器上的文件
1. 要不要缓存
2. 缓存多久

缓存服务器与主服务器之间应该有一些协议，来说明这2个问题？
用什么协议来说明这2个问题？
答：还是HTTP协议，用头信息 cache-control 来控制

相关模块mod_expires

具体用法：
在主服务器，打开apache的expires扩展，利用该扩展来控制图片、css、html等文件，控制是否缓存，及缓存生命周期

在.htaccess中，具体语法如下：
ExpiresDefault "<base> [plus] {<num> <type>}*"
ExpiresByType type/encoding "<base> [plus] {<num> <type>}*"

ExpiresDefault 是设置默认的缓存参数
ExpiresByType是按照文件类型来设计独特的缓存参数
我们用第二种来做测试，给jpg图片设置1个月的生存周期
后面4个参数怎么理解？
Base：基于哪个时间点来计算缓存有效期
Access/now：基于请求/响应的那一瞬间，比如从此瞬间到1个月之后
Modification：基于被请求文件的最后修改日期来计算。比如 最后修改日期的后一周内仍然有效。

num：缓存时间的大小
type：缓存时间的单位

设置服务器不允许缓存 利用apache的header模块
<FilesMatch "\.(gif)$">
Control-cache: no-store, must-revalidate;
</FilesMatch>

# 0x07 HTTP 与内容压缩

为了提高网页在网络上的传输速度，服务器对主体信息进行压缩，常见的有gzip、deflate、compress、以及google chrome的sdch压缩
Content-Encoding: gzip
Content-Length 是压缩后的长度

在apache中开启deflate模块 
指定文件类型压缩  常见的文本格式

# 0x08 HTTP协议与持久连接+分块传输 ->comet 反向AJAX

反向AJAX又叫comet，server push，服务器推技术

应用范围：网页聊天服务器，新浪微博在线聊天，Google mail网页链接

原理：一般而言，HTTP协议的特点，连接--断开
服务器响应Content-Length，收到指定length长度的内容时就断开了

在HTTP1.1协议中，允许不写Content-Length，比如要发送的内容长度确实不知道时，这时需要一个特殊的content-type:chunked

分块传输的原理：
123H\r\n
123H个长度的内容传输给客户端.... \r\n
....
41H\r\n
浏览器继续接收41H长度的内容 \r\n
0\r\n(服务器说 内容发完了)