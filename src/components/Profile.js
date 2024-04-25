import React , {forwardRef} from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import resume from '../assets/resume.pdf';


const Profile = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="pt-5">
            <div className="pt-5">
                <div className="container bg-white py-2 py-md-4 px-3 shadow-3 py-xl-5">
                    <div className="row pt-4 justify-content-center">
                        <div className="col-md-4">
                            <div>
                                <img
                                    src={require('../images/profile.jpg')}
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
                            <div className='text-start'>
                                <h4>Harshitha Puttaswamy</h4>
                                <h6>Student ● Binghamton University ● Learner</h6>
                                <a href={resume} target="_blank"><MDBBtn color='success' className='mt-3'>DOWNLOAD RESUME</MDBBtn></a>
                                <p className='mt-3'><MDBIcon icon='graduation-cap' className='me-2 text-success' /><b>Experience Level : </b>2 years</p>
                                <p className='mt-3'><MDBIcon icon='lightbulb' className='me-2 text-warning' /><b>Interested In : </b>Technology, Computer Science, Astronomy, Philanthropy</p>
                                <p className='mt-3'><MDBIcon icon='code' className='me-2 text-info' /><b>Technologies : </b>Python, C/CPP, Javascript</p>
                                <p className='mt-3'><MDBIcon icon='cubes' className='me-2 text-danger' /><b>Frameworks : </b>Tesorflow, Keras, MERN Stack, Django, CI/CD, Pytest, SQL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Profile;