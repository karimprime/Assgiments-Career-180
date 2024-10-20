//1

class User {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        if (age > 0) {
            this.#age = age;
        } else {
            console.error('Age must be a positive number.');
        }
    }
}

const user = new User('Alice', 30);
console.log(user.getName());
user.setAge(35);
console.log(user.getAge());

console.log("------------------------------------------------------------------------------------");

/*------------------------------------------------------------------------------------------------*/

//2
const Flyable = Base => class extends Base {
    fly() {
        console.log(`${this.name} is flying!`);
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }
}

class Airplane {
    constructor(model) {
        this.model = model;
    }
}


const FlyingBird = Flyable(Bird);
const FlyingAirplane = Flyable(Airplane);

const parrot = new FlyingBird('Parrot');
const boeing = new FlyingAirplane('Boeing 747');

parrot.fly();
boeing.fly();

console.log("------------------------------------------------------------------------------------");

/*------------------------------------------------------------------------------------------------*/

//3

class Admin {
    constructor() {
        this.role = 'Admin';
    }
}

class Moderator {
    constructor() {
        this.role = 'Moderator';
    }
}

class Guest {
    constructor() {
        this.role = 'Guest';
    }
}

function userFactory(type) {
    switch (type) {
        case 'admin':
            return new Admin();
        case 'moderator':
            return new Moderator();
        case 'guest':
            return new Guest();
        default:
            throw new Error('Unknown user type');
    }
}

const adminUser = userFactory('admin');
const guestUser = userFactory('guest');

console.log(adminUser.role);
console.log(guestUser.role);

console.log("------------------------------------------------------------------------------------");

/*------------------------------------------------------------------------------------------------*/

//4

class Singleton {
    static #instance;

    constructor() {
        if (Singleton.#instance) {
            return Singleton.#instance;
        }
        Singleton.#instance = this;

        this.state = {};
    }

    static getInstance() {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.setState({ user: 'Karim' });
console.log(instance2.getState());
console.log(instance1 === instance2);

console.log("------------------------------------------------------------------------------------");

/*------------------------------------------------------------------------------------------------*/

//5

class User5 {
    constructor(name5) {
        this.name5 = name5;
    }
    getName5() {
        return this.name5;
    }
}

function logDecorator(user5) {
    const originalGetName = user5.getName5.bind(user5);
    user5.getName5 = function () {
        console.log(`Getting name: ${this.name5}`);
        return originalGetName();
    };
    return user5;
}

const user5 = new User5('Karim');
const decoratedUser = logDecorator(user5);

console.log(decoratedUser.getName5());

console.log("------------------------------------------------------------------------------------");

/*------------------------------------------------------------------------------------------------*/

//6

class Stock {
    constructor(symbol) {
        this.symbol = symbol;
        this.price = 0;
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    setPrice(price) {
        this.price = price;
        this.notifyObservers();
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this));
    }
}

class Investor {
    constructor(name6) {
        this.name6 = name6;
    }

    update(stock) {
        console.log(`${this.name6} notified: ${stock.symbol} is now $${stock.price}`);
    }
}

const googleStock = new Stock('GOOGLE');
const investor1 = new Investor('Karim');
const investor2 = new Investor('Ashraf');

googleStock.addObserver(investor1);
googleStock.addObserver(investor2);

googleStock.setPrice(100);

console.log("------------------------------------------------------------------------------------");

/*------------------------------------------------------------------------------------------------*/

//7

const animal = {
    speak() {
        console.log('Animal speaks');
    }
};

const dog = Object.create(animal);
dog.speak = function () {
    console.log('Dog barks');
};

dog.speak();
animal.speak();

console.log("------------------------------------------------------------------------------------");

/*------------------------------------------------------------------------------------------------*/

//8

class DataFetcher {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    async fetchData() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Fetch error:', error.message);
            return { error: 'Failed to fetch data' };
        }
    }
}


const fetcher = new DataFetcher('https://api.example.com/data');

fetcher.fetchData().then(data => {
    if (data.error) {
        console.error('Error fetching data:', data.error);
    } else {
        console.log('Fetched data:', data);
    }
});






