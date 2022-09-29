let person = {
    firstName: "Denzel",
    lastName: "Washington",
    age: 55,
    MartiStatus: "Married",
    children: 4,
    eyeColor: "brown",
    drivingLicense: true,
    img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcToWjFK5R84iw1RFF3ITbcM0ZPSTTwH3o2-mvr-vtKQD9FEdecz_eO_DF_F2nn2o3rC",
    jobTitle: "Actor",
    hobbies: ["Skie jumping", "Movies", "Dancing"],
    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.firstName} ${this.lastName} ${this.age}</h5>
          <p class="card-text">${this.MartiStatus} ${this.children} ${this.jobTitle} ${this.hobbies[2]}</p>
         
        </div>
      </div>
      `;

    },

};
let person1 = {
    firstName: "Lupita",
    lastName: "Nyongo",
    age: 30,
    MartiStatus: "Single",
    children: 1,
    eyeColor: "brown",
    drivingLicense: true,
    img: "https://d3fm277xfqhd1k.cloudfront.net/images/cast/profile/32616-lupita-nyong-o.v1.jpg?w=1800&h=942",
    jobTitle: "Actress",
    hobbies: ["Cooking", "Movies", "Dancing", "Walking"],
    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.firstName} ${this.lastName} ${this.age}</h5>
          <p class="card-text">${this.MartiStatus} ${this.children} ${this.jobTitle} ${this.hobbies[0]}</p>
          
        </div>
      </div>
      `;

    }

}
let person2 = {
    firstName: "Christian",
    lastName: "Ronaldo",
    age: 37,
    MartiStatus: "Married",
    children: 4,
    eyeColor: "brown",
    drivingLicense: true,
    img: "https://img.okezone.com/content/2021/09/03/51/2465896/jersey-cristiano-ronaldo-laku-keras-manchester-united-kehabisan-stok-karena-pabrik-di-vietnam-tutup-DHnZuccB2J.jpg",
    jobTitle: "Footballer",
    position: "Forward",
    hobbies: ["jumping", "Movies", "Dancing", "gym", "Running"],
    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.firstName} ${this.lastName} ${this.age}</h5>
          <p class="card-text">${this.MartiStatus} ${this.children} ${this.jobTitle} ${this.position[3]}</p>
          
        </div>
      </div>
      `;

    },

};

let car = {
    carName: "Ferrali",
    carOwner: "Ronaldo",
    age: 1,
    carModel: "New Release",
    ManufYear: 2021,
    color: "Red",
    weight: 120,
    img: "https://img.tpl.one/s/posts/2014/LFHX1.jpg",
    carTrans: "Automatic",
    carUsefor: ["holiday", "Family", "Shopping", "gym", "racing"],
    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.carName} ${this.carOwner} ${this.ManufYear}</h5>
          <p class="card-text">${this.color} ${this.weight} ${this.carUsefor[3]}</p>
          
        </div>
      </div>
      `;

    },

};
let car1 = {
    carName: "Ferrali",
    carOwner: "Denzel",
    age: 2,
    carModel: "New Release",
    ManufYear: 2020,
    color: "White",
    weight: 130,
    img: "http://www.car-revs-daily.com/file/Car-Revs-Daily.com-2014-ZENVO-ST1-Lands-in-USA-With-Stunning-Design-and-Huge-Power-17.jpg",
    carTrans: "Automatic",
    carUsefor: ["holiday", "Family", "Shopping", "gym", "racing"],
    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.carName} ${this.carOwner} ${this.ManufYear}</h5>
          <p class="card-text">${this.color} ${this.weight} ${this.carUsefor[1]}</p>
          
        </div>
      </div>
      `;

    },

};

let car2 = {
    carName: "Ferrali",
    carOwner: "Lupita",
    age: 0.5,
    carModel: "New Release",
    ManufYear: 2022,
    color: "Yellow",
    weight: 150,
    img: "https://parkers-images.bauersecure.com/wp-images/17053/600x400/lotus_eletre.jpg",
    carTrans: "Automatic",
    carUsefor: ["holiday", "Family", "Shopping", "gym", "racing"],
    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.carName} ${this.carOwner} ${this.ManufYear}</h5>
          <p class="card-text">${this.color} ${this.weight} ${this.carUsefor[2]}</p>
          
        </div>
      </div>
      `;

    },

};
let animal = {
    aniName: "Leopard",
    age: 15,
    aniType: "Wild Life",
    weight: 110,
    color: "brown, Yellow, Black",
    img: "https://www.worldatlas.com/r/w768/upload/8c/09/31/shutterstock-1219658011.jpg",
    eating: ["Meat",  "sleeping", "Hunting"],
    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.aniName} ${this.aniType} ${this.age}</h5>
          <p class="card-text">${this.weight} ${this.color} ${this.eating[0]}</p>
          
        </div>
      </div>
      `;

    },

};
let animal1 = {
    aniName: "Lion",
    age: 20,
    aniType: "Wild Life",
    weight: 120,
    color: "brown, Yellow, Black",
    img: "https://images.photowall.com/products/69237/lion-close-up.jpg?h=699&q=85",
    eating: ["Meat",  "sleeping", "Hunting"],

    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.aniName} ${this.aniType} ${this.age}</h5>
          <p class="card-text">${this.weight} ${this.color} ${this.eating[2]}</p>
          
          
        </div>
      </div>
      `;

    },

};
let animal2 = {
    aniName: "Zebra",
    age: 8,
    aniType: "Wild Life",
    weight: 100,
    color: " Black & White",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Plains_Zebra_Equus_quagga.jpg",
    eating: ["Water",  "Grass", "Fighting"],
    printInfo: function row() {///Method
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.aniName} ${this.aniType} ${this.age}</h5>
          <p class="card-text">${this.weight} ${this.color} ${this.eating[1]}</p>
          
        </div>
      </div>
      `;

    },

};


//document.getElementById("demo").innerHTML += person.printInfo();
//document.getElementById("demo").innerHTML += person1.printInfo();
//document.getElementById("demo").innerHTML += person2.printInfo();

//document.getElementById("demo").innerHTML += car.printInfo();
//document.getElementById("demo").innerHTML += car1.printInfo();
//document.getElementById("demo").innerHTML += car2.printInfo();

//document.getElementById("demo").innerHTML += animal.printInfo();
//document.getElementById("demo").innerHTML += animal1.printInfo();
//document.getElementById("demo").innerHTML += animal2.printInfo();

let arr = [];

arr.push(
  person,
  person1,
  person2,
  car,
  car1,
  car2,
  animal,
  animal1,
  animal2,
);



for (let val of arr) {
  document.getElementById("demo").innerHTML += val.printInfo();

}
