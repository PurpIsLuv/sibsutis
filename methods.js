fetch('http://localhost:8081/student')
.then(data=>{
    console.log(data.text())
})