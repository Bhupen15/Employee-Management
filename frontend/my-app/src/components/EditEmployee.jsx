import React, { useState,useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBBreadcrumb,MDBBreadcrumbItem,MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import { editemployee, getemployee } from '../services/employee';
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


export default function EditEmployee() {
    const {id} =useParams();
    const navigate= useNavigate();
    const [attachmentRows, setAttachmentRows] = useState([0]); // Initial attachment
    const [employee, setemployee] = useState({}); 
    const [isChecked, setIsChecked] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [loading , setloading ] = useState(true);

    const addAttachmentRow = (event) => {
        
        event.preventDefault(); 
      setAttachmentRows([...attachmentRows, attachmentRows.length]);
    };
    const removeAttachmentRow = (indexToRemove) => {
        const updatedRows = attachmentRows.filter((_, index) => index !== indexToRemove);
        setAttachmentRows(updatedRows);
      };
      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    
        if (!isChecked) {
          // If the checkbox was unchecked, fill the WhatsApp number field
          setWhatsappNumber(mobileNumber);
        } else {
          // If the checkbox was checked, clear the WhatsApp number field
          setWhatsappNumber('');
        }
      };
    
      const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
        
        // If the checkbox is checked, update the WhatsApp number field
        if (isChecked) {
          setWhatsappNumber(event.target.value);
        }
      };
      const editemployeeDetails=async (e)=>{
        e.preventDefault();
        let formdata= new FormData(e.target);
        let bank_details={};
        const allData = {};
        for (const pair of formdata.entries()) {
          const [key, value] = pair;
          allData[key] = value;
          if(key=="account_no" && value){
            bank_details["account_no"]=value;
           }if(key=="account_name" && value){
            bank_details["account_name"]=value;
          }if(key=="bank_name" && value){
            bank_details["bank_name"]=value;
          }
          if(key=="ifsc" && value){
            bank_details["ifsc"]=value;
          }

          }
          formdata.append("bank_account_details",JSON.stringify(bank_details));
          for (const pair of formdata.entries()) {
            const [key, value] = pair;
            allData[key] = value;
          }
          console.log(allData);

          let response = await editemployee(formdata,id);
          console.log(response.data);
          if(response.data.success==true){
            toast.success("employee updated Successfully");
            navigate("/employee");
          }else{
            toast.error(response.message)
          }
      }
      useEffect(() => {
        console.log(id,"here ===========>");
        getemployeeDetails(id);
    
      }, [loading])
      const getemployeeDetails = (id) => {
        getemployee(id).then(res => {
            setemployee(res.data.employee);
            setloading(false);
        
        }).catch(err => console.log(err));
      }
  return (
   <>
    {loading &&(<div>
        Loading ...
    </div>)}
    {!loading &&( <div className="mx-auto mt-5 " style={{ maxWidth: '900px' }}>
           <form onSubmit={(e)=>editemployeeDetails(e)}>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='/'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="/employee">employee</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Edit employee</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
      <MDBRow>
      <MDBTypography className= " text-center" tag="h5" >Edit employee</MDBTypography>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3 text-center">
             employee Details
            </MDBCardHeader>
            <MDBCardBody>
           
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='First name' defaultValue={employee.name?employee.name:""} name ="name" type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='surname' name="surname" type='text' defaultValue={employee.surname?employee.surname:""} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">
                    <MDBInput label='Class' name="class" type='text' defaultValue={employee.class?employee.class:""} />
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBInput label='Section ' name="section" type='text' defaultValue={employee.section?employee.section:""} />
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBInput label='Scholar No.' name="scholar_no" type='text' defaultValue={employee.scholar_no?employee.scholar_no:""} />
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBInput label='Roll No.'name="roll_no" type='text' defaultValue={employee.roll_no?employee.roll_no:""} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='Date Of Birth' name="date_of_birth" type='date' defaultValue={employee.date_of_birth?employee.date_of_birth:""} />
                  </MDBCol>
                  <MDBCol>
                  <MDBInput label='House Name' name="house" type='text' defaultValue={employee.house?employee.house:""} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='Fathers Name' name="father_name" type='text' defaultValue={employee.father_name?employee.father_name:""}/>
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Mothers Name' name="mother_name" type='text' defaultValue={employee.mother_name?employee.mother_name:""} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='employee ITS No.' name="employee_its_id" type='text' defaultValue={employee.employee_its_id?employee.employee_its_id:""} />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Father's ITS No." name="father_its_id" type='text' defaultValue={employee.father_its_id?employee.father_its_id:""} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="Father's Occupation" name="father_occupation" defaultValue={employee.father_occupation?employee.father_occupation:""} type ='text' /> 
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Father's Monthly Income" name="father_monthly_income" defaultValue={employee.father_monthly_income?employee.father_monthly_income:""} type='text'  />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="6">
                    <MDBInput
                     label='Mobile NO'
                     name="mobile" 
                     type='text'
                     value={employee.mobile}
                     onChange={handleMobileNumberChange} />
                  </MDBCol>
                  <MDBCol sm="5">
                    <MDBInput 
                    label='Whatsapp No' 
                    name="whatsapp_no" value={employee.whatsapp_no}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    disabled={isChecked} 
                    type='text' />
                  </MDBCol>
                  <MDBCol sm="1">
                   <MDBCheckbox checked={isChecked} onChange={handleCheckboxChange}/>
                  </MDBCol>
                  
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="Aadhar No" name="aadhar_no" defaultValue={employee.aadhar_no?employee.aadhar_no:""} type='text'   />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="SSSIM ID"name="sssim_id" defaultValue={employee.sssim_id?employee.sssim_id:""} type='text'  />
                  </MDBCol>
                </MDBRow>
                <MDBInput label='Address' name="address" type='text' defaultValue={employee.address?employee.address:""} className="mb-4" />
                <MDBRow className="mb-4">
                  <MDBCol sm="7">
                    <MDBInput label="Email" name="email" defaultValue={employee.email?employee.email:""} type='text' />
                  </MDBCol>
                  <MDBCol sm="5">
                    <MDBInput label="Family ID" name="family_id" defaultValue={employee.family_id?employee.family_id:""} type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="Class manager Name" name = "class_manager_name" defaultValue={employee.class_manager_name?employee.class_manager_name:""} type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Dini manager Name" name="dini_manager_name" defaultValue={employee.dini_manager_name?employee.dini_manager_name:""} type='text' />
                  </MDBCol>
                </MDBRow>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard className="mb-5">
                <MDBCardHeader className='text-center'>Bank details</MDBCardHeader>
                <MDBRow className="mb-4">

                <MDBInput type="text" name="account_name" label="Account Holder's Name" />
                </MDBRow>
                <MDBRow className="mb-4">

                <MDBInput type="text" name="account_no" label="Account No." />
                </MDBRow>
                <MDBRow className="mb-4">

                <MDBInput type="text" name="bank_name" label="Bank Name" />
                </MDBRow>
                <MDBRow className="mb-4">

                <MDBInput type="text" name="ifsc" label="IFSC Code"/>
                </MDBRow>
            </MDBCard>
            <MDBCard className="mb-4">
                <MDBCardHeader className='text-center'>Attachments</MDBCardHeader>
                <label>employee image</label>
                <MDBInput type="file" accept="image/*" name="image" />
                {attachmentRows.map((rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    {/* Conditionally render the input based on the rowIndex */}
                    {rowIndex !== 0 && (
                        <>
                        <MDBInput type="file" accept="image/*" name={`file_${rowIndex}`} label={`Attachment ${rowIndex + 1}`} /><MDBBtn
                        outline
                    color="danger"
                        size="sm"
                        onClick={() => removeAttachmentRow(rowIndex)}
                        style={{ marginLeft: '10px',height:"50px" }}
                        className="small-button"
                        >
                       X
                    </MDBBtn>
                        </>
                        )}
                    </div>
                ))}
                <MDBBtn className='mt-4' onClick={(e)=>addAttachmentRow(e)}>Add Attachment Row</MDBBtn>
            </MDBCard>
        </MDBCol>
            <MDBBtn type='submit'>Add</MDBBtn>
      </MDBRow>
      </form>
    </div>)}
   </>
  );
}