import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import flower2 from '../Images/goldenrod.jpg'

function Goldenrod() {
    return (
        <Card border = "success" style={{ width: '35rem' }}>
          <Card.Img variant="top" src={flower2} />
          <Card.Body>
            <Card.Title>Goldenrod</Card.Title>
            <Card.Text>
              Tall yellow flower
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Color: Yellow</ListGroup.Item>
            <ListGroup.Item>Height: Tall</ListGroup.Item>
            <ListGroup.Item>Blooms: Late Summer</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );
}

export default Goldenrod;