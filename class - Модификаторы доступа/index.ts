// Classes - модификаторы доступа

// Модификаторы определяют откуда можно обращаться к свойствам и методам:

// public - доступ отовсюду (по умолчанию)
// private - доступ только внутри класса
// readonly - только для чтения

// public
// class User {
//   public name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.age = age;
//     this.name = name;
//   }
// }

// const user = new User('Анна', 25);

// console.log(user.name); //Анна

// user.name = 'Мария';

// console.log(user.name);

// ---------------------
// private
// 1. защита данных - нельзя случайно испортить
// 2. контроль изменений - все изменения проходят через методы
// 3. валидация - можем проверять данные перед изменением

// class BankAccount {
//   public owner: string;
//   private balance: number;

//   constructor(owner: string, initialBalance: number) {
//     this.balance = initialBalance;
//     this.owner = owner;
//   }

//   deposit(amount: number) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// const account = new BankAccount('Иван', 1000);
// console.log(account.getBalance());

// account.deposit(5000);
// console.log(account.getBalance());

// ----------------------------------------------------
// readonly - только для чтения

class CreateId {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }

  // Здесь будет ошибка
  // updateId(){
  //   this.id = '12312u38u123'
  // }
}

const firstUser = new CreateId('ASDBASDJJDIAMSIDMISOAMDI');
console.log(firstUser.id);

// Здесь будет ошибка
// firstUser.id = '123123'

// --------------------------------------------
// комбинация - public readonly
