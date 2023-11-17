import { useState , useEffect } from "react";
import AnimatedPage from "../animtedPage/AnimatedPage";
import { useSelector , useDispatch } from 'react-redux';
import { AiFillEdit , AiOutlineCheck} from "react-icons/ai";
import { userEditAction } from "../../store/slices/user";
import { loginAuth } from "../../Services/auth";
import toast, { Toaster } from "react-hot-toast";

const UserEdit = () => {
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.user.user)
    const [editingPass , setEditingPass] = useState(false)
    
    const [verfication , setVerfication] = useState(false)

    const [editUser , setUser] = useState({
        name:"",
        email:""
    });

    const [editPass , setPass] = useState({
        password : "",

    })
    const [newPass , setNewPass] = useState({
        password:"",
        confirmPass:""
    })

    const [errors , setErrors] = useState({
        nameError: "",
        emailError: ""
        
    })

    useEffect(()=>{

    })
    const inputChange = (e)=>{
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

        if(e.target.name == "name"){
            setUser({...editUser , name:e.target.value})
            setErrors({...errors , nameError : (e.target.value.length == 0) ? "Name is required" : (e.target.value.length < 3) ? "name must be at least 3 characters" : "" })

        }
        else if(e.target.name == "email"){
            setUser({...editUser , email:e.target.value})
            setErrors({...errors , emailError : (e.target.value.length == 0) ? "Email is required" : regex.test(e.target.value) ? "" : "InValid Email" })
        }
        else if(e.target.name == "password"){
            if(e.target.value === "" ){
                setEditingPass(false)

            }else{
                setEditingPass(true)
            }
            setPass({...editPass, password:e.target.value})

        }
        else if(e.target.name == "newPassword"){
            setNewPass({...newPass, password:e.target.value})

        }
        else if(e.target.name == "confirmNewPassword"){
            setNewPass({...newPass, confirmPass:e.target.value})

        }

    }
    
    const userEditFormSubmit = async (e)=>{
        e.preventDefault();
        let uName = user.name;
        let uEmail = user.email;
        let verfied = false;
        console.log(uName);
        console.log(uEmail);
        console.log({...editUser});
        if(editUser.name === "" && editUser.email === "" ){
            setUser({...editUser , email:uEmail , name:uName})
        }
        else if(editUser.name === "" && editUser.email !== ""){
            setUser({...editUser , name:uName})
            uEmail = editUser.email
        }
        else if(editUser.name !== "" && editUser.email === ""){
            setUser({...editUser , email:uEmail})
            uName = editUser.name

        }
        
        if(editingPass){
            try{
                const passResult = await loginAuth({
                    email:uEmail,
                    password:editPass.password
                })
                if(passResult.status == 200){
                    verfied = true
                    console.log(`editingPass Verfi true`);
                }
            }
            catch(error){
                verfied = false
                console.log(`editingPass Verfi false`);
                if (error.response) {
                    const errorMessage = error.response.data.message;
                    // console.log(errorMessage)

                    toast.error(errorMessage, {
                        position: "top-center",
                    });
                }

            }
        }else{
            verfied = true
            console.log(`editingPass Verfi true`);
            
        }
        

        
        
        console.log(uName);
        console.log(uEmail);
        console.log(verfied);
        if(verfied){
            const sentUser = {
                "id":user._id,
                "name" : uName,
                "email" : uEmail,
                "password" : newPass.password
            }
            dispatch(userEditAction(sentUser))

        }else{
            const sentUser = {
                "id":user._id,
                "name" : uName,
                "email" : uEmail
            }
            dispatch(userEditAction(sentUser))

        }
        
        


    }
    return (<>
            <AnimatedPage>
                        <h6 className="h6">Edit Your Profile</h6>
                        <form onSubmit={(e) => {userEditFormSubmit(e)}}>
                            <div className="row p-0 m-0 justify-content-center align-items-center">
                                {(user._id)?<>
                                    <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                    <label htmlFor="firstNameInput" className="form-label">Full Name</label>
                                    <input type="text" id="firstNameInput" className="form-control" placeholder={user.name} name="name" value={editUser.name} onChange={(e) => {inputChange(e)}} />

                                </div>
                                {/* <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                                    <label htmlFor="lastNameInput" className="form-label">Last Name</label>
                                    <input type="text" id="lastNameInput" className="form-control" placeholder="remele" />
                                </div> */}
                                <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                    <label htmlFor="inputEmail" className="form-label">Email</label>
                                    <input type="email" id="inputEmail" className="form-control" placeholder={user.email} name="email" value={editUser.email} onChange={(e) => {inputChange(e)}}/>
                                </div>
                                
                                <div className="col-12 my-3">
                                    <label htmlFor="inputCurrentPassword" className="form-label">Password Changes</label>
                                    <input type="password" id="inputCurrentPassword" className="form-control my-2" placeholder="Current Password" name="password" value={editPass.password} onChange={(e) => {inputChange(e)}}/>
                                    <input type="password" id="inputNewPassword" className="form-control my-2" placeholder="New Password" name="newPassword" value={newPass.password} required={editingPass} onChange={(e) => {inputChange(e)}}/>
                                    <input type="password" id="inputConfirmPassword" className="form-control my-2" placeholder="Confirm New Password" name="confirmNewPassword" value={newPass.confirmPass} required={editingPass} onChange={(e) => {inputChange(e)}}/>
                                </div>
                                <div className="col-12 text-end">
                                    <button type="button" onClick={()=>{console.log({...editUser})}}>cancel</button>
                                    <input type="submit" value="Save Changes"/>
                                </div>
                                </>:<>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                    <label htmlFor="firstNameInput" className="form-label">Full Name</label>
                                    <p className="placeholder-wave">
                                        <span className="placeholder col-12 form-control " style={{height:"40px" }}></span>
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                    <label htmlFor="inputEmail" className="form-label">Email</label>
                                    <p className="placeholder-wave">
                                        <span className="placeholder col-12 form-control " style={{height:"40px" }}></span>
                                    </p>
                                </div>
                                
                                <div className="col-12 my-3">
                                    <label htmlFor="inputCurrentPassword" className="form-label">Password Changes</label>
                                    <p className="placeholder-wave">
                                        <span className="placeholder col-12 my-0 form-control " style={{height:"40px" }}></span>
                                    </p>                                    
                                    <p className="placeholder-wave">
                                        <span className="placeholder col-12 my-0 form-control " style={{height:"40px" }}></span>
                                    </p>                                    
                                    <p className="placeholder-wave">
                                        <span className="placeholder col-12 my-0 form-control " style={{height:"40px" }}></span>
                                    </p>                                           </div>
                                <div className="col-12 text-end">
                                    <button type="button" >cancel</button>
                                    <input type="submit" value="Save Changes"/>
                                </div>
                                </>}
                                
                            </div>

                            
                        </form>
                        <Toaster />

            </AnimatedPage>
            </>
    );
}

export default UserEdit;
