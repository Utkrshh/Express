const express = require("express")
const app = express();


var user =[];
app.use(express.json());

app.post("/signup",(req,res)=>
{
    var user = req.body;
    let useralreadyexists = false;
    for (var i =0 ;i< user.length ;i++) {
        if(user[i].email===user.email){
            useralreadyexists = true;
            break;
        }
        
    }



if(useralreadyexists){
    res.sendStatus(400);
}

else{
    user.push(user);
    res.status(201).send("signup successful");
}

    
});

app.post("/login",(req,res)=>{

    var user =req.body;
    let userfound =null;
    for(vari=0;i<user.length;i++){
        userfound = user[i];
        break;

    }


if(userfound){

    res.json({
        firstname:userfound.firstname,
        lastname:userfound.lastname,
        email:userfound.email

    });
}

else
{
    res.sendStatus(401)
}
});


app.get("/data",(req,res)=>{

    var email = req.headers.email;
    var password =req.headers.password;
    let userfound =false;
    for (vari=0;i<user.length;i++){
       if( user[i].email===email&&user[i].password===password){
        userfound =true;
        break;

       }
    }

    if(userfound){
        let usertoreturn =[];
        for(var i=0;i<users.length;i++){
            usertoreturn.push({
                firstname:users[i].firstname,
                lastname:users[i].lastname,
                email:users[i].email
            });
        }
        res.json({
            user
        });

    } else{
        res.sendStatus(401);
    }
});
app.listen(3000)

