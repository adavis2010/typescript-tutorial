"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bff) {
        if (bff === void 0) { bff = false; }
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    Friend.prototype.print = function () {
        console.log(this.name + "|" + this.age + "|" + this.email + "| " + this.bff);
    };
    return Friend;
}());
var friend = [];
friends.push(new Friend("Bill", 28, "bill28@yahoo.com"));
friends.push(new Friend("Jill", 45, "jill@gmail.com", true));
friends.push(new Friend("Jane", 51, "janedoe@gmail.com", true));
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend_1 = friends_1[_i];
    friend_1.print();
}
