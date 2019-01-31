import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import st from "../scss/Inputs.scss"

const cx = classNames.bind(st)

export class Input extends PureComponent {

    state = {
        invalidRequired: false,
        invalidPattern: false
    }

    handleBlur = (event) => {

        if (this.props.required && !Boolean(this.props.value)) this.setState({ invalidRequired: true, invalidPattern: false })

        // Validate Pattern
        const { pattern } = this.props

        const isValid = pattern.test(event.target.value)

        if (Boolean(this.props.value) && !isValid) this.setState({ invalidPattern: true })
    }

    handleChange = (event) => {
        this.setState({ invalidRequired: false, invalidPattern: false })
        this.props.onChange(event.target.value)
    }

    render() {
        const { disabled, errorText, id, inline, label, margin, placeholder, readOnly, value, width, whiteBackground, invalidText } = this.props
        const { invalidRequired, invalidPattern } = this.state
        const idProp = id ? { id } : {}
        const forProp = id ? { htmlFor: id } : {}
        return (
            <span className={cx(st.inputItem, { inline })} style={{ margin, width }}>
                { label && <label {...forProp}>{label}</label>}
                <input
                    className={cx({ disabled, invalidRequired, whiteBackground })}
                    disabled={disabled}
                    {...idProp}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    type="text"
                    value={value}
                />
                {invalidRequired ? <p className={st.errorText}>{errorText}</p> : null}
                {invalidPattern ? <p className={st.errorText}>{invalidText}</p> : null}
            </span>
        )
    }
}

Input.defaultProps = {
    disabled: false,
    errorText: "Field is required.",
    id: "",
    invalidText: "Invalid Field",
    inline: false,
    label: "",
    margin: "",
    pattern: /[\s\S]*/,
    placeholder: "",
    readOnly: false,
    required: false,
    whiteBackground: false,
    width: ""
}

Input.propTypes = {
    disabled: PropTypes.bool,
    errorText: PropTypes.string,
    id: PropTypes.string,
    inline: PropTypes.bool,
    invalidText: PropTypes.string,
    label: PropTypes.string,
    margin: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    pattern: PropTypes.object,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    whiteBackground: PropTypes.bool,
    width: PropTypes.string
}
