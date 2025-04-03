import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../../../util/fakeApi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import "bootstrap/dist/css/bootstrap.min.css";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    name: "",
    email: ""
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (formData.date) {
        const selectedDate = new Date(formData.date); 
        try {
            const times = fetchAPI(selectedDate);
            console.log("Available times:", times);
            setAvailableTimes(times);
        } catch (error) {
            console.error("Error fetching times:", error);
            setAvailableTimes([]);
        }
    }
}, [formData.date]);




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitAPI(formData);
      setSuccessMessage("Reservation successful!");
      setErrorMessage("");
      setFormData({ date: "", time: "", guests: 1, name: "", email: "" });
    } catch (error) {
      setErrorMessage("Failed to submit reservation. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <Container className="mt-4" style={{padding: "12px", marginBottom:"25px"}}>
      <h2 className="text-center">Reserve a Table</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Select name="time" value={formData.time} onChange={handleChange} required>
                <option value="">Select Time</option>
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Reserve</Button>
      </Form>
    </Container>
  );
};

export default ReservationPage;
