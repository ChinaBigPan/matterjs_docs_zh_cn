---
title: Svg
---

# Svg

[英文原地址](https://brm.io/matter-js/docs/classes/Svg.html)

`Matter.svg`模块包含了将 SVG 图片转换为矢量点数组的方法。

使用这个模块您需要[SVGPathSeg](https://github.com/progers/pathseg)

## 方法

### Matter.Svg.pathToVertices(path, [sampleLength=15]) → Vector[]   

将 SVG 路径转换为矢量点数组。如果输入的路径是凹形，那么在使用前必须将其分解为凸包。参见`Bodies.fromVertices`提供的支持。注意这个函数并不能保证支持复杂的路径(比如带孔的路径)。您必须在较现代的浏览器中加载[pathseg.js](https://github.com/progers/pathseg) 才能使用。

**参数：**    
`path` SVGPathElement     
`[sampleLength=15]` Number `可选`