
// 1.
// add a 'price' property and 2 others to the class and add 1 more method.
// create 5 instances (objects) from the class and store them in an array called myCarCollection OUTSIDE of the class.
// map through the array, drive each car, and log the cars' serial numbers
class Car {
    constructor (serialNumber,maker,price,color,doors) {
      this.serialNumber = serialNumber;
      this.maker = maker;
      this.price=price;
      this.color=color;
      this.doors=doors;
    }
    drive () {
      console.log('Vroom Vroom');
    }
    break () {
        console.log('break applied');
      }
  }
 const car1=new Car('CR1000','Priyus',40000,'Red','4');
 const car2=new Car('CR1001','Oddysy',60000,'Silver','2');
 const car3=new Car('CR1002','Mercedes',80000,'White','4');
 const car4=new Car('CR1003','Porche',100000,'Grey','2');
 const car5=new Car('CR1004','Lexus',50000,'Black','4');
 const myCarCollection=[car1,car2,car3,car4,car5];
 myCarCollection.map(car => {console.log(car.maker+":");
                             car.drive();
                             console.log("Serial Number:"+car.serialNumber);})

  // 2.
  // Create a class called trucks - with a doors property that defaults to 2 doors.
  // add a 'price' property and 2 others. Add a couple of methods.
  // make 5 trucks and store them in an array called myTruckCollection  OUTSIDE of the class.
  class Truck {
    constructor (serialNumber,maker,price,color,doors) {
      this.serialNumber = serialNumber;
      this.maker = maker;
      this.price=price;
      this.color=color;
      this.doors=2;
    }
    drive () {
      console.log('Truck Drive');
    }
    break () {
        console.log('Truck break');
      }
  }
  const truck1=new Truck('TRC1000','Truck1',200000,'Red','4');
 const truck2=new Truck('TRC1001','Truck2',600000,'Silver','5');
 const truck3=new Truck('TRC1002','Truck3',800000,'White','3');
 const truck4=new Truck('TRC1003','Truck4',100000,'Grey','2');
 const truck5=new Truck('TRC1004','Truck5',500000,'Black','1');
 const myTruckCollection=[truck1,truck2,truck3,truck4,truck5];
 console.log(myTruckCollection);

  // 3.
  // make a function called compareCollections
  // create a variable in the function called carsValue and (by iterating through the array) get the average price.
  // do the same for the trucks collection
  // log a string explaining which collection has a higher average price
  function compareCollections(){
    let carsValue,truckValue;
    carsValue = getAverage(myCarCollection);
    truckValue=getAverage(myTruckCollection);
    console.log("CarsavgPrice:"+carsValue);
    console.log("TrucksavgPrice:"+truckValue);
    console.log(carsValue>truckValue? 
      "Cars collection has higher value":
      "Trucks collection has higher value");
  }
  function getAverage(collection){
     return collection.reduce((acc,current)=>acc + current.price,0)/collection.length;
     //acc-sum price,current-car,initial val-0
  }
  compareCollections();
  // 4.
 // Create a class called Person - add appropriate properties and methods.
 class Person {
  constructor (name,age,weight,hair) {
    this.name = name;
    this.age = age;
    this.weight=weight;
    this.hair=hair;
    }
  setWeight(weight) {
    this.weight=weight;
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  greet() {
      console.log('Hello Everyone!');
    }
}
const person1 = new Person("Clark",25,140,"Black");
const person2 = new Person("Diana",23,125,"Blonde");
console.log(person1);
console.log(person2);
person1.setWeight(110);
person1.setHair("Brown");
person1.greet();

//5.create a class called Enemy that extends Person, adding extra properties and methods.
class Enemy extends Person{
  constructor (name,age,weight,hair) {
    super(name,age,weight,hair)
    this.name = "Devil";
    this.power = 1000;
    this.hands=4;    
    }
    greet () {
      console.log("Hi,I am Devil");
    }
    smite () {
      console.log('I smite thee you vile person');
    }
}

const newEnemy = new Enemy('Enemy1', 30, 180, 'Golden')
console.log(newEnemy);

newEnemy.greet();
newEnemy.smite();

 // 6.
    // create a Factory that takes a name as a parameter.
  // create an instance of the factory called const jerry = new Factory('jerry')
  // the factory should have an empty array called "friends" (this.friends = [])
  // the factory should also have a method to push friends to that array (taking the friend's name as a parameter)
  class Friend {
    constructor (name,rank) {
      this.name = name;
      this.rank=rank
    }    
  }  
  //const newFriend = new Friend('Clark');
  //console.log(newFriend);
    
  class Factory {
    constructor (name) {
      this.name = name;
      this.friends = [];
    }
    makeFriends (friendsName) {
      const newFriend= new Friend(friendsName,this.friends.length);
      this.friends.push(newFriend);
        }    
  }
  const jerry = new Factory('jerry')
  jerry.makeFriends("Clark");
  jerry.makeFriends("Bruce");
  jerry.makeFriends("Daina");  
  console.log(jerry);
  
// 7.  
// Create a class that will produce Comments (author, content, date, likes, commentIndex (where the comment fails) ).
// Make another class for  social media posts.
// The object should have properties author, content, date, likes, and comments ( empty array).
// There should be a method called editContent that takes in a new string that will replace the content.
// There should be another method called addComment that uses the Comments class to create a new comment with some passed values (arguments) and
// pushes that comment object to the comments array.
class Comment {
  constructor(author, content, date, likes, commentIndex) {
    this.author = author;
    this.content = content;
    this.date = date;
    this.likes = likes;
    this.commentIndex = commentIndex
  }
}
//const newComment = new Comment('Clark', 'Lets Party Today', '12/2/22', 50, 1);
//console.log(newComment);

class Socialmediaposts {
  constructor(author, content, date, likes) {
    this.author = author;
    this.content = content;
    this.date = date;
    this.likes = likes;
    this.comments = [];
  }
  editContent(newContent) {
    this.content = newContent;
  }
  addComment(author, content, date, likes) {
    const newComment = new Comment(author, content, date, likes, this.comments.length+1);
    this.comments.push(newComment);
  }
}
const post1 = new Socialmediaposts('Sarika', 'Lets Party Today', '12/2/22', 50)
post1.addComment('Clark', 'You rock!', '12/2/22', 150);
post1.addComment('Diana', 'Awesome!', '12/3/22', 150);
post1.editContent("Lets work");
console.log(post1);  