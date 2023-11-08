import AnimatedPage from "../animtedPage/AnimatedPage";
import { useSelector , useDispatch } from 'react-redux';

const UserEdit = () => {
    const user = useSelector((state)=> state.user.user)

    return (<>
            <AnimatedPage>
                        <h6 className="h6">Edit Your Profile</h6>
                        <form action="">
                            <div className="row p-0 m-0 justify-content-center align-items-center">
                                <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                                    <label htmlFor="firstNameInput" className="form-label">First Name</label>
                                    <input type="text" id="firstNameInput" className="form-control" placeholder="md"/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                                    <label htmlFor="lastNameInput" className="form-label">Last Name</label>
                                    <input type="text" id="lastNameInput" className="form-control" placeholder="remele" />
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                    <label htmlFor="inputEmail" className="form-label">Email</label>
                                    <input type="email" id="inputEmail" className="form-control" placeholder="rimel1111@gmail.com"/>
                                </div>
                                
                                <div className="col-12 my-3">
                                    <label htmlFor="inputCurrentPassword" className="form-label">Password Changes</label>
                                    <input type="password" id="inputCurrentPassword" className="form-control my-2" placeholder="Current Password"/>
                                    <input type="password" id="inputNewassword" className="form-control my-2" placeholder="New Password"/>
                                    <input type="password" id="inputConfirmPassword" className="form-control my-2" placeholder="Confirm New Password"/>
                                </div>
                                <div className="col-12 text-end">
                                    <button type="button">cancel</button>
                                    <input type="submit" value="Save Changes"/>
                                </div>
                            </div>

                            
                        </form>
            </AnimatedPage>
            </>
    );
}

export default UserEdit;
