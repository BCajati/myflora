import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import flower1 from '../Images/ironweed1.jpg'

const Home = () => {
    return (
        <Container>
             
        <h2>My Flora</h2>
        <h3> This Project will store my collection of photos of trees and flowers</h3>
        <p>I plan to learn this to learn about local flora and help figure out how to create a great native garden</p>
        <img src={flower1} />
    
        </Container >
    );
}

export default Home;