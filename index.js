const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000
app.use(bodyParser.json())

function middleware(req,res,next){
  console.log("from inside middleware " +req.headers);
  next()
}
app.use(middleware)

function calculatesum(counter){
    var sum = 0;
    for(var i=0;i<counter;i++){
        sum =sum+i;

   }
     return sum;
}


  


function handleFirstRequest(req,res) {
  var counter = req.body.counter;
  
    var calculatedsum =calculatesum(counter);
    var answerobject={
      sum:calculatedsum 

    }
    res.status(200).send(answerobject)

    
  }
  
  
  
 

app.post('/handlesum',handleFirstRequest)

  
function started(){
    console.log('Example app listening on port ${Port}')
}

app.listen(port , started)
  // function calculatesum(counter){
//     var sum = 0;
//     for(var i=0;i<counter;i++){
//         sum =sum+i;

//     }
//     return sum;
// }
// var calculatedsum=calculatesum(100);
// console.log(calculatedsum)


  
