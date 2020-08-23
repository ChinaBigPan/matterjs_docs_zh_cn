---
title: Render
---

# Render

[英文原地址](https://brm.io/matter-js/docs/classes/Render.html)

`Matter.Render`模块是一个基于 HTML5 canvas 的渲染器，用于可视化`Matter.Engine`的实例。它可以用作开发和调试，也可以用于开发简单的游戏。拥有诸多包括线框、矢量在内绘图配置项，支持雪碧图和视口。

## 方法

### Matter.Render.create([options]) → Render   

创建一个新的渲染器。`options`参数为一个对象，用于设置覆盖默认值的属性。所有属性都有默认值，而且许多属性都是基于其他属性预计算的。可以设置的属性，请参见下面的`options`部分。

**参数：**  
`[options]` Object `optional`  

**返回值：**    
Render 新的渲染器。

### Matter.Render.endViewTransform(render)  

重置渲染器上下文中的所有变形转换。

**参数：**  
`render` Render   

### Matter.Render.lookAt(render, objects, [padding], [center=true])   

调整传入对象边界周围的视口位置和尺寸。该`objects`必须具有以下属性中的一个：

- `object.bounds`。
- `object.position`。
- `object.min`和`object.max`。
- `object.x`和`object.y`。

**参数：**   
`render` Render   
`objects` Object[]   
`[padding]` Vector `可选`   
`[center=true]` Bool `可选`

### Matter.Render.run(render)   

基于`requestAnimationFrame`不断更新并渲染画布。

**参数：**  
`render` Render  

### Matter.Render.setPixelRatio(render, pixelRatio)   

设置渲染器的分辨率并更新画布。若要自动检测正确的分辨率，请将`pixelRatio`设置为`'auto'`。

**参数：**  
`render` Render  
`pixelRatio` Number    

### Matter.Render.startViewTransform(render)   

将基于`render.bounds`的视口变形转换应用于`render`上下文。

**参数：**  
`render` Render  

### Matter.Render.stop(render)   

通过取消动画帧的请求事件循环，停止执行传入`render`的`Render.run`事件。

**参数：**  
`render` Render  

### Matter.Render.world(render)  

渲染传入`engine`的`Matter.World`对象。这是所有渲染的入口点，应该在每次发生场景改变时调用。

**参数：**  
`render` Render  

## 属性  

以下属性为`Matter.Render.create `创建对象时通过`options`参数传入的配置项。

| 属性 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| render.bounds | Bounds | | 指定绘图视图区域的`Bounds`对象。渲染过程中会自动转换和缩放以适应画布尺寸(`render.options.width`和`render.options.height`)。这就让创建可以围绕场景进行平移和缩放的视图成为可能。此外，您还必须将`render.options.hasBounds`设置为`true`从而启用边界渲染。|
| render.canvas | HTMLCanvasElement | null | 执行渲染的画布元素。如果没有指定，则会在渲染时根据`render.element`创建。 |
| render.context | CanvasRenderingContext2D | | `render.canvas`元素的2d渲染上下文。|
| render.controller | Render | | 对`Matter.Render`模块的反向引用。|
| render.element | HTMLElement | null | 对要插入的画布元素的引用(如果没有指定`render.canvas`的话) |
| render.engine | Engine | | 对要使用的`Matter.Engine`实例的引用。|
| render.options ||| 渲染器的配置项 |
| render.options.hasBounds | Boolean | false | 是否在渲染时使用`render.bounds` |
| render.options.height | Number | 600 | 创建的`render.canvas`的高度，以像素计。 |
| render.options.width | Number | 800 | 创建的`render.canvas`的宽度，以像素计。|
| render.textures | | | 雪碧图文理缓存。|

## 事件

以下事件均由`Matter.Render.create`创建的对象派发，而后由使用`Matter.Events.on`订阅了事件的对象接收。

### Events.on(render, "afterRender", callback)

渲染后触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`** `Number`<br /> 事件的`engine.timing.timestamp` <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |

### Events.on(render, "beforeRender", callback)

渲染前触发。

| payload | 类型 | 描述 |
|:---:|:---:|---|
| event | Object | **`timestamp`** `Number`<br /> 事件的`engine.timing.timestamp` <br /><br /> **`source`** <br /> 事件的源对象 <br /><br /> **`name`** <br /> 事件名称 |