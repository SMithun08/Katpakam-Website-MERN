import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";


import { saveShippingInfo } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "./CheckoutStep";
import { toast } from  "react-toastify";


export const validateShipping = (shippingInfo, navigate) => {
   
    if(
        !shippingInfo.address||
        !shippingInfo.city||
        !shippingInfo.state|| 
        !shippingInfo.province||
        !shippingInfo.phoneNo||
        !shippingInfo.postalCode
        ) {
            toast.error('Please fill the delivering information',{position: toast.POSITION.BOTTOM_CENTER})
            navigate('/shipping')
    }
} 


export default function Shipping() {
    const {shippingInfo={} } = useSelector(state => state.cartState)

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
    const [province, setProvince] = useState(shippingInfo.province);
    const [state, setState] = useState(shippingInfo.state);
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingInfo({address, city, phoneNo, postalCode, province, state}))
        navigate('/order/confirm')
    }





    return (
        <Fragment>
            <CheckoutSteps shipping />
            <div className="row wrapper">
                    <div className="col-10 col-lg-5">
                        <form onSubmit={submitHandler} className="shadow-lg">
                            <h1 className="mb-4">Delivering Info</h1>
                            <div className="form-group">
                                <label htmlFor="address_field">Address</label>
                                <input
                                    type="text"
                                    id="address_field"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="city_field">City</label>
                                <input
                                    type="text"
                                    id="city_field"
                                    className="form-control"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone_field">Phone No</label>
                                <input
                                    type="phone"
                                    id="phone_field"
                                    className="form-control"
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="postal_code_field">Postal Code</label>
                                <input
                                    type="number"
                                    id="postal_code_field"
                                    className="form-control"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="province_field">Province</label>
                                <input
                                    type="text"
                                    id="province_field"
                                    className="form-control"
                                    value={province}
                                    onChange={(e) => setProvince(e.target.value)}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="state_field">District</label>
                                <input
                                    type="text"
                                    id="state_field"
                                    className="form-control"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                id="shipping_btn"
                                type="submit"
                                className="btn btn-block py-3"
                            >
                                CONTINUE
                                </button>
                        </form>
                    </div>
            </div>
        </Fragment>
    )
}