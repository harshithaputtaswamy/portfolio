import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse
} from 'mdb-react-ui-kit';


const Header = ({ profileRef, expRef, pubRef, projectRef, contactRef }) => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <MDBNavbar expand='lg' bgColor='white' sticky>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' onfocus="this.hideFocus=true;">Harshitha Puttaswamy</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => { profileRef.current.scrollIntoView({ behavior: "smooth" }) }}>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => { projectRef.current.scrollIntoView({ behavior: "smooth" }) }}>Projects</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => { expRef.current.scrollIntoView({ behavior: "smooth" }) }}>Experience</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => { pubRef.current.scrollIntoView({ behavior: "smooth" }) }}>Publications</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => { contactRef.current.scrollIntoView({ behavior: "smooth" }) }}>Contact</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header;