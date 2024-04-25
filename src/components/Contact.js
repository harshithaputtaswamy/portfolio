import React , {forwardRef} from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Footer from './Footer';


const Contact = forwardRef((props, ref) => {
    return (
        <div className="py-5" ref={ref}>
            <div className="d-flex justify-content-start">
                <h5>Contact</h5>
            </div>
            <div className="container bg-white py-2 py-md-4 mt-3 px-3 shadow-3">
                <div className="pb-3 pb-md-4">
                    <h5>Find me on</h5>
                </div>
                <MDBBtn className='m-2' floating style={{ backgroundColor: '#3b5998' }} href='https://github.com/harshithaputtaswamy'>
                    <MDBIcon fab icon='github' size='2x' />
                </MDBBtn>

                <MDBBtn className='m-2' floating style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/harshitha-p/'>
                    <MDBIcon fab icon='linkedin-in' size='2x' />
                </MDBBtn>

                <MDBBtn className='m-2' floating style={{ backgroundColor: '#dd4b39' }} href='https://scholar.google.com/citations?user=pPHaEZYAAAAJ&hl=en'>
                    <MDBIcon fab icon='google-scholar' size='2x' />
                </MDBBtn>

                <MDBBtn className='m-2' floating style={{ backgroundColor: '#55acee' }} href='mailto:hputtaswamy@binghamton.edu'>
                    <MDBIcon fab icon='at' size='2x' />
                </MDBBtn>
                <Footer/>
            </div>
        </div>
    )
});

export default Contact;