---
title: Common
---

# Common

[英文原地址](https://brm.io/matter-js/docs/classes/Common.html)

`Matter.Common`模块包含了所有模块的通用方法。

## 方法

### Matter.Common.chain(funcs...) → Function   

接收 n 个函数作为参数，并返回一个按顺序调用它们的新函数。在新函数调用时的参数也将传递给每个函数。`this`的值将指向链式调用的最后非`undefined`的返回值。因此，如果传入的函数没有返回值，则保留先前的值。在所有传入的函数均调用完毕后，新函数返回最后一个返回值(如果有的话)。如果传入的函数时一个链式函数，那么它会被扁平化。

**参数：**   
`funcs` Function `多个` 将要链式调用的函数

**返回值：**   
Function 按顺序调用传入函数的新函数。

### Matter.Common.chainPathAfter(base, path, func) → Function   

在传入的相对于`base`的`path`上接续一个函数在原链式函数之后执行。请参阅`Common.chain`文档。

**参数：**   
`base` Object 基本对象。    
`path` String 相对于`base`的路径。   
`func` Function 要接续调用链的函数。

**返回值：**   
Function 取代原有函数的链式方法。

### Matter.Common.chainPathBefore(base, path, func) → Function

在传入的相对于`base`的`path`上桥接一个函数在原链式函数之前执行。请参阅`Common.chain`文档。

**参数：**   
`base` Object 基本对象。    
`path` String 相对于`base`的路径。   
`func` Function 要桥接到调用链之前的函数。

**返回值：**   
Function 取代原有函数的链式方法

### Matter.Common.choose(choices) → Object   

以相等的概率从列表中随机选取一个值。该方法使用了随机种子生成器。

**参数：**   
`choices` Array   


**返回值：**   
Object 从数组中选取的随机值。


###  Matter.Common.clamp(value, min, max) → Number

返回夹在最大值和最小值之间的`value`。

**参数：**   
`value` Number    
`min` Number 相对于`base`的路径。   
`max` Number 要桥接到调用链之前的函数。

**返回值：**   
Number 夹在最小和最大之间的值(包括最大值)

### Matter.Common.clone(obj, deep) → obj

创建一个对象的克隆，如果`deep`为`true`则进行深拷贝。

**参数：**   
`obj` Object    
`deep` Bool

**返回值：**   
obj 克隆后的对象。

### Matter.Common.colorToNumber(colorString) → Number   
将CSS十六进制颜色字符串转换为整数。

**参数：**   
`colorString` String  

**返回值：**   
Number 表示CSS十六进制颜色字符串的数字。


### Matter.Common.extend(obj, deep) → 

使用第二个参数中的对象扩展第一个参数中的对象。

**参数：**   
`obj` Object    
`deep` Bool

**返回值：**   
obj 扩展后的对象

### Matter.Common.get(obj, path, [begin], [end]) →  

获取相对于`path`字符串的`base`。

**参数：**   
`obj` Object 基本对象  
`path` String 相对于`base`的路径，例："Foo.Bar.baz"   
`[begin]` Number `可选` 切割路径的起始点   
`[end]` Number `可选` 切割路径的结束点

**返回值：**   
传入路径的对象。

### Matter.Common.indexOf(haystack, needle) → Number   

跨浏览的兼容版`indexOf`。

**参数：**   
`haystack` Array    
`needle` Object

**返回值：**   
Number 索引位置，没找到则为 -1。   

### Matter.Common.info(objs...)

展示`console.info`消息，前提是当前的`Common.logLevel`允许。消息前缀会加上'matter-js'以提高辨识度。

**参数：**   
`objs` Object `多个` 要打印的信息。

### Matter.Common.isArray(obj) → Boolean   

如果`obj`是一个数组则返回`true`。

**参数：**   
`obj` Object   

**返回值：**  
Boolean 如果对象是一个数组则返回`true`，否则返回`false`。

### Matter.Common.isElement(obj) → Boolean

如果`obj`是一个`HTMLElement`则返回`true`，否则返回`false`

**参数：**   
`obj` Object   

**返回值：**  
Boolean 如果对象是一个`HTMLElement`则返回`true`，否则返回`false`。

### Matter.Common.isFunction(obj) → Boolean

如果`obj`是一个函数则返回`true`，否则返回`false`

**参数：**   
`obj` Object   

**返回值：**  
Boolean 如果对象是一个函数则返回`true`，否则返回`false`。


### Matter.Common.isPlainObject(obj) → Boolean

如果`obj`是一个纯对象则返回`true`，否则返回`false`

**参数：**   
`obj` Object   

**返回值：**  
Boolean 如果对象是一个纯对象则返回`true`，否则返回`false`。

### Matter.Common.isString(obj) → Boolean    

如果`obj`是一个字符串则返回`true`，否则返回`false`

**参数：**   
`obj` Object   

**返回值：**  
Boolean 如果对象是一个字符串则返回`true`，否则返回`false`。

### Matter.Common.keys(obj) → String[]

返回传入对象的键列表。

**参数：**   
`obj` Object   

**返回值：**  
String[] keys


### Matter.Common.log(objs...)

展示`console.log`消息，前提是当前的`Common.logLevel`允许。消息前缀会加上'matter-js'以提高辨识度。

**参数：**   
`objs` Object `多个` 要打印的信息。

### Matter.Common.map(list, func) → Array    

跨浏览器的`Array.map`方法。

**参数：**  
`list`  Array   
`func`  Function  

**返回值：**
Array 映射后的值的数组。

### Matter.Common.nextId() → Number   

返回下一个连续的ID。

**返回值：**
Number 独一无二的连续ID。

### Matter.Common.now() → Number   

返回从时间原点(如从页面加载开始)的时间戳。

**返回值：**
Number 当前时间戳。

### Matter.Common.random(min, max) → Number  

返回一个介于最小值和最大值之间的随机值。该函数使用了随机种子生成器。

**参数：**  
`min`  Number   
`max`  Number 

**返回值：**   
Number 最小值和最大值之间的随机值。


### Matter.Common.set(obj, path, val, [begin], [end]) →

设置相对于传入`path`字符串的`base`。

**参数：**  
`obj`  Object `base`对象。   
`path`  String 相对`base`的路径，例如："Foo.Bar.baz"。   
`val`  Object  要设置的值。   
`[begin]` Number `可选` 路径的开始    
`[end]` Number `可选` 路径的结束    


**返回值：**   
通过`val`进行链接。

### Matter.Common.shuffle(array) → Array

对给定的数组进行洗牌。该函数使用了随机种子生成器。

**参数：**  
`array` Array   

**返回值：**   
Array 随机洗牌后的数组

### Matter.Common.sign(value) → Number  

返回传入值的的正/负号。

**参数：**   
`value` Number  

**返回值：**   
Number 如果是负值返回`-1`，如果是`0`或正值返回`+1`

### Matter.Common.topologicalSort(graph) → Array

获取一个有向图，并以拓扑顺序返回部分有序的顶点集合。允许循环依赖。

**参数：**   
`graph` Object  

**返回值：**   
Array 按拓扑顺序排列的部分顶点的有序集合。

### Matter.Common.values(obj) → Array   

返回给定对象的值列表。

**参数：**   
`obj` Object  

**返回值：**   
Array 对象属性值的数组

### Matter.Common.warn(objs...) 

展示`console.warn`消息，前提是当前的`Common.logLevel`允许。消息前缀会加上'matter-js'以提高辨识度。

**参数：**   
`objs` Object `多个` 要打印的信息。

## 属性

| 属性 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| common.Common.logLevel | Number | `1` | 控制台日志记录级别，其中每个级别都向上兼容，向下排除。默认级别是"debug"，它显示所有控制台消息。<br /> - 0 = None<br /> - 1 = Debug <br /> - 2 = Info <br/> - 3 = Warn<br /> - 4 = Error  |






















