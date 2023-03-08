const Starwars = require('../models/Starwars')

module.exports = {
    index : async(req,res)=>{
        try{
            const data = await Starwars.find({}).populate('starwars')

            return res.status(200).json({"result":true,"data":data})
        }catch(err){
            return res.status(500).json({"result":false,"error":err})
        }
        
    },
    save : async(req,res)=>{
        
        const starwars = new Starwars(req.body)

        try{
            const data = await starwars.save()

            return res.status(200).json({"result":true,"data":data})
        }catch(err){
            return res.status(500).json({"result":false,"error":err})
        }
    },
    findById : async(req,res)=>{
        const {id} = req.params
        try{
            const result = await Starwars.findById(id)

            return res.status(200).json({"result":true,"data":result})
        }catch(err){
            return res.status(500).json({"result":false,"error":err})
        }
    },
    update : async(req,res)=>{
        const {id} = req.params
        const starwars = req.body
        try {
            const result = await Starwars.findByIdAndUpdate(id,starwars)

            return res.status(200).json({"result":true,"data":result}) 
        } catch (error) {
            return res.status(500).json({"result":false,"error":err}) 
        }
    }

}
