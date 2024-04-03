import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import experienceData from '../experienceData';

const styles = {
    a: {
        color: "inherit"
    },
    p: {
        fontSize: "small"
    },
    tech: {
        fontSize: "small",
        fontWeight: "500"
    },
    h5: {
        fontSize: "1rem"
    }
}


const Experience = () => {
    return (
        <div className="mt-5">
            <div className="d-flex justify-content-start">
                <h5>Work Experience</h5>
            </div>
            <MDBRow className='row-cols-1 g-4 mt-1'>
                {
                    experienceData.map((experience, idx) => {
                        return(
                            <MDBCol>
                                <MDBCard className='h-100'>
                                    <MDBCardBody style={{textAlign: "left"}}>
                                        <MDBCardTitle style={styles.h5}><b>{experience.company}</b> - <small>{experience.startDate} to {experience.endDate}, {experience.location}</small></MDBCardTitle>
                                        <h6>{experience.title}</h6>
                                        <p style={styles.tech}>{experience.tech}</p>
                                        <MDBCardText style={styles.p}>
                                            {
                                                experience.description.map((desc, idx) => {
                                                    return (
                                                    <li>
                                                        {desc}
                                                    </li>
                                                    )
                                                })

                                            }
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        )
                    })
                }
            </MDBRow>
        </div>
    )
}

export default Experience;