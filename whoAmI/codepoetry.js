/**
 * My first code poerty : ""
 * Author : Vishwas Bhushan
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Questions = (function () {
    function Questions() {
    }
    Questions.prototype.whoAmI = function () {
        console.log("Who am I?");
    };
    Questions.prototype.whatAmILookingFor = function () {
        console.log("What am I looking for?\n\n");
    };
    return Questions;
})();
var Answers = (function () {
    function Answers() {
    }
    return Answers;
})();
var Sadness = (function (_super) {
    __extends(Sadness, _super);
    function Sadness() {
        _super.call(this);
    }
    Sadness.prototype.bringsBackMeToQuestions = function () {
        console.log("And sadness brings me back to those questions...\n\n");
        return new Questions();
    };
    return Sadness;
})(Questions);
var Disappointement = (function (_super) {
    __extends(Disappointement, _super);
    function Disappointement() {
        _super.call(this);
    }
    Disappointement.prototype.bringsSadness = function () {
        console.log("Disappointement brings sadness,");
        return new Sadness();
    };
    return Disappointement;
})(Sadness);
var Expectations = (function (_super) {
    __extends(Expectations, _super);
    function Expectations() {
        _super.call(this);
    }
    Expectations.prototype.leadsToDisappointement = function () {
        console.log("Expections leads to disappointement,");
        return new Disappointement();
    };
    return Expectations;
})(Disappointement);
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(name) {
        _super.call(this);
        this.name = name;
    }
    Person.prototype.hasExpectation = function () {
        console.log("Person has expections,");
        return new Expectations();
    };
    return Person;
})(Expectations);
var SeaShore = (function () {
    function SeaShore() {
        this.name = "SeaShore";
    }
    SeaShore.prototype.whereWavesChangingPatterns = function () {
        console.log("Watching those waves changing patterns,");
    };
    return SeaShore;
})();
var Solitude = (function (_super) {
    __extends(Solitude, _super);
    function Solitude(solitude) {
        _super.call(this);
        this.ofSeaShore = solitude;
    }
    return Solitude;
})(SeaShore);
var Me = (function (_super) {
    __extends(Me, _super);
    function Me(name) {
        _super.call(this, name);
    }
    Me.prototype.setMySolitude = function (mySolitude) {
        this.mysolitude = mySolitude;
        console.log("Sitting on " + mySolitude.name + ",");
    };
    Me.prototype.lookingForAnswersOfQuestions = function (myQuestions) {
        console.log("Looking for answers of questions ...");
        myQuestions.whoAmI();
        myQuestions.whatAmILookingFor();
    };
    Me.prototype.weaveingSweaterOfMyStupidThoughts = function () {
        console.log("Weaving sweater of my stupid thoughts,\n\n");
        return true;
    };
    Me.prototype.someThingDeepInside = function () {
        console.log("Something deep inside me, when tries to tell me the answers..");
        return new Answers();
    };
    Me.prototype.beingAnIdiot = function (answers) {
        console.log("I being an idiot, ");
        answers = null;
    };
    Me.prototype.lookingForItInOtherPersons = function (person) {
        console.log("Look for it in one person or the other\n\n");
        return person;
    };
    return Me;
})(Person);
var CodePoetry = (function () {
    function CodePoetry() {
    }
    CodePoetry.recite = function () {
        var me = new Me("I");
        me.setMySolitude(new Solitude(new SeaShore()));
        me.mysolitude.whereWavesChangingPatterns();
        me.weaveingSweaterOfMyStupidThoughts();
        me.lookingForAnswersOfQuestions(new Questions());
        var answers = me.someThingDeepInside();
        //but
        me.beingAnIdiot(answers);
        var questions = me.lookingForItInOtherPersons(new Person("He") || new Person("She")) // Person
            .hasExpectation() // Expectation
            .leadsToDisappointement() // Disappointment
            .bringsSadness() // Sadness
            .bringsBackMeToQuestions(); // Questions
        questions.whoAmI();
        questions.whatAmILookingFor();
    };
    return CodePoetry;
})();
CodePoetry.recite();
