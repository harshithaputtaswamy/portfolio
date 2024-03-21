import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


const Profile = () => {
    return (
        <div className="container bg-white py-2 py-md-4 px-3 shadow-3 mt-5">
            <div className="row p-4 justify-content-center">
                <div className="col-md-4">
                    <div>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/porfolio-10758.appspot.com/o/IMG_20190304_150553.jpg?alt=media&token=0fc7a821-92b2-4c53-b678-685b2f61ed75'
                            style={{borderRadius: "50%", height: 200, width:200}}
                            alt=''
                        />
                    </div>
                    <div className='my-3'>
                        <MDBBtn className='m-1' floating style={{ backgroundColor: '#3b5998' }} href='https://github.com/harshithaputtaswamy'>
                            <MDBIcon fab icon='github' size='2x' />
                        </MDBBtn>

                        <MDBBtn className='m-1' floating style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/harshitha-p/'>
                            <MDBIcon fab icon='linkedin-in' size='2x' />
                        </MDBBtn>

                        <MDBBtn className='m-1' floating style={{ backgroundColor: '#dd4b39' }} href='https://scholar.google.com/citations?user=pPHaEZYAAAAJ&hl=en'>
                            <MDBIcon fab icon='google-scholar' size='2x' />
                        </MDBBtn>

                        <MDBBtn className='m-1' floating style={{ backgroundColor: '#55acee' }} href='mailto:hputtaswamy@binghamton.edu'>
                            <MDBIcon fab icon='at' size='2x' />
                        </MDBBtn>
                    </div>
                </div>
                <div className="col-md-6 m-0 my-4">
                    <h4>Harshitha Puttaswamy</h4>
                    <h6>Student, Binghamton University</h6>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Profile;