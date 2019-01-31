import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import st from "../scss/Inputs.scss"

const cx = classNames.bind(st)

export class InputPassword extends PureComponent {

    state = {
        showPassword: false,
        invalidRequired: false
    }

    handleChange = (event) => {
        this.setState({ invalidRequired: false })
        this.props.onChange(event.target.value)
    }

    handleBlur = _ => {
        if (this.props.required && !Boolean(this.props.value)) this.setState({ invalidRequired: true })
    }

    togglePassword = _ => this.setState(prevState => ({ showPassword: !prevState.showPassword }))

    render() {
        const { bold, disabled, errorText, id, inline, label, margin, placeholder, readOnly, value, width, whiteBackground } = this.props
        const idProp = id ? { id } : {}
        const forProp = id ? { htmlFor: id } : {}
        const { invalidRequired, showPassword } = this.state
        const showToggle = !(this.props.readOnly || this.props.disabled) && value
        return (
            <span className={cx(st.inputItem, { inline })} style={{ margin, width }}>
                { label && <label className={cx(st.labelText, { bold })} {...forProp}>{label}</label>}
                <span className={cx(st.passwordText)}>
                    <input
                        {...idProp}
                        className={cx({ disabled, invalidRequired, whiteBackground })}
                        disabled={disabled}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        type={showPassword ? "text" : "password"}
                        value={value}
                    />
                    { showToggle && <span className={st.toggle} onClick={this.togglePassword}>{ this.state.showPassword ? "Hide" : "Show" }</span> }
                </span>
                {invalidRequired ? <p className={st.errorText}>{errorText}</p> : null}
            </span>
        )
    }
}

InputPassword.defaultProps = {
    bold: false,
    disabled: false,
    errorText: "Password is required.",
    id: "",
    inline: false,
    label: "",
    margin: "",
    placeholder: "",
    readOnly: false,
    required: true,
    whiteBackground: false,
    width: ""
}

InputPassword.propTypes = {
    bold: PropTypes.bool,
    disabled: PropTypes.bool,
    errorText: PropTypes.string,
    id: PropTypes.string,
    inline: PropTypes.bool,
    label: PropTypes.string,
    margin: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    whiteBackground: PropTypes.bool,
    width: PropTypes.string
}
