---
title: Engine
---

# Engine

[英文原地址](https://brm.io/matter-js/docs/classes/Engine.html)

Matter.Engine 模块涵盖了创建和操作引擎的方法。引擎是管理世界更新的控制器。

# Matter.Engine

Matter.Engine 模块涵盖了创建和操作引擎的方法。引擎是管理世界更新的控制器。

## 方法

### `Matter.Engine.clear(engine)`

清除引擎，包括`世界(world)`、`碰撞对(pairs)`和`碰撞粗测(broadphase)`。

- `engine`: Engine

### `Matter.Engine.create([options])`

创建一个新的引擎。`options`参数是一个对象，用以设置覆盖默认值的属性。所有的属性都有默认值，而且许多属性是基于其他属性来进行预先计算的。`options`可以设置的配置项请见下文。

- `[options]` Object - 可选

**返回：**

Engine

### `Matter.Engine.merge(engineA, engineB)`

合并两个引擎，方法是保留`engineA`的配置，但是将 world 替换为`engineB`的。

- `engine`: Engine

### `Matter.Engine.run(engine)` 

`Runner.run`的别名，请参阅`Matter.Runner`获取更多信息。

- `engine`: Engine

### `Matter.Engine.update(engine, [delta=16.666], [correction=1])`

以`delta`毫秒的时间更新模拟的世界。`corretion`参数是可选数字，用以指定时间更新的校正因子。当`delta`参数在更新期间发生变化的情况下，该参数可以用来改进更新模拟的准确性。`correction`的值为`delta/lastDelta`，即`delta`在最后一步变化的百分比。因此，当无修正或不需要修正时，该值为`1`。参见该文章[Time Corrected Verlet](http://lonesock.net/article/verlet.html)了解更多信息。

触发`beforeUpdate`和`afterUpdate`事件。    
触发`collisionStart`、`collisionActive`和`collisionEnd`事件。

- `engine` Engine    
- `[delta=16.666]` 数字 可选
- `[correction=1]` 数字 可选


## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|---|
| `engine.broadphase` | Grid | `Matter.Grid`的实例 | 碰撞粗侧控制器的实例。默认值是由`Engine.create`创建的`Matter.Grid`实例。|
| `engine.constraintIterations` | Number | 2 | 整数，指定每次更新的约束迭代次数。该值越高，模拟的质量就越高，但会以牺牲性能为代价。通常来讲默认值`2`足够了。|
| `engine.enableSleepingBoolean` | Boolean | false | 设置引擎是否允许通过`Matter.Sleeping`设置为睡眠模式。这么做可以提高稳定性和性能，但以牺牲准确性为代价。|
| `engine.plugin` | Object | | 为存储插件特定属性而保留的对象。|
| `engine.positionIterations` | Number | 6 | 整数，指定每次更新的位置迭代次数。值越高，模拟的质量就越高，但会以牺牲性能为代价。|
| `engine.timing` | Object | | 包含了引擎时间系统相关的属性 |
| `engine.timing.timeScale` | Number | 1 | 指定所有刚体的时间全局缩放因此。设置为`0`时将冻结模拟。设置为`0.1`则会产生慢动作效果，`1.2`会产生加速效果。|
| `engine.timing.timestamp` | Number | 0 | 指定当前的模拟时间(从`0`开始，以毫秒为单位)。它在每个`Engine.update`上都根据所给的`delta`参数进行增加。|
| `engine.velocityIterations` | Number | 4 | 设置每次更新的速度迭代次数。值越高模拟的质量越高，同时也会消耗更多性能。|
| `engine.world` | World | Matter.World 实例 | 包含所有模拟物体和约束条件的世界对象。|


## 事件

以下事件均由`Matter.Engine.create`创建的对象派发，而后由使用`Matter.Events.on`订阅了事件的对象接收。

#### Events.on(engine, "afterUpdate", callback)

在引擎更新和所有碰撞事件结束后触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`**(Number) <br /> 事件的`engine.timing.timestamp` <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |

### Events.on(engine, "beforeUpdate", callback)

在更新开始前触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`**(Number) <br /> 事件的`engine.timing.timestamp` <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |

### Events.on(engine, "collisionActive", callback)

在引擎更新后触发，会提供当前帧中所有发生碰撞的物体对列表(如果有的话)。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`pairs`**<br /> 受影响的碰撞对列表 <br />**`timestamp`**(Number) <br /> 事件的`engine.timing.timestamp` <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |

### Events.on(engine, "collisionEnd", callback)

在引擎更新后触发，会提供当前帧中所有已经碰撞完的物体对列表(如果有的话)。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`pairs`**<br /> 受影响的碰撞对列表 <br />**`timestamp`**(Number) <br /> 事件的`engine.timing.timestamp` <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |

### Events.on(engine, "collisionStart", callback)

在引擎更新后触发，会提供当前帧中所有已开始碰撞的物体对列表(如果有的话)。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`pairs`**<br /> 受影响的碰撞对列表 <br />**`timestamp`**(Number) <br /> 事件的`engine.timing.timestamp` <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |