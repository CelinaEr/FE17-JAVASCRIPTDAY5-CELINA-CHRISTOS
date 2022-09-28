// Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand...

// Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// The message from the methods must be printed on the browser too.

let car1 = {
  brand: "Nissan",
  model: "Skyline GT-R V·Spec II Nür",
  color: "blue",
  type: "2-door coupé",
  img: "images/skyline.jpg",

  printInfo: function () {
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
  },
};

let car2 = {
  brand: "Mercedes",
  model: "AMG GT Dark Night Edition",
  color: "matte black",
  type: "2-door coupé",
  img: "images/amg.jpg",

  printInfo: function () {
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
  },
};

let car3 = {
  brand: "Audi",
  model: "TT RS",
  color: "light blue",
  type: "2-door coupé",
  img: "images/tt.jpg",

  printInfo: function () {
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
  },
};

let animal1 = {
  name: "Bengal Tiger",
  weight: "200 - 260 kg",
  color: "white with black stripes",
  group: "mammal",
  genus: "panthera",
  img: "images/tiger.jpg",

  printInfo: function () {
    return `
    <div class="col">
        <div class="card text-bg-dark h-100" style="max-width: 25rem;">
            <img src="${this.img}" class="card-img-top" alt="${this.name}">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">The ${this.name}, a ${this.group} of the genus ${this.genus} weighs approximately ${this.weight}. This particular one is colored ${this.color}.</p>
            </div>
        </div>
    </div>`;
  },
};

let animal2 = {
  name: "Hyllus Diardi",
  weight: "10.7 mg",
  color: "white with black accents",
  group: "arachnid",
  genus: "hyllus",
  img: "images/spider.jpg",

  printInfo: function () {
    return `
    <div class="col">
        <div class="card text-bg-dark h-100" style="max-width: 25rem;">
            <img src="${this.img}" class="card-img-top" alt="${this.name}">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">The ${this.name}, an ${this.group} of the genus ${this.genus} weighs approximately ${this.weight}. This particular one is colored ${this.color}.</p>
            </div>
        </div>
    </div>`;
  },
};

let animal3 = {
  name: "Blue Whale",
  weight: "85 - 130 metric tonnes",
  color: "blue",
  group: "mammal",
  genus: "balaenoptera",
  img: "images/whale.jpg",

  printInfo: function () {
    return `
  <div class="col">
      <div class="card text-bg-dark h-100" style="max-width: 25rem;">
          <img src="${this.img}" class="card-img-top" alt="${this.name}">
          <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">The ${this.name}, a ${this.group} of the genus ${this.genus} weighs approximately ${this.weight}. As the name suggest it's colored ${this.color}.</p>
          </div>
      </div>
  </div>`;
  },
};

let person1 = {
  firstName: "Keanu",
  lastName: "Reeves",
  proffession: "actor",
  age: "58",
  married: "not married",
  children: "no children",
  img: "images/keanu.jpg",

  printInfo: function () {
    return `
  <div class="col">
      <div class="card text-bg-dark h-100" style="max-width: 25rem;">
          <img src="${this.img}" class="card-img-top" alt="${this.firstName} ${this.lastName}">
          <div class="card-body">
              <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
              <p class="card-text">This is ${this.firstName} ${this.lastName}. He is an ${this.proffession} aged ${this.age}, ${this.married} and has ${this.children}.</p>
          </div>
      </div>
  </div>`;
  },
};

let person2 = {
  firstName: "Mark",
  lastName: "Fischbach",
  proffession: "YouTuber",
  age: "33",
  married: "not married",
  children: "no children",
  img: "images/mark.jpg",

  printInfo: function () {
    return `
  <div class="col">
      <div class="card text-bg-dark h-100" style="max-width: 25rem;">
          <img src="${this.img}" class="card-img-top" alt="${this.firstName} ${this.lastName}">
          <div class="card-body">
              <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
              <p class="card-text">This is ${this.firstName} ${this.lastName}. He is a ${this.proffession} aged ${this.age}, ${this.married} and has ${this.children}.</p>
          </div>
      </div>
  </div>`;
  },
};

let person3 = {
  firstName: "John Ronald Reuel",
  lastName: "Tolkien",
  proffession: "writer",
  age: "81",
  married: "married",
  children: "4 children",
  img: "images/tolkien.jpg",

  printInfo: function () {
    return `
<div class="col">
    <div class="card text-bg-dark h-100" style="max-width: 25rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.firstName} ${this.lastName}">
        <div class="card-body">
            <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
            <p class="card-text">This is ${this.firstName} ${this.lastName}. He was a ${this.proffession} who died at the age of ${this.age}, was ${this.married} and had ${this.children}.</p>
        </div>
    </div>
</div>`;
  },
};

let arr = [];

arr.push(
  car1,
  car2,
  car3,
  animal1,
  animal2,
  animal3,
  person1,
  person2,
  person3
);

for (let val of arr) {
  document.getElementById("grid").innerHTML += val.printInfo();
}
