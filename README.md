# JS Basics Conspect

---

## Основные понятия js

выражения-функции-обьекты
галвная идея - все сущности - это обьект
обьект - это набор свойств **(имя:значение)**

```jsx
**примеры обеьекта**:{
visible: true;
colorDepth: 24;
title: @@@;
	orientation{
		angle: 0;
		type: @@@;
	}
}
```

массив - это обект
функция - это обьект
число - обдж
строка - обдж (только ведут себя как обьекты по факту не так)

**`console.log(hello world)`** -> console - обьект
                                              log - метод
                                               . - точечная запись (синтаксис) - осуществляется доступ к методу
                                              () - вызов метода
                                              значение внутри скобки - помещаются в кавычки

```jsx
**console.dir()** - все свойства определенного обьекта
**console.table()** - все свойства обьекта в виде таблицы
```

---

## Выражения

`"abc"`
`10`
`5+2` (так как используется оператор выдаст результат)
`c=10` (результатом будет то значение которое присвоено переменной)
`"good"+"evening"` (резульатом будет одна строка good evening)
`a <= b || c !== d` (любое выражение возвращает значение)
`MyFunction(c,d)` (вызов функции также выражение)

результатом каждого выражения является значение

выражение присваивания `(a = 20)`

выражение с побочными действиями (не только возвращает значение, но и выполняет другие действия)
`a = 5`
`b++` (увеличение присвоенного значения на единицу)
`myFunction()`

Переменные дают возможность повторного доступа к значениям
имена переменных

- PaskalCase - где "P" - тип, а "C" класс
- DB_PASSWORD - значения известны до запуска приложения и не меняются (константы)
- camelCase - где первая "c" это все остальные переменные(не класс не тип не константа), а "C" - класс

Обьявление переменных:

- **`let`** => `let a` (обьявление переменной a) => `a = true` (присваивание)
- **`const`** => `const c = 10` (обьявление и присваивание)
- **`var`** (not recomended)

```jsx
let a = 10          
a = 20              
let b               
b = false
// Через let есть возможность переприсвоить значение переменной

let a
console.log(a)
a = true

const c = 20
c = 10
//выдаст ошибку, так как константу нельзя переприсвоить
```

Тип переменной определяется типом присвенного значения (тип число, строка)

---

## Переменные

переменная => имеет значние => значение имеет тип

примитивные типы

- -`string` (строка)
- -`boolean` (логический)
- -`number` (число)
- -`null` (значение не существует по моему желанию)
- -`undefined` (значния не существует)
- -`symboll` (символ)

ссылочный тип

- - `object` (обьект)

```jsx
0x3131(что и есть ссылка) => {
	a: 10,
	b: true
}
```

Статическая и динамическая типизация

```jsx

//Статическая                      
string a = "abc"                    
int b = 10
b = "xyz" //error(не в яве)

//Динамическая
a = "abc" //string
a = 10 //number
```

js - динмически типизируемый язык (тип переменной не присваивается)

правила работы с переменными

1. все переменные обьявлять перед их использованием
2. стараться использовать `const` везде где это возможно

---

## ОБЪЕКТЫ

практически все сущность в js обьекты
обьект это набор свойств
обьект - тип переменных
обьекты - это ссылочный тип

```jsx
const myCity = {
	city: "ny",
	popular: true,
}
```

порядок свойств не имеет значения  (технически)
даже если выдана переменная, то вывод свойств может поменяться, но также не будет иметь значения

при помощи точенчной записи можно быстро изменить свойство того или иного обьекта
используя точечную запись можно создать новое свойство (`myCity.popular = true, myCity.country = USA`)
в этих случаях мы не присваеваем новые значения для обьекта, лишь меняем свойство за счет ссылочного типа обращения (мутация)

оператор удаления свойства обьектов
**`delete** myCity.country`

вместо точечного доступа, можно воспользоваться квадратными скобками (через двоеточие строка)
используется, если название свойства является значение той или иной переменной

вложенные свойства, которые имеют обьект

```jsx
const myCity = {
	city: "ny"
	info: {
		itsPopular: true,
		country: USA,
	}
}
```

