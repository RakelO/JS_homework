
//Создание сущности Man
var Man = function (name, age, isHeAlive){
    this.name = name;
    this.age = age;
  this.live  = function() {
      console.log(isHeAlive ? "Yes! " + this.name + " is alive!" : "No, " + this.name + " died");
    }
}
var john = new Man("John", 11, true);
console.log(john);
john.live();

var kevin = new Man("Kevin", 99, 0);
console.log(kevin);
kevin.live();

//Создание сущности Student, которая является наследником сущности Man. (Прототипное наследование через функции-конструкторы)
var Student1 = function (name, age, isHeAlive){
  this.name = name;
  this.age = age;
  this.study = function(){
    console.log("I study very hard!");
  }
}
Student1.prototype = john;
var leo = new Student1 ("Leo", 17, 1);
console.log(leo);
leo.study();
leo.live();
leo.live();

//Создание сущности Student, которая является наследником сущности Man. (Наследование через конструкцию Object.create())
var Student2 = Object.create(john);
console.log(Student2);
Student2.live();
Student2.study = function(){
  console.log("I study very hard");
}
Student2.study();
Student2.name = "Lilu";
console.log(Student2);
Student2.live();

//Реализация функции duckType()
var ducktype = function(obj){
  if ((obj.hasOwnProperty("name"))&&(obj.hasOwnProperty("age"))&&(obj.hasOwnProperty("live"))){
  return "Man";
  }
  else if ("name" in obj && "age" in obj && "live" in obj && obj.hasOwnProperty("study")){
    return "Student";
  } else{
    return "No idea!";
  } 
};
console.log (ducktype(kevin));
console.log (ducktype(leo));
console.log (ducktype(Student2));

//Модификация функции duckType()
var ducktype2 = function(){
  if ((this.hasOwnProperty("name"))&&(this.hasOwnProperty("age"))&&(this.hasOwnProperty("live"))){
  return "Man";
  }
  else if ("name" in this && "age" in this && "live" in this && this.hasOwnProperty("study")){
    return "Student";
  } else{
    return "No idea!";
  } 
};

var ducktypeBind = ducktype2.bind(kevin);
console.log(ducktypeBind());
console.log(ducktype2.call(leo));
console.log(ducktype2.apply(Student2));



