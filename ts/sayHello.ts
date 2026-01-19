type User = {
    name: string;
    age: number;
    email: string;
}

const sayHelloToUser: (user: User) => void = (user) => {
    console.log(`Hello ${JSON.stringify(user)}`);
}

const user1: User = {
    name: 'Morgan',
    age: 50,
    email: 'morgan.bleunven@maif.fr'
}

sayHelloToUser(user1);