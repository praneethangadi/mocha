const express = require("express");
const App = express(); 


App.use(express.json())
let people = [
    {
        id: "1",
        name :"sai"
    },
    {
        id: "2",
        name : "praneeth"
    },
]

App.get("/people", (req, res) => {
    res.status(200).send(people);
});

App.post("/people", (req, res) =>{
    var id=req.body.id
    var name = req.body.name
    people.push({
        id:id,
        name:name
    })
    res.send({
        success:true,
        name:name,
        message:"data added successfully",
    })
});
App.delete("/people/:id",(req,res)=> {
    var id = req.params.id
    var newPeople = people.filter(el => el.id != id)
    people= newPeople

    res.send({
        success:true,
        message:"data deleted successfully"
    })
})
App.put("/people/:id",(req,res) =>{
    var id= req.params.id
    var name= req.body.name

    var index= people.findIndex(el => el.id ==id)

    people[index] = {
        ...people[index],
        name:name
    }
     
    res.send({
        success:true,
        name:name,
        message:"data updated successfully"
    })
})


App.listen(3000,() => {
    console.log("server is up")
});
module.exports.App=App;