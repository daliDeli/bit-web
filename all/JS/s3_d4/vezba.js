function Person (name, occupation){
    this.name = name;
    this.occupation = occupation;
    this.talk = function(){
        console.log("This is my occupation " + this.occupation);
    }
}

var dado = new Person("dado", "student");

console.log(dado.talk());
