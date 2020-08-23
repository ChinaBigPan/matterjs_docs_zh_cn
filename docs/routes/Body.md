---
title: Body
---

# Body

[英文原地址](https://brm.io/matter-js/docs/classes/Body.html)

`Matter.Body`模块包含用于创建和操作刚体(body)模型的方法。`Matter.Body`是可以用`Matter.Engine`进行模拟的刚体。通常使用的刚体配置(如矩形、圆形和其他多边形)可以在`Matter.Bodies`中找到。

## 方法

### Matter.Body.applyForce(body, position, force)

从传入的世界坐标位置给刚体一个力，包括产生的力矩。

参数：  
`body` Body  
`position` Vector  
`force` Vector

### Matter.Body.create(options) → Body

创建一个新的刚体模型。`options`参数是一个对象，用以设置需要覆盖默认值的属性。所有的属性都有默认值，而且许多都是基于其他属性预先计算。顶点(Vertices)必须按照顺指针顺序指定。后面会介绍`options`可以设置的属性。

参数：  
`options` Object

返回值：  
`Body` body

### Matter.Body.nextCategory() → Number

返回下一个唯一类别位字段(从初始默认类别`0x0001`开始)。参见`body.collisionFilter`以了解更多。

返回值：  
`Number` 唯一类别位字段。

### Matter.Body.nextGroup([isNonColliding=false]) → Number

返回将发生碰撞的刚体的下一个唯一组索引。如果`isNonColliding`设置为`true`，则返回的就是不会发生碰撞的下一个唯一组索引。参见`body.collisionFilter`以了解更多。

参见：  
`[isNonColliding=false]` Bool 可选

返回值：
`Number` 唯一组索引

### Matter.Body.rotate(body, rotation, [point])

使物体相对于它当前的角度旋转传入的角度，而不产生任何角速度。

参数：  
`body` Body
`rotation` Number
`[point]` Vector 可选


### Matter.Body.scale(body, scaleX, scaleY, [point])

根据世界坐标点缩放刚体中的所有子元素，物理属性(质量、面积、轴、惯性)也包含在内。

参数：
`body` Body
`scaleX` Number
`scaleY` Number
`[point]` Vector 可选

### Matter.Body.set(body, settings, value)

传入属性和值(或映射)并设置到刚体上，如果存在合适的 setter
函数则会使用。如果出现性能上的要求请使用实际的 setter 方法。

参数：  
`body` Body   
`settings` Object - 要在刚体上设置的属性名称(或属性和值的映射)。  
`value` Object - 如果`settings`是单个属性名称，那么就设置这个值。

### Matter.Body.setAngle(body, angle)

立即设置刚体的角度。角速度、位置、力等不变。

参数：  
`body` Body   
`angle` Number

### Matter.Body.setAngularVelocity(body, velocity)

设置刚体的角速度。位置、角度。力等不变。请参照`Body.applyForce`。

参数：  
`body` Body   
`velocity` Number

### Matter.Body.setDensity(body, density)

设置刚体的密度。质量和惯性会自动更新以反映变化。

参数：  
`body` Body   
`density` Number

### Matter.Body.setInertia(body, inertia)

设置物体的惯性矩(moment of inertia，即截面惯性矩)。反向惯性会自动更新以反映变化。质量不变。

参数：  
`body` Body   
`inertia` Number

### Matter.Body.setMass(body, mass)

设置刚体的质量。反向质量、密度和惯性会自动更新以反映变化。

参数：  
`body` Body   
`mass` Number

### Matter.Body.setParts(body, [body], [autoHull=true])

设置刚体的部件并更新质量、惯性和质心。每个部件都将其父元素设置为该刚体。默认情况下，[凸包算法(convex hull)](https://baike.baidu.com/item/%E5%87%B8%E5%8C%85/179150?fromtitle=Convex%20Hull&fromid=18082147&fr=aladdin)会自动计算并在刚体上设置，除非`autoHull`设置为`false`。注意，该方法将确保`body.parts`的第一个部件总是为刚体本身。

参数：  
`body` Body   
`[body]` Object 可选
`[autoHull=true]` Bool 可选

### Matter.Body.setPosition(body, position)

立即设置刚体的位置。速度、角度、力等不变。

参数：  
`body` Body   
`position` Vector

### Matter.Body.setStatic(body, isStatic)

将刚体设置为静态，包括其`isStatic`项，并将质量和惯性设置为无穷大。

参数：  
`body` Body   
`isStatic` Bool

### Matter.Body.setVelocity(body, velocity)

立即设置刚体的线速度。位置、角度、力等不变。参见`Body.applyForce`。

参数：  
`body` Body   
`velocity` Vector

### Matter.Body.setVertices(body, vertices)

设置物体的顶点并相应地更新物体的属性。包括惯性、面积和质量(相对于`body.density`)。顶点将自动转换为围绕其质心作为原点的方向。然后它们会根据`body.position`自动转换空间坐标。

参数`vertices`应该传入`Matter.Vector`点的数组(或是`Matter.Vertices`数组)

参数：  
`body` Body   
`vertices` Vector[]

### Matter.Body.translate(body, translation)

相对于当前位置，根据给定的矢量来移动刚体，不产生任何速度。

参数：  
`body` Body   
`translation` Vector

### Matter.Body.update(body, deltaTime, timeScale, correction)

对给定的刚体执行模拟步骤，包括更新位置和使用 Verlet 积分法更新角度。

参数：  
`body` Body  
`deltaTime` Number   
`timeScale` Number   
`correction` Number   

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| body.angle |`Number`| 0  | 以弧度表示物体角度的**数字**。 |
| body.angularSpeed |`Number`| 0 | 表示物体在上次`Body.update`后当前角速度的**数字**。该数字为只读且永远为正(是`body.angularVelocity`值的量级) |
| body.angularVelocity |`Number`| 0 | 用来表示物体在上次`Body.update`后的当前角速度的**数字**。只读。如果您需要直接修改物体的角速度，那么您应该利用扭矩或改变物体的`angle`。(因为引擎使用了“位置-Verlet积分法”) |
| body.area | `String` || 表示物体凸包面积的数字，在`Body.create`创建时就计算好了。 |
|body.axes|`Vector[]`|| 唯一的轴向量数组(边缘法线)，用于碰撞检测。在`Body.create`创建凸包时就已经计算完毕。它们会在模拟过程中随`Body.update`不断更新。|
| body.bounds |`Bounds`|| 为物体定义[AABB盒](https://baike.baidu.com/item/AABB%E7%9B%92/10087682?fr=aladdin)的`Bounds`对象。它根据给定的凸包(顶点数组)在`Body.create`时自动计算，并在模拟过程中随`Body.update`不断更新。|
| body.collisionFilter |`Object`|| 指定碰撞过滤属性的对象。<br /><br />  物体之间的碰撞遵循如下规则：<br /> · 如果两个物体拥有相同且不为`0`的`collisionFilter.group`值，那么值为正数的时候将总是处于碰撞状态，负值则不会碰撞。<br /> · 如果两个物体的`collisionFilter.group`值不相同，或是其中一个(或两个)的值为`0`那么，碰撞类别/掩码则适用如下规则：<br /> <br /> 每个物体都属于一个碰撞类别，它由`collisionFilter.category`分配。该值用作位字段，并且碰撞类别应只有一个位集，这意味着该属性的值范围为`[1, 2^31]`内的2的平方。因此，我们可以使用`32`种不同类别的碰撞。<br /> <br /> 每个物体还由`collisionFilter.mask`定义了碰撞位掩码，以表示碰撞的类别(该值是所有这些类别位值的和值。)。<br /> <br /> 使用碰撞类别/掩码规则，如果刚体`A`和`B`各在其掩码中都包含了其他的类别。举例：`(categoryA & maskB) !== 0`和`(categoryB & maskA) !== 0` 均为`true`。 |
| body.collisionFilter.category | `Object` | 1 | 表示物体的碰撞类别。它只有一个位集，例如：`0x0001`。意味着我们可以使用多达`32`种独特的碰撞类别。参见`body.collisionFilter`了解更多信息。|
| body.collisionFilter.group | `Object` | 0 | 整数，表示碰撞物体所属的碰撞组。参见`body.collisionFilter`了解更多信息。 |
| body.collisionFilter.mask | `Object` | -1 | 位掩码，表示物体可能与之发生碰撞的碰撞类别。参见`body.collisionFilter`了解更多信息。 |
| body.density | `Number` | 0.001 | 定义物体密度的数字，即物体在单位面积上的质量。如果您在`Body.create`时传了密度，那么`质量(mass)`属性会根据对象的大小(面积)自动计算。这种方法比单纯设置质量更好，且可以更直观地定义材料(比如，岩石的密度比木材要高。) |
| body.force | `Vector` | `{ x: 0, y: 0 }` | 表示在当前更新步骤中应用的力的矢量。每次`Body.update`会归零。请参阅`Body.applyForce`。 |
| body.friction | `Number` | 0.1 | 表示物体摩擦力的数字。该值始终为正，且范围为`(0, 1)`。值为`0`表示物体可以无限滑动。值为`1`表示在施加一个力后，物体几乎可以立即静止。<br /><br /> 该值的影响可能是非线性的。根据物体的不同，即便是较大的值也可能不稳定。物理引擎采用的是库仑摩擦模型，它包括静态摩擦和动态摩擦。需要注意的是，碰撞响应应基于物体对，摩擦值应结合下面的公式：<br /> ```Math.min(bodyA.friction, bodyB.friction)``` |
| body.frictionAir | `Number` | 0.01 | 表示物体空气摩擦力(空气阻力)的数字。值为`0`意味着物体在空间中运动时永远不会减速。这个值越高，物体在空间中减速得越快。该值的影响是非线性的。 |
| body.frictionStatic | `Number` | 0.5 | 表示物体静摩擦力的数字(基于库伦摩擦模型)。若为`0`则意味着当它在几乎静止状态下，只使用动态`friction`时，它永远不会被“黏住”。数值越高(比方说`10`), 则首次使物体移动时所需要的力就越大。这个值与`friction`属性相乘，从而使改变`friction`和保持适当的静摩擦更加容易。|
| body.id | `Number` | | 在`Body.create`创建时就通过`Common.nextId`生成的唯一标识符。 |
| body.inertia | `Number` || 定义物体惯性矩(即截面二次轴矩)。在`Body.create`创建物体时通过凸包(顶点数组)和密度自动计算而成。如果要修改它，则还要修改`body.inverseInertia`属性(`1/inertia`)。|
| body.inverseInertia | `Number` || 定义物体的反惯性矩。如果要修改它，则还要修改`body.inertia`属性(`1/inertia`)。 |
| body.inverseMass | `Number` || 定义物体质量的倒数(`1/mass`)。如果修改此项，还必须修改`body.mass`属性。|
| body.isSensor | `Boolean`| `false` | 指示一个物体是否是传感器。传感器触发碰撞事件，但并不会与碰撞的物体做出物理反应。 |
| body.isSleeping | `Boolean` | `false` | 表示物体是否处于睡眠状态。处于睡眠状态和静止状态类似，只不过它是暂时的，可以被唤醒。如果你需要将一个物体设置为睡眠状态。请使用`Sleeping.set`而非直接修改它。|
| body.isStatic | `Boolean` | `false` | 表示物体是否为静止状态。一个静止的物体永远不会改变位置或角度，它是完全固定的。如果您需要在创建物体后将其设置为静态，那么请使用`Body.setStatic`而非直接修改该值。|
| body.label | `String` | "Body" | 帮助用户识别和管理物体的任意字符串名称。 |
| body.mass | `Number` || 定义物体质量的数字，虽然指定`密度density `属性可能更合适。如果要修改该值，请务必同时修改`body.inverseMass`属性(1/mass)。|
| body.motion | `Number` | 0 | 测量当前物体的移动量的数字(速度和角速度的组合)。它是只读且总为正数。在模拟过程中`Matter.Sleeping`模块通过使用和更新它来判断物体是否进入静止状态。|
| body.parent | `Body` || 如果物体不是另一个物体的一部分的话，则表示物体自身。否则表示物体所属的父级。参见`body.parts`。|
| body.parts | `Body[]` || 物体的数组。数组中的第一项是当前物体实例的自引用。`parts`中的所有物体组合成一个刚醒的复合体。物体可以重叠，拥有间隙或孔，形成凹体也没有问题。这些作为部件的物体永远不要添加到`World`中，所添加的应该是它的父级物体。使用`Body.setParts`来确保所有属性能正确更新。 |
| body.plugin ||| 为存储插件特定属性而保留的对象。|
| body.position | `Vector` |`{ x: 0, y: 0 }`| 表示物体在当前世界坐标内位置的`矢量Vector`。|
| body.render | `Object` |  | 模块`Matter.Render` 使用的渲染属性的对象。 |
| body.render.fillStyle | `String` | `随机颜色` | 表示物体在渲染时使用的填充样式。这点和`canvas`相一致，因此也接受CSS样式字符串。|
| body.render.lineWidth | `Number` | 0 | 表示物体在渲染时的线宽(如果没有定义`sprite`属性)。若值为`0`则表示不渲染外框。 |
| body.render.opacity | `Number` | 1 | 渲染时的透明度。 |
| body.render.sprite | `Object` || 表示渲染时要使用的`sprite`属性(如果有的话)。 |
| body.render.sprite.texture | `String` || 表示`sprite`纹理图的图像路径(如果有的话) |
| body.render.sprite.xOffset | `Number` | 0 |表示`sprite`图X轴偏移量的数字(通过纹理宽度标准化)。|
| body.render.sprite.xScale | `Number` | 1 |表示`sprite`图X缩放量的数字(如果有的话)。|
| body.render.sprite.yOffset | `Number` | 0 |表示`sprite`图Y轴偏移量的数字(通过纹理宽度标准化)。|
| body.render.sprite.yScale | `Number` | 1 |表示`sprite`图Y缩放量的数字(如果有的话)|
| body.render.strokeStyle | `String` | `随机颜色` |表示物体在渲染时使用的外框样式(如果没有定义`sprite`属性)。这点和`canvas`相一致，因此也接受CSS样式字符串。|
| body.render.visible | `Boolean` | `true` | 表示物体是否应渲染。|
| body.restitution | `Number` | 0 | 定义物体的弹性。该值总是正值，范围`(0 , 1)`。值为`0`意味着碰撞不会发生任何反弹。设置为`0.8`的话意味着物体可以弹回大约80%的动能。注意碰撞响应基于`物体对 pairs of bodies`，弹性恢复值要结合以下公式：<br /> Math.max(bodyA.restitution, bodyB.restitution) |
| body.sleepThreshold | `Number` | 60 | 表示物体在被`Matter.Sleeping`模块设置为睡眠状态之前必须具有的接近于0的速度的次数(如果引擎启用了sleep的话)。 |
| body.slop | `Number` | 0.05 | 表示物体允许“下沉”或旋转到其他物体上的容忍度。除非您理解物理引擎中`slop`的作用，否则应该避免修改该值。默认值通常就够了，尽管非常大的物体可能需要更大的值才能稳定堆叠。|
| body.speed | `Number` | 0 | 表示上次`Body.update`后的当前速度。该值为只读并且总是正值(它是`body.velocity`值的大小)。 |
| body.timeScale | `Number` | 1 | 表示允许每个物体的时间缩放。例如，在一个立场中，内部物体是慢动作而其他物体是全速的。 |
| body.torque | `Number` | 0 | 表示当前更新步骤中的扭矩(扭转力)。它会在每次`Body.update`后归零。|
| body.type | `String` | "body" | 表示对象类型的字符串。 |
| body.velocity | `Vector` |`{ x: 0, y: 0 }`| 表示上次`Body.update`后的当前速度的矢量。该项为只读。如果您要直接修改一个物体的速度，要么施加一个力，要么简单地改变物体的位置。|
| body.vertices | `Vector[]` || 表示刚体凸包的矢量对象数组。应传入原点`(0, 0)`，如下：<br /> [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }] <br /> 当由`Body.create`创建并传递时，顶点会相对于`body.position`进行转换(即世界坐标，并在模拟过程中通过`Body.update`不断更新)。`Vector`对象还增加了有效碰撞检测所需的附加属性。<br /> 其他属性，如惯性和边界，会从传入的顶点自动计算(除非通过配置项设置了)。凹面目前不支持。`Matter.Vertices`模块包含了处理`vertices`的有用方法。|

## 事件

以下事件均由`Matter.World.create`创建的对象派发，而后由使用`Matter.Events.on`订阅了事件的对象接收。

### Events.on(body, "sleepEnd", callback)

当物体结束睡眠时触发(其中`this`指物体)。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |

### Events.on(body, "sleepStart", callback)

当物体开始睡眠时触发(其中`this`指物体)。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`source`** <br /> 事件的源对象 <br /> **`name`** <br /> 事件名称 |