import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import project_data from '../project_data';

const styles = {
    a: {
        color: "inherit"
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
                    project_data.map((project, idx) => {
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
                                            <MDBCardTitle>{project.title}</MDBCardTitle>
                                            <p>{project.subject}</p>
                                            <MDBCardText>
                                            {project.description}
                                            </MDBCardText>
                                        </a>
                                    </MDBCardBody>
                                {/* <MDBCardFooter>
                                    <small className='text-muted'>Last updated 3 mins ago</small>
                                </MDBCardFooter> */}
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