// ООП (объектно ориентированное программирование) - это способ организации кода, при котором
// программа строится из объектов, взаимодействующих друг с другом

// ООП есть 4 основных принципа:
// 1) инкапсуляция (скрытие внутренней реализации)
// 2) наследование (создание нового на основе существующего)
// 3) полиморфизм (одно действие - разное поведение)
// 4) абстракция (выделение главного, скрытие детали)

// class Animal {
//   public name: string;
//   public age: number;

//   constructor(name: string, age: number) {
//     this.age = age;
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} ест`);
//   }

//   sleep() {
//     console.log(`${this.name} спит`);
//   }
// }

// -----------------------------------------
// class Cat extends Animal {
//   meow() {
//     console.log(`${this.name} мяукает`);
//   }
// }
// const cat = new Cat('Мурка', 2);
// cat.eat();
// cat.sleep();

// -------------------------------------------
// class Dog extends Animal {
//   bark() {
//     console.log(`${this.name} гавкает`);
//   }
// }
// const dog = new Dog('Бобик', 3);
// dog.eat();
// dog.sleep();

// Преимущества наследования

// 1) Нет дублирования — общий код в одном месте
// 2) Легко изменять — меняем родительский класс → изменения везде
// 3) Иерархия — логичная структура кода
// 4) Расширяемость — легко добавить новые типы

// ---------------------------------------

// super - используется для обращения к родительскому классу
// 1) super() - вызов конструктора родителя.
// Мы должны обязательно вызывать в конструкторе
// дочернего класса, если у родителя есть конструктор с параметрами

// 2) super.метод() - вызыв метода родителя внутри дочернего класса

// class Animal {
//   public name: string = '';

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   public breed: string;

//   constructor(name: string, breed: string) {
//     super(name);
//     this.breed = breed;
//   }
// }

// const dog = new Dog('Рекс', 'овчарка');

// -------------------------------------

// class Animal {
//   makeSound() {
//     console.log('Животное издает звук');
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     super.makeSound();
//     console.log('Собака говорит: гав-гав!');
//   }
// }

// const dog = new Dog();
// dog.makeSound();
// -----------------------------------------------------------------

// Модификатор - protected - золотая середина между public и private

class BankAccount {
  // long method
  // public owner: string;
  // protected balance: number;
  // constructor(owner: string, balance: number) {
  //   this.balance = balance;
  //   this.owner = owner;
  // }

  // ---------------
  // short method
  constructor(
    public owner: string,
    protected balance: number, //protected - доступен в дочерних классах
  ) {}

  getBalance() {
    return this.balance;
  }
}

class SavingAccount extends BankAccount {
  private interestRate: number = 0.05;

  addInterest() {
    const interest = this.balance * this.interestRate;
    this.balance += interest;

    console.log(`Начислены проценты: ${interest}`);
    console.log(`Текущий баланс: ${this.balance}`);
  }
}

const savings = new SavingAccount('Иван', 10000);

console.log(savings.getBalance());

savings.addInterest();
savings.addInterest();

// Когда использовать protected?
// - когда свойство/метод нужен в дочерних классах
// - но не должен быть доступен извне
// - для "внутренней" логики иерархии классов

// * Модификаторы можно давать и свойствам(переменые) и методам(функции)
