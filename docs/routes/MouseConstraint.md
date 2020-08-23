---
title: MouseConstraint
---

# MouseConstraint

[英文原地址](https://brm.io/matter-js/docs/classes/MouseConstraint.html)

`Matter.MouseConstraint`模块包含了创建鼠标约束条件的方法。鼠标的约束让与用户成为可能，通过鼠标或手势让物体的移动成为可能。

## 方法

### Matter.MouseConstraint.create(engine, options) → MouseConstraint

创建一个新的鼠标约束条件。所有属性都有默认值且其中大部分都是基于其他属性预计算的。通过`options`参数传递什么内容的详细信息，请参阅下面的属性部分。

参数：

`engine` Engine  
`options` Object  

返回值：

MouseConstraint 新的鼠标约束条件


## 属性

下面的属性是为`Matter.MouseConstraint`创建的对象指定的，通过`options`参数传入配置项。

| 属性 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| mouseconstraint.body | Body | `null` | 用户当前正在移动的`Body`，如果没有则为`null`。|
| mouseconstraint.collisionFilter | Object || 指定碰撞过滤器属性。碰撞过滤器允许用户定义该鼠标的约束条件可以对哪个物体起作用。更多信息请参阅`body.collisionFilter`。|
| mouseconstraint.constraint | Constraint || 用于在交互期间移动物体的约束条件对象。|
| mouseconstraint.mouse | Mouse | `mouse` | 正在使用的鼠标实例。如果没有随`MouseConstraint.create`提供的话，将会进行创建。|
| mouseconstraint.type | `String` | `"Constraint"` | 表示对象类型的字符串。|

## 事件

以下事件均由`Matter.MouseConstraint.create`创建的对象派发，而后由使用`Matter.Events.on`订阅了事件的对象接收。

### Events.on(mouseconstraint, "enddrag", callback)

当拖拽物体结束之后触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`mouse`**<br /> 引擎的鼠标实例 <br /><br /> **`body`**<br /> 停止拖拽的物体。<br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(mouseconstraint, "mousedown", callback)

在渲染的最后一步中，鼠标按下(或触摸开始)时触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`mouse`**<br /> 引擎的鼠标实例 <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(mouseconstraint, "mousemove", callback)

在渲染的最后一步中，鼠标移动(或滑动开始)时触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`mouse`**<br /> 引擎的鼠标实例 <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(mouseconstraint, "mouseup", callback)

在渲染的最后一步中，鼠标抬起(或滑动结束)时触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`mouse`**<br /> 引擎的鼠标实例 <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(mouseconstraint, "startdrag", callback)

当开始拖动物体时触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`mouse`**<br /> 引擎的鼠标实例 <br /><br /> **`body`**<br /> 被拖拽的物体。<br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |






