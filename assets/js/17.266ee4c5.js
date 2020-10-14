(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{360:function(t,e,v){"use strict";v.r(e);var n=v(43),_=Object(n.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("febeacon"),t._v(" "),v("h1",{attrs:{id:"engine"}},[t._v("Engine")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://brm.io/matter-js/docs/classes/Engine.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文原地址"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("Matter.Engine 模块涵盖了创建和操作引擎的方法。引擎是管理世界更新的控制器。")]),t._v(" "),v("h1",{attrs:{id:"matter-engine"}},[t._v("Matter.Engine")]),t._v(" "),v("p",[t._v("Matter.Engine 模块涵盖了创建和操作引擎的方法。引擎是管理世界更新的控制器。")]),t._v(" "),v("h2",{attrs:{id:"方法"}},[t._v("方法")]),t._v(" "),v("h3",{attrs:{id:"matter-engine-clear-engine"}},[v("code",[t._v("Matter.Engine.clear(engine)")])]),t._v(" "),v("p",[t._v("清除引擎，包括"),v("code",[t._v("世界(world)")]),t._v("、"),v("code",[t._v("碰撞对(pairs)")]),t._v("和"),v("code",[t._v("碰撞粗测(broadphase)")]),t._v("。")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("engine")]),t._v(": Engine")])]),t._v(" "),v("h3",{attrs:{id:"matter-engine-create-options"}},[v("code",[t._v("Matter.Engine.create([options])")])]),t._v(" "),v("p",[t._v("创建一个新的引擎。"),v("code",[t._v("options")]),t._v("参数是一个对象，用以设置覆盖默认值的属性。所有的属性都有默认值，而且许多属性是基于其他属性来进行预先计算的。"),v("code",[t._v("options")]),t._v("可以设置的配置项请见下文。")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("[options]")]),t._v(" Object - 可选")])]),t._v(" "),v("p",[v("strong",[t._v("返回：")])]),t._v(" "),v("p",[t._v("Engine")]),t._v(" "),v("h3",{attrs:{id:"matter-engine-merge-enginea-engineb"}},[v("code",[t._v("Matter.Engine.merge(engineA, engineB)")])]),t._v(" "),v("p",[t._v("合并两个引擎，方法是保留"),v("code",[t._v("engineA")]),t._v("的配置，但是将 world 替换为"),v("code",[t._v("engineB")]),t._v("的。")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("engine")]),t._v(": Engine")])]),t._v(" "),v("h3",{attrs:{id:"matter-engine-run-engine"}},[v("code",[t._v("Matter.Engine.run(engine)")])]),t._v(" "),v("p",[v("code",[t._v("Runner.run")]),t._v("的别名，请参阅"),v("code",[t._v("Matter.Runner")]),t._v("获取更多信息。")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("engine")]),t._v(": Engine")])]),t._v(" "),v("h3",{attrs:{id:"matter-engine-update-engine-delta-16-666-correction-1"}},[v("code",[t._v("Matter.Engine.update(engine, [delta=16.666], [correction=1])")])]),t._v(" "),v("p",[t._v("以"),v("code",[t._v("delta")]),t._v("毫秒的时间更新模拟的世界。"),v("code",[t._v("corretion")]),t._v("参数是可选数字，用以指定时间更新的校正因子。当"),v("code",[t._v("delta")]),t._v("参数在更新期间发生变化的情况下，该参数可以用来改进更新模拟的准确性。"),v("code",[t._v("correction")]),t._v("的值为"),v("code",[t._v("delta/lastDelta")]),t._v("，即"),v("code",[t._v("delta")]),t._v("在最后一步变化的百分比。因此，当无修正或不需要修正时，该值为"),v("code",[t._v("1")]),t._v("。参见该文章"),v("a",{attrs:{href:"http://lonesock.net/article/verlet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Time Corrected Verlet"),v("OutboundLink")],1),t._v("了解更多信息。")]),t._v(" "),v("p",[t._v("触发"),v("code",[t._v("beforeUpdate")]),t._v("和"),v("code",[t._v("afterUpdate")]),t._v("事件。"),v("br"),t._v("\n触发"),v("code",[t._v("collisionStart")]),t._v("、"),v("code",[t._v("collisionActive")]),t._v("和"),v("code",[t._v("collisionEnd")]),t._v("事件。")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("engine")]),t._v(" Engine")]),t._v(" "),v("li",[v("code",[t._v("[delta=16.666]")]),t._v(" 数字 可选")]),t._v(" "),v("li",[v("code",[t._v("[correction=1]")]),t._v(" 数字 可选")])]),t._v(" "),v("h2",{attrs:{id:"属性"}},[t._v("属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("属性名")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.broadphase")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Grid")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("Matter.Grid")]),t._v("的实例")]),t._v(" "),v("td",[t._v("碰撞粗侧控制器的实例。默认值是由"),v("code",[t._v("Engine.create")]),t._v("创建的"),v("code",[t._v("Matter.Grid")]),t._v("实例。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.constraintIterations")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("整数，指定每次更新的约束迭代次数。该值越高，模拟的质量就越高，但会以牺牲性能为代价。通常来讲默认值"),v("code",[t._v("2")]),t._v("足够了。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.enableSleepingBoolean")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),v("td",[t._v("设置引擎是否允许通过"),v("code",[t._v("Matter.Sleeping")]),t._v("设置为睡眠模式。这么做可以提高稳定性和性能，但以牺牲准确性为代价。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.plugin")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",[t._v("为存储插件特定属性而保留的对象。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.positionIterations")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",[t._v("整数，指定每次更新的位置迭代次数。值越高，模拟的质量就越高，但会以牺牲性能为代价。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.timing")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",[t._v("包含了引擎时间系统相关的属性")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.timing.timeScale")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("指定所有刚体的时间全局缩放因此。设置为"),v("code",[t._v("0")]),t._v("时将冻结模拟。设置为"),v("code",[t._v("0.1")]),t._v("则会产生慢动作效果，"),v("code",[t._v("1.2")]),t._v("会产生加速效果。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.timing.timestamp")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),v("td",[t._v("指定当前的模拟时间(从"),v("code",[t._v("0")]),t._v("开始，以毫秒为单位)。它在每个"),v("code",[t._v("Engine.update")]),t._v("上都根据所给的"),v("code",[t._v("delta")]),t._v("参数进行增加。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.velocityIterations")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("设置每次更新的速度迭代次数。值越高模拟的质量越高，同时也会消耗更多性能。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("engine.world")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("World")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Matter.World 实例")]),t._v(" "),v("td",[t._v("包含所有模拟物体和约束条件的世界对象。")])])])]),t._v(" "),v("h2",{attrs:{id:"事件"}},[t._v("事件")]),t._v(" "),v("p",[t._v("以下事件均由"),v("code",[t._v("Matter.Engine.create")]),t._v("创建的对象派发，而后由使用"),v("code",[t._v("Matter.Events.on")]),t._v("订阅了事件的对象接收。")]),t._v(" "),v("h4",{attrs:{id:"events-on-engine-afterupdate-callback"}},[t._v('Events.on(engine, "afterUpdate", callback)')]),t._v(" "),v("p",[t._v("在引擎更新和所有碰撞事件结束后触发。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("payload")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("event")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),v("td",[v("strong",[v("code",[t._v("timestamp")])]),t._v("(Number) "),v("br"),t._v(" 事件的"),v("code",[t._v("engine.timing.timestamp")]),t._v(" "),v("br"),t._v(" "),v("strong",[v("code",[t._v("source")])]),t._v(" "),v("br"),t._v(" 事件的源对象 "),v("br"),t._v(" "),v("strong",[v("code",[t._v("name")])]),t._v(" "),v("br"),t._v(" 事件名称")])])])]),t._v(" "),v("h3",{attrs:{id:"events-on-engine-beforeupdate-callback"}},[t._v('Events.on(engine, "beforeUpdate", callback)')]),t._v(" "),v("p",[t._v("在更新开始前触发。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("payload")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("event")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),v("td",[v("strong",[v("code",[t._v("timestamp")])]),t._v("(Number) "),v("br"),t._v(" 事件的"),v("code",[t._v("engine.timing.timestamp")]),t._v(" "),v("br"),t._v(" "),v("strong",[v("code",[t._v("source")])]),t._v(" "),v("br"),t._v(" 事件的源对象 "),v("br"),t._v(" "),v("strong",[v("code",[t._v("name")])]),t._v(" "),v("br"),t._v(" 事件名称")])])])]),t._v(" "),v("h3",{attrs:{id:"events-on-engine-collisionactive-callback"}},[t._v('Events.on(engine, "collisionActive", callback)')]),t._v(" "),v("p",[t._v("在引擎更新后触发，会提供当前帧中所有发生碰撞的物体对列表(如果有的话)。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("payload")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("event")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),v("td",[v("strong",[v("code",[t._v("pairs")])]),v("br"),t._v(" 受影响的碰撞对列表 "),v("br"),v("strong",[v("code",[t._v("timestamp")])]),t._v("(Number) "),v("br"),t._v(" 事件的"),v("code",[t._v("engine.timing.timestamp")]),t._v(" "),v("br"),t._v(" "),v("strong",[v("code",[t._v("source")])]),t._v(" "),v("br"),t._v(" 事件的源对象 "),v("br"),t._v(" "),v("strong",[v("code",[t._v("name")])]),t._v(" "),v("br"),t._v(" 事件名称")])])])]),t._v(" "),v("h3",{attrs:{id:"events-on-engine-collisionend-callback"}},[t._v('Events.on(engine, "collisionEnd", callback)')]),t._v(" "),v("p",[t._v("在引擎更新后触发，会提供当前帧中所有已经碰撞完的物体对列表(如果有的话)。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("payload")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("event")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),v("td",[v("strong",[v("code",[t._v("pairs")])]),v("br"),t._v(" 受影响的碰撞对列表 "),v("br"),v("strong",[v("code",[t._v("timestamp")])]),t._v("(Number) "),v("br"),t._v(" 事件的"),v("code",[t._v("engine.timing.timestamp")]),t._v(" "),v("br"),t._v(" "),v("strong",[v("code",[t._v("source")])]),t._v(" "),v("br"),t._v(" 事件的源对象 "),v("br"),t._v(" "),v("strong",[v("code",[t._v("name")])]),t._v(" "),v("br"),t._v(" 事件名称")])])])]),t._v(" "),v("h3",{attrs:{id:"events-on-engine-collisionstart-callback"}},[t._v('Events.on(engine, "collisionStart", callback)')]),t._v(" "),v("p",[t._v("在引擎更新后触发，会提供当前帧中所有已开始碰撞的物体对列表(如果有的话)。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("payload")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("event")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),v("td",[v("strong",[v("code",[t._v("pairs")])]),v("br"),t._v(" 受影响的碰撞对列表 "),v("br"),v("strong",[v("code",[t._v("timestamp")])]),t._v("(Number) "),v("br"),t._v(" 事件的"),v("code",[t._v("engine.timing.timestamp")]),t._v(" "),v("br"),t._v(" "),v("strong",[v("code",[t._v("source")])]),t._v(" "),v("br"),t._v(" 事件的源对象 "),v("br"),t._v(" "),v("strong",[v("code",[t._v("name")])]),t._v(" "),v("br"),t._v(" 事件名称")])])])])],1)}),[],!1,null,null,null);e.default=_.exports}}]);