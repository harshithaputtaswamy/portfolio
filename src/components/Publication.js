import React , {forwardRef} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import publicationData from '../publicationData';

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


const Publication = forwardRef((props, ref) => {
    return (
        <div className="pt-5" ref={ref}>
            <div className="d-flex justify-content-start pt-3">
                <h5>Publications</h5>
            </div>
            <MDBRow className='row-cols-1 g-4 mt-1'>
                {
                    publicationData.map((publication, idx) => {
                        return(
                            <MDBCol>
                                <MDBCard className='h-100'>
                                    <MDBCardBody style={{textAlign: "left"}}>
                                        <MDBCardTitle style={styles.h5}><b>{publication.title}, <small>{publication.year}</small></b></MDBCardTitle>
                                        <p style={styles.tech}>{publication.authors}, {publication.published_at}, <a>{publication.doi}</a></p>
                                        <MDBCardText style={styles.p}>
                                            {
                                                publication.description.map((desc, idx) => {
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
});

export default Publication;