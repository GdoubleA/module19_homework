function Appliances(name, powerСonsumption) {
    this.name = name;
    this.powerСonsumption = powerСonsumption;
}

Appliances.prototype.turnOn = function(time) {
    console.log(`Потребляемая мощность ${this.name} за ${time} часа равна ${this.powerСonsumption * time} Вт`)
}

function Computer(name, powerСonsumption, coreCount, socket, videoMemory, ramType, ramVolume) {
    this.name = name;
    this.powerСonsumption = powerСonsumption;
    this.coreCount = coreCount;
    this.socket = socket;
    this.videoMemory = videoMemory;
    this.ramType = ramType;
    this.ramVolume = ramVolume;
}

Computer.prototype = new Appliances();

function Lamp(name, powerСonsumption, lampType, wattage) {
    this.name = name;
    this.powerСonsumption = powerСonsumption;
    this.lampType = lampType;
    this.wattage = wattage;
}

Lamp.prototype = new Appliances();

Lamp.prototype.turnOn = function(time) {
    console.log(`${this.name} загорается на ${time} часа и потребляет ${this.powerСonsumption * time} вт`)
}

const myComputer = new Computer("mycomputer", 150, 8, "AM4", 4096, "DDR4", 8192);
const tableLamp = new Lamp("myLamp", 3, "LED",  20);

myComputer.turnOn(1.5);
tableLamp.turnOn(3);