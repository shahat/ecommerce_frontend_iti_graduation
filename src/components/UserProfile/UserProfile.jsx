import { useEffect, useState } from 'react';
import './userProfile.css'

function UserProfile() {

  const [tab , setTab] = useState("My Profile")
  var tabs= ["My Profile" , "My wishList" , "My orders"]
 

  useEffect(()=>{
    const element = document.querySelector('#manageMyAccount');

    const tabBody = document.querySelectorAll('.card-container');
    const tabLinks = element.querySelector('#manageLinks')
    const tabLink = tabLinks.querySelectorAll("button")
    console.log(element);
    for (let i = 0 ; i < tabLink.length;i++){
      tabLink[i].addEventListener("click",() => {
        console.log(tabs[i]);
        setTab(tabs[i])
        for(let j = 0 ; j < tabBody.length ; j++){
          tabBody[j].classList.remove("active");
          tabLink[j].classList.remove("active");
        }
        tabBody[i].classList.add("active");
        tabLink[i].classList.add("active");

      });
    }
  },[])


  const displayCards = (x)=>{
    console.log(x);
    
    this.tabBody[x].classList.add("active");
    this.tabLink[x].classList.add("active");
    
    console.log(this.tabBody[x]);
  }
  return <div className='container' id="manageMyAccount">
  <div className="row m-0 p-0 justify-content-around align-items-center">
      <div className="col-12 col-sm-12 col-md-4 col-lg-5" id="manageLinks">
      <h5 className="h6">
                    Manage My Account
                </h5>
                <ul className="row p-2 m-0 justify-content-around">
                    <li className="col-4 col-sm-4 col-md-12">
                        <button type="button" className="active" >
                            My Profile
                        </button>
                    </li>
                    <li className="col-4 col-sm-4 col-md-12" >
                        <button type="button" >
                            My wishList
                        </button>
                    </li>
                    <li className="col-4 col-sm-4 col-md-12" >
                        <button type="button" >
                            My orders
                        </button>
                    </li>
                </ul>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-7">
      <div id="card" className="row justify-content-center align-items-center">
                    <div className="card-container col active" >
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
                                <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                                    <label htmlFor="inputPassword5" className="form-label">Email</label>
                                    <input type="email" id="inputPassword5" className="form-control" placeholder="rimel1111@gmail.com"/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                                    <label htmlFor="inputPassword5" className="form-label">Address</label>
                                    <input type="text" id="inputPassword5" className="form-control" placeholder="Kingston, 5236, United State" />
                                </div>
                                <div className="col-12 my-3">
                                    <label htmlFor="inputPassword5" className="form-label">Password Changes</label>
                                    <input type="password" id="inputPassword5" className="form-control my-2" placeholder="Current Password"/>
                                    <input type="password" id="inputPassword5" className="form-control my-2" placeholder="New Password"/>
                                    <input type="password" id="inputPassword5" className="form-control my-2" placeholder="Confirm New Password"/>
                                </div>
                                <div className="col-12 text-end">
                                    <button type="button">cancel</button>
                                    <input type="submit" value="Save Changes"/>
                                </div>
                            </div>

                            
                        </form>
                    </div>
                    <div className="card-container col">
                        My Wish List
                    </div>
                    <div className="card-container col">
                        My orders
                    </div>
                </div>
      </div>
  </div>
</div>;
}

export default UserProfile;
