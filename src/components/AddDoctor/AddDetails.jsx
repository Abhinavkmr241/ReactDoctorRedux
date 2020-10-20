import React, { Component } from 'react';
import './AddDetails.css';
import { Redirect } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { addBasicInfo } from '../../redux/actions/form-action';

class AddDetails extends Component {

    state = {
        user: {
            name: "",
            experience: "",
            fees: "",
            qualification: "",
            practising: "",
            language: [],
            email: "",
            phone: "",
            medicalNo: "",
            graduation: "",
            specialization: "",
            superSpecialization: "",
            gender: "",
            speciality: ""
        },
        isDirty: {
            name: false,
            experience: false,
            fees: false,
            qualification: false,
            practising: false,
            language: false,
            email: false,
            phone: false,
            medicalNo: false,
            graduation: false,
            specialization: false,
            superSpecialization: false,
            gender: false,
            speciality: false
        },
        errors: {},
        redirect: false
    }

    handleChange = (field, value) => {
        const { user, isDirty } = this.state;
        if (field === 'language') {
            if (value.checked) {
                user[field].push(value.value);
            } else {
                user[field].splice(user[field].indexOf(value.value), 1);
            }
        } else {
            user[field] = value;
        }
        isDirty[field] = true;
        this.setState({ user, isDirty }, () => {
            this.validateForm();
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        let isDirty = {
            name: true,
            experience: true,
            fees: true,
            qualification: true,
            practising: true,
            language: true,
            email: true,
            phone: true,
            medicalNo: true,
            graduation: true,
            specialization: true,
            superSpecialization: true,
            gender: true,
            speciality: true
        };
        this.setState({ isDirty }, () => {
            let errors = this.validateForm();
            console.log(errors);
            if (!errors) {
                const basicForm = this.state.user;
                this.props.addBasicInfo({ basicForm });
                this.setState({
                    redirect: true
                });
            }
        });
    };

    validateForm = () => {
        const { user, errors, isDirty } = this.state;
        Object.keys(user).forEach((each) => {
            if (each === "name" && isDirty.name) {
                if (!user.name.trim().length) {
                    errors.name = "*Required";
                } else if (user.name.trim().length &&
                    !user.name.match(/^[a-zA-Z ]*$/)
                ) {
                    errors.name = "Invalid name format";
                } else if (user.name.trim().length <= 3) {
                    errors.name = "Name should be greater than 3 characters";
                }
                else {
                    delete errors[each];
                    isDirty.name = false;
                }
            } else if (each === "experience" && isDirty.experience) {
                if (!user.experience.trim().length) {
                    errors.experience = "*Required";
                } else if (!user.experience.match(/^[0-9]{1,2}$/)) {
                    errors.experience = "Enter valid experience in years";
                } else {
                    delete errors[each];
                    isDirty.experience = false;
                }
            } else if (each === "fees" && isDirty.fees) {
                if (!user.fees.trim().length) {
                    errors.fees = "*Required";
                } else if (!user.fees.match(/^[0-9]{4}$/)) {
                    errors.fees = "Enter valid amount";
                } else {
                    delete errors[each];
                    isDirty.fees = false;
                }
            } else if (each === "qualification" && isDirty.qualification) {
                if (!user.qualification.trim().length) {
                    errors.qualification = "*Required";
                } else {
                    delete errors[each];
                    isDirty.qualification = false;
                }
            } else if (each === "practising" && isDirty.practising) {
                if (!user.practising.trim().length) {
                    errors.practising = "*Required";
                } else {
                    delete errors[each];
                    isDirty.practising = false;
                }
            } else if (each === "email" && isDirty.email) {
                if (!user.email.trim().length) {
                    errors.email = "*Required";
                } else if (!user.email.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
                    errors.email = "Invalid Email";
                } else {
                    delete errors[each];
                    isDirty.email = false;
                }
            } else if (each === "phone" && isDirty.phone) {
                if (!user.phone.trim().length) {
                    errors.phone = "*Required";
                } else if (!user.phone.match(/^[0-9]{10}$/)) {
                    errors.phone = "Enter valid phone number";
                } else {
                    delete errors[each];
                    isDirty.phone = false;
                }
            } else if (each === "medicalNo" && isDirty.medicalNo) {
                if (!user.medicalNo.trim().length) {
                    errors.medicalNo = "*Required";
                } else {
                    delete errors[each];
                    isDirty.medicalNo = false;
                }
            } else if (each === "graduation" && isDirty.graduation) {
                if (!user.graduation.trim().length) {
                    errors.graduation = "*Required";
                } else {
                    delete errors[each];
                    isDirty.graduation = false;
                }
            } else if (each === "specialization" && isDirty.specialization) {
                if (!user.specialization.trim().length) {
                    errors.specialization = "*Required";
                } else {
                    delete errors[each];
                    isDirty.specialization = false;
                }
            } else if (each === "superSpecialization" && isDirty.superSpecialization) {
                if (!user.superSpecialization.trim().length) {
                    errors.superSpecialization = "*Required";
                } else {
                    delete errors[each];
                    isDirty.superSpecialization = false;
                }
            } else if (each === "speciality" && isDirty.speciality) {
                if (user.speciality === "") {
                    errors.speciality = "*Required";
                } else {
                    delete errors[each];
                    isDirty.speciality = false;
                }
            } else if (each === "gender" && isDirty.gender) {
                if (user.gender === "") {
                    errors.gender = "*Required";
                } else {
                    delete errors[each];
                    isDirty.gender = false;
                }
            } else if (each === "language" && isDirty.language) {
                if (!user.language.length) {
                    errors.language = "*Required atleast one language";
                } else {
                    delete errors[each];
                    isDirty.language = false;
                }
            }
        });
        this.setState({ errors });
        return Object.keys(errors).length ? errors : null;
    }

    render() {
        return (
            <div className="basicForm">
                {this.state.redirect ? <Redirect to={{
                    pathname: '/add-doctor/step2'
                }} /> : ''}
                <div className="title">
                    <h1>Add Basic Info</h1>
                </div>
                <div className="formBody">
                    <Form onSubmit={this.handleOnSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fullName">Name</Label>
                                    <Input type="text" name="fullName" id="fullName"
                                        placeholder="Enter full name"
                                        value={this.state.user.name}
                                        onChange={(e) => this.handleChange('name', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.name}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="speciality">Speciality</Label>
                                    <Row form>
                                        <select style={{ marginLeft: "60px", height: "30px", width: "300px" }}
                                            value={this.state.user.speciality}
                                            onChange={(e) => this.handleChange("speciality", e.target.value)}
                                        >
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
                                        {this.state.errors && (
                                            <small style={{ color: "red" }}>
                                                {this.state.errors.speciality}
                                            </small>
                                        )}
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="experience">Experience</Label>
                                    <Input type="number" name="experience" id="experience" placeholder="Enter experience in years"
                                        value={this.state.user.experience}
                                        onChange={(e) => this.handleChange('experience', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.experience}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fees">Consult Fees</Label>
                                    <Input type="number" name="fees" id="fees" placeholder="Enter fees"
                                        value={this.state.user.fees}
                                        onChange={(e) => this.handleChange('fees', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.fees}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="qualification">Qualification</Label>
                                    <Input type="text" name="qualification" id="qualification" placeholder="Enter qualification"
                                        value={this.state.user.qualification}
                                        onChange={(e) => this.handleChange('qualification', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.qualification}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="practising">Practising At</Label>
                                    <Input type="text" name="practising" id="practising" placeholder="Enter practising at"
                                        value={this.state.user.practising}
                                        onChange={(e) => this.handleChange('practising', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.practising}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="languages">Languages</Label>
                            <Row form>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Hindi"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="hindi" check>Hindi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="English"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="english" check>English</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Bengali"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="bengali" check>Bengali</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Oriya"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="oriya" check>Oriya</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Assamese"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="assamese" check>Assamese</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Gujrati"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="gujrati" check>Gujrati</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Marathi"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="marathi" check>Marathi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Telugu"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="telugu" check>Telugu</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Tamil"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="tamil" check>Tamil</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Punjabi"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="punjabi" check>Punjabi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Malayalam"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="malayalam" check>Malayalam</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Kannada"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="kannada" check>Kannada</Label>
                                    </FormGroup>
                                </Col>
                                {this.state.errors && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errors.language}
                                    </small>
                                )}
                            </Row>
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter email"
                                        value={this.state.user.email}
                                        onChange={(e) => this.handleChange('email', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.email}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <Input type="number" name="phone" id="phone" placeholder="Enter phone number"
                                        value={this.state.user.phone}
                                        onChange={(e) => this.handleChange('phone', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.phone}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6} className="gender">
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.gender}
                                        </small>
                                    )}
                                    <Row>
                                        <Col md={2} style={{ marginLeft: "120px" }}>
                                            <div>
                                                <Input type="radio" value="Male" name="gender"
                                                    onChange={(e) => this.handleChange('gender', e.target.value)}
                                                />
                                                <Label for="male">Male</Label>
                                            </div>
                                        </Col>
                                        <Col md={2} style={{ paddingLeft: "80px" }}>
                                            <div>
                                                <Input type="radio" value="Female" name="gender"
                                                    onChange={(e) => this.handleChange('gender', e.target.value)}
                                                />
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
                                        value={this.state.user.medicalNo}
                                        onChange={(e) => this.handleChange('medicalNo', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.medicalNo}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="graduation">Graduation</Label>
                                    <Input type="text" name="graduation" id="graduation" placeholder="Enter graduation details"
                                        value={this.state.user.graduation}
                                        onChange={(e) => this.handleChange('graduation', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.graduation}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="specialization">Specialization</Label>
                                    <Input type="text" name="specialization" id="specialization" placeholder="Enter specialization"
                                        value={this.state.user.specialization}
                                        onChange={(e) => this.handleChange('specialization', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.specialization}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="superSpecialization">Super Specialization</Label>
                                    <Input type="text" name="superSpecialization" id="superSpecialization" placeholder="Enter super specialization"
                                        value={this.state.user.superSpecialization}
                                        onChange={(e) => this.handleChange('superSpecialization', e.target.value)}
                                    />
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.superSpecialization}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button type="submit">Next</Button>
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
        addBasicInfo: (basicForm) => dispatch(addBasicInfo(basicForm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDetails);