использование переменных при формировании обьекта

```jsx

const name = "Danila"
const postsQty = 23
const userProfile = {
	name: name,
	postsQty: postsQty,
}
```

когда обьявлена переменная, можно использовать сокращенную запись где будет достаточно написать например name, (рекомендуется обозначать сокращенные свойства вначале обьекта)

глобальные обьекты

- -`window` (web)
- -`global` (node.js)
- -`globalThis` (унифицированный)

свойства глобальных обьектов

- `console`

---

## МЕТОДЫ

Метод - свойство обьекта значение которого функция

```jsx

const myCity = {
	city: "ny"
	cityGreetings: function () {
		console.log("Gretings!")
	}
}
```

свойства в отличие от методов не содержат функции как значения (метод также является и свойством)

---

## JSON (js object notation)

JSON - формат обмена данными в интернете
передается в виде строки
json <=> обьект

**`JSON.parse()`** (JSON => JS)
**`JSON.stringify()`** (JS => JSON)

---

## Мутация в JS

мутирование свойств обьекта, в тч свойств копии обьекта
при мутировании копии обьекта, мутирует и оригинал

как избежать мутаций

```jsx

//вариант 1
const person = {
	name: "bob",
	age: 25
}
const person2 = Object.assign({}, person)
person2.age = 26
console.log(person2.age) = 26
console.log(person.age) = 25

//вариант 2
const person = {
	name: "bob",
	age: 25
}
const person2 = {...person}
person2.name = 'Alice'
console.log(person2.name) = Alice
console.log(person.name) = bob
//проблема в том, что вложенные обьекты все равно будут мутировать

//вариант 3
const person = {
	name: "bob",
	age: 25
}
const person2 = JSON.parse(JSON.stringify(person))
[person2.name](http://person2.name/) = "Alice"
console.log([person2.name](http://person2.name/)) = Alice
console.log([person.name](http://person.name/)) = bob
```

после такой "двойной конвертации" ссылки на вложенные обьекты не сохраняются, соответственно не будет мутаций у оригинального обьекта

---

## Функции

Функция - блок кода, который можно выполнять многократно

функция может быть

- именнованой
- анонимной
- присвоена переменной
- аргументом при вызове другой функции
- значением свойства (метода) обьекта

Функция - это обьект (через `console.dir()` можно посмотреть свойства функции)

```jsx
Function myFn(a,b){
	let c
	a = a + 1
	c = a + b
	return c
}

console.dir(myFn)
```

Передача значения по ссылке

```jsx

const personOne = {
	name: 'bob',
	age: 21
}
Function increasePersonAge(person){
	person.age += 1;
	return person
}
increasePersonAge(personOne)
console.log (personOne.age) = 22
```

Внутри функции не рекомендуется мутировать внешние обьекты (лучше создать внутри функции копию обьекта)

```jsx

const personOne = {
	name: 'bob',
	age: 21
}

Function increasePersonAge(person){
	const updatedPerson = Object.assign({}, person)
	updatedPerson += 1;
	return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log (personOne.age) = 21
console.log (updatedPersonOne.age) = 22
```

callback функции

```jsx
function anotherFn(){
	//
}

function fnwithCallback(callbackFunction){
	callbackFunction()
}

fnwithCallback(anotherFn)
```

правила работы с функциями

- называть исходя из задач
- одна функция выполняет одну задачу
- не рекомендуется изменять внешние относительно функции переменные

---

## Область видимости

Область видимости определяет границы действия переменной

- глобальная облать видимости `(Window(web), Global(node.js))`
- локальная область видимости

цепочка областей видимости

типы областей видимости

- глобальная область видимости
- область видимости функции
- область видимости блока

Правила работы с переменными

- обьявлять перед использованием
- использовать `const` везде где возможно
- не изменять внутри функции переменные с внешних областей функции

Строгий режим (`"use strict"` - добавляется вначле программы глобальной области видимости или локальной) например, запрещает использваоние необьявленных переменных

---

## Операторы

оператор - это встроенная функция

виды операторов

- Арифмитические
- Сравнения
- Логические
- Присваивания
- Тектовые `(typof, instanceof, new, delete)`

