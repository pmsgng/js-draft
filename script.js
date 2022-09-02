'use strict';
// РАБОТА С ПЕРЕМЕННЫМИ 
// let name,admin;
// name = 18;

// admin = name ;

// console.log(admin);

// //


// let a = true;

// console.log(typeof(a))

// const time = () => {
//     alert('Kak dela');
// }

// setTimeout(time,2000)

let nameAge = () => {
    const age = prompt('skolko tebe let');

    if (age > 17) {
        alert('vzrosliy')
    } else if (age !== Number) {
        alert('Chislo vvedi')
        nameAge();
    } else {
        alert('Ti eshe malenkiy');
    }

    let isBoss = confirm('ti boss?');

    if (isBoss === false) {
        alert('A kto boss?')
    } else {
        alert('Ya znayu')
    }
}
// nameAge();

// name > 17 ? alert('prohodi') : alert('Eshe mal')

// let sum = 2;
// sum *= 2 + 2;

// console.log(sum);

// let a = 2 ; 

// console.log(a++);
// console.log(a);

// "" + 1 + 0   = '10'
// " " - 1 + 0  =  -1
// true + false  = 1 
// 6 / "3"   = 2
// "2" * "3"  =  6
// 4 + 5 + "px" =  '9px'
// "$" + 4 + 5   =  '$45'
// "4" - 2     =  2 
// "4px" - 2   =  NaN
// 7 / 0        =   Infinity
// "  -9  " + 5   =  ' -9 5'
// "  -9  " - 5    =    -14
// null + 1      =  1
// undefined + 1 =  NaN

// let qeq = Boolean("")
// console.log(qeq);

const homework = () => {
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);

    a && b == Number ? alert(+a + +b) : alert('vvedite chislo')
    // sum == NaN ? alert('Vvedite chislo') : alert(sum)
}

// homework();

const ravenstvo = () => {
    let a = 'Name'
    let b = 'Name'
    let c = a === b
    console.log(c);

    let ad = '0';
    let ba = 0;
    console.log(ad == ba); // === при строгом сравнение false
}

// ravenstvo();

function nullUndef() {
    const ggg = undefined == null; // больше ничему не равны!!!!!!  равны только друг другу 
    console.log(ggg);
}

// nullUndef();

let elseif = () => {
    if (true) {
        console.log('good');
    }
}
// elseif();

const ageMessage = () => {
    const age = +prompt('How old are u?');

    const message = (age > 17) ? alert('U are big boy!') :
        (age < 18 && age > 13) ? alert('U need more expereance') :
        (age < 14 && age >= 0) ? alert('Do u have a passport?') :
        (age < 0) ? alert('Wats wrong with u?') :
        alert('Use only numbers')
}

// ageMessage();


const ifElseTask = () => {
    const number = prompt('Write a number :');

    if (number > 0) {
        alert('1');
    } else if (number < 0) {
        alert('-1')
    } else {
        alert('0')
    }

}

// ifElseTask();

const resultTask = () => {
    let a = 12;
    let b = 2;
    let res = (a + b < 4) ? 'malo' : 'mnogo'

    console.log(res);
}

// resultTask();

const messageTask = () => {
    let login = 'Director';
    let mess = (login == 'Dima') ? 'Privet' :
        (login == 'Director') ? 'Dobro pojalovat' :
        'Y vas net dostupa!'
    console.log(mess);
}
// messageTask()

const operrators = () => {
    let a = 1;
    let b = 2;
    let c = 3;

    const firstFalse = a > 3 || b > 3 || c > 3; // || возвращает послдее false или первое true 
    const firstTrue = a < 4 && b < 4 && c < 4 // && возвращает последнее true или первое false 
    console.log(firstFalse);
    console.log(firstTrue);
}

// operrators();

const alertTAsk = () => {
    alert(alert(1) || 2 || alert(3)); // alert(1) - undefined, вызов алерта произойдет,
} // но он не вернет значение. Ответ: 2! 
// alertTAsk();


const ifOperators = () => {
    let age = 1;

    //  if(age <= 90 && age >= 14) {    // диапозон
    //     alert('age v diapozone')
    //  } else {
    //      alert('age ne v diapozone')
    //  }

    //  if(!(age <= 90 && age >= 14)) {  // !()
    //     alert('age v diapozone')
    //  } else {
    //      alert('age ne v diapozone')
    //  }

    if (age <= 14 && age >= 90) {
        alert('age around')
    } else {
        alert('not around')
    }

}

// ifOperators();


const userPass = () => {
    const logg = prompt('Loggin');
    console.log(logg)
    if (logg === 'Админ') {
        let pass = prompt('Password');

        if (pass == 'Главный') {
            alert('Hello!')
        } else if (pass === null) {
            alert('Отменено!')
        } else {
            alert('Неверный пароль')
        }

    } else if (logg === '' || logg === undefined) {
        alert('Отменено!')
    } else {
        alert('я Вас не знаю!')
    }
}

// userPass();

const operatorSliyaniya = () => {
    let user;
    let message = user ? 'аноним' : user;
    alert(message);
}

// operatorSliyaniya();

const cycles = () => {
    let i = 5;
    while (i) {
        console.log(`Counter i : ${i}`);
        i--;
    }
}

// cycles();

const cyclesDo = () => {
    let i = 0
    do {
        console.log(i);
        i++;
    } while (i < 5)
}

// cyclesDo();

const cycleFor = () => {
    for (let i = 0; i < 6; i++) {
        console.log(`счетчик i = ${i}`);
    }
}

// cycleFor();

const cycleFor2 = () => {
    for (let i = 0; i < 10; i++) {
        if (i % 2 !== 0) continue;
        console.log(`i = ${i}`);
    }
}
// cycleFor2();

const cycleFor3 = () => {
    ddd: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            const input = prompt(`Значение переменных счетчика: (i:${i},j:${j})`)
            if (!input) break ddd;
        }
    }
    alert('gotovo!')
}

// cycleFor3();

const cycleFor4 = () => {
    for (let i = 2; i <= 10; i++) {
        if (i % 2) continue; // вывод всех четных чисел
        console.log(i);
    }
}

// cycleFor4();

const cycleWhile = () => {
    let i = 0;

    while (i < 3) {
        console.log(`num = ${i}`);
        i++;
    }
}

// cycleWhile();

