const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
let val = "asulin";
const hash = bcrypt.hashSync(val, salt);
console.log(hash);
bcrypt.hash(val,salt,(err,hash)=>{
    if (err){
        throw err
    }
    console.log(hash);
})
console.log(bcrypt.compareSync("danai","$2a$10$0timhRRzrZxlIKYCRfuWzu9Js/dl4oWkxACANZ1gOdpNdam0hMC.S"))
console.log(bcrypt.compareSync("tal","$2a$10$kjMDB7zk48m/sLK6Ah/x1uQfN73zOy2XBYv93AFMTS23NqP2EWD4."))
console.log(bcrypt.compareSync("tal","$2a$10$kjMDB7zk48m/sLK6Ah/x1uQfN73zOy2XBYv93AFMTS23NqP2EWD4."))