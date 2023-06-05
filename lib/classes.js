///// TIPZ NOTE: FILE FOR AN OLD PROJECT - IT NEEDS TO BE DELETED OR RE-PUPOSED FOR TIPZ /////

export class Food {}
export class CatFood extends Food { 
    constructor() {
        super()
        this.type = 'cat food'
    }
}
export class DogFood extends Food {
    constructor() {
        super()
        this.type = 'dog food'
    }
}
export class HumanFood extends Food {
    constructor() {
        super()
        this.type = 'human food'
    }
}
export class Chicken extends Food {
    constructor() {
        super()
        this.type = 'chicken'
    }
}
export class Lemons extends Food {
    constructor() {
        super()
        this.type = 'lemons'
    }
}
export class Milk extends Food {
    constructor() {
        super()
        this.type = 'milk'
    }
}

// Animal and it's related classes:
export class Animal {
    eat(food) {
        let noises
        if (this.likes.has(food.constructor)) {
            noises = this.#makeNoise(3, food);
        } else {
            noises = this.#makeNoise(1, food);
        }
        return noises
    }

    #makeNoise(times, food) {
        console.log(`I am a ${this.kind} and I'm eating ${food.type}:`)
        var noises = []
        for (let i = 0; i < times; i++) {
            console.log(this.noise);
            noises.push(this.noise)
        }
        return noises
    }

}

export class Cat extends Animal {
    constructor() {
        super()
        this.kind = 'cat'
        this.likes = new Set([CatFood, Chicken, Milk]) // adding as a set for faster lookup
        this.noise = 'meow'
    }
}

export class Dog extends Animal {
    constructor() {
        super()
        this.kind = 'dog'
        this.likes = new Set([DogFood, CatFood, Chicken, HumanFood]) // adding as a set for faster lookup
        this.noise = 'bark'
    }
}

