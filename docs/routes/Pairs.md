---
title: Pairs
---

# Pairs

[英文原地址](https://brm.io/matter-js/docs/classes/Pairs.html)

`Matter.Pairs`模块包括了创建并操作碰撞对集合的方法。

## 方法

### Matter.Pairs.clear(pairs) → Pairs

清除传入的碰撞对结构。

**参数：**    
`pairs` Pairs  

### Matter.Pairs.create(options) → Pairs   

创建新的碰撞对结构。

**参数：**    
`options` Object 

**返回值：**   
Pairs 新的碰撞对结构

### Matter.Pairs.removeOld(pairs, timestamp)

查找并删除在一定时间内处于非激活状态的碰撞对。

**参数：**    
`pairs` Object   
`timestamp` Number  

### Matter.Pairs.update(pairs, collisions, timestamp)

更新传入的碰撞列表。

**参数：**    
`pairs` Object   
`collision` Collision   
`timestamp` Number 










