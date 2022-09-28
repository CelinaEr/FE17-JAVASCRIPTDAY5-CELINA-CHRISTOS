// Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand...

// Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// Create, using the classes, 3 different objects for each class.

// The results from the methods must be printed on the browser too.

let arr = [];

class Car {
  brand;
  model;
  color;
  type;
  img;

  constructor(brand, model, color, type, img) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.type = type;
    this.img = img;

    arr.push(this);
  }

  printInfo() {
    return `
    <div class="col">
        <div class="card text-bg-dark h-100" style="max-width: 25rem;">
            <img src="${this.img}" class="card-img-top" alt="${this.brand}">
            <div class="card-body">
                <h5 class="card-title">${this.brand}</h5>
                <p class="card-text">The ${this.type} ${this.brand} ${this.model} in color ${this.color}.</p>
            </div>
        </div>
    </div>`;
  }
}

class Animal {
  name;
  weight;
  color;
  group;
  genus;
  img;

  constructor(name, weight, color, group, genus, img) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.group = group;
    this.genus = genus;
    this.img = img;

    arr.push(this);
  }

  printInfo() {
    return `
    <div class="col">
        <div class="card text-bg-dark h-100" style="max-width: 25rem;">
            <img src="${this.img}" class="card-img-top" alt="White tiger">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">The ${this.name}, a ${this.group} of the genus ${this.genus} weighs approximately ${this.weight}. It is colored ${this.color}.</p>
            </div>
        </div>
    </div>`;
  }
}

class Person {
  firstName;
  lastName;
  age;
  married;
  children;
  img;

  constructor(firstName, lastName, age, married, children, img) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.married = married;
    this.children = children;
    this.img = img;
  }

  printInfoA() {
    return `
  <div class="col">
      <div class="card text-bg-dark h-100" style="max-width: 25rem;">
          <img src="${this.img}" class="card-img-top" alt="White tiger">
          <div class="card-body">
              <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
              <p class="card-text">This is ${this.firstName} ${this.lastName}. He is aged ${this.age}, ${this.married} and has ${this.children}.</p>
          </div>
      </div>
  </div>`;
  }

  printInfoD() {
    return `
    <div class="col">
        <div class="card text-bg-dark h-100" style="max-width: 25rem;">
            <img src="${this.img}" class="card-img-top" alt="White tiger">
            <div class="card-body">
                <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
                <p class="card-text">This is ${this.firstName} ${this.lastName}. He died at the age of ${this.age}, was ${this.married} and had ${this.children}.</p>
            </div>
        </div>
    </div>`;
  }
}

let car1 = new Car(
  "Nissan",
  "Skyline GT-R V·Spec II Nür",
  "blue",
  "2-door coupé",
  "images/skyline.jpg"
);

let car2 = new Car(
  "Mercedes",
  "AMG GT Dark Night Edition",
  "matte black",
  "2-door coupé",
  "images/amg.jpg"
);

let car3 = new Car(
  "Audi",
  "TT RS",
  "light blue",
  "2-door coupé",
  "images/tt.jpg"
);

let animal1 = new Animal(
  "Bengal Tiger",
  "200 - 260 kg",
  "white with black stripes",
  "mammal",
  "panthera",
  "images/tiger.jpg"
);

let animal2 = new Animal(
  "Hyllus Diardi",
  "10.7 mg",
  "white with black accents",
  "arachnid",
  "hyllus",
  "images/spider.jpg"
);

let animal3 = new Animal(
  "Blue Whale",
  "85 - 130 metric tonnes",
  "blue",
  "mammal",
  "balaenoptera",
  "images/whale.jpg"
);

let person1 = new Person(
  "Keanu",
  "Reeves",
  "58",
  "not married",
  "no children",
  "images/keanu.jpg"
);

let person2 = new Person(
  "Mark",
  "Fischbach",
  "33",
  "not married",
  "no children",
  "images/mark.jpg"
);

let person3 = new Person(
  "John Ronald Reuel",
  "Tolkien",
  "81",
  "married",
  "4 children",
  "images/tolkien.jpg"
);

for (let val of arr) {
  document.getElementById("grid").innerHTML += val.printInfo();
}

document.getElementById("grid").innerHTML += person1.printInfoA();
document.getElementById("grid").innerHTML += person2.printInfoA();
document.getElementById("grid").innerHTML += person3.printInfoD();
