import React, { Component } from 'react';
import './AddDetails.css';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { addField, addError, changeDirty, updateList, addId } from '../../redux/actions/details-validate-action';

class AddDetails extends Component {


    handleChange = (field, value) => {
        // const element = {
        //     name: field,
        //     value: value
        // }
        // this.props.addField({element});
        const id = 1234;
        this.props.addId(id);
    }

    render() {
        return (
            <div className="basicForm">
                <div className="title">
                    <h1>Add Basic Info</h1>
                </div>
                <div className="formBody">
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fullName">Name</Label>
                                    <Input type="text" name="fullName" id="fullName"
                                        placeholder="Enter full name"
                                        // value= {this.props.formState.user.name}
                                        onChange= {(e) => this.handleChange('name', e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="speciality">Speciality</Label>
                                    <Row form>
                                        <select style={{ marginLeft: "60px", height: "30px", width: "300px" }}>
                                            <option></option>
                                            <option value="Dermatologists">Dermatologists</option>
                                            <option value="General Surgeons">General Surgeons</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Endocrinologists">Endocrinologists</option>
                                            <option value="Gastroenterologists">Gastroenterologists</option>
                                            <option value="Urologists">Urologists</option>
                                            <option value="Gynaecology">Gynaecology</option>
                                            <option value="Pediatrician">Pediatrician</option>
                                            <option value="Orthopedic">Orthopedic</option>
                                            <option value="optho">optho</option>
                                            <option value="psychiatrist">psychiatrist</option>
                                            <option value="dietiance">dietiance</option>
                                            <option value="fcece">fcece</option>
                                            <option value="Test">Test</option>
                                        </select>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Row>
                        {/* <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="experience">Experience</Label>
                                    <Input type="number" name="experience" id="experience" placeholder="Enter experience in years"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fees">Consult Fees</Label>
                                    <Input type="number" name="fees" id="fees" placeholder="Enter fees"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="qualification">Qualification</Label>
                                    <Input type="text" name="qualification" id="qualification" placeholder="Enter qualification"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="practising">Practising At</Label>
                                    <Input type="text" name="practising" id="practising" placeholder="Enter practising at"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="languages">Languages</Label>
                            <Row form>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="hindi" check>Hindi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="english" check>English</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="bengali" check>Bengali</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="oriya" check>Oriya</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="assamese" check>Assamese</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="gujrati" check>Gujrati</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="marathi" check>Marathi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="telugu" check>Telugu</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="tamil" check>Tamil</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="punjabi" check>Punjabi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="malayalam" check>Malayalam</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label for="kannada" check>Kannada</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <Input type="number" name="phone" id="phone" placeholder="Enter phone number"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6} className="gender">
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Row>
                                        <Col md={2} style={{marginLeft: "120px"}}>
                                            <div>
                                                <Input type="radio" value="Male" name="gender" />
                                                <Label for="male">Male</Label>
                                            </div>
                                        </Col>
                                        <Col md={2} style={{paddingLeft: "80px"}}>
                                            <div>
                                                <Input type="radio" value="Female" name="gender" />
                                                <Label for="female">Female</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="medicalNo">Medical Registration Number</Label>
                                    <Input type="text" name="medicalNo" id="medicalNo" placeholder="Enter Medical registration number"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="graduation">Graduation</Label>
                                    <Input type="text" name="graduation" id="graduation" placeholder="Enter graduation details"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="specialization">Specialization</Label>
                                    <Input type="text" name="specialization" id="specialization" placeholder="Enter specialization"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="superSpecialization">Super Specialization</Label>
                                    <Input type="text" name="superSpecialization" id="superSpecialization" placeholder="Enter super specialization"
                                    />
                                </FormGroup>
                            </Col>
                        </Row> */}
                        <Button type="submit">Save</Button>
                    </Form>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formState: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addField: (element) => dispatch(addField(element)),
        addError: (element) => dispatch(addError(element)),
        changeDirty: (element) => dispatch(changeDirty(element)),
        updateList: (data) => dispatch(updateList(data)),
        addId: (id) => dispatch(addId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDetails);