const cycleFor5 = () => {
    let num;
    do {
        num = +prompt('Vvedite chislo > 100');
    } while (num < 100 && num)
}

// cycleFor5();

const cycle88 = () => {
    let n = 10;

    nextPrime:
        for (let i = 2; i <= n; i++) { // i 2, i 3 , i 4 
            for (let j = 2; j < i; j++) { //  -   j 2 , j 2
                if (i % j == 0) continue nextPrime;
            }

            alert(i); // простое число
        }
}
// cycle88(); // 2 , 3, 


const switchCase = () => {
    let browser = 'Edge';

    if (browser === 'Edge') {
        console.log('u got edge!')
    } else if (browser === 'Opera' || browser === 'Safari' || browser === 'Firefox') {
        console.log('sry we dont supp this')
    } else {
        console.log('try again!')
    }
}

// switchCase();

const switchCase2 = () => {
    let brow = 'Edge'

    switch (brow) {
        case 'Edge':
            console.log('u got this');
            break;
        case 'Opera':
        case 'Safari':
        case 'FireFox':
            console.log('we not sup this');
            break;
        default:
            console.log('Try again!');
    }
}

// switchCase2();

const case3 = () => {
    switch (+prompt()) {
        case 1:
        case 2:
        case 3:
            console.log('Hello');
            break;
        default:
            console.log('Try again!');
    }
}
// case3();

const ifToSwitchCase = () => {
    const num = +prompt();

    switch (num) {
        case 0:
            console.log('0');
            break;
        case 1:
            console.log('1');
            break;
        case 2:
        case 3:
            console.log('2 and 3');
            break;
        default:
            console.log('Try again');
    }
}

// ifToSwitchCase();

const funcWith = (age) => {
    age >= 18 ? alert('Welcome!') : confirm('Are parents agree?')
}
// funcWith(17);

const checkAge = (age) => {
    return (age > 17) || console.log('So small');
}
// checkAge(17);

const minNum = (a, b) => {
    return (a < b) ? a : b
}
// console.log(minNum(7,5));

const getNum = () => {
    let a = +prompt();
    let b = +prompt();

    return (b < 1) ? console.log('Naturalnoe chislo vvedi!') : alert(a ** b)
}

// getNum();

const callBackFunc = (answer, yes, no) => {
    if (confirm(answer)) yes()
    else no();
}

function showYes() {
    return console.log('YES');
}

function showNo() {
    return console.log('NO');
}

// callBackFunc('da or net?', showYes, showNo)
let numAccum;
const newFunck = function addItem(peremennaya) {
    numAccum = function addItem2() {
        return 'Данные успешно переданы во внешнюю переменную';
    }
    return numAccum();
}
// console.log(newFunck(numAccum));

const userName = () => {
    let isCurrentName = confirm('Тебя зовут Чунга чанга?')
    if (isCurrentName) {
        alert('Очень,приятно,меня зовут Бинго-бонго!')
    } else {
        alert('Не ври Чунга-чанга!')
        userName();
    }
}

// userName();

const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no()
}

// const question = 'Ты фронтенд деволопер?'
// const answYes = () => alert('Da!');
// const answNo = () => alert('No!');

// ask(question,answYes,answNo)
// let a=0;  // рекурсия    
// const rec = () => {
//     a++;
//     if(a > 10) return;
//     rec();
// }
// rec();
// console.log(a)


const showPrime = (n) => {
    flag: for (let i = 2; i < n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue flag;

        }
        alert(i)
    }
}
// showPrime(10)

// поверка на простое число
// const n = 5;
// if(n > 1 && n % 2 !== 0) 
//     console.log(n);

const helloBro = () => {
    const userName = prompt('Как тебя зовут?').toUpperCase();

    if (userName == 'НИКИТА' || userName == 'НИКИС') {
        alert('Никис пикис здарова!')
        alert('Пусть теперь попробует Вадик!')
    } else if (userName == 'ВАДИК' || userName == 'ВАДИМ') {
        alert('Оооооо,брат здарова!')
        alert('В баньку едем!')
        alert('Дай Никис попробует!')
    } else if (userName == 'МАРЬКА' || userName == 'МАРИАМ') {
        alert('Жена! Отпусти в баньку!')

        function askWife() {
            const answer = confirm('Отпустишь?');
            if (answer) {
                alert('Ура едем в баню!');
            } else {
                alert('Что-то пошло не так... Попробуй еще раз!')
                askWife();
            }
        }
        askWife();
    } else if (userName == '' || userName == null) {
        alert('Введи свое имя!')
        helloBro();
    }
}
// helloBro();

const km = () => {
    const arbat = 100;
    const arbatOdincovo = 80;
    const odincDubrovo = 200;
    const dubrovoNogin = 30;

    const sum = arbat + arbatOdincovo + odincDubrovo + dubrovoNogin
    return sum
}
// console.log(km());

// let a = {
//     name: 'Anna',
//     age: 13,
// };

// let key = 'age';

// console.log(a[key]);

// const fruit = 'banana';

// const obj = {
//     [fruit] : 'banana'
// }
// console.log(obj[fruit]);

// const obj = {};
// obj.name = 'Jhon';
// obj.surname = 'Smith';
// console.log(obj);
// obj.name = 'Pete';
// console.log(obj);
// delete obj.name; 
// console.log(obj);

const isEmpty = (object) => {
    for (let key in object) {
        return false;
    }
    return true;
}

// console.log(isEmpty(obj));
// obj['time'] = '8:30';
// console.log(obj);
// console.log(isEmpty(obj));

// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }

//   const sumSal = (sal) => {
//     let sum = 0;
//     let counter = 0;
//       for(let key in sal) {
//           sum = sum + sal[key]
//           counter++;
//       }
//       if(counter > 0) {
//           return sum;
//       } else {
//           return 'Пустой объект'
//       }
//   }

//   console.log(sumSal(salaries));
//   console.log(salaries);

// const multiplyNumeric = (obj) => {
//     for(let key in obj) {
//         (typeof obj[key] == 'number') ? obj[key] *= 2 : null;
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
// multiplyNumeric(menu);
// console.log(menu);

// let user = {
//     name: "Иван",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
// // const copyObj = JSON.parse(JSON.stringify(user));

// const copyObj = {...user}
// copyObj.sizes.width = 100;
// copyObj.name = 'Катя'

