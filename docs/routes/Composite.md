---
title: Composite
---

# Composite

[英文原地址](https://brm.io/matter-js/docs/classes/Composites.html)

`Matter.Composite`模块包含了用于创建和操作复合体的方法。复合体是`Matter.Body`、`Matter.Constraint`和其他`Matter.Composite`的集合，因此复合体是树形结构。**在该模块中，请谨记要用函数来修改复合体，不要直接修改它们的属性，这一点很重要。** 注意`Matter.World`对象也是`Matter.Composite`的一个类型，所以所有的复合体方法也能够操作`Matter.World`。

## 方法

### Matter.Composite.add(composite, object) → Composite

通用添加函数。想传入的复合体当中添加一个或多个刚体、约束条件或复合体。触发`composite`上的`beforeAdd`和`afterAdd`事件。

参数：   
`composite`  Composite   
`object`   Object

返回值：   
`Composite` 添加新对象后的原复合体。

### Matter.Composite.allBodies(composite) → Body[]

递归地返回传入复合体中的所有物体，包括子复合体中的物体。

参数：   
`composite`  Composite   

返回值：   
`Body[]` 所有物体。

### Matter.Composite.allComposites(composite) → Composite[]

递归地返回传入复合体中的所有复合体，包括子复合体中的复合体。

参数：   
`composite`  Composite   

返回值：   
`Composite[]` 所有复合体。

### Matter.Composite.allConstraints(composite) → Constraint[]

递归地返回传入复合体中的所有约束条件，包括子复合体中的约束条件。

参数：   
`composite`  Composite   

返回值：   
`Constraint[]` 所有复合体。

### Matter.Composite.bounds(composite) → Bounds

返回所有复合体边界的并集。

参数：   
`composite`  Composite   

返回值：   
`Bounds` 复合体边界。

### Matter.Composite.clear(composite, keepStatic, [deep=false])

清除传入复合体内的所有物体、限制条件和复合体，可以通过参数选择是否递归清除子元素内部。


参数：   
`composite`  Composite    
`keepStatic` Boolean  
`[deep=false]` Boolean `可选`


### Matter.Composite.create([options]) → Composite

创建一个新的复合体。`options`参数是一个对象，方便您传入覆盖默认值的属性。参见下面的属性部分获取更多细节信息。

参数：   
`[options]` Object `可选`

返回值：
`Composite` 新的复合体

### Matter.Composite.get(composite, id, type) → Object

根据传入的id和类型递归搜索复合体，如果找不到则返回`null`。

参数：   
`composite` Composite   
`id` Number   
`type` String

返回值：
`Object` 找到的对象

### Matter.Composite.move(compositeA, objects, compositeB) → Composite

将传入的对象从compositeA移动到compositeB(等于移除后添加)。

参数：   
`compositeA` CompositeA   
`objects` Object[]   
`compositeB` CompositeB

返回值：
`Object` 找到的对象

### Matter.Composite.rebase(composite) → Composite

递归地为复合体中的所有对象分配新id。

参数：   
`composite` Composite   

返回值：
`Composite` 返回复合体。

### Matter.Composite.remove(composite, object, [deep=false]) → Composite

通用的删除功能。用于删除传入复合体中的一个或多个刚体、约束条件或复合体。可以配置是否对子元素进行递归删除。触发该复合体上的`beforeRemove`和`afterRemove`事件。

参数：   
`composite` Composite  
`object` Object
`[deep=false]` Boolean `可选`

返回值：
`Composite` 返回带有被删除对象的原始复合体。

### Matter.Composite.rotate(composite, rotation, point, [recursive=true])

围绕给定的点根据传入的角度旋转复合体中的所有子元素，不赋予任何角速度。

参数：   
`composite` Composite  
`rotation` Number
`point` Vector 
`[recursive=true]` Bool `可选`

### Matter.Composite.scale(composite, scaleX, scaleY, point, [recursive=true])

基于一个世界坐标点缩放复合体中的所有子元素，包括更新物理属性(质量、面积、轴、惯性)。

参数：   
`composite` Composite  
`scaleX` Number   
`scaleY` Number   
`point` Vector   
`[recursive=true]` Bool `可选`

### Matter.Composite.setModified(composite, isModified, [updateParents=false], [updateChildren=false])

设置复合体的`isModified`标志。如果`updateParents`值为`true`，则所有的父元素都会设置(默认值: `false`)。如果`updateChildren`值为`true`，则所有的子元素都会设置(默认值: `false`)。

参数：   
`composite` Composite  
`isModified` Boolean   
`[updateParents=false]` Boolean `可选`   
`[updateChildren=false]` Boolean `可选`

### Matter.Composite.translate(composite, translation, [recursive=true])

基于传入的矢量来移动复合体中的所有子元素，不会赋予任何速度。

参数：   
`composite` Composite   
`translation` Vector    
`[recursive=true]` Bool `可选`

## 属性

以下是复合体在由`Matter.Composite.create`创建对象时通过`options`参数传入的对象可以指定的属性。

| 属性名 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| composite.bodies |`Body[]`| `[]` | 物体数组，它是该复合体的直接子元素。若要添加或删除物体，您应该使用`Composite.add`和`Composite.remove`方法，而不是直接修改这个属性。如果你想递归地找到所有的后代，你应该使用`Composite.allBodies`方法。|
| composite.composites | `Composite[]` | `[]` | 复合体数组，它是该复合体的直接子元素的复合体数组。若要添加或删除复合体，您应该使用`Composite.add`和`Composite.remove`方法，而不是直接修改这个属性。如果你想递归地找到所有的后代，你应该使用`Composite.allComposites`方法。 |
| composite.constraints | `Constraint[]` | `[]` | 限制条件数组，该复合体直接子元素的限制条件数组。若要添加或删除限制条件，您应该使用`Composite.add`和`Composite.remove`方法，而不是直接修改这个属性。如果你想递归地找到所有的后代，你应该使用`Composite.allConstraints`方法。 |
| composite.id | `number` | | 唯一整数标识符，由`Composite.create`通过`Common.nextId`创建。|
| composite.isModified | `Boolean` | `false` | 表示该复合体在当前更新步骤中是否发生修改。大多数`Matter.Composite`方法会自动将该值设置为`true`，从而通知引擎有哪些更改要处理。如果您需要手动修改它，那么请使用`Composite.setModified`方法。|
| composite.label | `String` | "Composite" | 用于帮助用户识别和管理复合体的任意字符串名称。 |
| composite.parent | `Composite` | `null` | 该复合体的父级复合体。由`Matter.Composite`方法自动管理。 |
| composite.plugin ||| 为存储插件特定属性而保留的对象。 |
| composite.type | `String` | "Composite" | 表示对象类型的字符串。 |

## 事件

以下事件均由`Matter.Composite.create`创建的对象派发，而后由使用`Matter.Events.on`订阅了事件的对象接收。

### Events.on(composite, "afterAdd", callback)

当`Composite.add`调用，对象添加完毕后触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`object`**<br /> 已添加的对象(可以是单个物体、约束条件、复合体或是前面这些的混合数组)。 <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(composite, "afterRemove", callback)

当`Composite.remove`调用，对象移除完毕后触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`object`**<br /> 已移除的对象(可以是单个物体、约束条件、复合体或是前面这些的混合数组)。 <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(composite, "beforeAdd", callback)

当`Composite.add`调用，对象添加之前触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`object`**<br /> 将要添加的对象(可以是单个物体、约束条件、复合体或是前面这些的混合数组)。 <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(composite, "beforeRemove", callback)

当`Composite.remove`调用，对象移除前触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`object`**<br /> 将要移除的对象(可以是单个物体、约束条件、复合体或是前面这些的混合数组)。 <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |


