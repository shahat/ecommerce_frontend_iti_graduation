import AnimatedPage from "../animtedPage/AnimatedPage";
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { userAddressPostAction } from "../../store/slices/user";




const UserAddress = () => {
    const dispatch = useDispatch()
    // const [modalShow, setModalShow] = useState(false);
    const [newAddress , setAddress] = useState({
        country:"",
        name:"",
        phoneNumber:"",
        city:"",
        area:"",
        zipCode:"",
        street:"",
        building:"",
        floor:"",
        apartment:"",
        extraDetails:""
    })



    const addressBook = useSelector((state)=>state.user.user.addressBook)
    const user = useSelector((state)=> state.user.user)

    const inputChange = (e)=>{
        
        setAddress({...newAddress , [e.target.name]:e.target.value})
    }

    const addressFormSubmit = (e)=>{
        e.preventDefault();

        const sentAddress = [{id : user._id},[...addressBook,{...newAddress}]]

        dispatch(userAddressPostAction(sentAddress))
        console.log(sentAddress);


    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const MyVerticallyCenteredModal = (props)=>{
    //     return (
    //         <Modal
    //           size="lg"
    //           aria-labelledby="contained-modal-title-vcenter"
    //           centered
    //           backdrop="static"
    //           show={show} 
    //           keyboard={false}
    //           onHide={handleClose}
    //         >
    //           <Modal.Header closeButton>
    //             <Modal.Title id="contained-modal-title-vcenter">
    //               New Address
    //             </Modal.Title>
    //           </Modal.Header>
    //             <form onSubmit={(e) => {addressFormSubmit(e)}}>
    //           <Modal.Body>
    //                 <div className="row justify-content-around align-items-center gy-2">
    //                     <div className="col-12">
    //                           <label htmlFor="newAddressRegion" className="form-label">Country/Region</label>
    //                           <input type="text" className="form-control" id="newAddressRegion" name="country" autoFocus  onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-12">
    //                           <label htmlFor="newAddressFullName" className="form-label">Full Name</label>
    //                           <input type="text" className="form-control" id="newAddressFullName" name="name"  onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-12">
    //                           <label htmlFor="newAddressPhoneNumber" className="form-label">Phone number</label>
    //                           <input type="tel" className="form-control" id="newAddressPhoneNumber" name="phoneNumber"  onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-5">
    //                         <label htmlFor="newAddressCity" className="form-label">City</label>
    //                         <input type="text" className="form-control" id="newAddressCity" name="city" value={newAddress.city}  onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-4">
    //                         <label htmlFor="newAddressArea" className="form-label">Area</label>
    //                         <input type="text" className="form-control" id="newAddressArea" name="area" value={newAddress.area}  onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-3">
    //                         <label htmlFor="newAddressZipCode" className="form-label">ZIP Code</label>
    //                         <input type="number" className="form-control" id="newAddressZipCode" name="zipCode" value={newAddress.zipCode} onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-12">
    //                         <label htmlFor="newAddressStreet" className="form-label">Street</label>
    //                         <input type="text" className="form-control" id="newAddressStreet" name="street" value={newAddress.street} onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-5">
    //                         <label htmlFor="newAddressBuilding" className="form-label">Building</label>
    //                         <input type="text" className="form-control" id="newAddressBuilding" name="building" value={newAddress.building}  onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-4">
    //                         <label htmlFor="newAddressFloor" className="form-label">Floor</label>
    //                         <input type="number" className="form-control" id="newAddressFloor" name="floor" value={newAddress.floor}  onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-3">
    //                         <label htmlFor="newAddressApartment" className="form-label">Apartment</label>
    //                         <input type="number" className="form-control" id="newAddressApartment" name="apartment" value={newAddress.apartment} onChange={(e) => {inputChange(e)}}/>
    //                     </div>
    //                     <div className="col-12">
    //                         <label htmlFor="newAddressDetails" className="form-label">Extra Details</label>
    //                         <textarea className="form-control" id="newAddressDetails" name="extraDetails" value={newAddress.extraDetails} onChange={(e) => {inputChange(e)}}/>
    //                     </div>
                        
    //                 </div>
    //           </Modal.Body>
    //           <Modal.Footer>
    //             <Button onClick={props.onHide} className="btn-danger">Close</Button>
    //             <input type="submit"  value="add new address"/>
    //           </Modal.Footer>
    //             </form>
    //         </Modal>
    //       );
    // }



    return (

        <AnimatedPage>
            <h6 className="h6">Edit Your Addresses</h6>
            <div className="row justify-content-center align-items-center my-2 gy-2">

                {/* {(addressBook):<>{addressBook.map((address , index)=>(
                    <div className="col-12" key={address._id}>
                        <div className="card p-2">
                            <div className="row justify-content-around align-items-center m-0">
                                <div className="col-4 lead">
                                    <p className="lead">
                                        {address.city} , {address.country}
                                    </p>
                                </div>
                                <div className="col-4 lead">
                                    <p className="lead">
                                        {address.area} , {address.street}

                                    </p>
                                </div>
                                <div className="col-4 lead">
                                    <p className="lead">
                                    Building {address.building} , Floor {address.floor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}</>} */}


{(addressBook != undefined)?<>{addressBook.map((address , index)=>(
        <div className="col-12" key={address._id} >
            <div className="card p-2">
                <div className="row justify-content-around align-items-center m-0">
                    <div className="col-4 lead">
                        <p className="lead">
                            {address.city} , {address.country}
                        </p>
                    </div>
                    <div className="col-4 lead">
                        <p className="lead">
                            {address.area} , {address.street}

                        </p>
                    </div>
                    <div className="col-4 lead">
                        <p className="lead">
                        Building {address.building} , Floor {address.floor}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ))}</>:<><div className="col-12">
            <h3 className="h3 text-center">
                You didn't add any address yet!
            </h3>
            
            </div>
        </>}

                {/* <div className="col-12">
                    <div className="card p-2">
                        <div className="row justify-content-around align-items-center m-0">
                            <div className="col-4 lead">
                                Alexandria,Egypt
                            </div>
                            <div className="col-4 lead">
                                Raml 1, st.Karnak 
                            </div>
                            <div className="col-4 lead">
                                Building 7, Floor 4
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card p-2">
                        <div className="row justify-content-around align-items-center m-0">
                            <div className="col-4 lead">
                                Alexandria,Egypt
                            </div>
                            <div className="col-4 lead">
                                Raml 1, st.Karnak 
                            </div>
                            <div className="col-4 lead">
                                Building 7, Floor 4
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <Button variant="primary" onClick={handleShow}>
                Add new address
            </Button> */}

            {/* <MyVerticallyCenteredModal/> */}

            <Button variant="primary" onClick={handleShow}>
        Add New Address
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" keyboard={false} backdrop="static" centered> 
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => {addressFormSubmit(e)}}>
        <Modal.Body>
            <div className="row justify-content-around align-items-center gy-2">
                <div className="col-12">
                        <label htmlFor="newAddressRegion" className="form-label">Country/Region</label>
                        <input type="text" className="form-control" id="newAddressRegion" name="country" autoFocus  onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-12">
                        <label htmlFor="newAddressFullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="newAddressFullName" name="name"  onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-12">
                        <label htmlFor="newAddressPhoneNumber" className="form-label">Phone number</label>
                        <input type="tel" className="form-control" id="newAddressPhoneNumber" name="phoneNumber"  onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-5">
                    <label htmlFor="newAddressCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="newAddressCity" name="city" value={newAddress.city}  onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-4">
                    <label htmlFor="newAddressArea" className="form-label">Area</label>
                    <input type="text" className="form-control" id="newAddressArea" name="area" value={newAddress.area}  onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-3">
                    <label htmlFor="newAddressZipCode" className="form-label">ZIP Code</label>
                    <input type="number" className="form-control" id="newAddressZipCode" name="zipCode" value={newAddress.zipCode} onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-12">
                    <label htmlFor="newAddressStreet" className="form-label">Street</label>
                    <input type="text" className="form-control" id="newAddressStreet" name="street" value={newAddress.street} onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-5">
                    <label htmlFor="newAddressBuilding" className="form-label">Building</label>
                    <input type="text" className="form-control" id="newAddressBuilding" name="building" value={newAddress.building}  onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-4">
                    <label htmlFor="newAddressFloor" className="form-label">Floor</label>
                    <input type="number" className="form-control" id="newAddressFloor" name="floor" value={newAddress.floor}  onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-3">
                    <label htmlFor="newAddressApartment" className="form-label">Apartment</label>
                    <input type="number" className="form-control" id="newAddressApartment" name="apartment" value={newAddress.apartment} onChange={(e) => {inputChange(e)}}/>
                </div>
                <div className="col-12">
                    <label htmlFor="newAddressDetails" className="form-label">Extra Details</label>
                    <textarea className="form-control" id="newAddressDetails" name="extraDetails" value={newAddress.extraDetails} onChange={(e) => {inputChange(e)}}/>
                </div>
                            
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>



        </AnimatedPage>

    );
}

export default UserAddress;
