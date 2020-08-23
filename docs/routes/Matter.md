---
title: Matter
---

# Matter

[英文原地址](https://brm.io/matter-js/docs/classes/Matter.html)

`Matter`模块是最顶级的命名空间。它还包括了一个用于在该库顶层安装插件的函数。

## 方法

### Matter.after(path, func) → Function  

在传入的`Matter`的相对路径的原始函数之后链接一个要执行的函数。请参阅文档中的`Common.chain`。

**参数：**
`path` String `Matter`的相对路径。   
`func` Function 在原始函数后要链接的函数

**返回值：**
Function 替换了原始函数的链式函数。

### Matter.before(path, func) → Function

在传入的`Matter`的相对路径的原始函数之前链接一个要执行的函数。请参阅文档中的`Common.chain`。

**参数：**    
`path` String `Matter`的相对路径。   
`func` Function 在原始函数后要链接的函数

**返回值：**
Function 替换了原始函数的链式函数。 

### Matter.use(plugin...)   

在`Matter`中安装插件。它是`Plugin.use`的简写。在您的代码开始时调用这个函数，并将您希望安装的所有插件作为参数。除非您打算手动控制安装顺序，否则请不要多次调用该函数。

**参数：**    
`plugin` Function `多个` 要安装到`base`的插件。

## 属性  

| 属性 | 类型 | 描述 |
|:---:|:---:|:---:|----|
| Matter.name | String | 库的名称。|
| Matter.used | Array | 通过`Matter.Plugin.install`安装的插件。只读。 |
| Matter.uses | Array | 要安装的插件依赖项列表。通常是通过`Matter.use`安装。或者您也可以手动设置`Matter.uses`并通过调用`Plugin.use(Matter)`来安装它们。|
| Matter.version | String | 库的版本。|

