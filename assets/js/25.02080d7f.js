(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{372:function(e,v,_){"use strict";_.r(v);var n=_(43),o=Object(n.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"plugin"}},[e._v("Plugin")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://brm.io/matter-js/docs/classes/Plugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文原地址"),_("OutboundLink")],1)]),e._v(" "),_("p",[_("code",[e._v("Matter.Plugin")]),e._v("模块包括了用于在模块上注册和安装插件的方法。")]),e._v(" "),_("h2",{attrs:{id:"方法"}},[e._v("方法")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-dependencies-module-→-object"}},[e._v("Matter.Plugin.dependencies(module) → Object")]),e._v(" "),_("p",[e._v("递归地寻找模块的所有依赖关系，并返回抹平后的依赖关系图谱。")]),e._v(" "),_("p",[_("strong",[e._v("参数：")])]),e._v(" "),_("p",[_("code",[e._v("module")]),e._v(" Object 模块")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")])]),e._v(" "),_("p",[_("code",[e._v("Object")]),e._v(": 依赖图谱")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-dependencyparse-dependency-→-object"}},[e._v("Matter.Plugin.dependencyParse(dependency) → Object")]),e._v(" "),_("p",[e._v("将依赖项字符串解析为其组件。"),_("code",[e._v("dependency")]),e._v("以"),_("code",[e._v("模块名")]),e._v("或"),_("code",[e._v("模块名@版本")]),e._v("为格式。参见"),_("code",[e._v("Plugin.versionParse")]),e._v("文档以了解格式的描述。该方法同样也能处理已经解析的依赖项(例如模块对象)。")]),e._v(" "),_("p",[_("strong",[e._v("参数：")])]),e._v(" "),_("p",[_("code",[e._v("dependency")]),e._v(" String 以"),_("code",[e._v("模块名")]),e._v("或"),_("code",[e._v("模块名@版本")]),e._v("为格式的依赖项。")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")])]),e._v(" "),_("p",[_("code",[e._v("Object")]),e._v(": 依赖项会被解析为其组件。")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-isfor-plugin-module-→-boolean"}},[e._v("Matter.Plugin.isFor(plugin, module) → Boolean")]),e._v(" "),_("p",[e._v("如果通过"),_("code",[e._v("module.name")]),e._v("和"),_("code",[e._v("module.version")]),e._v("相比较后插件适用于模块的话，则"),_("code",[e._v("plugin.for")]),e._v("返回"),_("code",[e._v("true")]),e._v("。如果没有指定"),_("code",[e._v("plugin.for")]),e._v("，那么就假定它是适用的。"),_("code",[e._v("plugin.for")]),e._v("的值以"),_("code",[e._v("模块名")]),e._v("或"),_("code",[e._v("模块名@版本")]),e._v("为格式。")]),e._v(" "),_("p",[_("strong",[e._v("参数：")])]),e._v(" "),_("p",[_("code",[e._v("plugin")]),e._v(" Object 插件。"),_("br"),e._v(" "),_("code",[e._v("module")]),e._v(" Object 模块。")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")]),e._v(" Boolean  如果插件适用于模块的话，则"),_("code",[e._v("plugin.for")]),e._v("返回"),_("code",[e._v("true")]),e._v("，否则返回"),_("code",[e._v("false")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-isplugin-obj-→-boolean"}},[e._v("Matter.Plugin.isPlugin(obj) → Boolean")]),e._v(" "),_("p",[e._v("如果对象满足最低标准则被认为是插件并返回"),_("code",[e._v("true")]),e._v("。这意味着其必须定义下面的属性：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("name")])]),e._v(" "),_("li",[_("code",[e._v("version")])]),e._v(" "),_("li",[_("code",[e._v("install")])])]),e._v(" "),_("p",[_("strong",[e._v("参数：")]),_("br"),e._v(" "),_("code",[e._v("obj")]),e._v(" Object 要设置的对象。")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")]),_("br"),e._v("\nBoolean 如果对象被认为是插件则返回"),_("code",[e._v("true")]),e._v("，否则返回"),_("code",[e._v("false")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-isused-module-name-→-boolean"}},[e._v("Matter.Plugin.isUsed(module, name) → Boolean")]),e._v(" "),_("p",[e._v("如果"),_("code",[e._v("module")]),e._v("上安装了名为"),_("code",[e._v("name")]),e._v("的插件，则返回"),_("code",[e._v("true")])]),e._v(" "),_("p",[_("strong",[e._v("参数：")]),_("br"),e._v(" "),_("code",[e._v("module")]),e._v(" Object 模块。"),_("br"),e._v(" "),_("code",[e._v("name")]),e._v(" String 插件名称。")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")]),_("br"),e._v("\nBoolean 如果名为"),_("code",[e._v("name")]),e._v("插件已安装则返回"),_("code",[e._v("true")]),e._v("，否则返回"),_("code",[e._v("false")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-register-plugin-→-object"}},[e._v("Matter.Plugin.register(plugin) → Object")]),e._v(" "),_("p",[e._v("注册插件对象，以便以后可以按名称解析。")]),e._v(" "),_("p",[_("strong",[e._v("参数：")]),_("br"),e._v(" "),_("code",[e._v("plugin")]),e._v(" Object 要注册的插件")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")]),_("br"),e._v("\nObject 插件")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-resolve-dependency-→-object"}},[e._v("Matter.Plugin.resolve(dependency) → Object")]),e._v(" "),_("p",[e._v("如果存在依赖关系，则从注册表中解析该依赖关系到插件对象。"),_("code",[e._v("dependency")]),e._v("可能包含版本信息，但在解析时只关注名称。")]),e._v(" "),_("p",[_("strong",[e._v("参数：")]),_("br"),e._v(" "),_("code",[e._v("dependency")]),e._v(" String 依赖项")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")]),_("br"),e._v("\nObject 解析后的插件，否则返回"),_("code",[e._v("undefined")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-tostring-plugin-→-string"}},[e._v("Matter.Plugin.toString(plugin) → String")]),e._v(" "),_("p",[e._v("返回插件的名称和版本。")]),e._v(" "),_("p",[_("strong",[e._v("参数：")]),_("br"),e._v(" "),_("code",[e._v("plugin")]),e._v(" Object 插件")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")]),_("br"),e._v("\nString 插件名称和版本的字符串")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-use-module-plugins-module-uses"}},[e._v("Matter.Plugin.use(module, [plugins=module.uses])")]),e._v(" "),_("p",[e._v("通过调用在"),_("code",[e._v("plugins")]),e._v("中的每个插件当中的"),_("code",[e._v("plugin.install")]),e._v("来安装插件，如果没有则使用"),_("code",[e._v("module.uses")]),e._v("。在"),_("code",[e._v("Matter")]),e._v("上安装插件可以采用更方便的"),_("code",[e._v("Matter.use")]),e._v("方法。插件可以通过它们的名字或者插件对象的引用来指定。插件本身可以指定进一步的依赖关系，但每个插件只安装一次。顺序很重要，采用拓扑排序可以找到最佳的安装顺序。这种排序会尝试满足每个依赖项的请求顺序，但并不一定在所有情况下准确。该方法会在控制台中记录每个依赖项的结果状态及任何警告。")]),e._v(" "),_("ul",[_("li",[e._v("✅ 表示依赖已经解决安装。")]),e._v(" "),_("li",[e._v("🔶 表示某个依赖项已解觉，但对其或其依赖项抛出了警告。")]),e._v(" "),_("li",[e._v("❌ 表示无法解觉依赖项。避免在同一个模块上多次调用该方法，除非您打算手动控制安装顺序。")])]),e._v(" "),_("p",[_("strong",[e._v("参数：")]),_("br"),e._v(" "),_("code",[e._v("module")]),e._v(" Object 安装了插件的模块。"),_("br"),e._v(" "),_("code",[e._v("[plugins=modules.uses]")]),e._v(" Object "),_("code",[e._v("可选")]),e._v(" 模块上要安装的插件("),_("code",[e._v("可选")]),e._v("，默认为"),_("code",[e._v("module.uses")]),e._v(")。")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-versionparse-range-→-object"}},[e._v("Matter.Plugin.versionParse(range) → Object")]),e._v(" "),_("p",[e._v("将版本号字符串解析为其组件。\n版本号严格采用"),_("code",[e._v("x.y.z")]),e._v("格式。可以选择使用带有预发布标签的“x.y.z-alpha”格式。"),_("code",[e._v("range")]),e._v("为"),_("a",{attrs:{href:"https://docs.npmjs.com/misc/semver#advanced-range-syntax",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm ranges"),_("OutboundLink")],1),e._v("的严格子集，仅支持以下类型：")]),e._v(" "),_("ul",[_("li",[e._v("波浪号，如"),_("code",[e._v("~1.2.3")])]),e._v(" "),_("li",[e._v("插入符号，例如"),_("code",[e._v("^1.2.3")])]),e._v(" "),_("li",[e._v("确切版本，例如"),_("code",[e._v("1.2.3")])]),e._v(" "),_("li",[e._v("任何版本 "),_("code",[e._v("*")])])]),e._v(" "),_("p",[_("strong",[e._v("参数：")]),_("br"),e._v(" "),_("code",[e._v("range")]),e._v(" String 版本字符串")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")]),e._v("\nObject 解析到组件的版本号范围。")]),e._v(" "),_("h3",{attrs:{id:"matter-plugin-versionsatisfies-version-range-→-boolean"}},[e._v("Matter.Plugin.versionSatisfies(version, range) → Boolean")]),e._v(" "),_("p",[e._v("如果版本号满足给定的范围，则返回"),_("code",[e._v("true")]),e._v("。有关格式的描述，请参阅"),_("code",[e._v("Plugin.versionParse")]),e._v("文档。如果没有指定版本或范围，则假设任何版本("),_("code",[e._v("*")]),e._v(")都满足要求。")]),e._v(" "),_("p",[_("strong",[e._v("参数：")]),_("br"),e._v(" "),_("code",[e._v("version")]),e._v(" String 版本字符串"),_("br"),e._v(" "),_("code",[e._v("range")]),e._v(" String 范围字符串")]),e._v(" "),_("p",[_("strong",[e._v("返回值：")]),_("br"),e._v("\nBoolean 如果版本号满足"),_("code",[e._v("range")]),e._v("则返回"),_("code",[e._v("true")]),e._v("，否则返回"),_("code",[e._v("false")]),e._v("。")])])}),[],!1,null,null,null);v.default=o.exports}}]);