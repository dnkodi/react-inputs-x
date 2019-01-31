import React, { PureComponent } from "react"
import { Icon } from "./Icon"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import st from "../scss/Inputs.scss"

const cx = classNames.bind(st)


export class InputNumber extends PureComponent {

    state = {
        invalidRequired: false
    }

    handleChange = (event) => {
        const { value } = event.target
        const { pattern } = this.props
        const isNumber = pattern.test(value)
        if (isNumber) this.update(parseFloat(value))
    }

    handleKeyPress = (event) => {
        if (!this.props.readOnly) {
            switch (event.key) {
                case "ArrowUp": {
                    this.increment()
                    break
                }
                case "ArrowDown": {
                    this.decrement()
                    break
                }
                default:
                    break
            }
        }
    }

    handleBlur = (event) => {
        if (this.props.required && !Boolean(this.props.value.toString())) this.setState({ invalidRequired: true })
    }

    update = (newValue) => {
        const { max, min } = this.props
        const minned = newValue < min ? min : newValue
        const maxed = minned > max ? max : minned
        const formatValue = !Number.isNaN(maxed) ? maxed : 0
        this.setState({ invalidRequired: false })
        this.props.onChange(formatValue)
    }

    handleButton = (button) => (event) =>
        button === "plus" ? this.increment() : this.decrement()

    decrement = () => this.update(parseFloat(this.props.value || 0) - 1)

    increment = () => this.update(parseFloat(this.props.value || 0) + 1)

    render() {
        const { buttons, disabled, errorText, id, inline, label, margin, max, min, placeholder, readOnly, value, width } = this.props
        const { invalidRequired } = this.state
        const idProp = id ? { id } : {}
        const forProp = id ? { htmlFor: id } : {}
        const minusDisabled = disabled || readOnly || value <= min
        const plusDisabled = disabled || readOnly || value >= max
        return (
            <span className={cx(st.inputItem, { buttons, disabled, inline })} style={{ margin, width }}>
                { label && <label className={st.labelText} {...forProp}>{label}</label>}
                <span className={st.container}>
                    { buttons ? <Icon disabled={minusDisabled} name="minus" onClick={this.handleButton("minus")} /> : null }
                    <input
                        {...idProp}
                        disabled={disabled}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyPress}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        type="tel"
                        value={value.toString()}
                    />
                    { buttons ? <Icon disabled={plusDisabled} name="plus" onClick={this.handleButton("plus")} /> : null }
                </span>
                {invalidRequired ? <p className={st.errorText}>{errorText}</p> : null}
            </span>
        )
    }
}

InputNumber.defaultProps = {
    buttons: false,
    disabled: false,
    errorText: "Field is required.",
    id: "",
    inline: false,
    label: "",
    placeholder: "",
    margin: "",
    max: Math.POSITIVE_INFINITY,
    min: Math.NEGATIVE_INFINITY,
    pattern: /^-?([0-9]*)(\.[0-9]*)?$/,
    readOnly: false,
    required: false,
    whiteBackground: false,
    width: ""
}

InputNumber.propTypes = {
    buttons: PropTypes.bool,
    disabled: PropTypes.bool,
    errorText: PropTypes.string,
    id: PropTypes.string,
    inline: PropTypes.bool,
    label: PropTypes.string,
    margin: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    pattern: PropTypes.any,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.number.isRequired,
    whiteBackground: PropTypes.bool,
    width: PropTypes.string
}
