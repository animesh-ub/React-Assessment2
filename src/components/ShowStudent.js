import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const ShowStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/student').then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <Container>
      <h1 className="my-4">Student Details</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {students.map((student) => (
          <Col key={student.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>
                  <strong>DOB:</strong> {student.dob}
                </Card.Text>
                <Card.Text>
                  <strong>Gender:</strong> {student.gender}
                </Card.Text>
                <Card.Text>
                  <strong>Address:</strong> {student.address}
                </Card.Text>
                <Card.Text>
                  <strong>Number:</strong> {student.number}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowStudent;
