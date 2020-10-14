(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{381:function(e,t,v){"use strict";v.r(t);var r=v(43),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"vertices"}},[e._v("Vertices")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://brm.io/matter-js/docs/classes/Vertices.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文原地址"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("code",[e._v("Matter.Vertices")]),e._v("模块包含了创建和操作顶点集合的方法。顶点集合是"),v("code",[e._v("Matter.Vector")]),e._v("的数组，包含了有"),v("code",[e._v("Vertices.create")]),e._v("插入的索引属性。"),v("code",[e._v("Matter.Body")]),e._v("维护顶点集合来表示对象的形状(凸包)。")]),e._v(" "),v("h2",{attrs:{id:"方法"}},[e._v("方法")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-area-vertices-signed-→-number"}},[e._v("Matter.Vertices.area(vertices, signed) → Number")]),e._v(" "),v("p",[e._v("返回顶点集的区域。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v(" Vertices"),v("br"),e._v(" "),v("code",[e._v("signed")]),e._v(" Bool")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\nNumber 区域")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-centre-vertices-→-vector"}},[e._v("Matter.Vertices.centre(vertices) → Vector")]),e._v(" "),v("p",[e._v("返回顶点集合的中心(质心)。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v(" Vertices")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\nNumber 区域")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-chamfer-vertices-radius-quality-qualitymin-qualitymax"}},[e._v("Matter.Vertices.chamfer(vertices, radius, quality, qualityMin, qualityMax)")]),e._v(" "),v("p",[e._v("给与一组顶点旋转角度来获得倒角，返回一组新的顶点。"),v("code",[e._v("radius")]),e._v("参数是一个数字或数组，用于指定每个顶点的旋转半径。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v(" Vertices"),v("br"),e._v(" "),v("code",[e._v("radius")]),e._v(" Number[]"),v("br"),e._v(" "),v("code",[e._v("quality")]),e._v(" Number"),v("br"),e._v(" "),v("code",[e._v("qualityMin")]),e._v(" Number"),v("br"),e._v(" "),v("code",[e._v("qualityMax")]),e._v(" Number")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-clockwisesort-vertices-→-vertices"}},[e._v("Matter.Vertices.clockwiseSort(vertices) → Vertices")]),e._v(" "),v("p",[e._v("将传入的顶点按照顺时针顺序排列。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v(" Vertices")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\nVertices 排序后的顶点。")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-contains-vertices-point-→-boolean"}},[e._v("Matter.Vertices.contains(vertices, point) → Boolean")]),e._v(" "),v("p",[e._v("如果"),v("code",[e._v("point")]),e._v("处在顶点集内部则返回"),v("code",[e._v("true")]),e._v("。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v("  Vertices"),v("br"),e._v(" "),v("code",[e._v("point")]),e._v("  Vector")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\nBoolean 如果顶点集内部包含"),v("code",[e._v("point")]),e._v("则返回"),v("code",[e._v("true")]),e._v("，否则返回"),v("code",[e._v("false")])]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-create-points-body"}},[e._v("Matter.Vertices.create(points, body)")]),e._v(" "),v("p",[e._v("创建一组新的"),v("code",[e._v("Matter.Body")]),e._v("顶点。"),v("code",[e._v("points")]),e._v("参数接受围绕原点"),v("code",[e._v("(0,0)")]),e._v("的"),v("code",[e._v("Matter.Vector")]),e._v("矢量点数组，如下：")]),e._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" x"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" y"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" x"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" y"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" x"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" y"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[v("code",[e._v("Vertices.create")]),e._v("方法返回一个新的顶点数组，它和"),v("code",[e._v("Matter.Vector")]),e._v("对象相类似，但为了有效地碰撞检测提供了一些额外的引用。")]),e._v(" "),v("p",[e._v("顶点必须按照顺时针顺序指定。")]),e._v(" "),v("p",[v("strong",[e._v("注意："),v("code",[e._v("body")]),e._v("参数是必需参数，必须传入"),v("code",[e._v("Matter.Body")]),e._v("引用")])]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("points")]),e._v("  Vector[]"),v("br"),e._v(" "),v("code",[e._v("body")]),e._v("  Body")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-frompath-path-body-→-vertices"}},[e._v("Matter.Vertices.fromPath(path, body) → Vertices")]),e._v(" "),v("p",[e._v("将包含有用空格或者逗号分隔的"),v("code",[e._v("x y")]),e._v("对字符串解析为传入的"),v("code",[e._v("Matter.Body")]),e._v("的"),v("code",[e._v("Matter.Vertices")]),e._v("对象。要解析"),v("code",[e._v("SVG 路径")]),e._v("，请参见"),v("code",[e._v("Svg.pathToVertices")]),e._v("。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("path")]),e._v("  String"),v("br"),e._v(" "),v("code",[e._v("body")]),e._v("  Body")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\nVertices 顶点")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-hull-vertices-→"}},[e._v("Matter.Vertices.hull(vertices) →")]),e._v(" "),v("p",[e._v("返回输入顶点的凸包(convex hull)作为新的点数组。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v("  Vertices")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\n[vertex] Vertices")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-inertia-vertices-mass-→-number"}},[e._v("Matter.Vertices.inertia(vertices, mass) → Number")]),e._v(" "),v("p",[e._v("返回传入总质量的顶点集合的截面惯性矩。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v("  Vertices"),v("br"),e._v(" "),v("code",[e._v("mass")]),e._v("  Number")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\nNumber 多边形的截面惯性矩")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-isconvex-vertices-→-bool"}},[e._v("Matter.Vertices.isConvex(vertices) → Bool")]),e._v(" "),v("p",[e._v("如果顶点形成一个凸形(顶点必须是顺时针顺序)，则返回true。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v("  Vertices")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\nBool 如果顶点是一个凸形则返回"),v("code",[e._v("true")]),e._v("，否则返回"),v("code",[e._v("false")]),e._v("。(如果不匹配则返回"),v("code",[e._v("null")]),e._v(")。")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-mean-vertices-→-vector"}},[e._v("Matter.Vertices.mean(vertices) → Vector")]),e._v(" "),v("p",[e._v("返回顶点集合的平均值。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v("  Vertices")]),e._v(" "),v("p",[v("strong",[e._v("返回值：")]),v("br"),e._v("\nVector 平均点")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-rotate-vertices-angle-point"}},[e._v("Matter.Vertices.rotate(vertices, angle, point)")]),e._v(" "),v("p",[e._v("就地旋转顶点集合。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v("  Vertices"),v("br"),e._v(" "),v("code",[e._v("angle")]),e._v(" Number"),v("br"),e._v(" "),v("code",[e._v("point")]),e._v(" Vector")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-scale-vertices-scalex-scaley-point"}},[e._v("Matter.Vertices.scale(vertices, scaleX, scaleY, point)")]),e._v(" "),v("p",[e._v("基于一个点(默认是中心点)对顶点集合进行缩放。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v("  Vertices"),v("br"),e._v(" "),v("code",[e._v("scaleX")]),e._v(" Number"),v("br"),e._v(" "),v("code",[e._v("scaleY")]),e._v(" Number"),v("br"),e._v(" "),v("code",[e._v("point")]),e._v(" Vector")]),e._v(" "),v("h3",{attrs:{id:"matter-vertices-translate-vertices-vector-scalar"}},[e._v("Matter.Vertices.translate(vertices, vector, scalar)")]),e._v(" "),v("p",[e._v("就地移动顶点集合。")]),e._v(" "),v("p",[v("strong",[e._v("参数：")]),v("br"),e._v(" "),v("code",[e._v("vertices")]),e._v("  Vertices"),v("br"),e._v(" "),v("code",[e._v("vector")]),e._v(" Vector"),v("br"),e._v(" "),v("code",[e._v("scalar")]),e._v(" Number")])])}),[],!1,null,null,null);t.default=_.exports}}]);