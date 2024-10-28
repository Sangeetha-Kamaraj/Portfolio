import React from 'react';
import { Container } from 'react-bootstrap';
import Address from '../Components/Address/Address';

function Contact() {
    return (
        <Container style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Me</h2>
            <Address />
        </Container>
    );
}

export default Contact;
