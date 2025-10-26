export default function(req,res){
     if(req.query.query && req.query.used){
          res.status(200).send(`Query: ${req.query.query}, Used: ${req.query.used}`);
     }
     else if(!req.query.query){
          res.status(200).send(`Query: not found`);
     }
     // else if(!req.query.used){
     //      res.status(200).send(`Query: ${req.query.query}, Used: false`);
     // }
     else{
          res.status(200).send(`Query: ${req.query.query}, Used: false`);
     }
}