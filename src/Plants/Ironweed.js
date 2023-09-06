import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import flower1 from '../Images/ironweed1.jpg'

function Ironweed() {
    return (
        <Card border = "success" style={{ width: '35rem' }}>
          <Card.Img variant="top" src={flower1} />
          <Card.Body>
            <Card.Title>Ironweed</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Color: Purple</ListGroup.Item>
            <ListGroup.Item>Height: Medium</ListGroup.Item>
            <ListGroup.Item>Blooms: Late Summer</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );
}

export default Ironweed;