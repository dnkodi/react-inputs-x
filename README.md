# React Inputs X

An awesome react input component.

## Demo

[https://dnkodi.github.io/react-inputs-x/](https://dnkodi.github.io/react-inputs-x/)


## Installation

```bash
$ npm install react-inputs-x --save
```

After this you can import react-inputs-x and its styles in your application as follows:

```js
import { Input, InputNumber, InputPassword } from 'react-inputs-x';

//Include styles at your root and make sure you have necessary loaders to handle css
import 'react-inputs-x/dist/styles.css';
```

## Usage

```js
import React from 'react';
import { Input, InputNumber, InputPassword } from 'react-inputs-x';

class App extends React.Component {
    state = {
        age: "",
        currency: "",
        firstname: "",
        password: ""
    }

    handleChange = (field) => (value) => this.setState({ [field]: value })

    render() {
        const { firstname, age, currency, password } = this.state;

        return (
        <div>
            <h3>Text Input</h3>
            <Input
                label="First Name"
                onChange={this.handleChange("firstname")}
                placeholder="Enter first name"
                required
                value={firstname}
                width="200px"
            />
            <h3>Number Input</h3>
            <InputNumber
                id="age"
                label="Age (required)"
                max={1000}
                min={0}
                onChange={this.handleChange("age")}
                pattern={/^[0-9]{0,4}$/}
                placeholder="Age"
                required
                value={age}
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
                value={currency}
                width="200px"
            />
            <h3>Password Input</h3>
            <InputPassword
                label="Password"
                onChange={this.handleChange("password")}
                placeholder="Enter password"
                value={password}
                width="200px"
            />
        </div>
        );
    }
}
```

## Development

```bash
$ git clone https://github.com/dnkodi/react-inputs-x.git
$ npm install
```

### Start the dev server

```bash
$ npm start
```

Defaults to port `8080`.


## License

MIT Licensed. Copyright (c) Duleep Kodithuwakku 2019.
