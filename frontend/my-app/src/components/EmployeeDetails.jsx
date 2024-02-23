import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import { useParams,useNavigate } from 'react-router-dom';
import { getemployee } from '../services/employee';


export default function EmployeeDetails() {
  const [employee, setemployee] = useState();
  const navigate= useNavigate();

  const { id } = useParams();
  useEffect(() => {
    console.log(id,"here ===========>");
    getemployee(id).then(res => setemployee(res.data.employee)).catch(err => console.log(err));

  }, [])
  const edit=(e)=>{
    e.preventDefault();
    navigate(`/editemployee/${id}`);
  }
  
  return employee &&(
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='/'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="/employee">employee</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>employee Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow >
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                 <MDBRow>
                  <MDBCol sm="6">
                    <MDBCardText >House</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="6">
                    <MDBCardText className="text-muted">{employee.house?employee.house:"---"}</MDBCardText>
                  </MDBCol>
                  </MDBRow>
                <div className="d-flex justify-content-center mb-4 mt-3">
                  <MDBBtn outline style={{ width: '150px',height:'40px' }} onClick={(e)=>edit(e)}  className="ms-2">
                  <MDBIcon icon="pencil-alt" className="me-2"  />Edit</MDBBtn>
                  
                </div>
               
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
            <MDBCardHeader className='text-center'>Bank Details</MDBCardHeader>
              <MDBCardBody className="text-left">
              <MDBRow>
                  <MDBCol sm="5">
                    <MDBCardText >Account No.</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="7">
                    <MDBCardText className="text-muted">ABCDXYZ</MDBCardText>
                  </MDBCol>
                 
                  
                </MDBRow>
                <hr/>
                <MDBRow>
                  
                  <MDBCol sm="5">
                    <MDBCardText className="text-muted">Account Holder</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="7">
                    <MDBCardText className="text-muted">Abdeali Gautamura wala</MDBCardText>
                  </MDBCol>
                 
                </MDBRow>
                <hr />
                <MDBRow>
                <MDBCol sm="5">
                    <MDBCardText >Bank Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="7">
                    <MDBCardText className="text-muted">Bank Of India</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                <MDBCol sm="5">
                    <MDBCardText >IFSC Code</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="7">
                    <MDBCardText className="text-muted">BankIFSC</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
            <MDBCardHeader className='text-center'>employee Details</MDBCardHeader>
              <MDBCardBody className="text-left">
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText >Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">{employee.name ? employee.name:"---"} {employee.surname?employee.surname:"---"}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">Class</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">{employee.class ? employee.class : "---"} '{employee.section ? employee.section:"---"}'</MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
                <hr/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText> Roll No.</MDBCardText>
                  </MDBCol>
                 
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">{employee.roll_no ? employee.roll_no : "---"}</MDBCardText>
                  </MDBCol><MDBCol sm="3">
                    <MDBCardText >Scholar No.</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">{employee.scholar_no ? employee.scholar_no : "---"}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Father Name</MDBCardText>
                  </MDBCol>
                 
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">{employee.father_name ? employee.father_name : "---"}</MDBCardText>
                  </MDBCol><MDBCol sm="3">
                    <MDBCardText >Mothers Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">{employee.mother_name ? employee.mother_name : "---"}</MDBCardText>
                  </MDBCol>
                 
                </MDBRow>
              
                <hr/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText> Date Of Birth</MDBCardText>
                  </MDBCol>
                 
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">{employee.date_of_birth ? employee.date_of_birth : "--/--/--"}</MDBCardText>
                  </MDBCol><MDBCol sm="3">
                    <MDBCardText >Family ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">{employee.family_id ? employee.family_id : "--"}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>employee ITS NO.</MDBCardText>
                  </MDBCol>
                 
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">50408649</MDBCardText>
                  </MDBCol><MDBCol sm="3">
                    <MDBCardText >Father ITS No.</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">50408647</MDBCardText>
                  </MDBCol>
                 
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Father Occupation</MDBCardText>
                  </MDBCol>
                 
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">Business</MDBCardText>
                  </MDBCol><MDBCol sm="3">
                    <MDBCardText >Father Income</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">500000</MDBCardText>
                  </MDBCol>
                 
                </MDBRow>
                <hr/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText >Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBCardText className="text-muted">1215 Noorani Nagar ,Indore (M.P.)</MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
                <hr/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile NO.</MDBCardText>
                  </MDBCol>
                 
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">50408649</MDBCardText>
                  </MDBCol><MDBCol sm="3">
                    <MDBCardText >WhatsApp No.</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">50408647</MDBCardText>
                  </MDBCol>
                 
                </MDBRow>
                <hr/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText> SSSIM ID</MDBCardText>
                  </MDBCol>
                 
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">11234567890</MDBCardText>
                  </MDBCol><MDBCol sm="3">
                    <MDBCardText >Aadhar No.</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">123456789012</MDBCardText>
                  </MDBCol>
                </MDBRow>
              <hr/>
               

                
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="7">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Class manager</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted"> Burhanuddin Sir</MDBCardText>
                  </MDBCol>
                
                  <MDBCol sm="3">
                    <MDBCardText>Dini Taalim Saheb Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">mohammed Janab/Saab</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}