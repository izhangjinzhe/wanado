# wanado
一个简单js库，目的是简化js数据操作


# 使用方法

### 使用npm安装
`npm install wanado`

### 引用
`import wanado from 'wanado'`  
#### 按需加载,需安装`eslint-plugin-import`
`import { isString } from 'wanado/src/type/check'`

# 索引

## 1.  判断

- [isString](#isstring)  
- [isNumber](#isnumber)
- [isArray](#isarray)
- [isBoolean](#isboolean)
- [isFunction](#isfunction)
- [isObject](#isobject)
- [isEmptyObject](#isemptyobject)
- [isEmptyArray](#isemptyarray)

## 2. 一般字符串操作

  [时间格式化](#todate)

  [cookie设置](#setcookie)

  [cookie获取](#getcookie)

## 3. 一般对象操作

  [对象的深浅拷贝](#objectcopy)

  [对象的合并](#objectmerge)

## 4. 一般数组操作

  [数组去重](#deduplicate)

  [数组添加](#arrayappend)

  [数组删除](#remove)

  [数组排序（支持复杂对象排序）](#sort)

  [对象数组分组](#arraygrounp)

## 5. 正则验证

  [邮箱](#isemail)

  [手机号码](#isphone)

# 文档

> ### `check`

判断是否为字符串类型

```js
// value: any
// return: Boolean 
wanado.check(value)
```

> ### `isNumber`

判断是否为数字类型

```js
// value: any
// return: Boolean 
wanado.isNumber(value)
```

> ### `isArray`

判断是否为数组类型

```js
// value: any
// return: Boolean 
wanado.isArray(value)
```

> ### `isBoolean`

判断是否为数组类型

```js
wanado.isBoolean(value)
// value: any
```

> ### `isFunction`

判断是否为函数类型

```js
// value: any
// return: Boolean 
wanado.isFunction(value)
```

> ### `isObject`

判断是否为对象类型

```js
// value: any
// return: Boolean 
wanado.isObject(value)
```
> ### `isEmptyObject`

判断是否为空数组

```js
// value: any
// return: Boolean 
wanado.isEmptyObject(value)
```
> ### `isEmptyArray`

判断是否为空数组

```js
// value: any
// return: Boolean 
wanado.isEmptyArray(value)
```

> ### `setCookie`

设置cookie

```js
// params 数据源
// options 配置项
wanado.setCookie(params, options)

wanado.setCookie({ a: 1 },{ a:{ 'max-age': 10000 },b:{'max-age': 40000}})
```

> ### `getCookie`

获取cookie

```js
wanado.getCookie(key)
// key: String

wanado.getCookie('name')
// 'zhang'

wanado.getCookie('data')
// {a: 1, b: 2}
```

> ### `toDate`

时间格式化函数

```js
wanado.toDate(date,format)
// date: Date 毫秒数 ||日期格式
// format: String 'YY-MM-DD hh:mm:ss'

wanado.toDate('2018-3-3') // 默认格式化
// 2018/03/03

wanado.toDate(1234567890, 'YY/MM/DD hh:mm:ss') //指定格式化（可自由组合）
// 1970/01/15 14:56:07
```

> ### `objectCopy`

数组或对象的拷贝

```js
wanado.objectCopy(obj, params)
// obj: Array || Object
// params: 'deep' || 'shallow'

wanado.objectCopy({a: 1, b: 2, c: 3}) // 浅拷贝
// {a: 1, b: 2, c: 3} 默认浅拷贝

wanado.objectCopy({a: 1, b: 2, c: {a: function(){}}}, 'deep') //深拷贝
// {a: 1, b: 2, c: {a: function(){}}}
```

> ### `objectMerge`

合并对象并返回一个合并后的对象

```js
wanado.objectMerge(obj, obj2...)
// obj: Object

var a = {a: 1, b: 2}
var b = {c: 2, d: 4}
var c = {e: 5, f: 6}

wanado.objectMerge(a,b,c)
// {a: 1, b: 2, c: 2, d: 4, e: 5, f: 6}
```

> ### `sort`

数组排序（支持复杂对象排序）

```js
wanado.sort(arr, type, key)
// arr: Array
// type: 'order' || 'invert'
// key: 当传入对象数组时，要指定一个key用来排序

var arr = [2, 1, 3]

wanado.sort(arr, 'order')
// [1, 2, 3]

wanado.sort(arr, 'invert')
// [3, 2, 1]

var arr = [
  {id:3,name:'zhang'},
  {id:1,name: 'wang'},
  {id:2,name:'li'}
]

wanado.sort(arr, 'order', 'id')
// {id:1,name: 'wang'},{id:2,name:'li'},{id:3,name:'zhang'},

wanado.sort(arr, 'invert', 'id')
//  {id:3,name:'zhang'}, {id:2,name:'li'}, {id:1,name: 'wang'},

```

> ### `deDuplicate`

数组去重

```js
// arr: Array
// key: 可选，用于对象数组指定key值
wanado.deDuplicate(arr, key)
```

> ### `arrayAppend`

数组添加

```js
// arr: Array
// i: index
// data: array or object or 基本类型
wanado.arrayAppend(arr, i, data)
```

> ### `arrayRemove`

数组删除

```js
// val: Array
// start: number or object
// count: 可选，删除数量
wanado.arrayRemove(val, start, count)
```

> ### `arrayGrounp`

根据传入的对象数组和key进行分组

```js
wanado.arrayGrounp(arr, key)
// arr: Array
// key: String

var arr = [
  {id: 1, year: 2018},
  {id: 2, year: 2017},
  {id: 3, year: 2016},
  {id: 4, year: 2017},
  {id: 5, year: 2018},
  {id: 6, year: 2017}
]


wanado.arrayGrounp(arr, 'year')
// {
//   "2016": [
//     {"id": 3, "year": 2016}
//   ],
//   "2017": [
//     {"id": 2, "year": 2017},
//     {"id": 4, "year": 2017},
//     {"id": 6, "year": 2017}
//   ],
//   "2018": [
//     {"id": 1, "year": 2018},
//     {"id": 5, "year": 2018}
//   ]
// }
```

> ### `isEmail`

表单验证邮箱

```js
wanado.isEmail(val)
// val: String

wanado.isEmail('123@qq.com')
// true

wanado.isEmail('wanadohang@wanadohangan.cn')
// true
```

> ### `isPhone`

表单验证手机号

```js
wanado.isPhone(val)
// val: String || Number

wanado.isPhone('13233333333')
// true

wanado.isPhone('18623456543')
// true
```
更多功能陆续添加中...
