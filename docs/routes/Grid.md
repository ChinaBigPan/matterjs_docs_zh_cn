---
title: Grid
---

# Grid

[英文原地址](https://brm.io/matter-js/docs/classes/Grid.html)

`Matter.Grid`模块包含了用于创建和操作碰撞粗测阶段网格结构的方法。

## 方法

### Matter.Grid.clear(grid)   

清除网格。

**参数：**   
`grid` Grid


### Matter.Grid.create(options) → Grid

创建新的网格。

**参数：**  
`options` Object  

**返回值：**
Grid 全新的网格。


### Matter.Grid.update(grid, bodies, engine, forceUpdate)  

更新网格。

**参数：**  
`grid` Grid   
`bodies` Body[]   
`engine` Engine   
`forceUpdate`  Boolean  

## 属性

以下属性为`Matter.Grid.create`创建对象时通过`options`参数传入的配置项。

| 属性 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| grid.bucketHeight | Number | 48 | 单个网格的高度 |
| grid.bucketWidth | Number | 48 | 单个网格的宽度 |














