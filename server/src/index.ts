
import express from "express";
import { listingsData } from './listings';
import bodyParser   from 'body-parser';

const app = express();
app.use(express.json())
//app.use(bodyParser.json());
const port = 9000;
app.get('/', (req, res) => res.send('hello world1'));
app.get('/listings',(_req,res)=>{
    res.send(listingsData)
});
app.post('/delete-listing',(req,res)=>{
    const id:string = req.body.id;
    for (let i = 0; i < listingsData.length; i++) {
        if (listingsData[i].id === id) {
          return res.send(listingsData.splice(i, 1)[0]);
        }
      }
    return res.send("failed to deleted listing");
});
//
app.listen(port);
console.log(`[app] : http://localhost:${port}`);

