import { useEffect, useState } from "react";
import axios from "axios";

const AP_URL = "http://localhost:3001";

const FormTable = (props: any) => {
    const [showSuccess, setshowSuccess] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const [data, setdata] = useState({
        firstName: "",
        lastName: "",
        semester: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
        getData : ""
    });
    const [students, setStudents] = useState<any[]>([])
    const test = "";
    const onChangeFirstName = (event: any) => {
        setdata((data) => ({
            ...data,
            firstName: event.target.value,
        }));
    }
    const onChangeLastName = (event: any) => {
        setdata((data) => ({
            ...data,
            lastName: event.target.value,
        }));
    }
    const onChangeSemester = (event: any) => {
        setdata((data) => ({
            ...data,
            semester: event.target.value,
        }));
    }
    const onChangeDateOfBirth = (event: any) => {
        setdata((data) => ({
            ...data,
            dateOfBirth: event.target.value,
        }));
    }
    const onChangeAddress = (event: any) => {
        setdata((data) => ({
            ...data,
            address: event.target.value,
        }));
    }
    const onChangePhoneNumber = (event: any) => {

        setdata((data) => ({
            ...data,
            phoneNumber: event.target.value,
        }));
    }
    const handleSubmit = async (event: any) => {
        await axios.post("http://localhost:3001/data",{
            data
        })
        console.log("chand",data)

    } 
    console.log("im gettig data from node",data)
    return (
        <>
            <form action="" className="from-sty">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="FirstName"
                        value={data.firstName}
                        onChange={onChangeFirstName}
                        id="FirstName" className="form-control" 
                        placeholder="FirstName" />
                        {
                            submitted && !data.firstName && <span id="first-name-error">Please enter a first name</span>
                        }
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="LastName"
                        value={data.lastName}
                        onChange={onChangeLastName}
                        className="form-control" placeholder="LastName" />
                        {
                            submitted && !data.lastName && <span id="last-name-error">Please enter a last name</span>
                        }
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="semester" 
                        value={data.semester}
                        onChange={onChangeSemester}
                        className="form-control" placeholder="Class" />
                        {
                            submitted && !data.semester && <span id="last-name-error">Please enter a semester</span>
                        }
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="dateOfBirth"
                        value={data.dateOfBirth}
                        onChange={onChangeDateOfBirth}
                        className="form-control" placeholder="DateOfBirth" />
                        {
                            submitted && !data.dateOfBirth && <span id="email-error">Please enter an dateOfBirth</span>
                        }
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="address"
                        value={data.address}
                        onChange={onChangeAddress}
                        className="form-control" placeholder="Address" />
                        {
                            submitted && !data.address && <span id="email-error">Please enter an address</span>
                        }
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="PhoneNumber"
                        value={data.phoneNumber}
                        onChange={onChangePhoneNumber}
                        className="form-control" placeholder="PhoneNumber" />
                        {
                            submitted && !data.phoneNumber && <span id="email-error">Please enter an address</span>
                        }
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => props.onClose(false)}>Close</button>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    <div>{ test}</div>
                    {showSuccess &&
                        <div className='success-message'>Success! Thank you for registering</div>}

                </div>
            </form>                
       </>
    )   

}
export default FormTable;