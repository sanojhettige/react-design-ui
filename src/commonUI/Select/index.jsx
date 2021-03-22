import React from "react";
import PropTypes from "prop-types";
import Select from "react-dropdown-select";

import { Container } from "./styles";

function Dropdown({
  onChange,
  options,
  isLoading,
  isDisabled,
  isMultiSelect,
  isRequired,
  labelField,
  valueField,
  label,
  ...otherProps
}) {
  return (
    <Container>
      <div className="select-container">
        {label && <div className="field-label">{label}</div>}
        <div className="field-data">
          <Select
            options={options}
            multi={isMultiSelect}
            disabled={isDisabled}
            loading={isLoading}
            onChange={onChange}
            required={isRequired}
            labelField={labelField}
            valueField={valueField}
            {...otherProps}
          />
        </div>
      </div>
    </Container>
  );
}

Dropdown.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMultiSelect: PropTypes.bool,
  labelField: PropTypes.string,
  valueField: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
};

Dropdown.defaultProps = {
  onChange: () => {},
  options: [],
  isLoading: false,
  isDisabled: false,
  isMultiSelect: false,
  labelField: "name",
  valueField: "id",
  isRequired: false,
  label: "",
};

export default Dropdown;
