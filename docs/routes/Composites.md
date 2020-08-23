---
title: Composite
---

# Composites

[英文原地址](https://brm.io/matter-js/docs/classes/Composites.html) 

`Matter.Composites`模块包含了用于创建具有常用配置(如堆栈和链)复合体的工厂方法。

## 方法

#### Matter.Composites.car(xx, yy, width, height, wheelSize) → Composite

使用简单的车型(car)物体和限制条件创建复合体。

参数：

`xx` Number     
`yy` Number   
`width` Number    
`height` Number   
`wheelSize` Number

返回值：

`Composite` 复合体车身。

### Matter.Composites.chain(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) → Composite

使用约束条件将传入的复合体串连在一起形成链条。

参数：

`composite` Composite     
`xOffsetA` Number   
`yOffsetA` Number    
`xOffsetB` Number  
`yOffsetB` Number  
`options` Object

返回值：

`Composite` 带约束条件的复合体链条。

### Matter.Composites.mesh(composite, columns, rows, crossBrace, options) → Composite

将复合体中的刚体以某种限制条件组合成网状结构，可选是否带有交叉支架。

参数：

`composite` Composite     
`columns` Number   
`rows` Number    
`crossBrace` Boolean  
`options` Object

返回值：

`Composite` 带有约束条件的网状结构复合体。

### Matter.Composites.newtonsCradle(xx, yy, number, size, length) → Composite

将复合体中的刚体以某种限制条件组成牛顿摆(Newton's Cradle)。

参数：

`xx` Number     
`yy` Number   
`number` Number    
`size` Number  
`length` Number

返回值：

`Composite` 牛顿摆复合体。

### Matter.Composites.pyramid(xx, yy, columns, rows, columnGap, rowGap, callback) → Composite

创建一个新的复合体，它排成金字塔形状。该函数通过物体的边界来防止重叠。

参数：

`xx` Number     
`yy` Number   
`columns` Number    
`rows` Number  
`columnGap` Number  
`rowGap` Number   
`callback` Function

返回值：

`Composite` 包含了在回调中创建的对象的新复合体。

### Matter.Composites.softBody(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) → Composite

创建一个简单的柔体。

参数：

`xx` Number     
`yy` Number   
`columns` Number    
`rows` Number  
`columnGap` Number  
`rowGap` Number   
`crossBrace` Boolean
`particleRadius` Number
`particleOptions` Object
`constraintOptions` Object


返回值：

`Composite` 新的复合柔体。

### Matter.Composites.stack(xx, yy, columns, rows, columnGap, rowGap, callback) → Composite

创建一个新的复合体，在创建的回调函数中将其包含的刚体排成堆的形状。该函数通过物体的边界来防止重叠。

参数：

`xx` Number     
`yy` Number   
`columns` Number    
`rows` Number  
`columnGap` Number  
`rowGap` Number   
`callback` Function  


返回值：

`Composite` 包含了在回调中创建的对象的新复合体。

# Matter.Constraint

`Matter.Constraint`模块包含了创建和操作约束条件的方法。约束条件用于指定两个物体之间(或者一个物体和世界固定坐标)必须保持固定的距离。约束条件既可以是刚性的也可以是弹性的。

## 方法

### Matter.Constraint.create(options) → Constraint

创建一个新的约束条件。所有属性都有默认值，而且许多属性都是基于其他属性预先计算的。比方说为了模拟一个可以转动的关节，可以将长度设置为`0`并且设置一个较高的`stiffness`值(例如 `0.7`以上)。如果约束条件不稳定，可以尝试降低`stiffness`值和/或增加`engine.constraintIterations`。对于复合体，约束条件必须应用于父级(而不是它的某个子元素部分)。`options`配置项可以设置哪些属性，请参见后文。

参数：    
`options` Object

返回值：   
`Constraint` constraint

## 属性

下面的属性均是在`Matter.Constraint.create`创建时就设置好，且可以通过传递的`options`参数进行覆盖。

| 属性 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| constraint.bodyA | Body | `null` | 施加约束条件的第一个可能的物体。|   
| constraint.bodyB | Body | `null` | 施加约束条件的第二个可能的物体。 | 
| constraint.damping | Number | `0` | 表示约束阻尼的`数字`，即基于物体的速度施加到每个物体上从而限制振动量的阻力。只有当约束条件的刚性度(stiffness)也很低时，阻尼才会明显地表示出来。该值为`0.1`时表示约束阻尼较重，从而使震动不明显甚至没有震动。若为`0`则表示没有阻尼。| 
| constraint.id | Number | | 独一无二的数字标识符，由`Composite.create`通过`Common.nextId`生成。 | 
| constraint.label | `String` | `"Constraint"` | 于帮助用户识别和管理复合体的任意`String`名称。 |
| constraint.plugin | | | 为存储插件专用属性而保留的对象。 | 
| constraint.pointA | Vector | `{ x: 0, y: 0 }` | 如果定义了约束条件，那么它就是表示从`constraint.bodyA`中开始的约束偏移量，否则的话为其在世界坐标中的位置。 | 
| constraint.pointB | Vector | `{ x: 0, y: 0 }` | 如果定义了约束条件，那么它就是表示从`constraint.bodyB`中开始的约束偏移量，否则的话为其在世界坐标中的位置。 | 
| constraint.render | Object | | 定义`Matter.Render`模块使用的渲染属性的对象。 | 
| constraint.render.anchors | `Boolean` | `true` | 表示是否渲染约束锚点。| 
| constraint.render.lineWidth | `Number` | `2` | 表示渲染约束外框时的线宽。值为`0`时表示不渲染。 | 
| constraint.render.strokeStyle | `String` | `随机颜色` | 在渲染时使用的外框样式。这点和`canvas`相一致，因此也接受CSS样式字符串。| 
| constraint.render.type | `String` | `'line'` | 定义约束渲染类型的字符串。可能的值为"line"、"pin"、"spring"。若没有在配置项中设置，将自动选择合适的渲染类型。 | 
| constraint.render.visible | `Boolean` | `true` | 表示是否渲染约束条件。 | 
| constraint.stiffness | `Number` | `1` | 指定约束条件刚性程度的数字，即它返回到静约束长度的速率。值为`1`以为着约束非常严格。值为`0.2`差不多类似于软弹簧。| 
| constraint.type | `String` | `constraint"` | 表示对象类型的字符串。| 