**Унарные операторы** (операторы, которые имеют только один операнд)
**Бинарные операторы** (имеют всегда два операнда)

```jsx
Инфиксная запись
a = true
a + b
a += 5 ...
```

```jsx
Префиксная запись
++a
delete obj.a
typeof a
```

```jsx
Постфиксная запись
a++
myFn()
```

```jsx
Приоритетность операторов
a + b * c / - e
a + ((b * c) / (d - e))
```

Логические операторы

- `!(не)` - всегда возвращает значение типа boolean
Такой оператор чаще всего используется в условных конструкциях
- `!!` - отрицание отрицания (позовляет проверить ложность значения)
- `&&(и)` - возвращает значение одного из операндов
- `||(или)` - возвращает значение одного из операндов

Ложные значения

- `Boolean(value) => false, 0, '', undefined, null`

### Оператор typeof

(указывает тип того или иного передаваемого значения)

```jsx
let isUndefined
typeof isUndefined === "undefined"
```

### Оператор “!”

(чаще всего используется в условных инструкциях)

Примеры с оператором “!”

```jsx
!10 //false

!0 //true

!”abc” //false

!’’ //true

!true //false

!undefined //true
```

Отрицание отрицания “!!”

```jsx
!!10 //true

!!0 //false

!!’abc’ // true

!!’’ //false

!!true //true

!!undefined //false
```

### Операторы && и ||

(Операторы короткого замыкания)

Оператор &&

```jsx
Выражение 1 && Выражение 2 
/*
Если "выражение 1" ложно:
1. "выражение 2" игнорируется
2. возвращается результат "Выражение 1"
/*
```

Оператор ||

```jsx
Выражение 1 || Выражение 2
/*
Если выражение 1 истинно:
1. выражение 2 игнорируется
2. возвращается результат выражения 1
/*
```

Цепочка операторов && и ||

```jsx
a && b && c && d 
// До первого ложного значения

a || b || c || d
// До первого истинного значения
```

### Оператор разделения обьекта на свойства

Оператор …

```jsx
const button = {
	width: 200,
	text: 'Buy'
}

const redButton = {
	...button,
	color: 'red'
}
//Если у обьекта button есть свойство color его значение будет перезаписано(если написать свойство после), если написать свойство до, то перезаписано не будет

console.table(redButton)
```

Мутация при помощи такого метода не происходит (если нет вложенных обьектов)

### Конкатанация строк

Оператор + для конкатанации строк

```jsx
"Hello" + "World"
//result = Hello World
```

Переменные в конкатанации строк

```jsx
const hello = "Hello"
const world = "World"

const greeting = hello + "" + world
// result = Hello World
```

Шаблонные строки

```jsx
const hello = "Hello"
const world = "World"

const greeting = `${hello} ${world}` //В фигурных скобках может находиться функция
//result = Hello World
```

---

## Функциональные выражения

| Обьявленная
функция | Функциональное
выражение |
| --- | --- |
| function myFn(a,b) {
     let c 
     a = a + 1
     c = a + b
     return c
}  | function(a, b) {
     let c
     a = a + 1
     c = a + b
     return c
} |

Функциональные выражения всегда анонимные

|  | Обьявленная
функция | Функциональное
выражение |
| --- | --- | --- |
| Имеет имя | Да | Нет |
| Можно использовать автономно | Да | Нет |
| Можно присваивать переменной | Да | Да |
| Можно использовать как аргумент в вызове другой функции | Да | Да |

### Присваивание функционального выражения переменной

```jsx
const myFn = function(a, b){
	let c
	a = a + 1
	c = a + b
	return c
}

myFn(5, 3) //9
```

### Функциональное выражение в вызоыве другой функции (callback)

```jsx
setTimeout(function (){
	console.log("Отложенное сообщение")
}, 1000)
// через 1000 мс будет выведено "отложенное сообщение"
```

---

## Стрелочная функция

```jsx
(a, b) => {
	let c
	a = a + 1
	c = a + b
	return c
}
```

Стрелочные функции всегда анонимные

### Как дать имя стрелочной функции?

Используется для предотвращения присвоения нового значения для функции

