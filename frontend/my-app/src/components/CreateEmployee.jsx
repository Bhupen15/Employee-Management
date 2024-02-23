import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBBreadcrumb,MDBBreadcrumbItem,MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import { addemployee } from '../services/employee';
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify'



export default function CreateEmployee() {

  const navigate= useNavigate();
    const [attachmentRows, setAttachmentRows] = useState([0]); // Initial attachment 
    const [isChecked, setIsChecked] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
      const [whatsappNumber, setWhatsappNumber] = useState('');

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
      const addemployeeDetails=async (e)=>{
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
          let response = await addemployee(formdata);
          console.log(response.data);
          if(response.data.success==true){
            toast.success("employee Added Successfully");
            navigate("/employee");
          }else{
            toast.error(response.message)
          }
      }
  return (
    <div className="mx-auto mt-5 " style={{ maxWidth: '900px' }}>
           <form onSubmit={(e)=>addemployeeDetails(e)}>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='/'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="/employee">employee</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Add employee</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
      <MDBRow>
      <MDBTypography className= " text-center" tag="h5" >Add employee</MDBTypography>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3 text-center">
             employee Details
            </MDBCardHeader>
            <MDBCardBody>
           
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='First name' name ="name" type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='surname' name="surname" type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">
                    <MDBInput label='Class' name="class" type='text' />
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBInput label='Section ' name="section" type='text' />
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBInput label='Scholar No.' name="scholar_no" type='text' />
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBInput label='Roll No.'name="roll_no" type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='Date Of Birth' name="date_of_birth" type='date' />
                  </MDBCol>
                  <MDBCol>
                  <MDBInput label='House Name' name="house" type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='Fathers Name' name="father_name" type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Mothers Name' name="mother_name" type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='employee ITS No.' name="employee_its_id" type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Father's ITS No." name="father_its_id" type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="Father's Occupation" name="father_occupation" type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Father's Monthly Income" name="father_monthly_income" type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="6">
                    <MDBInput
                     label='Mobile NO'
                     name="mobile" 
                     type='text'
                     value={mobileNumber}
                     onChange={handleMobileNumberChange} />
                  </MDBCol>
                  <MDBCol sm="5">
                    <MDBInput 
                    label='Whatsapp No' 
                    name="whatsapp_no" value={whatsappNumber}
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
                    <MDBInput label="Aadhar No" name="aadhar_no" type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="SSSIM ID"name="sssim_id" type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBInput label='Address' name="address" type='text' className="mb-4" />
                <MDBRow className="mb-4">
                  <MDBCol sm="7">
                    <MDBInput label="Email" name="email" type='text' />
                  </MDBCol>
                  <MDBCol sm="5">
                    <MDBInput label="Family ID" name="family_id" type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="Class manager Name" name = "class_manager_name" type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Dini manager Name" name="dini_manager_name" type='text' />
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
    </div>
  );
}