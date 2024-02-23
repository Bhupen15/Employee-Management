const employees= require("../models/employees");

const addemployee = async(req,res,next)=>{
    try{
        let data =req.body;

        
        console.log(data);
        req.body.image="";
        let employee= await employees.create(req.body);
        if(employee){
            res.status(200).json({
                success:true,
                message:"employee Added Successfully"
            })
        }
    }catch(err){
        console.log(err)
        res.status(200).json({
            success:true,
            message:err.message
        });
    }
    
}

const getAllemployee= async(req,res,next)=>{
    try{
        let employees= await employees.find().select('name surname class roll_no class section');
        console.log(employees);
        if(employees){
            res.status(200).json({
                success:true,
                employees
            })
        }else{
            res.status(200).json({
                success:false,
                message:"error occured"
            })
        }
    }catch(err){
        console.log(err)
        res.status(200).json({
            success:false,
            message:err.message
        });
    }
};

const getemployeeByID=async(req,res,next)=>{
    try {
        console.log(req.params.id,"id==========>");
        let id = req.params.id;
        if(id){
            let employee = await employees.find({_id:id});
            if(employee.length){
                res.status(200).json({
                    success:true,
                    employee:employee[0],
                });   
            }
            else{
                res.status(200).json({
                    success:false,
                    message:"employee not found with this ID" 
                });
            }
        }else{
            res.status(200).json({
                success:false,
                message:"employee id is missing"
            });  
        }
    } catch (error) {
        console.log("error",error);
        res.status(200).json({
            success:false,
            message:error.message
        })
    }
}

const editemployee = async(req,res,next)=>{
    try {
        console.log(req.params.id,"id==========>");
        let id = req.params.id;
        if(id){
            let employee = await employees.find({_id:id});
            if(employee){
                req.body.image="";
                let update = await employees.findByIdAndUpdate(id,req.body);
                if(update){
                    res.status(200).json({
                        success:true,
                        message:"employee updated" 
                    }); 
                }
            }
            else{
                res.status(200).json({
                    success:false,
                    message:"employee not found with this ID" 
                });
            }
        }else{
            res.status(200).json({
                success:false,
                message:"employee id is missing"
            });  
        }
    } catch (error) {
        console.log("error",error);
        res.status(200).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    addemployee,
    getAllemployee,
    getemployeeByID,
    editemployee
}

