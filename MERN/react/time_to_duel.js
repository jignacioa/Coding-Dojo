

class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost) 
            this.power = power;
            this.resilience = res;
    }
    
    attack(target) {
        target.resilience -= this.power
        return target.resilience
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude 
    }

    play(target) {
        if( target instanceof Unit ) {
            target[this.stat] += this.magnitude
           
        } else {
            throw new Error( "Target must be a unit!" );
        }
      return target[this.stat]
    }

}

class Player {
    constructor (name, mana) {
        this.name = name;
        this.mana = mana;
    }


    summon(enchantment) {
        this.mana -= (enchantment.cost)
        return `${this.name} summons ${enchantment.name} : Mana for the player is ${this.mana}.`
    }
    play_card(enchantment, target) {
    if (enchantment instanceof Effect) {
        this.mana -= (enchantment.cost);
        enchantment.play(target);
        return `${this.name} plays ${enchantment.name} on ${target.name}, its ${enchantment.stat} is now ${target[enchantment.stat]}. Mana for the player is ${this.mana}. `
    } else {
        enchantment.attack(target)
        return `${this.name} has ${enchantment.name} attack ${target.name}, bringing down it's power to ${target.resilience}.`
    }
    }

}



const player_1 = new Player('Player_1', 20)
const player_2 = new Player('Player_2', 20)

const red_belt = new Unit('Red Belt Ninja', 3, 3, 4)
const black_belt = new Unit('Black Belt Ninja', 4, 5, 4)

const hard_algo = new Effect('Hard Algorithm', 2, 'increase targets resilience by 3', 'resilience', 3)
const unhandled_promise = new Effect('Unhandled Promise Rejection', 1, 'reduce targets resilience by 2', 'resilience', -2)
const pair_programming = new Effect('Pair Programming', 3, 'increase targets power by 2', 'power', 2)

/*console.log(hard_algo.play(red_belt))
console.log(unhandled_promise.play(red_belt))
console.log(pair_programming.play(black_belt))
console.log(red_belt.attack(black_belt))*/

//console.log(player_1.play_effect(hard_algo.play(red_belt)))
console.log(player_1.summon(red_belt))
console.log(player_1.play_card(hard_algo, red_belt))
console.log(player_2.summon(black_belt))
console.log(player_2.play_card(unhandled_promise, red_belt))
console.log(player_1.play_card(pair_programming, red_belt))
console.log(player_1.play_card(red_belt, black_belt))