```jsx
const myFn = (a ,b) => {
	let c
	a = a + 1
	c = a + b
	return c
}

myFn(5, 3) //9
```

### Стрелочная функция в вызове другой функции (callback)

```jsx
setTimeout (() => {
	console.log("Отложенное сообщение")
}, 1000)

// через 1000 мс будет выведено "отложенное сообщение"
```

### Сокращения в стрелочных функциях

#1

(Если один параметр, то круглые скобки можно опустить)

```jsx
a => {
	//тело функции
}
```

#2

(Если тело функции состоит из одного выражени, то фигурные скобки можно опустить. Результат будет автоматически возвращен - неявное возврвщение)

```jsx
(a, b) => a + b
```

---

## Значение параметров функции по умолчанию

```jsx
function multByFactor(value, multiplier = 1) {
	return value * multiplier
}

multByFactor(10, 2) //20
multByFactor(5) //5

//в данном примере 1 для multiplier - дефолтное значение (теоретически можно сделать то же самое через if)
```

```jsx
const newPost = (post, addedAt = Date()) => ({
	...post,
	addedAt,
})

const firstPost = {
	id: 1,
	author: "Danya",
}

newPost(firstPost)
```

---

## Обработка ошибок

### Что происходит в случае ошибок

```jsx
const fnWithError = () => {
	throw new Error("Some Error")
}

fnWithError() // выполнение кода остановится после появления Uncaught ошибки

console.log("Continue...")
```

### Try/Catch

```jsx
try{
	//Выполнение блока кода
} catch (error) {
	//Этот блок выполнится в случае возникновения ошибок в блоке try
}
```

```jsx
const fnWithError = () => {
	throw new Error("Some Error")
}

try {
	fnWithError()
} catch (error) {
		console.error(error)
		console.log(error.messege)
}

console.log("Continue...") //выполнение кода продолжится
```

---

## Инструкции

Инструкция выполняет определенные действия

```jsx
let a;

const b = 5;

if (a > b) {
	console.log("a is larger");
}

for (let i = 0; i++; i < 5) {
	console.log(i);
}
```

Инструкция обычно заканчивается точкой с запятой (искл. Не требуется после блока инструкции)

### Выражение-иструкция

- `“abc”;`
- `a = a + 3;`
- `c = a + b;`
- `d = ‘Good’ + ‘Evening’;`
- `myFn(c, d);`
- `console.log(’Hey’)`

Инструкция не может быть трансформирована в выражение

### Как отличить выражение от инструкции

- Выражения могут быть использованы как аргументы в вызове функции

 

```jsx
function muFn(a){
	console.log(a);
}

const b = true;
let c = 10;

myFn(2 + 3) // 5
myFn(b) // true
myFn(c = c + 1) // 11
myFn(c = c + 1;) // Uncaught SyntaxError
myFn(let d) // Uncaught SyntaxError
```

---

## Массивы

массив - это обьект с цифровыми именами свойств

Мы можем мутировать элементы массива, даже если они обьявлены через `const` так как массивы являются ссылочным обьектом

### Формат записи массивов

```jsx
const myArray = [1, 2, 3]
console.log(myArray)
// [1, 2, 3]

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)
// [1, 2, 3]
```

`myArray.length` - количество элементов массива

### массив vs обьект

```jsx
const myObject = {
	0: 1,
	1: 2,
	2: 3,
	length: 3
}

console.log(myObject)
// {0: 1, 1: 2, 2: 3, length: 3}
```

```jsx
const myArray = [1, 2, 3]

console.log(myArray)
// [1, 2, 3]
```

### Чтение значений массива

```jsx
const myArray = [1, true, 'a']
console.log(myArray) //[1, true, 'a']

console.log(myArray[0]) //1
console.log(myArray[1]) //true

console.log(myArray.length) //3
```

### Длина массива

```jsx
const myArray = [1, 2, 3, 4]
console.log(myArray) //[1, 2, 3, 4]
console.log(myArray.length) //4

myArray[2] = 'abc'

console.log(myArray) //[1, 2, 'abc', 4]
console.log(myArray[2]) //'abc'

myArray[4] = true

console.log(myArray) //[1, 2, 'abc', 4, true]
console.log(myArray,length) //5
```

