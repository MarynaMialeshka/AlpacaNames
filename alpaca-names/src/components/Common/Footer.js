import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Footer(props){
    return(
            <Row className="justify-content-end">
                <footer><small>AlpacaNames &copy; 2021</small></footer>
            </Row>
    );
}