// console.log(user);
// console.log(copyObj);

// let user = {
//     age: 20,
//     name: "Иван",
//     sizes: {
//       height: 182,
//       family: {
//           mama : 'Dasha',
//           papa: 'Slava',
//       }
//     }
//   };


//  ПЕРЕБОР ВЛОЖЕННЫХ ОБЪЕКТОВ ЧЕРЕЗ ЦИКЛ
//   for(let key in user) { 
//       if(typeof user[key] == 'object') {
//         for(let keyInKey in user[key]) {
//             typeof user[key][keyInKey] == 'number'  ? user[key][keyInKey] *= 2 : user[key][keyInKey]
//         }
//       }
//       typeof  user[key] == 'number' ? user[key] *= 2 : user[key]
//   }

//   console.log(user);


// ПЕРЕБОР ОБЪЕКТА ЧЕРЕЗ РЕКУРСИЮ
const pereborObj = (obj) => {
    for (let key in obj) {
        console.log(key);
        if (typeof obj[key] == 'object') {
            pereborObj(obj[key])
        }
    }
}

// pereborObj(user)


// let count = 0;
// const recursion = () => {
//     if(count <  10) {
//         console.log(count);
//         count++;
//         recursion();
//     }
// }

// recursion();



// ГЛУБОКОЕ КЛОНИРОВАНИЕ ОБЪЕКТА
// const newUser = JSON.parse(JSON.stringify(user))
// console.log(newUser);


// THIS В ОБЪЕКТЕ
// let user = {
//     name: prompt('what is ur name?'),
//     age: prompt('how old are u?'),

//     sayHi() {
//       alert(`Hi, ${this.name}!`); 
//     },

//     male: 'Man' ,

//     askAge() {
//         alert(`You ${this.age} years old!`)
//     }

//   };
//   if(user.name !== null && user.name !== '') user.sayHi();
//   if(user.age !== null && user.age !== '')user.askAge()

// let user = {
//     firstName: "Илья",
//     sayHi() {
//         let hi = () => console.log(this.firstName);
//         hi();
//     },
//   };

//   user.sayHi(); // Илья

// let user = {
//     name: "Джон",
//     go: function() { console.log(this.name) }
//   };

//   user.go();

// let calculator = {
//     pow() {
//         return this.a * this.b;
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     create() {
//         this.a = +prompt('a?');
//         this.b = +prompt('b?');
//     }
//   };

//   calculator.create();
//   alert(calculator.sum());
//   alert(calculator.pow())

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//     }
//   };



// КОНСТРУКТОРЫ 

// function User (name) {
//     this.name = name;
//     this.sayHi = () => {
//         console.log(`My name is ${this.name}`)
//     }
// }

// console.log(new User('Pasha').sayHi())

// function Calc (a,b) {
//     this.sum = () => {
//         return this.a + this.b
//     },

//     this.create = () => {
//         this.a = a;
//         this.b = b;
//     }
// }


// let calculator = new Calc(2,2);
// calculator.create()
// console.log(calculator.sum())

// function Accm(value) {
//     this.count = value;
//     this.read = () => {
//         let number = +prompt('Write a number')
//         this.count += number;
//     }
// }

// let newAccum = new Accm(0);

// newAccum.read();
// alert(newAccum.count);
// newAccum.read();
// alert(newAccum.count);



// ОПЦИОНАЛЬНАЯ ЦЕПОЧКА
// const obj2 = {
//     name: 'Alice',
//     age: 13,
//     parents: {
//         papa: 'Dima',
//         mama: 'Masha',
//     }
// }
// const obj3 = {
//     name: 'Dima',
// }

// console.log(obj2.parents?.papa); 
// console.log(obj3.parents?.papa);

// console.log(Math.floor(1.11231231));
// console.log(Math.ceil(1.1));
// console.log(Math.round(1.5));
// console.log(Math.trunc(1.9));
// console.log(typeof +(12.434).toFixed(2));
// console.log(+(0.1 + 0.2).toFixed(2));
// console.log(0 === -0);
// console.log(isNaN('123123'));

// console.log(parseInt('12.233px'));
// console.log(parseFloat('12.23rem'));
// console.log(parseInt('a123'));  // NaN

// console.log(Math.random());
// console.log(Math.max(2,4,3,2,12));
// console.log(Math.pow(2,2));

// const sumNum = () => {
//     let a = +prompt('a?');
//     let b = +prompt('b?')
//     let sum = a + b;
//     alert(sum)
// }

// sumNum();

// console.log(Math.round(6.35 * 10) / 10);

// const readNumber = () => {
//     const num = +prompt('number!');
//     isNaN(num) ? readNumber() : null

//     return console.log(num);
// }
// readNumber(); 

// function random(min,max) {
//     return min + Math.random() * (max - min)
// }

// console.log(random(0,3));
// console.log(random(5,6));

// console.log('aMFasfmpf\n sdadijsapdsad\n dasdsadkasdad');

// console.log('Asdasdsd'[0].toLocaleLowerCase());

// console.log('It be a cool day'.indexOf('day'));

// console.log("Widget with id".includes("With"));

// console.log('привет меня зовут Дима'.includes('Дима'));

// console.log('Владислав'.slice(0,4)); 
// console.log('Владислав'.slice(5)); 
// console.log('Владислав'.substr(5,4)); 

// console.log('ц'.codePointAt());
// console.log('Ц'.codePointAt());
// console.log('ц' > 'Ц');

// console.log('Zachem'.localeCompare('Zachem'));

// const ucFirst = (str) => {
//     const newStr = str[0].toUpperCase() + str.slice(1)
//     return console.log(newStr);
// }

// ucFirst('как твои дела')


const checkSpam = (str) => {

    const lowStr = str.toLowerCase();
    if (lowStr.includes('viagra') || lowStr.includes('xxx')) return true;

    return false
}

//  console.log(checkSpam('XXX'));


const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...'
    } else {
        return str
    }
}

// console.log(truncate('Vladislav',5))

// const arr = ['Jazz','Bluze'];
// arr.push('Rock-n-roll');
// const centerNumber = +(arr.length / 2).toFixed() - 1;
// console.log(centerNumber);
// arr[centerNumber] = 'Classic'
// console.log(arr);
// console.log(arr.shift(0));
// console.log(typeof arr.unshift('Rap','Reggi'));
// console.log(arr);

// let arr = [];

// const sumInput = () => {
//     let value = prompt('vvedi chislo');
//     value = value.trim();

//     if(value === '' || isNaN(value) || value === null ) {
//         return;
//     } else {
//         arr.push(+value)
//         sumInput();
//     }
// }
// console.log(sumInput()); 
// let sum = arr.length;
// console.log(sum);
// console.log(arr);

let arr = ["Я", "изучаю", "JavaScript"];
// console.log(arr.splice(1,1));
// console.log(arr.splice(0,1,'Влад','изучает'));
// console.log(arr);
// let arr2 = arr.slice();  // возвращает новый массив
// arr2.splice(0,1)
// console.log(arr2);

// console.log(arr.concat('6','month')); // возвращает новый массив
// console.log(arr.indexOf('JavaScript'));
// console.log(arr.includes('JavaScript'));

// console.log(arr.find(item => item == 'Я'));
// console.log(arr.findIndex(item => item == 'JavaScript'));

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];

//   let usersFilter = users.filter(item => item.id < 3)
//   console.log(usersFilter);

// const arr5 = ["Вадим","Никита","Владислав",'Мариам'];

// let newArr = arr5.map(item => {
//    return item.slice(0,3) + '...'
// })

// console.log(newArr);

// let arr2 = [5,3,6,4,8,4,9];

// let newArrr = arr2.sort((a,b) => a - b)
// console.log(newArrr);

// let namesStr = 'Вася, Петя, Маша';
// let namesArr = ['Вася','Петя','Маша']


// console.log(namesStr.split(','));
// console.log(namesArr.join('! '));

// let arrReduce = [1, 2, 3, 4, 5];

// console.log(arrReduce.reduce((sum,current) => sum + current , 0));  // sum === 0 на первой итерации

// let isArr = [];
// let isObj = {};

//  console.log(Array.isArray(isArr));
//  console.log(Array.isArray(isObj));

// let str = "тест какой-то строки! Пхахаха";

// console.log(str.split());

// let arr8 = ['Вася', 'Петя', 'Маша'];

// console.log(arr8.join(' + '));

// let arr2 = [1, 2, 3, 4, 5];
// let res = arr2.reduce((sum,curr) => sum + curr , 0)
// console.log(typeof res);

// const camelize = (str) => {
//    let arr = str.split('-');

//    let newStr = arr.map( (item, ind) => {
//        return ind == 0 ? item : item[0].toUpperCase() + item.slice(1)
//    }).join('');
//    return newStr
// } 

// console.log(camelize('background-color')); 


let arr4 = [5, 3, 8, 1];

// const filterRange = (array, a , b) => {
//     const newArr = array.filter(item => {
//        return item >= a && item <= b
//     })
//     newArr.sort((a,b) => a - b)
//     return newArr;
// }
// console.log(filterRange(arr4, 1, 5))
// console.log(arr4)






// function Calculator() {
//     this.calculate = (str) => {
//         let res = +str;
//         return res;
//     },
//     this.methods = {
//         '-' : (a, b) => a - b,
//         '+' : (a, b) => a + b,
//     }

//     this.addMethod = (name , func) => {

//     }
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// const arrNames = users.map( item => item.name);
// console.log(arrNames);






// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// const usersMapped = users.map( user => {
//     return { fullName: `${user.name} ${user.surname}`,id: user.id };
// })

// console.log(usersMapped);







// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr3 = [ vasya, petya, masha ];

// const sortByAge = (arr) => {
//     let sortArr = arr.sort( (a, b) => {
//       return  a.age > b.age ? 1 : -1
//     })
//     return sortArr;
// }
// console.log(sortByAge(arr3));   




// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr2 = [ vasya, petya, masha ];


// const getAverageAge = (arr) => {
//     // let ageSum = 0;
//     return arr.reduce( (state, item) => state + item.age , 0) / arr.length

// }
// console.log(getAverageAge(arr2));





// function unique(arr) {
//     /* ваш код */
//     let res = [];

//     for(let str of arr) {
//         if(!res.includes(str)) {
//             res.push(str)
//         }
//     }
//     return res
// }

//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];






//   console.log( unique(strings) ); // кришна, харе, :-O

// let arrayLike = {
//     0: "Hello",
//     1: "World",
// };
// let count = 0;
// for (let i in arrayLike) {
//     count++;
// }
// console.log(count);





// let obj3 = {
//     name: "John",
//     age: 30
//   };
// console.log(Object.entries(obj3));

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
// console.log(prices);  





// function unique(arr) {
//     /* ваш код */
//     let setArr = new Set(arr)
//     return Array.from(setArr);
//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   console.log( unique(values) ); // Hare,Krishna,:-O




// let map = new Map();

// map.set('1', 2);
// map.set(1, '4');

// console.log(map.keys(), map.values(), map.entries());

// const obj2 = {
//     'age' : 13,
//     'asdasdad' : 'Sasha',
//     town : 'Moscow',
// }

// let map = new Map(Object.entries(obj2))
// // console.log(map.entries());

// for(let item of map.entries()) {
//     console.log(item.slice(0,1)); 
// }



// const objForMap = {
//     'age': 20,
//     'name': 'Petya',
//     'male' : 'Female',
// }

// const map = new Map(Object.entries(objForMap));

// console.log(map);
// for(let [key,value] of map) {
//     console.log(typeof value);
// }

// console.log(map.get('age')); 
// console.log(map.has('name'));
// console.log(map);

// map.forEach((val,key,mapa) => {
//     console.log(val,key);
// })

// console.log([...map]);
// console.log(Array.from(map));

// const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);

// const users = [
//     {'name' : 'Anna'},
//     {'name' : 'Dima'},
//     {'name' : 'Vlad'},
// ];

// const visits = new Map();

// visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//     .set(users[2], new Date(new Date().getTime() + 5000 * 60))

//     function lastVisits(user) {
//         return visits.get(user)
//     }

//     console.log(lastVisits(users[1]));
//     console.log(lastVisits(users[2]));

// const asnwerFunc = () => {
//     const answer = confirm('Отпустишь своих сотрудников домой?');
//     if(answer) {    
//         alert('Нарек,ты лучший Армянин!')
//     } else {
//         alert('Не правильный ответ! Попробуй еще раз');
//         asnwerFunc();
//     }
// }
// // asnwerFunc();

// const arinaQuestion = () => {
//     const answer = prompt('Привет,как зовут тебя?');
//     answer.toLowerCase();
//     if(answer == 'арина') {
//         alert('Очень приятно!');
//         const alco = confirm('Пойдем бухать сегодня?')
//         if(alco)
//             alert('Замечательно! Пьем виски!')
//     }
// }
// // arinaQuestion();    

// const qqq = () => {
//     const qwues = confirm('сделаешь сегодня план?')
//     if(qwues) {
//         alert('Отлично! Берем тебя в МЗП');
//     } else {
//         alert('Неверный ответ! Еще раз!)) ')
//         qqq();
//     }
// }
// qqq();

// const map1 = new Map(); 
// console.log(map1)
// map1.set('asdasd',23)
// console.log(map1)
// const obj4 = {
//     asdsd: 'asdasdad',
// }

// console.log(obj4['asdsd'])
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук",    50]
//   ]);

// for(const veget of recipeMap.entries()) {
//     console.log(veget)
// }  

// const obj5 = {
//     name: 'tata',
//     age: 30,
// }

// let map2 = new Map(Object.entries(obj5))
// console.log(map2)

// let map11 = new Map();
// map11.set('banana', 1);
// map11.set('orange', 2);
// map11.set('meat', 4);

// let obj11 = Object.fromEntries(map11)
// console.log(obj11);

// const users = [
//     {name: 'elena'},
//     {name: 'masha'},
//     {name: 'dima'}
// ];

// const visits = new Map();

// visits 
//     .set(users[0], new Date())
//     .set(users[1], new Date( new Date().getTime() + 1000 * 60))
//     .set(users[2], new Date( new Date().getTime() + 5000 * 60))

// function getLastVisit(user) {
//     return visits.get(user)
// }

// console.log(getLastVisit(users[1]));

// const set2 = new Set([1,2,3,3,4,5,5,6,'qew']);
// console.log(set2);
// set2.add(10).add(20);
// console.log(set2);
// console.log(set2.has('qwe'))
// console.log(set2.entries());
// console.log(set2.keys());

// function uniqValues(array) {
//     const set33 = new Set(array);
//     return [...set33];
// }

// console.log(uniqValues([1,2,2,2,3,3,3,4,4,4,5,5,6]));

// const unique = (arr) => {
//     // return Array.from(new Set(arr)) 
//     return [...new Set(arr)]  // более упрощенный метод со спред оператором
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values));

// const aclean = (arr) => {
//     let obj = {};

//     for(let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split('').sort().join('');
//         obj[sorted] = arr[i];
//     }

//     return Object.values(obj)
// }

// let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr2));

// let map2 = new Map();

// map2.set("name", "John");

// let keys = map2.keys();
// console.log(keys);
// let arr2 = [...keys]
// arr2.push('papa')
// console.log(arr2);

// let obj2 = {
//     name: 'weak map'
// };

// const map222 = new WeakMap([
//     [obj , 'qwerty']
// ]);
// // get set delete has 

// obj2 = null; 
// console.log(map222);

// const cache = new WeakMap();

// const cacheUser = (user) => {
//     if(!cache.has(user)) {
//         cache.set(user, Date.now())
//     }
//     return cache.get(user)
// }

// let lena = { name: 'Elena'};
// let alex = { name: 'Alex'};

// cacheUser(lena);
// cacheUser(alex);

// console.log(cache.get(lena));
// console.log(cache.get(alex));


// const users = [
//     {name: 'elena'},
//     {name: 'masha'},
//     {name: 'dima'}
// ];

// const visits = new WeakSet();

// visits.add(users[0]).add(users[1]).add(users[2])

// console.log(users)

// const obj1 = {
//     name: 'dasha',
//     age: 13,
//     male: 'female',
// }
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };

//   const doublePrisez = Object.entries(prices).map( ([key, value]) => [key, value * 2] );
//   console.log(doublePrisez);
//   console.log(Object.fromEntries(doublePrisez));

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   const sumSalaries = (salaries) => {
//     if(salaries) {
//        const newSalArr = Object.values(salaries)
//        let sumSal = 0;
//        for(let val of newSalArr) {
//            sumSal += val;
//        }
//        return sumSal;
//     } else {
//         return 0;
//     }
//   }

//   console.log(sumSalaries(salaries));

//   function countKeys(obj) {
//       return Object.keys(obj).length
//   }
//   console.log(countKeys(salaries));


// let arr1 = ['papa', 'mama'];

// let [father, mother] = arr1;
// console.log(father,mother);

// let [firstName, surname] = "Ilya Kantor".split(' ');

// let [name2, , title] = ['Kata',15, 'Title']
// console.log(title);

// let [one, two, three] = new Map([[{1:1},1],[2,2],[3,3]])
// console.log(one);

// let user = {
//     name: "John",
//     age: 30
//   };

// let map = Object.entries(user);
// for(let [key,value] of map) {
//     console.log(key,value)
// }  

// let user2 = new Map();
// user2.set("name", "John");
// user2.set("age", "30");

// console.log(user2);

// console.log(Object.fromEntries(user2)); 


// let [arg1, arg2, ...args] = ['Papa', 'mama', 'sister', 'brother' , '15'];
// console.log(args);

// let options = {
//     title: "Menu",
//     width: 100,
//     hight: 200
//   };

//   let {title:t, width, hight} = options;
//   console.log(t, width, hight);

//   let options = {
//     title: "Menu"
//   };

//   let {width = 100, height = 200, title} = options;

//   console.log(options);
//   console.log(width);

// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };

//   let {title, ...rest} = options;
//   console.log(rest.height);
//   for(let key in options) {
//       console.log(options[key]);
//   }

//   console.log(options['title']);

// const age1 = 15;

// {
//     const age1 = 20;
//     console.log(age1);
// }

// console.log(age1);

// let title, w, h;

// ({title, w, h} = {title: 'part 1', w: 100, h: 100})

// console.log(title);

// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };

//   let {
//       size: {
//           width,
//           height
//       },
//       items: [item1, item2],
//       ...rest
//   } = options

//   console.log(rest);
//   console.log(width);
//   console.log(height);
//   console.log(item1);
//   console.log(item2);

// const obj1 = {
//     name: 'Masha',
//     age: 15,
//     male: 'Female'
// };

// let {name,age} = obj1;
// console.log(Object.keys(obj1));

// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };

//   function showMenu({title = 'Films', w = 100, h = 200, items = []}) {
//     console.log(`${title} ${w} ${h} ${items}`);
//   }
//   showMenu(options)

// let user = {
//     name: "John",
//     years: 30
//   };

//   let {name,years: age, isAdmin = false} = user;
//   console.log(age);
//   console.log(isAdmin);

// const topSalary = (salaries) => {
//     let max = 0;
//     let maxName = null;

//     for (let [name, sal] of Object.entries(salaries)) {
//         if (max < sal)
//             max = sal, maxName = name;
//     }
//     return maxName;
// }


// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250
// };


// console.log(topSalary(salaries));

// const date = new Date(2012,1,20, 3, 12);
// console.log(date);
// const dateNow = new Date();
// const newDate = dateNow - date;
// console.log(new Date(newDate));

// let date = new Date();  // 3 января 2012 года

// const getWeekDay = (date) => {
//     let days = ['ВС','ПН', "ВТ", 'СР', 'ЧТ', "ПТ", "СБ"]
//     return days[date.getDay()]
// }

// console.log( getWeekDay(date) );   
// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };

//   console.log(JSON.stringify([1, 2, 3])); 

// let newStudent = JSON.parse(JSON.stringify(student));
// newStudent.name = 'Peter';
// console.log(student.name , newStudent.name);

// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {                          //вызов вернет 8  // вызов вернет 4   // вызов вернет 2
//       return x * pow(x, n - 1); // 2 * pow(2,3) => 2 * pow(2,2) => 2 * pow(2,1)
//     }
//   }

//   console.log( pow(2, 4) ); // 16

// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };

//   console.log(Object.values(company));

//   const objjj = { 
//       name: 'Pasha',
//       age: 19,
//       male: 'male'
//   }

// for(let key in objjj) {
//     console.log(objjj[key]);
// }

// function sumTo(n) {
//     if(n == 1) return 1;
//     return n + sumTo(n - 1)
// }
// console.log(sumTo(999));

// function sum(a, b,...args) {
//     return console.log(`${a + b} and ${args[1]}`);  // args = []
//   }

//   sum(1,2,3,4,5,6,7,8)


// function showName() {
//     console.log(arguments);

//     // Объект arguments можно перебирать
//     // for (let arg of arguments) alert(arg);
// }

// // Вывод: 2, Юлий, Цезарь
// showName("Юлий", "Цезарь");

// let name1 = "John";

// function sayHi() {
//   console.log("Hi, " + name1);
// }

// name1 = "Pete";

// console.log(sayHi());

// function makeWorker() {
//     let name = "Pete";

//     return function() {
//       console.log(name);
//     };
//   }

//   let name = "John";

//   // create a function
//   let work = makeWorker();

//   // call it
//   work();

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete"; // (*)
// sayHi(); // Pete


// function makeCounter() {
//     let count = 0;

//     return function() {
//       return count++; // есть доступ к внешней переменной "count"
//     };
//   }

//   let counter = makeCounter();
//   let counter2 = makeCounter();

//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//   console.log(counter2());

// let count = 0;

// function counterUp() {
//     return function() {
//         return count++;  
//     } 
// }
// let f1 = counterUp();
// let f2 = counterUp();

// console.log(f1()); 
// console.log(f1()); 

// console.log(f2()); 
// console.log(f1()); 

// let sayHi = function ff(who) {
//     if(who) {
//         console.log(who);
//     } else {
//         ff('GG')
//     }
// }

// sayHi();
// let count = 0;
// const incCounter = () => {
//     return count++;
// }
// const decCounter = () => {
//     return count--;
// }
// incCounter();
// incCounter();
// console.log(count);

// function getNumber() {
//     const num = 9;

//     const ff = function() {console.log(num)}

//     return ff;
// }

// let timer = setInterval(() => console.log('tick'),1000);
// setTimeout( () => clearInterval(timer),5500)

// let timer = setTimeout(function tick() {
//     console.log('tick');
//     setTimeout( tick, 2000)
// },2000);

// clearInterval(timer);

// const printNumbers = (from,to) => {
//     let current = from;

//     let timer = setInterval(() => {
//         console.log(current);

//         if(current == to) clearInterval(timer);
//         current++;

//     },1000)
// }

// console.log(printNumbers(1,10)) 


// const printNumbers = (from,to) => {
//     let current = from;

//     setTimeout(function ff() {
//         console.log(current);

//         if(current < to) {
//             setTimeout(ff,1000)
//         }
//         current++;

//     },1000)
// }

// printNumbers(1,5)

// let user = {
//     firstName: 'Vasya',
//     sayHi() {
//         console.log(`Hi, ${this.firstName}`);
//     }
// }
// let sayHi = user.sayHi.bind(user);

// setTimeout(() => sayHi(),1000)

// user = { 
//     sayHi() {
//         console.log('New person here!');
//     }
// }

// let user = {
//     name: 'Pasha',
//     age: 11,
//     sayHi() {
//         console.log(`Hi,my name is ${this.name},I am ${this.age}`);
//     }
// }

// let newUser = {
//     name: 'Dima',
//     age: 15,
// }

// let sayHi = user.sayHi.bind(newUser)

// sayHi();

// function sayHi() {
//     console.log(this.test);
//     return null;
// }
// sayHi.test = 5;


// let objj = {
//     test: 100,
// }
// let sayHiSay = sayHi.bind(objj)

// console.log(sayHiSay());


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }

//   let user = {
//     name: 'Вася',

//     loginOk() {
//       alert(`${this.name} logged in`);
//     },

//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },

//   };

//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// const array = [1, 2, 3, 4, 5];

// function multBy(array, n) {
//     return array.map((i) => {
//         return i * n; 
//     })
// }

// console.log(multBy(array, 5));

// Array.prototype.multBy = function(n) {
//     // console.log(this);

//     return this.map(item => {
//         return item * n;
//     })
// }

// console.log(array.multBy(2))

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(ruUrl('sberbank'));

// function logPerson() {
//     console.log(`Person ${this.name} , ${this.age} years old.`);
// }

// const ann = {
//     name: 'Anna',
//     age: 20,
// };

// const sasha = {
//     name: 'Sasha',
//     age: 25,
// };

// function bindF(person) {
//     return function() {

//     }
// }

// console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working',
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data recived', backendData);

//     },2000)
// },2000)

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working',
//         }
//         resolve(backendData)
//     },2000)
// })

// p.then((data) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)
//         }, 2000)
//     })

// })
// .then((clientData) => {
//     console.log('Data received', clientData);
// })
// .catch(err => console.error('Error', err))
// .finally(() => console.log('Finally'))
// const p = new Promise((res,rej) => {
//     setTimeout(() => {
//         console.log('do something...');

//         const data = {
//             status: 200,
//             name: 'Alex',
//             age: 20,
//         }
//         res(data)

//     },2000)

// })

// p.then((data) => {
//     console.log('Again do something...');
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log('Well done!');
//             res(data)
//         },2000)
//     })
// }).then(data => {
//     setTimeout(() => {
//         console.log(data);
//     },2000)
// })
// console.log('Подготовка данных...');

// const p = new Promise((res,rej) => {
//     setTimeout(() => {
//         const data = {
//             name: 'Alex',
//             age: 15,
//             male: 'Female',
//         }
//         console.log('Обработка данных...');
//         res(data)
//     },2000)
// })

// p.then(data => {
//     return new Promise((res,rej) => {
//         data.health = '100%'
//         setTimeout(() => {
//             console.log('Изменение данных...');
//             res(data)
//         },2000)
//     })
// })
// .then((data) => {
//     setTimeout(() => {
//         console.log('Успешно!',data);
//     },2000)
// })

// console.log('Подготовка данных...');

// const p = new Promise((res,rej) => {

//     setTimeout(() => {
//         const data = {
//             name: 'Alex',
//             age: 15,
//             male: 'Female',
//             stage: '3 years',
//         }
//         res(data)
//     },2000)
// }).then(data => {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//          console.log('Измененние данных...');
//          data.stage = '1 year';
//          res(data)   
//         },2000)
//     })
// }).then((data) => {
//     setTimeout(() => {
//         console.log('Успешно!');
//         console.log(data);
//     },2000)
// })


// const sleep = ms => {
//     return new Promise(res => {
//         setTimeout(() => res(), ms)
//     })
// }

// sleep(2000).then(() => console.log('After 2 sec'))

// Promise.all([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('All promises');
//     })

// Promise.race([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('Race promises');
//     })


// const person = Object.create(
//     {
//         calculateAge() {
//             console.log('Age', new Date().getFullYear() - this.birthYear );
//         }
//     }, 
//     {
//     name: {
//         value: 'Vladilen',
//         enumerable: true,  // отображение поля в объекте
//         writable: true, // возможность изменения свойства в объекте
//         configurable: true, // можно удалить ключ из объекта
//     },
//     birthYear: {
//         value: 1993,
//         enumerable: false,
//         writable: false,
//         configurable: false // нельзя удалить поле в объекте
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear
//         },
//         set(value) {
//             document.body.style.background = 'red'
//             console.log('set age', value);
//         }
//     }
// })

// // console.log(person.age); // 29
// // console.log(person.age = 100);
// // console.log(person.age);

// // console.log(person);
// for(let key in person) {
//     if(person.hasOwnProperty(key)) {
//         console.log(key,person[key]);

//     }
// }

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// }

// class Animal {

//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I am Animal');
//     }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true,
// // })

// class Cat extends Animal {
//     static type = 'CAT'
//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }
//     voice() {
//         super.voice();
//         console.log('I am Cat');
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black',
// })

// cat.voice();
// console.log(cat);
// cat.voice();

// console.log(cat.ageInfo); 
// console.log(cat.ageInfo = 8);
// console.log(cat.ageInfo);

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = 'none'
//     }

//     show() {
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector) 
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red',
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 150,
//     color: 'green',
// })

// class Circle extends Box {
//     constructor(options) {
//         super(options)

//         this.$el.style.borderRadius = '50%'
//     }
// }

// const circle = new Circle({
//     selector: '#circle',
//     size: 90,
//     color: 'blue'
// })


// class Car {
//     constructor(options) {
//         this.car = options.car
//         this.color = options.color
//         this.typeCar = options.typeCar
//     }
// }

// class Audi extends Car {
//     constructor(options) {
//         super(options)
//     }
//     voice () {
//         console.log('Lets go Audi');
//     }
// }

// let audi = new Audi({
//     car: 'Audi',
//     color: 'red',
//     typeCar: 'sedan',
// })

// console.log(audi);
// audi.voice();

// let user = {
//     name: "John"
//   };

// let user2 = {};
// Object.defineProperty(user,'name',{
//     value: 'Alex'
// })

// const descriptor = Object.getOwnPropertyDescriptor(user,'name')

// console.log(descriptor.writable = false);
// Object.defineProperty(user,'name',{
//     value: 'Dima',
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(descriptor);

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// }

// class Animal {
//     constructor(props) {
//         this.name = props.name
//         this.age = props.age
//         this.hasTail = props.hasTail
//     }

//     voice() {
//         console.log('I am Animal!');
//     }

// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// })

// class Cat extends Animal {
//     constructor(props) {
//         super(props)
//         this.color = props.color
//     }
// }


// const cat = new Cat ({
//     name: 'Cat',
//     age: 3,
//     hasTail: false,
//     color: 'red'
// })

// console.log(cat);


// const delay = ms => {
//     return new Promise(res => setTimeout(() => res(), ms))
// }

// delay(2000).then(() => console.log('two sec'))

// const url = 'https://jsonplaceholder.typicode.com/todos'
// function fetchTodo() {
//     return new Promise(res => setTimeout(() => res(fetch(url)),2000) )
// }
// fetchTodo().then((response) => console.log(response))

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000)
//     .then(() => fetch(url) )
//     .then(response => response.json())
// }

// fetchTodos()
// .then(data => {
//     console.log(data);
// })
// .catch(e => console.log(e))

// async function fetchAsyncTodos() {
//     console.log('Fetch todo started...')
//     try {
//         await delay(2000)
//         const response =  await fetch(url)
//         const data = await response.json()
//         console.log(data);
//     } catch(e) {
//         console.error(e);
//     }

// }

// fetchAsyncTodos();

// let animal = {
//     eats: true,
//     walk() {
//       console.log("Animal walk");
//     }
//   };

//   let rabbit = {
//     jumps: true,
//     // __proto__: animal,
//   };
// // Object.setPrototypeOf(rabbit,animal)
// //   rabbit.__proto__ = animal;


//   // walk взят из прототипа

//   console.log(rabbit.walk());


// let a = 7;

// setTimeout(() => {
//     a = 99
// },2000)

// console.log(a);

// let p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//        resolve(a = 99) 
//     },2000)
// })

// p.then(() => {
//     console.log(a);
// })

// let p = new Promise(res => res(fetch(url,)))

// p.then((resp) => {
//     if(resp.status === 200) {
//         console.log('Запрос успешно выполнен!',resp);
//     }
// })

// let textPms = document.querySelector('.word');
// console.log(textPms.textContent.split().map(word => word + '0'));

// let p = new Promise(res => {
//     console.log('Promise started work...');
//     res({name: 'Katya', age: 15,})
// })
// .then((data) => {
//     setTimeout(() => {
//         console.log(`Hi, ${data.name}, I'm ${data.age} years old!`);
//     },2000)
// })

// let p = new Promise( res => {
//     console.log('Promise started work!');
//     res([1,2,3,4,5,6,7])
// })
// .then(data => {
//     setTimeout(() => {
//         console.log(data.map(item => item * 2));
//     },2000)
// })

// const div = document.createElement('div');
// const divSecond = document.createElement('div');

// divSecond.classList.add('second')
// div.classList.add('text-dom')

// const container = document.querySelector('.container')
// console.log(container);


// container.appendChild(div)
// container.append(divSecond)

// div.textContent = 'PARTY TO NIGHT';
// divSecond.textContent = '03.04.2022'
// divSecond.style.fontSize = 2 + 'rem'

// const ul = `
//     <ul>
//         <li>Palermo</li>
//         <li>Mutniy</li>
//         <li>Sonya</li>
//     </ul>
// `

// div.innerHTML = ul;

// try {
//     console.log('Start programm...');
//     lflflflf;
// } catch (err) {
//     console.error(`Oh, mistake about ${err.message}`);
//     setTimeout(() => {console.log('one more err')},1000)
// }
// console.log('Program do after err');

// const p = new Promise(res => {
//     console.log('Promise started work...');
//     setTimeout(() => {
//         console.log('Getting data...');
//         res([1,2,3,4,5,6])
//     },2000)
// })
// .then(data => {
//     const newData = data.map(item => {
//         return item * 2;
//     })
//     console.log(newData);
//     return new Promise()
// })

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// alert(location.href)
// if(confirm('Go to google?')) {
//     location.href = 'https://support.google.com/'
// }

// document.body.style.backgroundColor = 'gray';
// setInterval(() => {
//     document.body.style.backgroundColor = '';
// },1000)
// setInterval(() => {
//     document.body.style.backgroundColor = 'gray';
// },2000)
// console.log(document.body.querySelector('.container').parentElement);

// console.log(document.body.children[0])
// console.log(document.body.children);
// for (let elem of document.body.children) {
//     if (elem.matches('div.container')) {
//       console.log('В коллекции есть div.container');
//     }
//   }
// console.log(document.querySelector('div[id="main"]'));
// let textOfBoxPms = document.querySelector('.word');
// textOfBoxPms.innerHTML = 'PMS OG CLAN!'
// textOfBoxPms.style.fontSize = 10 + 'rem'; 

// let text = document.querySelector('.word');
// setInterval(() => {
//     text.hidden = !text.hidden;
// },500)

// let wordPms = document.querySelector('.word');
// wordPms.textContent = '<p>Ничего не изменилось</p>'
// wordPms.innerHTML = '<p class="new-text">Заменилось содержимое тега div.word</p>'
// setInterval(() => {
//     wordPms.hidden = !wordPms.hidden
// },1000)

// const childesOfBody = document.body.children;
// console.log(document.querySelectorAll('div'));
// Array.from(childesOfBody).map(item => {
//     console.log(`This is item: ${item}`)
// })
// for(let item of childesOfBody) {
//     console.log(`This is elem : ${item}`);
// }




const box = document.querySelector('.content__box');
const text = document.querySelector('.content__text');
const burger = document.querySelector('.header__burger');
const burgerTopLine = document.querySelector('.burger-row.top');
const burgerMidLine = document.querySelector('.burger-row.middle');
const burgerBotLine = document.querySelector('.burger-row.bottom');

burger.addEventListener('click', () => {
    burgerTopLine.classList.toggle('top');
    burgerMidLine.classList.toggle('middle');
    burgerBotLine.classList.toggle('bottom');
})

box.onchange = (e) => {
    e.preventDefault();
    isTrue();

}

function isTrue() {
    if (box.checked) {
        text.textContent = 'For Makarovo only!'
    } else {
        text.textContent = 'Where are u from,yankee?'
    }
}

// const headerIconText = document.querySelector('.header__text-icon')
// headerIconText.onclick = () => {
//     alert('PMS!')
// }

const content = document.querySelector('.content');

const newElem = document.createElement('span');
newElem.className = 'contet__new-text';
newElem.innerHTML = 'New element';

// content.append(newElem)
content.insertAdjacentElement('beforeend', newElem)

// Скрытый элемент
const select = document.querySelector('select');
select.hidden = false;

// setInterval( () => {
//     select.hidden = !select.hidden
// },1000)

const boxIcon = document.querySelector('.header__text-icon');

document.addEventListener('click', colorIcon);

function colorIcon(event) {
    if (event.target.closest('.header__text-icon')) {
        boxIcon.classList.toggle('__active')
    }
}

const link = document.querySelector('.content__link');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('ok google!');
});

const btn = document.querySelector('.content__btn');

btn.addEventListener('mousedown', (e) => {
    console.log(`mouse down`);
    content.style.backgroundColor = 'gray';
})

btn.addEventListener('mouseup', (e) => {
    console.log(`mouse up`);
    content.style.backgroundColor = '';
})

btn.addEventListener('mousemove', (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
    console.log('Move it');
})
btn.addEventListener('mouseout', () => {
    console.log('Bye!');
})

const body = document.querySelector('body');
const divMouseMove = document.querySelector('.content__mousemove');
body.addEventListener('mousemove', (e) => {
    divMouseMove.textContent = `Width = ${e.clientX}, hight = ${e.clientY}`
})

const test = document.querySelector('.test');

test.addEventListener('click', () => {
    test.classList.toggle('red');
});