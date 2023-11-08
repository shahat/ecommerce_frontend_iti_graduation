import AnimatedPage from "../animtedPage/AnimatedPage";
import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             New Address
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Centered Modal</h4>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
// }


const UserAddress = () => {

    const [modalShow, setModalShow] = useState(false);

    const MyVerticallyCenteredModal = (props)=>{
        return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  New Address
                </Modal.Title>
              </Modal.Header>
                <form action="">
              <Modal.Body>
                    <div className="row justify-content-around align-items-center">
                        <div className="col-12">
                              <label htmlFor="newAddressRegion" className="form-label">Country/Region</label>
                              <input type="text" className="form-control" id="newAddressRegion" />
                        </div>
                        <div className="col-12">
                              <label htmlFor="newAddressFullName" className="form-label">Full Name</label>
                              <input type="text" className="form-control" id="newAddressFullName" />
                        </div>
                        <div className="col-12">
                              <label htmlFor="newAddressPhoneNumber" className="form-label">Phone number</label>
                              <input type="tel" className="form-control" id="newAddressPhoneNumber" />
                        </div>
                        <div className="col-12">
                              <label htmlFor="newAddressAddress" className="form-label">Address</label>
                              <input type="text" className="form-control" id="newAddressAddress" placeholder="Street address or P.O. Box" />
                              <input type="text" className="form-control mt-2" id="newAddressAddress" placeholder="Apt, suite, unit, building, floor, etc." />
                        </div>
                        <div className="col-5">
                            <label htmlFor="newAddressCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="newAddressCity" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="newAddressNeighborhood" className="form-label">Neighborhood</label>
                            <input type="text" className="form-control" id="newAddressNeighborhood" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="newAddressZipCode" className="form-label">ZIP Code</label>
                            <input type="number" className="form-control" id="newAddressZipCode"/>
                        </div>
                        
                    </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide} className="btn-danger">Close</Button>
                <Button> Add address</Button>
              </Modal.Footer>
                </form>
            </Modal>
          );
    }
    return (

        <AnimatedPage>
            <h6 className="h6">Edit Your Addresses</h6>
            <div className="row justify-content-center align-items-center my-2 gy-2">
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
                </div>
            </div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Add new address
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </AnimatedPage>

    );
}

export default UserAddress;