### Методы массивов (функции высшего порядка)

- `push` (добавляет элемент в конец массива)

```jsx
const myArray = [1, 2, 3]
console.log(myArray) //[1, 2, 3]

myArray.push(4)

console.log(myArray) //[1, 2, 3, 4]

```

- `pop` (удаляет элемент с конца массива + может показать через `console.log` что удалил)

```jsx
const myArray = [1, 2, 3]
console.log(myArray) //[1, 2, 3]

myArray.pop()

console.log(myArray) //[1, 2]

const removedElement = myArray.pop()

console.log(myArray) //[1]
console.log(removedElement) //2
```

- `shift` (удаляет первый элемент в массиве + может показать через `console.log` что удалил)

```jsx
const myArray = [1, 2, 3]
console.log(myArray) //[1, 2, 3]

myArray.shift()

console.log(myArray) //[2, 3]

const removedElement = myArray.shift()

console.log(myArray) //[3]
console.log(removedElement) //2
```

- `unshift` (добавляет элемент в начало массива)

```jsx
const myArray = [1, 2, 3]
console.log(myArray) //[1, 2, 3]

myArray.unshift(true)

console.log(myArray) //[true, 1, 2, 3]
```

- `forEach` (перебирает все элементы массива, подставлять их к параметру и для каждого будет вызывать callback функцию)

```jsx
const myArray = [1, 2, 3]
console.log(myArray) //[1, 2, 3]

myArray.forEach(el => console.log(el * 2))

console.log(myArray) //[1, 2, 3] Оргинальный массив не изменился
```

- `map` (создает новый массив и формирует его исходя из результатов произведенной callback функции)

```jsx
const myArray = [1, 2, 3]
console.log(myArray) //[1, 2, 3]

********************************************const newArray = myArray.map(el => el * 3)

console.log(newArray) //[3, 6, 9]
console.log(myArray) //********************************************[1, 2, 3] Оригинальный массив не изменился

```

---

## Деструктуризация

### Деструктуризация обьектов

```jsx
const userProfile = {
	name: 'Danila'
	commentsQty: 23,
	hasSignedAgreement: false,
}

const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(name) //Danila
console.log(commentsQty) //23
```

### Деструктуризация массивов

```jsx
const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne) //Apple
console.log(fruitTwo) //Banana
```

### Деструктуризация в функциях

```jsx
const userProfile = {
	name: 'Danila'
	commentsQty: 23,
	hasSignedAgreement: false,
}

const userInfo = ({name, commentsQty}) => {
	if(!commentsQty) {
		return 'User ${name} has no comments'
	}
	return 'User ${name} has ${commentsQty} comments'
}

userInfo(userProfile) //User Danila has 23 comments
```

---

## Условные инструкции

- `if`
- `if … else`
- `switch`
- тернарный оператор

### Инструкция If

```jsx
if ('Условие') {
	//Блок кода, выполняемый однократно, если 'Условие' правдиво
}
```

```jsx
let val = 10

if (val > 5) {
	val += 20
}

console.log(val) //30
```

Пример IF с оператором отрицания

```jsx
const person = {
	age: 20;
}

if(!person) {
	console.log('Имя не указано')
	// Другие действия в случае, если свойства "name" у обьекта "person" нет
}
```

### Инструкция if…else

```jsx
if (условие)  {
 // Блок кода, если условие правидиво
} else {
	// Блок кода, если условие ложно
}
```

```jsx
let val = 10

if (val < 5) {
	val += 20
} else {
	val -= 20
}

console.log(val) //-10
```

### Инструкция if..else..if

```jsx
if (Условие 1) {
	// Блок кода, выполнияемый, если "Условие 1" правдиво
} else if (Условие 2){
	// Блок кода, если "Условие 2" правидиво
} else {
	// Блок кода, выполняемый однократно, если все остальные ложны
}
```

### Использование If в функциях

```jsx
const sumPositiveNumbers = (a, b) => {
	if (typof a !== 'number' || typeof b !== 'number') {
		return "one of the arguments is not a number"
	}
	if (a <= 0 || b <= 0) {
		return "numbers are not positive"
	}
	return a + b
}
```

