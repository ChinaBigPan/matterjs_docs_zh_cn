---
title: Query
---

# Query

[英文原地址](https://brm.io/matter-js/docs/classes/Query.html)

`Matter.Query`模块包含了执行碰撞查询的方法。

## 方法

### Matter.Query.collides(body, bodies) → Object[]  

返回`body`和`bodies`之间的碰撞列表。


**参数：**    
`body` Body   
`bodies` Body[]

**返回值：**   
Object[] 碰撞对象列表

### Matter.Query.point(bodies, point) → Body[]  

从传入的`bodies`返回所有包含了`point`的`bodies`。

**参数：**    
`bodies` Body[]   
`point`  Vector

**返回值：**   
Body[] 符合查询的物体。

### Matter.Query.ray(bodies, startPoint, endPoint, [rayWidth]) → Object[]

对一组`body`发射一条射线并返回所有碰撞，射线的宽度可配置。不提供交汇点。

**参数：**    
`bodies` Body[]   
`startPoint`  Vector   
`endPoint`  Vector   
`[rayWidth]`  Number `可选`  


**返回值：**   
Object[] 碰撞

### Matter.Query.region(bodies, bounds, [outside=false]) → Body[]

根据传入的`bodies`，返回传入的边界(`bounds`)内(或外)的所有`body`

**参数：**    
`bodies` Body[]   
`bounds`  Bounds   
`[outside=false]`  Bool `可选`   
  

**返回值：**   
Body[] 符合查询的物体。












