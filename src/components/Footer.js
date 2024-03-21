import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <MDBFooter className='text-center text-lg-left'>
            <div className='text-center p-3'>
                Please feel free to get in touch via email at hputtaswamy@binghamton.edu<br/>
                &copy; {new Date().getFullYear()} Harshitha Puttaswamy
            </div>
        </MDBFooter>
    )
}

export default Footer;