import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FloraInfo from "./Florainfo";
import Ironweed from '../Plants/Ironweed';
import Goldenrod from '../Plants/Goldenrod';
import Pyeweed from '../Plants/Pyeweed';



const Flora = () => {
    return (
        <>
        <Container>
            <Row>
                <h2> Flowers seen at the park</h2>
            </Row>
            <Row>
                <Col> <Ironweed />  </Col>
                <Col>  <Goldenrod /> </Col>                
            </Row>
            <Row>
                <Col> <Pyeweed /></Col>
            </Row>
        </Container>
         </>
    );
}

export default Flora;