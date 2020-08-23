---
title: Events
---

# Events

[英文原地址](https://brm.io/matter-js/docs/classes/Events.html)

`Matter.Events`模块包括了触发和监听其他对象上的事件的方法。

## 方法

### Matter.Events.off(object, eventNames, callback)

移除传入事件的回调。如果未传入`callback`，则清除`eventNames`中的所有回调。如果连`eventNames`都没有传入，则清除所有事件的回调。

参数：

`object` Object   
`eventNames` String    
`callback` Function  

### Matter.Events.on(object, eventNames, callback)

订阅传入对象的`eventName`的回调函数。

参数：

`object` Object   
`eventNames` String    
`callback` Function  

### Matter.Events.trigger(object, eventNames, event)  

触发传入对象的`eventName`所订阅的所有回调，如果存在则按照订阅顺序触发。

参数：

`object` Object   
`eventNames` String    
`callback` Function 






