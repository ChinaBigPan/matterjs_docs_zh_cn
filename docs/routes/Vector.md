---
title: Vector
---

# Vector

[英文原地址](https://brm.io/matter-js/docs/classes/Vector.html)

`Matter.Vector`模块包含了创建和操作矢量的方法。矢量是引擎中所有几何相关操作的基础。`Matter.Vector`对象的形式是`{x: 0, y: 0}`。

## 方法

### Matter.Vector.add(vectorA, vectorB, [output]) → Vector   

添加两个矢量。

**参数：**    
`vectorA` Vector   
`vectorB` Vector
`[output]` Vector `可选`

**返回值：**   
Vector 矢量A和B相加后形成的矢量。

### Matter.Vector.angle(vectorA, vectorB) → Number   

返回`vectorB - vectorA`和X轴之间以弧度表示的夹角。

**参数：**    
`vectorA` Vector   
`vectorB` Vector

**返回值：**   
Number 以弧度表示的夹角

### Matter.Vector.clone(vector) → Vector  

根据传入的矢量返回一个克隆后的新矢量。

**参数：**    
`vectorA` Vector 

**返回值：**   
Vector 克隆后的新矢量

### Matter.Vector.create(x, y) → Vector   

创建一个新的矢量。

**参数：**   
`x` Number   
`y` Number  

**返回值：**   
Vector 新的矢量

### Matter.Vector.cross(vectorA, vectorB) → Number  

返回两个矢量的叉积(cross-product)。

**参数：**   
`vectorA` Vector   
`vectorB` Vector  

**返回值：**   
Number 两个矢量的叉积

### Matter.Vector.cross3(vectorA, vectorB, vectorC) → Number

返回3个矢量的叉积。

**参数：**   
`vectorA` Vector   
`vectorB` Vector  
`vectorC` Vector   

**返回值：**   
Number 三个矢量的叉积   

### Matter.Vector.div(vector, scalar) → Vector   

将矢量和标量相除。

**参数：**   
`vector` Vector  
`scalar` Number  

**返回值：**   
Vector 除以标量后的矢量。

### Matter.Vector.dot(vectorA, vectorB) → Number

返回两个矢量的点积(dot-product)。

**参数：**   
`vectorA` Vector   
`vectorB` Vector  

**返回值：**   
Number 两个矢量的点积

### Matter.Vector.magnitude(vector) → Number  

返回实例的幅度(长度)。

**参数：**   
`vector` Vector   

**返回值：**   
Number 矢量的幅度


### Matter.Vector.magnitudeSquared(vector) → Number   

返回矢量(而且省去了`sqrt`操作)的幅度(长度)。

**参数：**   
`vector` Vector  


**返回值：**   
Vector 矢量的幅度平方。

### Matter.Vector.mult(vector, scalar) → Vector  

将矢量和标量相乘。

**参数：**   
`vector` Vector  
`scalar` Number  

**返回值：**   
Vector 乘以标量后的新矢量。

### Matter.Vector.neg(vector) → Vector  

让矢量指向相反的方向。

**参数：**   
`vector` Vector  

**返回值：**   
Vector 反向矢量。

### Matter.Vector.normalise(vector) → Vector   

将矢量归一化(使其幅度为 1 )。

**参数：**   
`vector` Vector  

**返回值：**   
Vector 归一化后的矢量。

### Matter.Vector.perp(vector, [negate=false]) → Vector 
返回正交(垂直)矢量。`negate`设置为`true`的话会返回相反方向的正交矢量。

**参数：**   
`vector` Vector  
`[negate=false]` Bool `可选`

**返回值：**   
Vector 正交(垂直)矢量  

### Matter.Vector.rotate(vector, angle, [output]) → Vector  

将矢量绕(0, 0)旋转指定角度。

**参数：**   
`vector` Vector  
`angle` Number   
`[output]` Vector `可选`

**返回值：**   
Vector 绕(0, 0)旋转的矢量

### Matter.Vector.rotateAbout(vector, angle, point, [output]) → Vector  

将矢量绕指定的点旋转指定的角度。

**参数：**   
`vector` Vector  
`angle` Number   
`point` Vector   
`[output]` Vector `可选`

**返回值：**   
Vector 绕指定的点旋转的矢量

### Matter.Vector.sub(vectorA, vectorB, [output]) → Vector  

两个矢量相减。

**参数：**   
`vectorA` Vector  
`vectorB` Vector    
`[output]` Vector `可选`

**返回值：**   
Vector 矢量A和矢量B相减后得到的新矢量