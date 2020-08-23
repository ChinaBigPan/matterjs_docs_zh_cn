---
title: Bodies
---

# Bodies

[英文原地址](https://brm.io/matter-js/docs/classes/Bodies.html)

`Matter.Bodies`模块包含了用于创建刚体模型的方法，可以创建常用的刚体模型配置(如矩形、圆形和其他多边形)。

## 方法

### Matter.Bodies.circle(x, y, radius, [options], [maxSides]) → Body

创建一个环形架构的刚体。`options`参数是一个对象，用于设置覆盖默认值的属性。可以传入的参数请参阅`Matter.Body`模块部分。

参数：

`x` Number   
`y` Number
`radius` Number - 要在刚体上设置的属性名称(或属性和值的映射)。  
`[options]` Object - `可选`  
`[maxSides]` Number - `可选`

返回值：

`Body` 一个新的Body。

### Matter.Bodies.fromVertices(x, y, [[vector]], [options], [flagInternal=false], [removeCollinear=0.01], [minimumArea=10]) → Body

使用传入的顶点(或包含多个顶点的集合)创建刚体。如果顶点排列的形状是凸的，则按照传入的顶点生成刚体。如果是凹的，它们将被分解并尝试使用[poly-decomp](https://github.com/schteppe/poly-decomp.js)进行创建。注意，这个过程并不能保证支持复杂的顶点集合(如果是一些有洞的顶点集合则可能会失败)。默认情况下，分解顶点集时会丢弃共线边(以提高性能)。它还可以选择性地丢弃任何面积小于`minimumArea`的部件。如果不能对顶点进行分解，则返回使用凸包。`options`参数则方便您传入覆盖默认值的属性。可以传入的参数请参阅`Matter.Body`模块部分。

参数：

`x` Number   
`y` Number
`[[Vector]]` Object - `可选` 顶点数组

`[options]` Object - `可选`  
`[[flagInternal=false]]` Bool - `可选`   
`[removeCollinear=0.01]` Number - `可选`   
`[minimumArea=10]` Number - `可选`

返回值：

`Body` 一个新的Body。

### Matter.Bodies.polygon(x, y, sides, radius, [options]) → Body

使用传入的边数创建一个正多边形刚体模型。`options`参数则方便您传入覆盖默认值的属性。可以传入的参数请参阅`Matter.Body`模块部分。


参数：

`x` Number   
`y` Number
`sides` Number
`radius` Number
`[options]` Object `可选`

返回值：

`Body` 一个新的正多边形刚体。

### Matter.Bodies.rectangle(x, y, width, height, [options]) → Body

创建矩形刚体模型。`options`参数则方便您传入覆盖默认值的属性。可以传入的参数请参阅`Matter.Body`模块部分。

参数：

`x` Number   
`y` Number  
`width` Number
`height` Number
`[options]` Object `可选`

返回值：

`Body` 一个新的矩形刚体

### Matter.Bodies.trapezoid(x, y, width, height, slope, [options]) → Body

创建一个梯形刚体模型。`options`参数则方便您传入覆盖默认值的属性。可以传入的参数请参阅`Matter.Body`模块部分。

参数：

`x` Number   
`y` Number  
`width` Number
`height` Number
`slope` Number
`[options]` Object `可选`

返回值：

`Body` 一个新的梯形刚体