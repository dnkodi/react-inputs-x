import React from "react"
import { Input, InputNumber, InputPassword } from "../src"

export class InputsView extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            age: "",
            currency: "",
            firstname: "",
            lastName: "",
            password: "",
            email: ""
        }
    }

    handleChange = (field) => (value) => this.setState({ [field]: value })

    render() {
        return (
            <div style={{ margin: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>React Inputs X</h2>
                <section style={{ marginBottom: 30 }}>
                    <h3>Text Inputs</h3>
                    <Input
                        label="First Name"
                        onChange={this.handleChange("firstname")}
                        placeholder="Enter first name"
                        required
                        value={this.state.firstname}
                        width="200px"
                    />
                    <div>
                        <Input
                            inline
                            label="Last Name (inline)"
                            onChange={this.handleChange("lastName")}
                            placeholder="Enter last name"
                            required
                            value={this.state.lastName}
                            width="200px"
                        />
                        <Input
                            inline
                            label="First Name (readonly)"
                            margin="0 5px"
                            onChange={this.handleChange("firstname")}
                            placeholder="Enter first name"
                            readOnly
                            required
                            value={this.state.firstname}
                            width="200px"
                        />
                    </div>
                    <Input
                        disabled
                        label="First Name (disabled)"
                        onChange={this.handleChange("firstname")}
                        placeholder="Enter first name"
                        required
                        value={this.state.firstname}
                        width="200px"
                    />
                </section>
                <section style={{ marginBottom: 30 }}>
                    <h3>Number Inputs</h3>
                    <InputNumber
                        buttons={false}
                        id="age"
                        label="Age (required)"
                        max={1000}
                        min={0}
                        onChange={this.handleChange("age")}
                        pattern={/^[0-9]{0,4}$/}
                        placeholder="Age"
                        required
                        value={this.state.age}
                        width="200px"
                    />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <InputNumber
                            buttons={false}
                            id="age"
                            inline
                            label="Age (inline)"
                            max={1000}
                            min={0}
                            onChange={this.handleChange("age")}
                            pattern={/^[0-9]{0,4}$/}
                            placeholder="Age"
                            value={this.state.age}
                            width="200px"
                        />
                        <InputNumber
                            buttons={false}
                            id="age"
                            inline
                            label="Age (read-only)"
                            margin="0 5px"
                            max={1000}
                            min={0}
                            onChange={this.handleChange("age")}
                            pattern={/^[0-9]{0,4}$/}
                            placeholder="Age"
                            readOnly
                            value={this.state.age}
                            width="200px"
                        />
                    </div>

                    <InputNumber
                        buttons={false}
                        disabled
                        id="age"
                        label="Age (disabled)"
                        max={1000}
                        min={0}
                        onChange={this.handleChange("age")}
                        pattern={/^[0-9]{0,4}$/}
                        placeholder="Age"
                        value={this.state.age}
                        width="200px"
                    />

                    <h3>Number Input — With Buttons</h3>
                    <InputNumber
                        buttons
                        id="currencyInput"
                        label="Currency (required)"
                        max={1000}
                        min={-2}
                        onChange={this.handleChange("currency")}
                        pattern={/^\-?\d*\.?\d{0,2}$/}
                        required
                        value={this.state.currency}
                        width="200px"
                    />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <InputNumber
                            buttons
                            id="currencyInput"
                            inline
                            label="Currency (inline)"
                            max={1000}
                            min={-1000}
                            onChange={this.handleChange("currency")}
                            pattern={/^\-?\d*\.?\d{0,2}$/}
                            value={this.state.currency}
                            width="200px"
                        />
                        <InputNumber
                            buttons
                            id="currencyInput"
                            inline
                            label="Currency (readOnly)"
                            margin="0 5px"
                            max={1000}
                            min={-2}
                            onChange={this.handleChange("currency")}
                            pattern={/^\-?\d*\.?\d{0,2}$/}
                            readOnly
                            value={this.state.currency}
                            width="200px"
                        />
                    </div>
                    <InputNumber
                        buttons
                        disabled
                        id="currencyInput"
                        label="Currency (disabled)"
                        max={1000}
                        min={-2}
                        onChange={this.handleChange("currency")}
                        pattern={/^\-?\d*\.?\d{0,2}$/}
                        value={this.state.currency}
                        width="200px"
                    />
                </section>
                <section style={{ marginBottom: 30 }}>
                    <h3>Password Input</h3>
                    <InputPassword
                        label="Password"
                        onChange={this.handleChange("password")}
                        placeholder="Enter password"
                        value={this.state.password}
                        width="450px"
                    />
                    <InputPassword
                        disabled
                        label="Password"
                        onChange={this.handleChange("password")}
                        placeholder="Enter password"
                        value={this.state.password}
                        width="450px"
                    />
                </section>
                <section style={{ marginBottom: 30 }}>
                    <h3>Email Validation</h3>
                    <Input
                        label="Email"
                        onChange={this.handleChange("email")}
                        placeholder="Enter email"
                        required
                        value={this.state.email}
                        width="450px"
                        pattern={/.+@.+\..+/}
                        invalidText="Invalid email!"
                    />
                </section>
            </div>
        )
    }

}
