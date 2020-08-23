---
title: Plugin
---

# Plugin

[英文原地址](https://brm.io/matter-js/docs/classes/Plugin.html)

`Matter.Plugin`模块包括了用于在模块上注册和安装插件的方法。

## 方法

### Matter.Plugin.dependencies(module) → Object

递归地寻找模块的所有依赖关系，并返回抹平后的依赖关系图谱。

**参数：**

`module` Object 模块

**返回值：**

`Object`: 依赖图谱

### Matter.Plugin.dependencyParse(dependency) → Object

将依赖项字符串解析为其组件。`dependency`以`模块名`或`模块名@版本`为格式。参见`Plugin.versionParse`文档以了解格式的描述。该方法同样也能处理已经解析的依赖项(例如模块对象)。

**参数：**

`dependency` String 以`模块名`或`模块名@版本`为格式的依赖项。   

**返回值：**

`Object`: 依赖项会被解析为其组件。

### Matter.Plugin.isFor(plugin, module) → Boolean

如果通过`module.name`和`module.version`相比较后插件适用于模块的话，则`plugin.for`返回`true`。如果没有指定`plugin.for`，那么就假定它是适用的。`plugin.for`的值以`模块名`或`模块名@版本`为格式。

**参数：**

`plugin` Object 插件。  
`module` Object 模块。

**返回值：** Boolean  如果插件适用于模块的话，则`plugin.for`返回`true`，否则返回`false`。

### Matter.Plugin.isPlugin(obj) → Boolean

如果对象满足最低标准则被认为是插件并返回`true`。这意味着其必须定义下面的属性：

- `name`
- `version`
- `install`

**参数：**    
`obj` Object 要设置的对象。

**返回值：**    
Boolean 如果对象被认为是插件则返回`true`，否则返回`false`。

### Matter.Plugin.isUsed(module, name) → Boolean

如果`module`上安装了名为`name`的插件，则返回`true`

**参数：**    
`module` Object 模块。   
`name` String 插件名称。  

**返回值：**    
Boolean 如果名为`name`插件已安装则返回`true`，否则返回`false`。

### Matter.Plugin.register(plugin) → Object

注册插件对象，以便以后可以按名称解析。

**参数：**  
`plugin` Object 要注册的插件

**返回值：**   
Object 插件

### Matter.Plugin.resolve(dependency) → Object

如果存在依赖关系，则从注册表中解析该依赖关系到插件对象。`dependency`可能包含版本信息，但在解析时只关注名称。

**参数：**  
`dependency` String 依赖项

**返回值：**   
Object 解析后的插件，否则返回`undefined`。

### Matter.Plugin.toString(plugin) → String

返回插件的名称和版本。

**参数：**  
`plugin` Object 插件

**返回值：**   
String 插件名称和版本的字符串

### Matter.Plugin.use(module, [plugins=module.uses])

通过调用在`plugins`中的每个插件当中的`plugin.install`来安装插件，如果没有则使用`module.uses`。在`Matter`上安装插件可以采用更方便的`Matter.use`方法。插件可以通过它们的名字或者插件对象的引用来指定。插件本身可以指定进一步的依赖关系，但每个插件只安装一次。顺序很重要，采用拓扑排序可以找到最佳的安装顺序。这种排序会尝试满足每个依赖项的请求顺序，但并不一定在所有情况下准确。该方法会在控制台中记录每个依赖项的结果状态及任何警告。

- ✅ 表示依赖已经解决安装。
- 🔶 表示某个依赖项已解觉，但对其或其依赖项抛出了警告。
- ❌ 表示无法解觉依赖项。避免在同一个模块上多次调用该方法，除非您打算手动控制安装顺序。

**参数：**  
`module` Object 安装了插件的模块。   
`[plugins=modules.uses]` Object `可选` 模块上要安装的插件(`可选`，默认为`module.uses`)。

### Matter.Plugin.versionParse(range) → Object

将版本号字符串解析为其组件。
版本号严格采用`x.y.z`格式。可以选择使用带有预发布标签的“x.y.z-alpha”格式。`range`为[npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax)的严格子集，仅支持以下类型：

- 波浪号，如`~1.2.3`
- 插入符号，例如`^1.2.3`
- 确切版本，例如`1.2.3`
- 任何版本 `*`

**参数：**  
`range` String 版本字符串

**返回值：**
Object 解析到组件的版本号范围。

### Matter.Plugin.versionSatisfies(version, range) → Boolean 

如果版本号满足给定的范围，则返回`true`。有关格式的描述，请参阅`Plugin.versionParse`文档。如果没有指定版本或范围，则假设任何版本(`*`)都满足要求。

**参数：**  
`version` String 版本字符串    
`range` String 范围字符串   

**返回值：**   
Boolean 如果版本号满足`range`则返回`true`，否则返回`false`。
