// +++++++++++++++++++++++
// Stack(Primitive - Send Copy ) , Heap(Non-Primitive- Send Real value)

let myname = "abhay"
anothername = myname
console.log(myname);
console.log(anothername);

let userOne = {
    mail: "abhi@google.com",
    upi: "user@ybl"

}
let user2 = userOne
user2.mail = "@123google.com"
console.log(user2.mail)
console.log(userOne.mail)
