/**
 * My first code poerty : ""
 */

class Questions {
  whoAmI() {
    console.log(`Who am I?`);
  }
  whatAmILookingFor() {
    console.log(`What am I looking for?\n\n`);
  }
}

class Answers {
  // 404
}

class Sadness extends Questions {
  constructor() {
    super();
  }

  bringsBackMeToQuestions() {
    console.log(`And sadness brings me back to those questions...\n\n`)
    return new Questions();
  }
}

class Disappointement extends Sadness {
  constructor() {
    super();
  }

  bringsSadness() {
    console.log(`Disappointement brings sadness,`)
    return new Sadness();
  }

}

class Expectations extends Disappointement {
  constructor() {
    super();
  }

  leadsToDisappointement() {
    console.log(`Expections leads to disappointement,`)
    return new Disappointement();
  }
}

class Person extends Expectations {
  name: String;
  constructor(name: String) {
    super();
    this.name = name;
  }

  hasExpectation() {
    console.log(`Person has expections,`)
    return new Expectations();
  }
}

class SeaShore {
  name : String = "SeaShore";
  
  whereWavesChangingPatterns() {
    console.log(`Watching those waves changing patterns,`)
  }
}

class Solitude extends SeaShore {
  ofSeaShore : SeaShore;
  constructor(solitude: SeaShore){
    super();
    this.ofSeaShore = solitude;
  }
  static mountains;
  static jungles;
}

class Me extends Person {
  mysolitude: SeaShore;

  constructor(name: String) {
    super(name);
  }

  setMySolitude(mySolitude: Solitude) {
    this.mysolitude = mySolitude;
    console.log(`Sitting on ${mySolitude.name},`)
  }

  lookingForAnswersOfQuestions(myQuestions: Questions) {
    console.log(`Looking for answers of questions ...`)
    myQuestions.whoAmI();
    myQuestions.whatAmILookingFor();
  }

  weaveingSweaterOfMyStupidThoughts() {
    console.log(`Weaving sweater of my stupid thoughts,\n\n`);
    
    return true;
  }

  someThingDeepInside(): Answers {
    console.log(`Something deep inside me, when tries to tell me the answers..`)
    return new Answers();
  }

  beingAnIdiot(answers: Answers) {
    console.log(`I being an idiot, `)
    answers = null;
  }

  lookingForItInOtherPersons(person: Person): Person {
    console.log(`Look for it in one person or the other\n\n`)
    return person;
  }
}

class CodePoetry {

  static recite(){
    const me: Me = new Me("I");
    me.setMySolitude(new Solitude(new SeaShore()));
    me.mysolitude.whereWavesChangingPatterns();
    me.weaveingSweaterOfMyStupidThoughts();
    me.lookingForAnswersOfQuestions(new Questions());
    const answers: Answers = me.someThingDeepInside();
    //but
    me.beingAnIdiot(answers);
    const questions: Questions = me.lookingForItInOtherPersons(new Person("He") || new Person("She")) // Person
      .hasExpectation() // Expectation
      .leadsToDisappointement() // Disappointment
      .bringsSadness() // Sadness
      .bringsBackMeToQuestions() // Questions
    questions.whoAmI();
    questions.whatAmILookingFor();

  }
}

CodePoetry.recite();



