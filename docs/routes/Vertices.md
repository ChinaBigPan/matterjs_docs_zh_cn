---
title: Vertices
---

# Vertices

[英文原地址](https://brm.io/matter-js/docs/classes/Vertices.html)

`Matter.Vertices`模块包含了创建和操作顶点集合的方法。顶点集合是`Matter.Vector`的数组，包含了有`Vertices.create`插入的索引属性。`Matter.Body`维护顶点集合来表示对象的形状(凸包)。

## 方法

### Matter.Vertices.area(vertices, signed) → Number  

返回顶点集的区域。

**参数：**   
`vertices` Vertices  
`signed` Bool  

**返回值：**   
Number 区域

### Matter.Vertices.centre(vertices) → Vector  

返回顶点集合的中心(质心)。

**参数：**   
`vertices` Vertices   

**返回值：**   
Number 区域

### Matter.Vertices.chamfer(vertices, radius, quality, qualityMin, qualityMax)  

给与一组顶点旋转角度来获得倒角，返回一组新的顶点。`radius`参数是一个数字或数组，用于指定每个顶点的旋转半径。

**参数：**   
`vertices` Vertices   
`radius` Number[]  
`quality` Number  
`qualityMin` Number  
`qualityMax` Number  

### Matter.Vertices.clockwiseSort(vertices) → Vertices  
将传入的顶点按照顺时针顺序排列。

**参数：**   
`vertices` Vertices   

**返回值：**   
Vertices 排序后的顶点。

### Matter.Vertices.contains(vertices, point) → Boolean  
如果`point`处在顶点集内部则返回`true`。

**参数：**   
`vertices`  Vertices   
`point`  Vector

**返回值：**   
Boolean 如果顶点集内部包含`point`则返回`true`，否则返回`false`

### Matter.Vertices.create(points, body)  

创建一组新的`Matter.Body`顶点。`points`参数接受围绕原点`(0,0)`的`Matter.Vector`矢量点数组，如下：

```js
[{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
```

`Vertices.create`方法返回一个新的顶点数组，它和`Matter.Vector`对象相类似，但为了有效地碰撞检测提供了一些额外的引用。

顶点必须按照顺时针顺序指定。

**注意：`body`参数是必需参数，必须传入`Matter.Body`引用**

**参数：**   
`points`  Vector[]   
`body`  Body

### Matter.Vertices.fromPath(path, body) → Vertices  

将包含有用空格或者逗号分隔的`x y`对字符串解析为传入的`Matter.Body`的`Matter.Vertices`对象。要解析`SVG 路径`，请参见`Svg.pathToVertices`。

**参数：**   
`path`  String   
`body`  Body

**返回值：**  
Vertices 顶点

### Matter.Vertices.hull(vertices) →  

返回输入顶点的凸包(convex hull)作为新的点数组。

**参数：**   
`vertices`  Vertices   

**返回值：**  
[vertex] Vertices

### Matter.Vertices.inertia(vertices, mass) → Number  

返回传入总质量的顶点集合的截面惯性矩。

**参数：**   
`vertices`  Vertices   
`mass`  Number

**返回值：**  
Number 多边形的截面惯性矩

### Matter.Vertices.isConvex(vertices) → Bool

如果顶点形成一个凸形(顶点必须是顺时针顺序)，则返回true。

**参数：**   
`vertices`  Vertices   

**返回值：**  
Bool 如果顶点是一个凸形则返回`true`，否则返回`false`。(如果不匹配则返回`null`)。

### Matter.Vertices.mean(vertices) → Vector  

返回顶点集合的平均值。

**参数：**   
`vertices`  Vertices   

**返回值：**  
Vector 平均点

### Matter.Vertices.rotate(vertices, angle, point)

就地旋转顶点集合。

**参数：**   
`vertices`  Vertices  
`angle` Number   
`point` Vector  

### Matter.Vertices.scale(vertices, scaleX, scaleY, point)  
基于一个点(默认是中心点)对顶点集合进行缩放。

**参数：**   
`vertices`  Vertices  
`scaleX` Number   
`scaleY` Number  
`point` Vector 

### Matter.Vertices.translate(vertices, vector, scalar)  
就地移动顶点集合。

**参数：**   
`vertices`  Vertices  
`vector` Vector   
`scalar` Number  
