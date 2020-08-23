---
title: World
---

# World

[英文原地址](https://brm.io/matter-js/docs/classes/World.html)

`Matter.World`模块包含了许多用于创建和操作世界对象的方法。`Matter.World`是一个`Matter.Composite`聚合体，它包含了`Matter.Body`、`Matter.Constraint`和其他的`Matter.Composite`。`Matter.World`有一些额外属性，如`gravity`和`bounds`。使用`Matter.Composite`模块中的函数来修改世界对象这一点很重要，不要直接修改它的属性。`Matter.Composite`中也有一些方法拥有别名，方便开发者阅读。

## 方法

### Matter.World.add(world, object) → Composite

`Composite.add`的别名。

参数：
- `world` World
- `object` Object

返回值：
`Composite`添加了物体后的世界聚合体。

### Matter.World.addBody(world, body) → World

`Composite.addBody`的别名

参数：
- `world` World
- `body` Body

返回值：
`World`添加了刚体后的世界聚合体。

### Matter.World.addComposite(world, composite) → World

`Composite.addComposite`的别名。

参数：
- `world` World
- `composite` Composite

返回值：
`World`添加了聚合体后的世界聚合体。


### Matter.World.addConstraint(world, constraint) → World

`Composite.addConstraint`的别名。

参数：
- `world` World
- `constraint` Constraint

返回值：
`World`添加了聚合体后的世界聚合体。

### Matter.Composite.allBodies(composite) → Body[]

递归地返回传入复合体中的所有刚体，包括其子复合体中的所有刚体。

参数：
- `composite` Composite

返回值：
`Body[]` 所有刚体。

### Matter.Composite.allComposites(composite) → Composite[]

递归地返回传入复合体中的所有复合体，包括其子复合体中的所有复合体。

参数：
- `composite` Composite

返回值：
`Composite[]` 所有复合体。

### Matter.Composite.allConstraints(composite) → Constraint[]

递归地返回传入复合体中的所有约束条件，包括其子复合体中的所有约束条件。

参数：
- `composite` Composite

返回值：
`Constraint[]` 所有约束条件。

### Matter.Composite.bounds(composite) → Bounds

返回所有复合体边界的并集。

参数：
- `composite` Composite

返回值：
`Bounds` 复合边界。

### Matter.World.clear(world, keepStatic)

`Composite.clear`的别名

参数：
- `world` World
- `keepStatic` Boolean

### Matter.World.create(options) → World

创建一个新的世界聚合体。`options`参数为一个对象，您传入的属性将会覆盖默认值。后面会介绍您可以设置的属性。

参数：
`options` Object

返回值：
`World` 一个新的世界

### Matter.Composite.get(composite, id, type) → Object

递归搜索复合体，寻找与传入的`type`和`id`匹配的对象，如果找不到，则为空。

参数：
`composite` Composite
`id` Number
`type` String

返回值：
`Object` 寻找的对象，如果找到的话。

### Matter.Composite.move(compositeA, objects, compositeB) → Composite

将给定对象从`compositeA`移动到`compositeB`(等于移除后再添加)。

参数：
`compositeA` CompositeA
`objects` Object[]
`compositeB` CompositeB

返回值：
`Composite` CompositeA

### Matter.Composite.rebase(composite) → Composite

递归地为复合体中的所有对象分配新的id。

参数：
`composite` Composite

返回值：
`Composite` 返回复合体。

### Matter.World.remove(world, object, [deep=false]) → Composite

`Composite.remove`的别名。

参数：
`world` World
`object` Object
`[deep=false]` Boolean 可选

返回值：   
`Composite` 移除了对象后的世界。

### Matter.Composite.rotate(composite, rotation, point, [recursive=true])

围绕传入的`point`按照传入的角度旋转复合体中的所有子元素，没有角速度。

参数：  
`composite` Composite
`rotation` Number
`point` Vector
`[recursive=true]` Bool 可选

### Matter.Composite.scale(composite, scaleX, scaleY, point, [recursive=true])

根据世界坐标点缩放复合体中的所有子元素，物理属性(质量、面积、轴、惯性)也包含在内。

参数：
`composite` Composite
`scaleX` Number
`scaleY` Number
`point` Vector
`[recursive=true]` Bool 可选

### Matter.Composite.setModified(composite, isModified, [updateParents=false], [updateChildren=false])

设置复合体的`isModified`标志。如果`updateParents`为`true`，将对所有的父元素进行设置(默认:`false`)。如果`updateChildren`为`true`，则将对所有子元素进行设置置(默认:`false`)。

参数：
`composite` Composite
`isModified` Boolean
`[updateParents=false]` Boolean 可选
`[updateChildren=false]` Boolean 可选

### Matter.Composite.translate(composite, translation, [recursive=true])

通过传入的相对于当前位置的矢量来转换复合体中的所有子元素，但并不赋予任何速度。

参数：
`composite` Composite
`translation` Vector
`[recursive=true]` Bool 可选

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| composite.bodies | `Body[]` | `[]` | 复合体直接子元素的`Body`数组。若要添加或删除`Body`，您可以使用`Composite.add`和`Composite.remove`方法，不要直接修改属性。如果您希望递归查找所有子代中的元素，请使用`Composite.allBodies`方法。|
| world.bounds | `Bounds` | `{ min: { x: -Infinity, y: -Infinity }, max: { x: Infinity, y: Infinity } }` | 定义世界边界的`Bounds`对象，用以碰撞检测。|
| composite.composites | `Composite[]` | `[]` | 复合体的直接子元素的`Composite`数组。若要添加或删除复合体，您可以使用`Composite.add`和`Composite.remove`方法，不要直接修改属性。如果您希望递归查找所有子代中的元素，请使用`Composite.allComposites`方法。 |
| composite.constraints | `Constraint[]` | `[]` | 复合体的直接子元素的`Constraint`数组。若要添加或删除复合体，您可以使用`Composite.add`和`Composite.remove`方法，不要直接修改属性。如果您希望递归查找所有子代中的元素，请使用`Composite.allConstraints`方法。|
| world.gravity | `Object` | | 应用到世界的重力。|
| world.gravity.scale | `Object` | 0.001 | 重力缩放因子。|
| world.gravity.x | `Object` | 0 | 重力的x分量 |
| world.gravity.y | `Object` | 1 | 重力的y分量 |
| composite.id | `Number` | | 独一无二的数字标识符，由`Composite.create`通过`Common.nextId`生成。|
| composite.isModified | `Boolean` | `false` | 表示在当期步骤中复合体是否已经发生修改的表示。大部分`Matter.Composite`方法会自动将本项设置为`true`，以通知引擎要处理的更改。如果需要手动更改，请使用`Composite.setModified`方法。|
| composite.label | `String` | `"Composite"` | 于帮助用户识别和管理复合体的任意`String`名称。 |
| composite.parent | `Composite` | `null` | 该复合体的父`Composite`。由`Matter.Composite`方法自动管理。|
| composite.plugin | | | 为存储插件专用属性而保留的对象。|
| composite.type | `String`| `"Composite"` | 表示对象类型的字符串。|

## 事件

以下事件均由`Matter.World.create`创建的对象派发，而后由使用`Matter.Events.on`订阅了事件的对象接收。

### Events.on(engine, "afterAdd", callback)

在`Composite.add`调用，对象添加后触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`object`**<br /> 已添加的对象(可以是单个刚体、约束条件、复合体或以上的混合数组) <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |

### Events.on(composite, "afterRemove", callback)

当`Composite.remove`调用，对象移除后触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`object`**<br /> 已添加的对象(可以是单个刚体、约束条件、复合体或以上的混合数组) <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |

### Events.on(composite, "beforeAdd", callback)

在`Composite.add`调用，对象添加前触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`object`**<br /> 已添加的对象(可以是单个刚体、约束条件、复合体或以上的混合数组) <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |

### Events.on(composite, "beforeRemove", callback)

当`Composite.remove`调用，对象移除前触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`object`**<br /> 已添加的对象(可以是单个刚体、约束条件、复合体或以上的混合数组) <br /> **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |