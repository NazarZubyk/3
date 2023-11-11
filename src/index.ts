// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.

function firtsFuction<T>(a: Partial<T> ){

}

function secondFuction<T>(a: T , b: Partial<T> ): T{
    //a=a+b
    return a;
}

//or 

function thirdFuction<T>(a: Partial<T> , b: Partial<T> ): T{
    let k;
    return k as T;
}


// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string), 
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.
type myType2 = {
    id?: string
}
let obj1 : myType2 = {
    id : "d"
}
let obj2 : myType2 = {
    
}

//I did not write a new function because firstFunction() does the same thing.

firtsFuction(obj1)
firtsFuction(obj2)



// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс 
// - количество
// ...а возвращает массив экземпляров этого класса


class Rectangle {
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию 
function наштамповать<T>(SOMECLASS:new () => T, count: number)  {
    let a = []
    for (let i = 0; i < count; i++)
       a.push(new SOMECLASS());
   
    return a;
}

let a: Rectangle[] = наштамповать(Rectangle, 10);
let b: Circle[] = наштамповать(Circle, 20)
