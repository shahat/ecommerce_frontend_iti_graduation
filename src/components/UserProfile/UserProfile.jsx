import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import styles from './userProfile.module.css'

 


function UserProfile() {

    const dispatch = useDispatch()
    const user = useSelector((state)=> state.user.user)
    
    useEffect(()=>{

    },[])


  
  return (
    <div className={`container ${styles.manageMyAccount}`} >
        <div className="row m-0 p-0 justify-content-around align-items-center">
            <div className={`col-12 col-sm-12 col-md-4 col-lg-5 ${styles.manageLinks}`} id="manageLinks">
                <h5 className="h6">
                    Manage My Account
                </h5>
                <ul className="row p-2 m-0 justify-content-around">
                    <li className="col-4 col-sm-4 col-md-12">
                        <NavLink to="/userprofile/"  type="button" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
                            My Profile
                        </NavLink>
                    </li>
                    <li className="col-4 col-sm-4 col-md-12" >
                        <NavLink to="/userprofile/address" type="button" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
                            Address Book
                        </NavLink>
                    </li>
                    <li className="col-4 col-sm-4 col-md-12" >
                        <NavLink to="/userprofile/payment" type="button" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
                            My Payment Options
                        </NavLink>
                    </li>
                </ul>
                <h5 className="h6">
                    Orders
                </h5>
                <ul className="row p-2 m-0 justify-content-around">
                    <li className="col-4 col-sm-4 col-md-12">
                        <NavLink to="/userprofile/pastOrders"  type="button" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
                            Past orders
                        </NavLink>
                    </li>
                    <li className="col-4 col-sm-4 col-md-12">
                        <NavLink to="/userprofile/upcomingOrders"  type="button" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
                            Upcoming orders
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                <div  className={`row justify-content-center align-items-center ${styles.cardHolder}`}>
                    <div className={`col h-100 ${styles.cardContainer }`}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserProfile;
