import React from "react";
import { useField } from "formik";

const TextInput = (props) => {
  const { placeholder, type, rightIcon, className,disabled } = props;
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col h-16">
      <input
        {...field}
        {...props}
        type={type}
        disabled={disabled}
        className={` border rounded-lg placeholder-placeholderColor font-pop text-xs ${className ? className : 'w-72 p-4  border-secondary'}`}
        placeholder={placeholder}
      />
      {rightIcon && (
        <div className="absolute right-4 top-4 pl-3  flex items-center">
          {rightIcon}
        </div>
      )}

      {meta.touched && meta.error ? (
        <span className="text-danger font-pop text-xs my-1">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default TextInput;
