class Appliances {
    constructor (name, powerСonsumption) {
        this.name = name;
        this.powerСonsumption = powerСonsumption;
    }

    turnOn(time) {
        console.log(`Потребляемая мощность ${this.name} за ${time} часа равна ${this.powerСonsumption * time} Вт`)
    }
}

class Computer extends Appliances {
    constructor(coreCount, socket, videoMemory, ramType, ramVolume, name, powerСonsumption) {
        super(name, powerСonsumption);
        this.coreCount = coreCount;
        this.socket = socket;
        this.videoMemory = videoMemory;
        this.ramType = ramType;
        this.ramVolume = ramVolume;
    }
}

class Lamp extends Appliances {
    constructor(lampType, wattage, name, powerСonsumption) {
        super(name, powerСonsumption);
        this.lampType = lampType;
        this.wattage = wattage;
    }

    turnOn(time) {
        console.log(`${this.name} загорается на ${time} часа и потребляет ${this.powerСonsumption * time} вт`)
    }
}

const myComputer = new Computer(8, "AM4", 4096, "DDR4", 8192, "mycomputer", 150);
const tableLamp = new Lamp("LED", 20, "myLamp", 3);

myComputer.turnOn(1.5);
tableLamp.turnOn(3);