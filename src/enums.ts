import e from 'express';
import express from 'express';
import http from 'http'

const app = express()
let plusCount = 0;
let minusCount = 0;   
    
app.use(express.static('front'));

app.use(express.json())

http.createServer(app).listen(3000,()=>{
    console.log("Start http server port 3000")
})

app.post('/',async (req,res)=>{
    if(req.body.button === 'plus' ){       
        plusCount++;
        enum buttons{
            PLUS = plusCount,
            MINUS = minusCount
        }
        res.send(JSON.stringify({buttons : buttons}))
    }
    else if (req.body.button === 'minus' ){
        minusCount++;
        enum buttons{
            PLUS = plusCount,
            MINUS = minusCount
        }
        let resJson = await JSON.stringify({buttons : buttons})
        res.send(resJson)
    }
    else{
        res.status(400)
    }
    
})