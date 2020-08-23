---
title: Runner
---

# Runner

[英文原地址](https://brm.io/matter-js/docs/classes/Runner.html)

`Matter.Runner`模块是可选的工具模块，提供了游戏循环，能够帮助您在浏览器端处理不当更新的`Matter.Engine`。主要用于开发和调试，也可用来制作简单的游戏。如果您使用的自己的游戏循环，则不需要`Matter.Runner`模块，只需要在您的循环中调用`EngineUpdate(engine, delta)`即可。

## 方法

### Matter.Runner.create(options)   

创建新的`Runner`。`options`参数是一个对象，用于传入要覆盖的默认值属性。

**参数：**    
`options` Object   

### Matter.Runner.run(engine)  

通过在`requestAnimationFrame`事件中调用`Runner.tick`来执行`Matter.Engine`的每一帧。

**参数：**    
`engine` Engine   

### Matter.Runner.start(runner, engine)  

`Runner.run`的别名。

**参数：**  
`runner` Runner  
`engine` Engine  

### Matter.Runner.stop(runner)  

通过取消动画帧请求事件循环来结束传入`runner`上`Runner.run`的执行。如果您只希望暂停引擎，请参阅`engine.enabled`。

**参数：**  
`runner` Runner  

### Matter.Runner.tick(runner, engine, time)   

更新引擎和渲染器每一步('tick')的有序循环工具。具有图像平滑、时间校正和固定或动态授时功能。会触发引擎上的`beofreTick`、`tick`和`afterTick`事件。如果您使用的是自己的循环，可以考虑只使用`Engine.update(engine, delta)`。

**参数：**  
`runner` Runner  
`engine` Engine  
`time`  Number  

## 属性

以下属性为`Matter.Runner.create `创建对象时通过`options`参数传入的配置项。

| 属性 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| runner.delta | Number | `1000 / 60` | 表示两次更新之间的步长(以毫秒为单位)。如果`engine.timing.isFixed`设置为`true`。则`delta`会固定。如果为`false`， 那么`delta`会动态变化以保持正确的拟真速度。|
| runner.enabled | Boolean | `false` | 表示程序是否正在运行 |
| runner.isFixed | Boolean | `false` | 表示运行程序是否应该使用固定的时间步长(否则为弹性值)。如果步长是固定的，那么拟真速度将根据帧率进行改变(而行为是确定的)。如果时间步长是弹性的，那么拟真速度则为恒定(大约是这样，但以确定性为代价) |

## 事件  

以下事件均由`Matter.Runner.create`创建的对象派发，而后由使用`Matter.Events.on`订阅了事件的对象接收。

### Events.on(runner, "afterTick", callback) 

在每一帧结束后触发，在引擎更新和渲染后。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`** `Number`<br /> 事件的`engine.timing.timestamp` <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |


### Events.on(runner, "afterUpdate", callback) 

更新后触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`** `Number`<br /> 事件的`engine.timing.timestamp` <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(runner, "beforeTick", callback)

在每一帧开始时触发，在对引擎或计时进行任何更新之前。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`** `Number`<br /> 事件的`engine.timing.timestamp` <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(runner, "beforeUpdate", callback)  

更新前触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`** `Number`<br /> 事件的`engine.timing.timestamp` <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(runner, "tick", callback)  

在引擎时间更新前触发，仅处于更新前。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`** `Number`<br /> 事件的`engine.timing.timestamp` <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |
