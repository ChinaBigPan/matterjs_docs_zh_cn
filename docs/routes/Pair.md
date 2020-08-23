---
title: Pair
---

# Pair

[英文原地址](https://brm.io/matter-js/docs/classes/Pair.html)

`Matter.Pair`模块包含了用一次创建和操作碰撞对的方法。

## 方法   

### Matter.Pair.create(collision, timestamp) → Pair  

创建一个碰撞对。

**参数：**    
`collision` Collision   
`timestamp` Number

**返回值：**
Pair 新的碰撞对。

### Matter.Pair.id(bodyA, bodyB) → String

获得传入的碰撞对的ID。

**参数：**    
`bodyA` Body   
`bodyB` Body

**返回值：**
String 唯一碰撞对ID。

### Matter.Pair.setActive(pair, isActive, timestamp)  

设置碰撞对的激活/非激活状态。

**参数：**    
`pair` Pair   
`isActive` Bool   
`timestamp` Number  

### Matter.Pair.update(pair, collision, timestamp)   

更新碰撞。

**参数：**    
`pair` Pair   
`collision` Collision   
`timestamp` Number 