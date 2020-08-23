---
title: Bounds
---

# Bounds

[英文原地址](https://brm.io/matter-js/docs/classes/Bounds.html)

`Matter.Bounds`模块用于创建和操作轴对其边框(AABB盒)的方法。

## 方法

### Matter.Bounds.contains(bounds, point) → Boolean 

如果边框包含传入的点，则返回`true`。

**参数：**   
`bounds` Bounds    
`point` Vector   

**返回值：**   
Boolean 如果边框包含传入的点返回`true`，否则返回`false`

### Matter.Bounds.create(vertices) → Bounds

在传入的顶点处创建一个新的周对其边界框(AABB盒)。

**参数：**   
`vertices` Vertices    

**返回值：**   
Bounds 新的边界对象。

### Matter.Bounds.overlaps(boundsA, boundsB) → Boolean

如果两个边界(boundsA和boundsB)相交则返回`true`。

**参数：**   
`boundsA` Bounds   
`boundsB` Bounds

**返回值：**  
Boolean  如果重叠则返回`true`，否则返回`false`。

### Matter.Bounds.shift(bounds, position)   

将边界移动到指定位置。

**参数：**   
`bounds` Bounds    
`position` Vector   


### Matter.Bounds.translate(bounds, vector)   

通过传入的矢量来移动边界。

**参数：**   
`bounds` Bounds    
`position` Vector 

### Matter.Bounds.update(bounds, vertices, velocity)

使用传入的顶点更新边界，并根据传入的速度扩展边界。

**参数：**   
`bounds` Bounds    
`vertices`  Vertices   
`velocity`  Vector























