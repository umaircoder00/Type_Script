// let masseage: string = "heelo typeScript"
// console.log(masseage)


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

class student {
     
   public name
    public email
    public rollNum
    constructor( n:string,  e:string,  r:number ){
      
        this.name = n
        this.email = e
        this.rollNum = r

    }
}

let s1 = new student ("umair" , "umair@gmail", 223344)
let s2 = new student ("hasnain" , "hasnain@gmail", 889900)

console.log(s1)
console.log(s2)




