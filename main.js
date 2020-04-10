class Vehicle {
  constructor(name, wheelCount, maxSpeed, speed = 0) {
    this.name = name;
    this.wheelCount = wheelCount;
    this.maxSpeed = maxSpeed;
    this.speed = speed;
  }

  accelerate() {
    let incrementedSpeed = this.maxSpeed / 3
    this.speed += incrementedSpeed;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    
  }
}

class Car extends Vehicle{
  constructor(name, maxSpeed, speed) {
    super(name, 4, maxSpeed, speed);
  }

  drive() {
    return `Vroom. `;
  }
}

class Ferrari extends Car {
  constructor() {
    super("Ferrari", 180);
  }
  drive() {
    return super.drive() + "I'm a Ferrari!";
  }

  accelerate() {
    let incrementedSpeed = this.maxSpeed / 2;
    this.speed += incrementedSpeed;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    
  }
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}
