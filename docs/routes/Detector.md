---
title: Detector
---

# Detector

[英文原地址](https://brm.io/matter-js/docs/classes/Detector.html)

`Matter.Detector`模块包含了对给定的一组物体对的碰撞检测方法。

## 方法

### Matter.Detector.canCollide(filterA, filterB) → Bool 
如果传入的两个碰撞过滤器允许碰撞，则返回`true`。参见`body.collisionFilter`获取更多信息。

**参数：**   
`filterA` Object   
`filterB` Object  

**返回值：**
Bool 如果可以发生碰撞，返回`true`

### Matter.Detector.collisions(broadphasePairs, engine) → Array   

找到传入一组物体对的所有碰撞。

**参数：**   
`broadphasePairs` Pair[]   
`engine` Engine  

**返回值：**
Array 碰撞数组。









