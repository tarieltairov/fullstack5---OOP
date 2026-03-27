// Class - эскиз
// объект - дом построенный на основе эскиза

// без классов - данные и функции разбросаны:

// данные
// const userName = 'Анна';
// const userAge = 25;
// const userEmail = 'anna@mail.com';

// функции отдельно
// function greetUser(name: string) {
//   console.log(`привет ${name}`);
// }

// function isAdult(age: number) {
//   return age >= 18;
// }

// ------------------------

// class User {
//   name: string = 'Aнна';
//   age: number = 25;
//   email: string = 'anna@mail.com';

//   greet() {
//     console.log(`привет ${this.name}`);
//   }

//   isAdult() {
//     return this.age >= 18;
//   }
// }

// преимущество классов
// 1 данные и логика
// 2 создаем много объектов по одному шаблону
// 3 скрываем внутреннюю реализацию
// 4 код легче понимать и поддерживать
// ------------------------------------------------

// Создание класса и объекта

// class Cat {
//   name: string = 'Мурка';
//   age: number = 3;
// }

// const myCat = new Cat();
// console.log(myCat.age);

// const yourCat = new Cat();
// console.log(yourCat.age);

// const cat3 = new Cat();

// -----------------------------------------------------
// constructor

// свойства = переменные
// class Product {
//   name: string = 'Товар';
//   price: number = 0;
//   inStock: boolean = true;

//   constructor(name: string, price: number, inStock: boolean) {
//     this.name = name;
//     this.price = price;
//     this.inStock = inStock;
//   }
// }

// сокращенная запись
// class Product {
//   constructor(
//     public name: string,
//     public price: number,
//     public inStock: boolean,
//   ) {}
// }

// const milk = new Product('Молоко', 80, true);
// const bread = new Product('Хлеб', 40, false);

// console.log(milk);
// console.log(bread);

// -----------------------------------------------------------

// методы класса

// class Calculator {
//   add(a: number, b: number) {
//     return a + b;
//   }

//   substract(a: number, b: number) {
//     return a - b;
//   }

//   multiply(a: number, b: number) {
//     return a * b;
//   }

//   divide(a: number, b: number) {
//     if (b === 0) throw new Error('Делить на ноль нельзя');
//     return a / b;
//   }
// }

// const calc = new Calculator();

// console.log(calc.add(5, 3));
// console.log(calc.substract(10, 4));
// console.log(calc.multiply(3, 7));
// console.log(calc.divide(20, 5));
// ----------------------------------------------------------

// Методы работаюшие со свойствами

class BankAccount {
  owner: string;
  balance: number = 0;

  constructor(ownerName: string, sumOfBalance: number) {
    this.owner = ownerName;
    this.balance = sumOfBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Пополнение: +${amount}. Баланс: ${this.balance}`);
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log(`Недостаточно средств!`);
      return false;
    }

    this.balance -= amount;
    console.log(`Снятие: -${amount}. Баланс: ${this.balance}`);
    return true;
  }

  getBalance() {
    return this.balance;
  }
}

const emilAccount = new BankAccount('Эмиль', 1000);

emilAccount.deposit(500);
emilAccount.withdraw(200);
emilAccount.withdraw(2000);

console.log(emilAccount.getBalance());
