import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import projectData from '../projectData';

const styles = {
    a: {
        color: "inherit"
    },
    p: {
        fontSize: "small"
    },
    h5: {
        fontSize: "1rem"
    }
}


const Projects = () => {
    return (
        <div className="mt-5">
            <div className="d-flex justify-content-start">
                <h5>Projects and Works</h5>
            </div>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-1'>
                {
                    projectData.map((project, idx) => {
                        return(
                            <MDBCol>
                                <MDBCard className='h-100'>
                                <MDBCardImage
                                    src={project.image_url}
                                    style={{height: '30vh'}}
                                    alt='...'
                                    position='top'
                                />
                                    <MDBCardBody>
                                        <a href={project.link} style={styles.a}>
                                            <MDBCardTitle style={styles.h5}>{project.title}</MDBCardTitle>
                                            <p>{project.subject}</p>
                                            <MDBCardText style={styles.p}>
                                            {project.description}
                                            </MDBCardText>
                                        </a>
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

export default Projects;