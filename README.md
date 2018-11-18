# z-formatter
一个简单js库，目的是简化js数据操作


# 使用方法

### 使用npm安装
`npm install z-formatter`

### 引用
`import $z from 'z-formatter'`

# 文档

> ### `toDate`

时间格式化函数

```js
$z.toDate(date,format)
// date: Number 毫秒数 ||日期格式
// format: String 'YY-MM-DD hh:mm:ss' || 'YY-MM-DD'

$z.toDate() //当前时间
// 2018-10-25

$z.toDate('2018-3-3') // 指定时间
// 2018-03-03

$z.toDate(1234567890, 'YY-MM-DD hh:mm:ss') //指定时间格式化
// 1970-01-15 14:56:07
```

> ### `isString`

判断是否为字符串类型

```js
$z.isString(value)
// value: 任意类型

$z.isString('123')
// true

$z.isString(123)
// false

$z.isString({ a: 1, b: 2 })
// false
```

> ### `isNumber`

判断是否为数字类型

```js
$z.isNumber(value)
// value: 任意类型

$z.isNumber(123)
// true

$z.isNumber('123')
// false

$z.isNumber({ a: 1, b: 2 })
// false
```

> ### `isArray`

判断是否为数组类型

```js
$z.isArray(value)
// value: 任意类型

$z.isArray([ 1, 2, 3 ])
// true

$z.isArray('123')
// false

$z.isArray({ a: 1, b: 2 })
// false
```

> ### `isBoolean`

判断是否为数组类型

```js
$z.isBoolean(value)
// value: 任意类型

$z.isBoolean(false)
// true

$z.isBoolean('123')
// false

$z.isBoolean({ a: 1, b: 2 })
// false
```

> ### `isFunction`

判断是否为函数类型

```js
$z.isFunction(value)
// value: 任意类型

$z.isFunction(function(){})
// true

$z.isFunction('123')
// false

$z.isFunction({ a: 1, b: 2 })
// false
```

> ### `isObject`

判断是否为对象类型

```js
$z.isObject(value)
// value: 任意类型

$z.isObject({ a: 1, b: 2 })
// true

$z.isObject(function(){})
// false

$z.isObject('123')
// false

```

> ### `objectCopy`

数组或对象的拷贝

```js
$z.objectCopy(obj, params)
// obj: Array || Object
// params: 'deep' || 'shallow'

$z.objectCopy({a:1,b:2,c:3}) // 浅拷贝
// {a:1,b:2,c:3} 默认浅拷贝

$z.objectCopy({a:1,b:2,c:{a: function(){}}}, 'deep') //深拷贝
// {a:1,b:2,c:{a: function(){}}}
```

> ### `setCookie`

设置cookie

```js
$z.setCookie(key, val, time)
// key: String
// val: 任意类型
// time: 保存时间（一小时为单位）

$z.setCookie('name','zhang')
// key: 'name' value: 'zhang'

$z.setCookie('data',{a:1,b:2},3)
// key: 'data' value: [{'a':1,'b':2}]
```

> ### `getCookie`

获取cookie

```js
$z.getCookie(key)
// key: String

$z.getCookie('name')
// 'zhang'

$z.getCookie('data')
// {a:1,b:2}
```

> ### `isEmail`

表单验证邮箱

```js
$z.isEmail(val)
// val: String

$z.isEmail('123@qq.com')
// true

$z.isEmail('$zhang@$zhangan.cn')
// true
```

> ### `isPhone`

表单验证手机号

```js
$z.isPhone(val)
// val: String || Number

$z.isPhone('13233333333')
// true

$z.isPhone('18623456543')
// true
```

> ### `simplify`

数组去重

```js
$z.simplify(arr)
// val: Array

$z.simplify([1,2,3,2,3,2,4,5,6])
// [1,2,3,4,5,6]
```

更多功能陆续添加中...
