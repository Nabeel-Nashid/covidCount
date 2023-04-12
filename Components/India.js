import React from 'react'
import {Button,Card} from "react-bootstrap";
import Statedata from './Statedata';

function India() {
  return (
    <div className='row'>
        <div className='col-md-12'>
            <img className='p-1' src="https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png" width="50px" />
            <h3>India</h3>
        </div>

        <div className="col-md-12">
            <div className="row">
                <div className="col-md-3">
                      <Card className='bg-primary text-white' style={{ width: '18rem' }}>

                      <Card.Body className='text-center'>
                        <Card.Title>Total Cases</Card.Title>
                        <h3>15337</h3>
                        <h3></h3>
                        <Card.Text>
                            Today Cases
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                </div>

                <div className="col-md-3">
                      <Card className='bg-warning text-white' style={{ width: '18rem' }}>

                      <Card.Body className='text-center'>
                        <Card.Title>Active case</Card.Title>
                        <h3>15337</h3>
                        <h3></h3>
                        <Card.Text>
                            Today Cases
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                </div>

                <div className="col-md-3">
                      <Card className='bg-success text-white' style={{ width: '18rem' }}>

                      <Card.Body className='text-center'>
                        <Card.Title>Recovery</Card.Title>
                        <h3>15337</h3>
                        <h3></h3>
                        <Card.Text>
                            Today Cases
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                </div>

                <div className="col-md-3">
                      <Card className='bg-danger text-white' style={{ width: '18rem' }}>

                      <Card.Body  className='text-center'>
                        <Card.Title>Total Death</Card.Title>
                        <h3>15337</h3>
                        <h3></h3>
                        <Card.Text>
                            Today Cases
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                    
                </div>
            </div>
        </div>
        <div className='col-md-12'>             
                      <Statedata/>
                    </div>

    </div>
  )
}

export default India
