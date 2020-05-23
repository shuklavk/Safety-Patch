import React from 'react';
import { Container, Row, CardDeck, Card, } from 'react-bootstrap';
import img1 from '../assets/jeshoots-com-l0j0DHVWcIE-unsplash.jpg';
import img2 from '../assets/markus-spiske-g5ZIXjzRGds-unsplash.jpg';
import img3 from '../assets/perry-grone-lbLgFFlADrY-unsplash.jpg';


export class Cards extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <CardDeck className="container-fluid d-flex justify-content-center" style={{display: 'flex', flexDirection: 'row'}}>
                            <Card className="row" className="col-md-4" style={{flex: 1}}>
                                <Card.Img variant="top" src={img1} alt="Image 1" />
                                <Card.Body>
                                <Card.Title>First Respondents</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className="row" className="col-md-4" style={{flex: 2}}>
                                <Card.Img variant="top" src={img2} alt="Image 2" />
                                <Card.Body>
                                <Card.Title>Hotels</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className="row" className="col-md-4" style={{flex: 3}}>
                                <Card.Img variant="top" src={img3} alt="Image 3" />
                                <Card.Body>
                                <Card.Title>Organizations</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                    </CardDeck>
                </Row>
            </Container>
        );
    }
}

