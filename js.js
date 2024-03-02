class Car{
    constructor(speed,model){
        this.speed = speed
        this.model = model
        this.luxary = false
    }
}

class  bmw extends Car{
    constructor(speed,model){
        super(speed,model)
        this.luxary = true

    }
 }

    
let car1 = new bmw(2520,2022)




class Robot{
    constructor(x,y){
        this._x = x
        this._y = y
    }
    get x (){
        return this._x
    }
    set x (x){
        this._x = x
    }
}



const robot1 = new Robot(5,6)
robot1.x = 55


const fetchGoogle = () => {
    return "GOOGEL"
}


function  * fetchAPI(){

    console.log("START fetching")
    yield "start"
 
    console.log("DOING fetching")
    yield "doing"

    console.log("DONE fetching")
    yield "done"

    console.log("ERROR fetching")
    yield "error"

}

const fetch = fetchAPI()


const names = ["ehsan", "alex", "jack", "robert"]
//names.map((item)=>console.log(item)) 
//names.forEach((name)=>console.log(name))
for(item of names){
   // console.log(item)
}

const obj = {
    name:"sara",
    age: 20,
    nationaly:"iran",
    job : "student",
}

for(item in obj){
    //console.log(item,":",obj[item])
}

const movies = [
    { id:1 , name:"star wars"},
    {id:2 , name: "iron man"},
    {id:3 , name:"baby work"}
]

movies.find(item=> item.id === 3)



let fetchAPI1 = () =>{
    return new Promise(( resolve,reject) =>{
        setTimeout(() =>{
             reject("somethin wrong happend");
        },3000)
    })
}

fetchAPI1().then((response)=>{
    console.log("response",response)
})
.catch((eroor)=>{
    console.log("error",eroor)
})