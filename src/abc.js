let data= ()=>{
    let a  =3
    let data2 = ()=>{
        console.log(this)
    }
    data2()
}

console.log(data())