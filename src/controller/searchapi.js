const data=[
    {"name": "swift", "type": "hatchback", "price":870000},
    {"name": "dzire", "type": "sedan", "price":980000},
    {"name": "ciaz", "type": "sedan", "price":1100000},
    {"name": "baleno", "type": "hatchback", "price":880000},
    {"name": "fronx", "type": "hatchback", "price":950000},
    {"name": "fronx turbo", "type": "hatchback", "price":1150000},
    {"name": "brezza", "type": "suv", "price":1250000},
    {"name": "grand vitara", "type": "suv", "price":1990000},
    {"name": "alto", "type": "hatchback", "price":380000},
    {"name": "s presso", "type": "hatchback", "price":350000},
    {"name": "wagon r", "type": "hatchback", "price":500000},
    {"name": "jimny", "type": "suv", "price":1400000}
];

export default (req,res)=>{
     const id=req.params.id;

     const car=data.filter(i=>i.name.includes(id));
     
     if(car.length){
          return res.status(200).json(car);
     }
     else{
          return res.status(200).json([{name:"no car found"}]);
     }
}