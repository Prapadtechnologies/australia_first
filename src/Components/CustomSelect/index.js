import React from "react";
import Select from "react-select";
import { Field } from "formik";

const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  isDisabled = false,
}) => {
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options?.filter((option) => field?.value?.indexOf(option?.value) >= 0)
        : options?.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : "";
    }
  };

  const controlStyles = {
    base: `rounded-lg border   hover:cursor-pointer font-pop text-xs  ${className}`,
  };
  const placeholderStyles = "text-placeholderColor pl-1 font-pop text-xs";
  const selectInputStyles = "font-pop text-xs";
  const singleValueStyles = "font-pop text-xs";
  const multiValueStyles =
    "bg-white rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
  const multiValueLabelStyles = "leading-6 py-0.5";
  const multiValueRemoveStyles =
    "border border-gray-200 bg-white font-pop text-xs rounded-md";
  const indicatorsContainerStyles = "p-1 gap-1 text-placeholderColor";
  const clearIndicatorStyles = "text-placeholderColor p-1 rounded-md";
  const indicatorSeparatorStyles = "";
  const dropdownIndicatorStyles = "text-placeholderColor";
  const menuStyles =
    "p-1 mt-2 border bg-white border-placeholderColor rounded-lg font-pop text-xs";
  const groupHeadingStyles = "ml-3 mt-2 mb-1 text-placeholderColor text-sm";
  const optionStyles = {
    base: "hover:cursor-pointer bg-white px-3 py-2 rounded font-pop text-xs text-primary",
  };
  const noOptionsMessageStyles =
    "text-placeholderColor p-2 border border-dashed border-gray-200 rounded-sm font-pop text-xs";

  return (
    <Select
      unstyled
      classNames={{
        control: ({ isFocused }) => controlStyles.base,
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) => optionStyles.base,
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      isDisabled={isDisabled}
    />
  );
};

const CustomSelectPicker = (props) => {
  const { data, name, placeHolder, isMulti, label, isDisabled, className } =
    props;
  return (  
    <Field
      name={name}
      options={data}
      component={CustomSelect}
      placeholder={placeHolder}
      isMulti={isMulti}
      isDisabled={isDisabled}
      className={className}
    />
  );
};

export default CustomSelectPicker;
