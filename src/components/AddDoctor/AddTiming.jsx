import React, { Component } from 'react';
import './AddTiming.css';
import { Col, Row, Button, Form, FormGroup, Label } from 'reactstrap';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { addtimingInfo, addToList } from '../../redux/actions/form-action';

class AddTiming extends Component {

    state = {
        serviceTime: [
            { label: "8:00 AM", value: 8 }, { label: "9:00 AM", value: 9 }, { label: "10:00 AM", value: 10 }, { label: "11:00 AM", value: 11 }, { label: "12:00 PM", value: 12 },
            { label: "1:00 PM", value: 13 }, { label: "2:00 PM", value: 14 }, { label: "3:00 PM", value: 15 }, { label: "4:00 PM", value: 16 }, { label: "5:00 PM", value: 17 },
            { label: "6:00 PM", value: 18 }, { label: "7:00 PM", value: 19 }, { label: "8:00 PM", value: 20 }, { label: "9:00 PM", value: 21 }, { label: "10:00 PM", value: 22 }
        ],
        days: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        },
        isDirty: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        },
        errors: {},
        redirect: false
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        let isDirty = {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: true,
            sunday: true
        };
        this.setState({ isDirty }, () => {
            let errors = this.validateForm();
            console.log(errors);
            if (!errors) {
                const timingForm = this.state.days;
                this.props.addtimingInfo({timingForm});
                const data = this.props.formState.user;
                this.props.addToList({data});
                this.setState({
                    redirect: true
                });
            }
        });
    }

    handleChange = (e, index, day) => {
        e.preventDefault();
        const { days, isDirty } = this.state;
        const { name, value } = e.target;
        const item = this.state.days[day];
        const newItem = [...item];
        newItem[index][name] = value;
        isDirty[day] = true;
        this.setState({ days, isDirty }, () => {
            this.validateForm();
        });
    }

    validateForm = () => {
        const { days, errors, isDirty, serviceTime } = this.state;
        Object.keys(days).forEach((day) => {
            for (let i of days[day]) {
                for (let j of serviceTime) {
                    if (i.fromTime === j.label) {
                        i.fromTime = j.value;
                    } else if (i.toTime === j.label) {
                        i.toTime = j.value;
                    }
                }
            }
            if (day === "monday" && isDirty.monday) {
                days[day].forEach((key, index) => {
                    if (key.fromTime === "" || key.toTime === "") {
                        errors.monday = "Fields should not be empty :- " + (key.fromTime ? "To time" : "From Time");
                    } else if (key.fromTime > key.toTime) {
                        errors.monday = "From time should be less than To time";
                    } else {
                        if (days[day][index + 1]) {
                            if (days[day][index].toTime > days[day][index + 1].fromTime) {
                                errors.monday = 'Timing overlaps!!!';
                            }
                        } else {
                            delete errors[day];
                            isDirty.monday = false;
                            for (let i of days[day]) {
                                for (let j of serviceTime) {
                                    if (i.fromTime === j.value) {
                                        i.fromTime = j.label;
                                    } else if (i.toTime === j.value) {
                                        i.toTime = j.label;
                                    }
                                }
                            }
                        }
                    }
                });
            } else if (day === "tuesday" && isDirty.tuesday) {
                days[day].forEach((key, index) => {
                    if (key.fromTime === "" || key.toTime === "") {
                        errors.tuesday = "Fields should not be empty :- " + (key.fromTime ? "To time" : "From Time");
                    } else if (key.fromTime > key.toTime) {
                        errors.tuesday = "From time should be less than To time";
                    } else {
                        if (days[day][index + 1]) {
                            if (days[day][index].toTime > days[day][index + 1].fromTime) {
                                errors.tuesday = 'Timing overlaps!!!';
                            }
                        } else {
                            delete errors[day];
                            isDirty.tuesday = false;
                            for (let i of days[day]) {
                                for (let j of serviceTime) {
                                    if (i.fromTime === j.value) {
                                        i.fromTime = j.label;
                                    } else if (i.toTime === j.value) {
                                        i.toTime = j.label;
                                    }
                                }
                            }
                        }
                    }
                });
            } else if (day === "wednesday" && isDirty.wednesday) {
                days[day].forEach((key, index) => {
                    if (key.fromTime === "" || key.toTime === "") {
                        errors.wednesday = "Fields should not be empty :- " + (key.fromTime ? "To time" : "From Time");
                    } else if (key.fromTime > key.toTime) {
                        errors.wednesday = "From time should be less than To time";
                    } else {
                        if (days[day][index + 1]) {
                            if (days[day][index].toTime > days[day][index + 1].fromTime) {
                                errors.wednesday = 'Timing overlaps!!!';
                            }
                        } else {
                            delete errors[day];
                            isDirty.wednesday = false;
                            for (let i of days[day]) {
                                for (let j of serviceTime) {
                                    if (i.fromTime === j.value) {
                                        i.fromTime = j.label;
                                    } else if (i.toTime === j.value) {
                                        i.toTime = j.label;
                                    }
                                }
                            }
                        }
                    }
                });
            } else if (day === "thursday" && isDirty.thursday) {
                days[day].forEach((key, index) => {
                    if (key.fromTime === "" || key.toTime === "") {
                        errors.thursday = "Fields should not be empty :- " + (key.fromTime ? "To time" : "From Time");
                    } else if (key.fromTime > key.toTime) {
                        errors.thursday = "From time should be less than To time";
                    } else {
                        if (days[day][index + 1]) {
                            if (days[day][index].toTime > days[day][index + 1].fromTime) {
                                errors.thursday = 'Timing overlaps!!!';
                            }
                        } else {
                            delete errors[day];
                            isDirty.thursday = false;
                            for (let i of days[day]) {
                                for (let j of serviceTime) {
                                    if (i.fromTime === j.value) {
                                        i.fromTime = j.label;
                                    } else if (i.toTime === j.value) {
                                        i.toTime = j.label;
                                    }
                                }
                            }
                        }
                    }
                });
            } else if (day === "friday" && isDirty.friday) {
                days[day].forEach((key, index) => {
                    if (key.fromTime === "" || key.toTime === "") {
                        errors.friday = "Fields should not be empty :- " + (key.fromTime ? "To time" : "From Time");
                    } else if (key.fromTime > key.toTime) {
                        errors.friday = "From time should be less than To time";
                    } else {
                        if (days[day][index + 1]) {
                            if (days[day][index].toTime > days[day][index + 1].fromTime) {
                                errors.friday = 'Timing overlaps!!!';
                            }
                        } else {
                            delete errors[day];
                            isDirty.friday = false;
                            for (let i of days[day]) {
                                for (let j of serviceTime) {
                                    if (i.fromTime === j.value) {
                                        i.fromTime = j.label;
                                    } else if (i.toTime === j.value) {
                                        i.toTime = j.label;
                                    }
                                }
                            }
                        }
                    }
                });
            } else if (day === "saturday" && isDirty.saturday) {
                days[day].forEach((key, index) => {
                    if (key.fromTime === "" || key.toTime === "") {
                        errors.saturday = "Fields should not be empty :- " + (key.fromTime ? "To time" : "From Time");
                    } else if (key.fromTime > key.toTime) {
                        errors.saturday = "From time should be less than To time";
                    } else {
                        if (days[day][index + 1]) {
                            if (days[day][index].toTime > days[day][index + 1].fromTime) {
                                errors.saturday = 'Timing overlaps!!!';
                            }
                        } else {
                            delete errors[day];
                            isDirty.saturday = false;
                            for (let i of days[day]) {
                                for (let j of serviceTime) {
                                    if (i.fromTime === j.value) {
                                        i.fromTime = j.label;
                                    } else if (i.toTime === j.value) {
                                        i.toTime = j.label;
                                    }
                                }
                            }
                        }
                    }
                });
            } else if (day === "sunday" && isDirty.sunday) {
                days[day].forEach((key, index) => {
                    if (key.fromTime === "" || key.toTime === "") {
                        errors.sunday = "Fields should not be empty :- " + (key.fromTime ? "To time" : "From Time");
                    } else if (key.fromTime > key.toTime) {
                        errors.sunday = "From time should be less than To time";
                    } else {
                        if (days[day][index + 1]) {
                            if (days[day][index].toTime > days[day][index + 1].fromTime) {
                                errors.sunday = 'Timing overlaps!!!';
                            }
                        } else {
                            delete errors[day];
                            isDirty.sunday = false;
                            for (let i of days[day]) {
                                for (let j of serviceTime) {
                                    if (i.fromTime === j.value) {
                                        i.fromTime = j.label;
                                    } else if (i.toTime === j.value) {
                                        i.toTime = j.label;
                                    }
                                }
                            }
                        }
                    }
                })
            }
        });
        this.setState({ errors });
        return Object.keys(errors).length ? errors : null;
    }

    addInput = (e, day) => {
        e.preventDefault()
        const item = this.state.days[day];
        const newItem = [...item, { fromTime: "", toTime: "" }]
        if (day === "monday") {
            this.setState({
                days: {
                    monday: newItem,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "tuesday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: newItem,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "wednesday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: newItem,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "thursday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: newItem,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "friday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: newItem,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "saturday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: newItem,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "sunday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: newItem
                }
            });
        }
    }

    deleteInput = (e, index, day) => {
        e.preventDefault();
        const item = this.state.days[day];
        const newItem = [...item];
        newItem.splice(index, 1);
        if (day === "monday") {
            this.setState({
                days: {
                    monday: newItem,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "tuesday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: newItem,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "wednesday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: newItem,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "thursday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: newItem,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "friday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: newItem,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "saturday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: newItem,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "sunday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: newItem
                }
            });
        }
    }

    render() {
        let optionList = this.state.serviceTime.map((data) => {
            return (
                <option key={data.value} value={data.label}>{data.label}</option>
            )
        })
        return (
            <div className="timingForm">
                {this.state.redirect ? <Redirect to={{
                    pathname: '/newly-added-doctors'
                }} /> : ''}
                <div className="title">
                    <h1>Add Work Timings</h1>
                </div>
                <div style={{ paddingLeft: "250px" }}>
                    <Form onSubmit={this.handleOnSubmit}>
                        <Row form>
                            <FormGroup>
                                <h2>Monday</h2>
                                <Button onClick={(e) => this.addInput(e, "monday")}>Add</Button>
                                {this.state.days.monday.map((item, i) => {
                                    return (
                                        <Row key={i}>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fromTime">From Time</Label>
                                                    <select style={{ width: '100%' }} name="fromTime"
                                                        onChange={(e) => this.handleChange(e, i, "monday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="toTime">To Time</Label>
                                                    <select style={{ width: '100%' }} name="toTime"
                                                        onChange={(e) => this.handleChange(e, i, "monday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Button onClick={(e) => this.deleteInput(e, i, "monday")}>Delete</Button>
                                        </Row>
                                    )
                                })}
                                {this.state.errors && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errors.monday}
                                    </small>
                                )}
                            </FormGroup>
                        </Row>
                        <Row form>
                            <FormGroup>
                                <h2>Tuesday</h2>
                                <Button type="submit" onClick={(e) => this.addInput(e, "tuesday")}>Add</Button>
                                {this.state.days.tuesday.map((item, i) => {
                                    return (
                                        <Row key={i}>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fromTime">From Time</Label>
                                                    <select style={{ width: '100%' }} name="fromTime"
                                                        onChange={(e) => this.handleChange(e, i, "tuesday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="toTime">To Time</Label>
                                                    <select style={{ width: '100%' }} name="toTime"
                                                        onChange={(e) => this.handleChange(e, i, "tuesday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Button type="submit" onClick={(e) => this.deleteInput(e, i, "tuesday")}>Delete</Button>
                                        </Row>
                                    )
                                })}
                                {this.state.errors && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errors.tuesday}
                                    </small>
                                )}
                            </FormGroup>
                        </Row>
                        <Row form>
                            <FormGroup>
                                <h2>Wednesday</h2>
                                <Button type="submit" onClick={(e) => this.addInput(e, "wednesday")}>Add</Button>
                                {this.state.days.wednesday.map((item, i) => {
                                    return (
                                        <Row key={i}>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fromTime">From Time</Label>
                                                    <select style={{ width: '100%' }} name="fromTime"
                                                        onChange={(e) => this.handleChange(e, i, "wednesday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="toTime">To Time</Label>
                                                    <select style={{ width: '100%' }} name="toTime"
                                                        onChange={(e) => this.handleChange(e, i, "wednesday")}>
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Button type="submit" onClick={(e) => this.deleteInput(e, i, "wednesday")}>Delete</Button>
                                        </Row>
                                    )
                                })}
                                {this.state.errors && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errors.wednesday}
                                    </small>
                                )}
                            </FormGroup>
                        </Row>
                        <Row form>
                            <FormGroup>
                                <h2>Thursday</h2>
                                <Button type="submit" onClick={(e) => this.addInput(e, "thursday")}>Add</Button>
                                {this.state.days.thursday.map((item, i) => {
                                    return (
                                        <Row key={i}>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fromTime">From Time</Label>
                                                    <select style={{ width: '100%' }} name="fromTime"
                                                        onChange={(e) => this.handleChange(e, i, "thursday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="toTime">To Time</Label>
                                                    <select style={{ width: '100%' }} name="toTime"
                                                        onChange={(e) => this.handleChange(e, i, "thursday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Button type="submit" onClick={(e) => this.deleteInput(e, i, "thursday")}>Delete</Button>
                                        </Row>
                                    )
                                })}
                                {this.state.errors && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errors.thursday}
                                    </small>
                                )}
                            </FormGroup>
                        </Row>
                        <Row form>
                            <FormGroup>
                                <h2>Friday</h2>
                                <Button type="submit" onClick={(e) => this.addInput(e, "friday")}>Add</Button>
                                {this.state.days.friday.map((item, i) => {
                                    return (
                                        <Row key={i}>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fromTime">From Time</Label>
                                                    <select style={{ width: '100%' }} name="fromTime"
                                                        onChange={(e) => this.handleChange(e, i, "friday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="toTime">To Time</Label>
                                                    <select style={{ width: '100%' }} name="toTime"
                                                        onChange={(e) => this.handleChange(e, i, "friday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Button type="submit" onClick={(e) => this.deleteInput(e, i, "friday")}>Delete</Button>
                                        </Row>
                                    )
                                })}
                                {this.state.errors && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errors.friday}
                                    </small>
                                )}
                            </FormGroup>
                        </Row>
                        <Row form>
                            <FormGroup>
                                <h2>Saturday</h2>
                                <Button type="submit" onClick={(e) => this.addInput(e, "saturday")}>Add</Button>
                                {this.state.days.saturday.map((item, i) => {
                                    return (
                                        <Row key={i}>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fromTime">From Time</Label>
                                                    <select style={{ width: '100%' }} name="fromTime"
                                                        onChange={(e) => this.handleChange(e, i, "saturday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="toTime">To Time</Label>
                                                    <select style={{ width: '100%' }} name="toTime"
                                                        onChange={(e) => this.handleChange(e, i, "saturday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Button type="submit" onClick={(e) => this.deleteInput(e, i, "saturday")}>Delete</Button>
                                        </Row>
                                    )
                                })}
                                {this.state.errors && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errors.saturday}
                                    </small>
                                )}
                            </FormGroup>
                        </Row>
                        <Row form>
                            <FormGroup>
                                <h2>Sunday</h2>
                                <Button type="submit" onClick={(e) => this.addInput(e, "sunday")}>Add</Button>
                                {this.state.days.sunday.map((item, i) => {
                                    return (
                                        <Row key={i}>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fromTime">From Time</Label>
                                                    <select style={{ width: '100%' }} name="fromTime"
                                                        onChange={(e) => this.handleChange(e, i, "sunday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="toTime">To Time</Label>
                                                    <select style={{ width: '100%' }} name="toTime"
                                                        onChange={(e) => this.handleChange(e, i, "sunday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Button type="submit" onClick={(e) => this.deleteInput(e, i, "sunday")}>Delete</Button>
                                        </Row>
                                    )
                                })}
                                {this.state.errors && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errors.sunday}
                                    </small>
                                )}
                            </FormGroup>
                        </Row>
                        <Button type="submit">Save</Button>
                    </Form>
                </div>
            </div>
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
        addtimingInfo: (timingForm) => dispatch(addtimingInfo(timingForm)),
        addToList: (data) => dispatch(addToList(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTiming);
