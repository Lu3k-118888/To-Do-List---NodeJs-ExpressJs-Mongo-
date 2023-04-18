const Task = require('../models/task');
let taskList = [];



//    Load Home Page  function   ---- 
module.exports.home = function(req,res){
    // console.log(`req.body : ${req.body}`)
    Task.find().then(function(tasks){
        return res.render('home' , {title : 'my to-do list' , task_list : tasks});
    }).catch(function(err){
        console.log('error in fetching tasks from db');
        return;
    })
};


//    Create Task  function   ---- 
module.exports.createTask = async function(req,res){
    // console.log(`req.body : ${req.body.date}`);
    taskList.push(req.body);
    let date = new Date(String(req.body.date));
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const localDate = date.toLocaleDateString('en-US', options);
    
    try {
        const newTask = await Task.create({
            name: req.body.name,
            category: req.body.category,
            date: localDate
        });
        console.log('********',newTask);
        return res.redirect('back');
    } catch (err) {
        console.log('error in creating task',err);
        return;
    }
};

//    Delete Task  function   ---- 
module.exports.deleteTask = async function(req,res){
    var id = req.query;
    var count = Object.keys(id).length;
    // console.log(`data: ${Object.keys(id)}`);
    try {
        for(let i=0; i < count ; i++){
            // finding and deleting tasks from the DB one by one using id
            await Task.findByIdAndRemove(Object.keys(id)[i]);
        }
    } catch (err) {
        console.log('error in deleting task',err);
        return;
    }
    return res.redirect('back');
};

