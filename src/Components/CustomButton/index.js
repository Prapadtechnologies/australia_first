import React from 'react';

const CustomButton = (props) => {
    const { title, className, handleOnClick, disabled, type } = props;
    console.log(disabled)
    return(
        <button disabled={disabled} className={`bg-primary w-5/12 p-3 rounded-lg flex justify-center items-center font-pop text-xs text-white disabled:bg-white ${className}`} onClick={handleOnClick}>
            {title}
        </button>
    )
}

export default CustomButton;