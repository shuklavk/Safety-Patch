import React from 'react';
import { Form, Container, Jumbotron, FormControl, Button } from 'react-bootstrap';


export class Hero extends React.Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Safety Patch</h1>
                        <p>
                        Streamlining the checking in process for Frontline Respondents.
                        </p>
                        <Form inline style={{display: 'flex', justifyContent: 'center'}}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                </Container>
            </Jumbotron>
        );
    }
}