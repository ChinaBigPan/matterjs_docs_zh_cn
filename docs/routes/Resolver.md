---
title: Resolver
---

# Resolver

[英文原地址](https://brm.io/matter-js/docs/classes/Resolver.html)

`Matter.Resolver`模块包含了解析碰撞对的方法。

## 方法

### Matter.Resolver.postSolvePosition(bodies) 

应用位置分辨率。

**参数：**    
`bodies` Body[]   


### Matter.Resolver.preSolvePosition(pairs) 

根据`pairs`解析位置。

**参数：**    
`pairs` Pair[]   

### Matter.Resolver.preSolveVelocity(pairs)  

根据`pairs`解析速度。

**参数：**    
`pairs` Pair[]   

### Matter.Resolver.solvePosition(pairs, timeScale)  

找到`pairs`位置的解决方案。

**参数：**    
`pairs` Pair[]  
`timeScale` Number  

### Matter.Resolver.solveVelocity(pairs, timeScale)  

找到`pairs`速度的解决方案。

**参数：**    
`pairs` Pair[]  
`timeScale` Number  



