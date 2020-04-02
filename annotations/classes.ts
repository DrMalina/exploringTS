class Vehicle {
  //color: string = 'red';
  constructor(public color: string) {
    // this.color = color;
  }

  public drive(): void {
    console.log('chunga chunga');
  }
  protected honk(): void {
    console.log('beeep beeep');
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private startEngine(): void {
    console.log('vroom');
  }

  startDriving(): void {
    this.startEngine();
  }
}
