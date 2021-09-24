import React, {Component} from 'react';
import {Col, Container, Nav,Tab,Row} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActivateKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://img.freepik.com/free-photo/word-design-written-on-top-of-colorful-geometric-3d-shapes_2227-1663.jpg?size=626&ext=jpg"
                                         alt="Design" style={{height:'500px'}}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae velit et sem accumsan pretium id quis dui. Proin placerat, est eget eleifend dapibus, libero risus consectetur neque, ut viverra nunc elit ut ipsum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://startupsmagazine.co.uk/sites/default/files/2020-11/AdobeStock_291895827ed.jpg"
                                         alt="Team"
                                         style={{height:'500px'}}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae velit et sem accumsan pretium id quis dui. Proin placerat, est eget eleifend dapibus, libero risus consectetur neque, ut viverra nunc elit ut ipsum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png"
                                         alt="Programming"
                                         style={{height:'500px'}}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae velit et sem accumsan pretium id quis dui. Proin placerat, est eget eleifend dapibus, libero risus consectetur neque, ut viverra nunc elit ut ipsum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://hachinet.com/upload/2020/08/framework-la-gi-tim-hieu-ve-cac-framework-20200831112124.jpeg"
                                         alt="Frameworks"
                                         style={{height:'500px'}}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae velit et sem accumsan pretium id quis dui. Proin placerat, est eget eleifend dapibus, libero risus consectetur neque, ut viverra nunc elit ut ipsum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://3.bp.blogspot.com/-s4XpUL6MaSk/WEkv8Fa3nGI/AAAAAAAAOEw/Pn93Ta4hwWYrjaxmtSeRVfQUGhVzNZiHgCLcB/s1600/screengrab-2016-12-08-16-58-47.png"
                                         alt="Libraries"
                                         style={{height:'500px'}}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae velit et sem accumsan pretium id quis dui. Proin placerat, est eget eleifend dapibus, libero risus consectetur neque, ut viverra nunc elit ut ipsum.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;