### Инструкция switch

```jsx
switch (Выражение) {
	case A:
		// Действие, если выражение === A
		break
	case B:
		// Действие, если выражение === B
		break
	default:
		// Действия по умолчанию
}
```

```jsx
const month = 2

switch (month) {
	case 12:
		console.log('December')
		break
	case 1:
		console.log('January')
		break
	case 2:
		console.log('February')
		break
	default:
		console.log ('it`s not a winter season')
}
```

### Тернарный оператор

У тернарного оператора 3 операнда

Конструкция с тернарным оператором - это выражение (всегда возвращает значение)

```jsx
Условие ? Выражение 1 : Выражение 2

// Рекомендуется :

Условие
	? Выражение 1
	: Выражение 2
```

```jsx
const val = 11

val
	? console.log ('Условие истинно')
	: condole.log ('Условие ложно')
```

```jsx
const val1 = 11
const val2 = 25

val && val2
	? myFn1 (val1, val2)
	: myFn2 ()
```

```jsx
let val = 11
console.log (val >= 0 ? val : -val) //11

val = -5
const res = val >= 0 ? val : -val
console.log(res) //5
```

---

## Циклы

без циклов:

```jsx
let i = 0
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
```

перебор всех элементов массива без цикла:

```jsx
const myArray = [true, 'abc', 10]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
```

перебор всех свойств обьекта без цикла:

```jsx
const myObject = {
	x: 10,
	y: true,
	z: 'abc',
}

console.log(myObject.x)
console.log(myObject.y)
console.log(myObject.z)
```

Типы циклов

- `for`
- `for..in..`
- `while`
- `do..while`
- `for..of..`

### Цикл for

```jsx
for (Начальная инструкция; Условие; Итерационное действие) {
	//Блок кода, выполняемый на каждой итерации
}
```

```jsx
for (let i = 0; i < 5; i++) {
	console.log(i)
}
```

Цикл for можно использовать для массивов (но не рекомендуется, лучше использовать forEach, map…)

```jsx
const myArray = ['first', 'second', 'third']

for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i])
}

//'first' 0
//'second' 1
//'third' 2
```

```jsx
const myArray = ['first', 'second', 'third']

myArray.forEach ((element, index) => {
	console.log(element, index)
})
```

### Цикл while

```jsx
while (Условие) {
	//Блок кода, выполняемый пока условие правдиво на каждой итерации
}
```

```jsx
let i = 0

while (i < 5) {
	console.log(i)
	i++
}
```

бесконечный цикл

```jsx
let i = 0

while (i < 5) {
	console.log(i)
}
```

### Цикл do while

```jsx
do {
	//Блок кода выполняемый на каждой итерации (выполится хотя бы один раз)
} while (Условие)
```

```jsx
let i = 0

do {
	console.log(i)
	i++
} while (i < 5)
```

### Цикл for in

```jsx
for (key in Object) {
	//Действия с каждым свойством обьекта
	//Значение свойства - Object[key]
}
```

```jsx
const myObject = {
	x: 10,
	y: true,
	z: 'abc'
}

for (const key in myObject) {
	console.log(key, myObject[key])
}
```

forEach для обьектов

```jsx
const myObject = {
	x: 10,
	y: true,
	z: 'abc'
}

Object.keys(myObject).forEach (key => {
	console.log(key, myObject[key])
})
```

### Цикл for..of

```jsx
for (Element of Iterable) {
	//Действия с определенным элементом
}

//iterable - Значения, которые можно перебирать
```

```jsx
const myStr = 'Hey'

for (const letter of myStr) {
	console.log(letter)
}
```

```jsx
const myArray = [true, 10, 'abc', null] 

for (const element of myArray){
	console.log(element)
}
```

Не рекомендуется для массивов!

Не используется с обьектами:

```jsx
let myObject = {
	x: 10,
	y: true,
	z: 'abc'
}

for (const prop of myObject) {
	console.log(prop)
}

//Ошибка: myObject is not iterable
```

---

## Модули
