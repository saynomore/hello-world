import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
  render(){
    return(
      <div>
        <Row>
          <Col xs={10}></Col>
          <Col xs={2}>
            <Image src="https://pbs.twimg.com/profile_images/491975021464535040/M0v8NyRX.jpeg" thumbnail circle />
          </Col>
        </Row>
      </div>
    )
  }

}
export default Avatar;
