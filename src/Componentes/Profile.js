import Card from 'react-bootstrap/Card';
import '../login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


function Profile() {
  return (
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/avatar-7.png" alt="avatar"/>
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <Card.Text>
          Personalize your experience.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="userName" placeholder="@user name" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="user@mail.com" disabled />
          <Form.Text className="text-muted">
            Registration email cannot be modified.
          </Form.Text>
        </Form.Group>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Guardar</Card.Link>
        <Card.Link href="#">Cancelar</Card.Link>
      </Card.Body>
    </Card>
 
  );
}

export default Profile