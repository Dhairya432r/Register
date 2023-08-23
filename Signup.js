import React,{useState} from 'React';
const Signup = () =>{
const [user,setUser]=useState({
    Name:"",email:"",phone:"",work:"",password:"",cpassword:""
});

const handleInputs =(e)=>{
console.log(e);
Name= e.target.name;
value = e.target.value;

setUser({...user,[Name]:value});

}

return(
<>

<div>
    <label>Name</label>
    <input type='text' name='name' value ={user.Name} onChange={handleInputs}></input>
    <label>email</label>
    <input type='text' name='email' value ={user.email} onChange={handleInputs}></input>
    <label>phone</label>
    <input type='text' name='phone' value ={user.phone} onChange={handleInputs}></input>
    <label>Work</label>
    <input type='text' name='work' value ={user.work} onChange={handleInputs}></input>
    <label>password</label>
    <input type='text' name='password' value ={user.password} onChange={handleInputs}></input>
    <label>cpassword</label>
    <input type='text' name='cpassword' value ={user.cpassword} onChange={handleInputs}></input>
  
    
</div>
  
</>
)}
export default Signup;