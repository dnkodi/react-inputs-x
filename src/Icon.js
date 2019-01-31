import React from "react"
import PropTypes from "prop-types"
import st from "../scss/Icons.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(st)

const Plus = (
    <React.Fragment>
        <line className={st.line} x1="36" x2="85" y1="60" y2="60" />
        <line className={st.line} x1="60" x2="60" y1="36" y2="85" />
    </React.Fragment>
)

const Minus = <line className={st.line} x1="36" x2="85" y1="60" y2="60" />

const renderPaths = (name) => {
    switch (name) {
        case "plus":
            return Plus
        case "minus":
            return Minus
        default:
            break
    }
}

export const Icon = ({ name, onClick, styles, disabled }) =>
    <span className={cx(st.wrapper, { [st.disabled]: disabled })} onClick={onClick} style={{ cursor: onClick ? "pointer" : "inherit", ...styles }} tabIndex={onClick ? 0 : -1}>
        <svg
            version="1.1"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
        >
            {renderPaths(name)}
        </svg>
    </span>

Icon.defaultProps = {
    disabled: false,
    onClick: null,
    styles: {},
    white: false
}

Icon.propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.oneOf(["plus", "minus"]).isRequired,
    onClick: PropTypes.func,
    styles: PropTypes.object,
    white: PropTypes.bool
}
