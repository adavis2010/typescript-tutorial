class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    print(): void {
        console.log(`${this.name}|${this.age}|${this.email}| ${this.bff}`);
    } }
    
    let friend: Friend [] = [];
    

friends.push(new Friend("Bill", 28,"bill28@yahoo.com"));
friends.push(new Friend("Jill", 45,"jill@gmail.com",true));
friends.push(new Friend("Jane", 51,"janedoe@gmail.com",true));

for(let friend of friends){
    friend.print();
}
 