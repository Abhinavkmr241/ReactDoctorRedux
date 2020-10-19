import React, { Component } from 'react';
import './AddTiming.css';
import { Col, Row, Button, Form, FormGroup, Label } from 'reactstrap';

export class AddTiming extends Component {

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
        errors: {}
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
                console.log(this.state.days)
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
        const dayList = days;
        Object.keys(dayList).forEach((day) => {
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
                const mon = dayList[day];
                for (let i = 0; i < mon.length; i++) {
                    if ((mon[i].fromTime === null) || (mon[i].toTime === null)) {
                        errors.monday = "Fields should not be empty :- " + (mon[i].fromTime ? "To time" : "From Time");
                    } else {
                        for (let j = i + 1; j < mon.length; j++) {
                            if (mon[i].fromTime > mon[i].toTime) {
                                errors.monday = "From time should be less that To time";
                            } else if (mon[j].fromTime < mon[i].toTime) {
                                errors.monday = "overlap between time slots";
                            } 
                        }
                    }
                }
                if (!errors) {
                    delete errors[day];
                    isDirty.monday = false;
                }
            } else if (day === "tuesday" && isDirty.tuesday) {
                const tue = dayList[day];
                for (let i = 0; i < tue.length; i++) {
                    if ((tue[i].fromTime === null) || (tue[i].toTime === null)) {
                        errors.tuesday = "Fields should not be empty :- " + (tue[i].fromTime ? "To time" : "From Time");
                    } else {
                        for (let j = i + 1; j < tue.length; j++) {
                            if (tue[i].fromTime > tue[i].toTime) {
                                errors.tuesday = "From time should be less that To time";
                            } else if (tue[j].fromTime < tue[i].toTime) {
                                errors.tuesday = "overlap between time slots";
                            } 
                        }
                    }
                }
                if (!errors) {
                    delete errors[day];
                    isDirty.tuesday = false;
                }
            } else if (day === "wednesday" && isDirty.wednesday) {
                const wed = dayList[day];
                for (let i = 0; i < wed.length; i++) {
                    if ((wed[i].fromTime === null) || (wed[i].toTime === null)) {
                        errors.wednesday = "Fields should not be empty :- " + (wed[i].fromTime ? "To time" : "From Time");
                    } else {
                        for (let j = i + 1; j < wed.length; j++) {
                            if (wed[i].fromTime > wed[i].toTime) {
                                errors.wednesday = "From time should be less that To time";
                            } else if (wed[j].fromTime < wed[i].toTime) {
                                errors.wednesday = "overlap between time slots";
                            } 
                        }
                    }
                }
                if (!errors) {
                    delete errors[day];
                    isDirty.wednesday = false;
                }
            } else if (day === "thursday" && isDirty.thursday) {
                const thur = dayList[day];
                for (let i = 0; i < thur.length; i++) {
                    if ((thur[i].fromTime === null) || (thur[i].toTime === null)) {
                        errors.thursday = "Fields should not be empty :- " + (thur[i].fromTime ? "To time" : "From Time");
                    } else {
                        for (let j = i + 1; j < thur.length; j++) {
                            if (thur[i].fromTime > thur[i].toTime) {
                                errors.thursday = "From time should be less that To time";
                            } else if (thur[j].fromTime < thur[i].toTime) {
                                errors.thursday = "overlap between time slots";
                            } 
                        }
                    }
                }
                if (!errors) {
                    delete errors[day];
                    isDirty.thursday = false;
                }
            } else if (day === "friday" && isDirty.friday) {
                const fri = dayList[day];
                for (let i = 0; i < fri.length; i++) {
                    if ((fri[i].fromTime === null) || (fri[i].toTime === null)) {
                        errors.friday = "Fields should not be empty :- " + (fri[i].fromTime ? "To time" : "From Time");
                    } else {
                        for (let j = i + 1; j < fri.length; j++) {
                            if (fri[i].fromTime > fri[i].toTime) {
                                errors.friday = "From time should be less that To time";
                            } else if (fri[j].fromTime < fri[i].toTime) {
                                errors.friday = "overlap between time slots";
                            } 
                        }
                    }
                }
                if (!errors) {
                    delete errors[day];
                    isDirty.friday = false;
                }
            } else if (day === "saturday" && isDirty.saturday) {
                const sat = dayList[day];
                for (let i = 0; i < sat.length; i++) {
                    if ((sat[i].fromTime === null) || (sat[i].toTime === null)) {
                        errors.saturday = "Fields should not be empty :- " + (sat[i].fromTime ? "To time" : "From Time");
                    } else {
                        for (let j = i + 1; j < sat.length; j++) {
                            if (sat[i].fromTime > sat[i].toTime) {
                                errors.saturday = "From time should be less that To time";
                            } else if (sat[j].fromTime < sat[i].toTime) {
                                errors.saturday = "overlap between time slots";
                            } 
                        }
                    }
                }
                if (!errors) {
                    delete errors[day];
                    isDirty.saturday = false;
                }
            } else if (day === "sunday" && isDirty.sunday) {
                const sun = dayList[day];
                for (let i = 0; i < sun.length; i++) {
                    if ((sun[i].fromTime === null) || (sun[i].toTime === null)) {
                        errors.sunday = "Fields should not be empty :- " + (sun[i].fromTime ? "To time" : "From Time");
                    } else {
                        for (let j = i + 1; j < sun.length; j++) {
                            if (sun[i].fromTime > sun[i].toTime) {
                                errors.sunday = "From time should be less that To time";
                            } else if (sun[j].fromTime < sun[i].toTime) {
                                errors.sunday = "overlap between time slots";
                            } 
                        }
                    }
                }
                if (!errors) {
                    delete errors[day];
                    isDirty.sunday = false;
                }
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
                    monday: newItem
                }
            });
        } else if (day === "tuesday") {
            this.setState({
                days: {
                    tuesday: newItem
                }
            });
        } else if (day === "wednesday") {
            this.setState({
                days: {
                    wednesday: newItem
                }
            });
        } else if (day === "thursday") {
            this.setState({
                days: {
                    thursday: newItem
                }
            });
        } else if (day === "friday") {
            this.setState({
                days: {
                    friday: newItem
                }
            });
        } else if (day === "saturday") {
            this.setState({
                days: {
                    saturday: newItem
                }
            });
        } else if (day === "sunday") {
            this.setState({
                days: {
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
                    monday: newItem
                }
            });
        } else if (day === "tuesday") {
            this.setState({
                days: {
                    tuesday: newItem
                }
            });
        } else if (day === "wednesday") {
            this.setState({
                days: {
                    wednesday: newItem
                }
            });
        } else if (day === "thursday") {
            this.setState({
                days: {
                    thursday: newItem
                }
            });
        } else if (day === "friday") {
            this.setState({
                days: {
                    friday: newItem
                }
            });
        } else if (day === "saturday") {
            this.setState({
                days: {
                    saturday: newItem
                }
            });
        } else if (day === "sunday") {
            this.setState({
                days: {
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
                <div className="title">
                    <h1>Add Work Timings</h1>
                </div>
                <div>
                    <Form onSubmit={this.handleOnSubmit}>
                        <Row form>
                            <FormGroup>
                                <h2>Monday</h2>
                                <Button type="submit" onClick={(e) => this.addInput(e, "monday")}>Add</Button>
                                {this.state.days.monday.map((item, i) => {
                                    return (
                                        <Row key={i}>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fromTime">From Time</Label>
                                                    <select style={{ width: '100%' }} name="fromTime"
                                                        value={item.fromTime}
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
                                                        value={item.toTime}
                                                        onChange={(e) => this.handleChange(e, i, "monday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Button type="submit" onClick={(e) => this.deleteInput(e, i, "monday")}>Delete</Button>
                                        </Row>
                                    )
                                })}
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
                                                        value={item.fromTime}
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
                                                        value={item.toTime}
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
                                                        value={item.fromTime}
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
                                                        value={item.toTime}
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
                                                        value={item.fromTime}
                                                        onChange={(e) => this.handleChange(e, i, "thursday")} >
                                                        <option></option>
                                                        {optionList}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="toTime">To Time</Label>
                                                    <select style={{ width: '120%' }} name="toTime"
                                                        value={item.toTime}
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
                                                        value={item.fromTime}
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
                                                        value={item.toTime}
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
                                                        value={item.fromTime}
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
                                                        value={item.toTime}
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
                                                        value={item.fromTime}
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
                                                        value={item.toTime}
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
                            </FormGroup>
                        </Row>
                        <Button type="submit">Save</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default AddTiming
