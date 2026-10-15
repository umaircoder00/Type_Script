"use strict";
// let masseage: string = "heelo typeScript"
// console.log(masseage)
Object.defineProperty(exports, "__esModule", { value: true });
// let arr = [23 , "umair" , null]
// console.log(arr)
// class bottle{
//     constructor(public name:string , public price:number){}
// }
// let b1 = new bottle ("pakola",70)
// console.log(b1)
// class bottle {
//     constructor(public private name:string,public price:number ,public material:string){
//         let b1 = new bottle ("pakola", 70,"plastic")
//         console.log(b1)
//     }
// }
// console.log(bottle)
// class plasticBottle extends Bottle{
//     constructor(protected name:string, public price:number, public material:string){
//   super(name,price,material)
//     }
// }
// let plastic1 = new plasticBottle("aquafina" ,70,"plastic")
// console.log(plastic1)
// class student {
//     public name
//     public email
//     public age
//     constructor(n:string,e:string,a:number){
//         this.name = n
//         this.email = e
//         this.age = a
//     }
// }
// let s1 = new student("umair", "umair@gamil.com", 20)
// let s2 = new student("hasnain", "hasnain@gamil.com", 17)
// console.log(s1)
// console.log(s2)
// class mobile {
//     constructor(public name:string,public price:number,public model:number){
//     }
// }
//   let m1 = new mobile ("goolglepixel", 70, 7)
//   let m2 = new mobile ("iphone", 80, 12)
//   console.log(m1)
//   console.log(m2)
// class student {
//    public name
//     public email
//     public rollNum
//     constructor( n:string,  e:string,  r:number ){
//         this.name = n
//         this.email = e
//         this.rollNum = r
//     }
// }
// let s1 = new student ("umair" , "umair@gmail", 223344)
// let s2 = new student ("hasnain" , "hasnain@gmail", 889900)
// console.log(s1)
// console.log(s2)
// tuples 
// let arr:[string,number,boolean] = ["umiar", 43,true]
// console.log(arr)
// enums
//  enum userRole{
//     admin = "ADMIN",
//     guest = "GUEST"
//  }
//   enum stateCode {
//     not_found = 404,
//     abondoned = 410,
//     sucess = 200
//   }
//   console.log(userRole.guest)
//  typeNarrowing
// let a:unknown;
// if(typeof a == "string"){
//     a.toLowerCase()
// }
// if(typeof a == "number"){
//     a.toFixed()
// }
// const foo = ():number => {
//     console.log(Number)
//     let value = 90
//     return value
// }
// foo()
// function continousLoop(){
//     while(true)
//         console.log("jani")
// }
// continousLoop()
// console.log("mera code chala");
// let num:number = 90
// if(num){
//     num = 100
// }
// console.log(num)
// let mixedArr:(number  string)[] (12, "34")
// interface userObj {
//    email : string,
//    password : number,
//    age : number
// }
//  const userObj = {
//     email: "umiar@gmail.com",
//     password: 222222, 
//     age: 20
// }
// console.log(userObj)
// class User{
//    public email:string;
//    public password : string;
//    constructor(e:string , p: string){
//       this.email = e;
//       this.password = p;
//    }
// }
// // class Admin extends User{
// //    public email : string;
// //    public isAdmin : boolean;
// //    constructor(e:string,p:string){
// //       super(e,p)
// //       this.email = "umair@gmail.com"
// //       this.isAdmin = true
// //    }
// // }
// // let a1 = new Admin ("hasnain@gmail.com" , "77777")
// // let u1 = new User ("saim@mail.com", "888888")
// // console.log(u1)
// // console.log(a1)
// class student {
//    constructor( public r:number, public gender?:string){
//    }
//    public get rollNum(): number {
//       return this.r
//    }
// public set setRollNumber(v : number){
//    this.r = v;
// }
// }
// let s1 = new student(432,"male")
// // s1.readRollNumber()
// // s1.setRollNumber(888)
// // s1.setRollNumber = ""
// s1.setRollNumber = 45
// console.log(s1)
// class User{
//    protected email
//    public pass
// }
// class Random {
//    static value = 90
//    static myRandomMethod (){
//       return Math.random()
//    }
// }
// console.log(Random.myRandomMethod())
// abstract class Pakanaha {
//    constructor(public kiapakanaHa:string, public gasNam:string){
//    }
//    }
//    class DaalBanado extends Pakanaha {
//       constructor(foodName:string, gasName:string){
//          super(foodName,gasName)
//       }
//    }
// let daalpakgai = new DaalBanado("chany ki daal", "LPG")
// console.log(daalpakgai)
// class User{
//     constructor(public email:string){}
//     login(email:string){
//         if(!email) return
//         else{
//             console.log("user login hu gaya")
//         }
//     }
// }
// class Recruiter extends User{
//     login(password:string){}
// }
// let r1 = new Recruiter("recruiter@gmail.com")
// console.log(r1)
// function foo (a:string , cb:(val:string) => void){
//     cb("key")
// }
// foo("umiar" , (val:string):void=>{
//     console.log(val)
// })
// function Kuchbhi (val:number, sum(n1:number,n2:number)=> void):void{
//     sum(val,89)
// }
// Kuchbhi(78,(n1:number,n2:number)=>{
//     console.log(n1+n2)
// })
// function getValue (...nums:number[]):void{}
// getValue(1,2,3,4,7)
// function student (...student:string[]){
// }
// student("ali","umair","hasnain")
// function foo (a:string, b:number){
//     if(typeof a == "string"){
//         console.log(a)
//         let n1 = Number(a)
//         console.log(n1)
//     }
//     if(typeof b == "number"){
//         console.log(b)
//         let str = String(b)
//         console.log(str)
//     }
// }
//# sourceMappingURL=app.js.map