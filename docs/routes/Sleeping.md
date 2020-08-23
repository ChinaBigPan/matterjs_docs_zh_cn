---
title: Sleeping
---

# Sleeping

[英文原地址](https://brm.io/matter-js/docs/classes/Sleeping.html)

`Matter.Sleeping`模块包含了管理睡眠状态物体的方法。

## 方法

### Matter.Sleeping.afterCollisions(pairs, timeScale)  

根据传入的碰撞对(`pairs`)，唤醒处于睡眠状态的物体。

**参数：**    
`pairs` Pair[]    
`timeScale` Number

### Matter.Sleeping.set(body, isSleeping)  

设置一个物体是否处于睡眠状态。

**参数：**    
`body` Body      
`isSleeping` Boolean  

### Matter.Sleeping.update(bodies, timeScale)  

物体处于睡眠状态还激活状态取决于动作。


**参数：**    
`pairs` Pair[]    
`timeScale` Number