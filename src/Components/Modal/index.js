import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { root } from "postcss";

const CustomModal = (props) => {
    const { handleModalClose, modalProps, className  } = props;
    return(
    <Modal classNames={{ modal:`customModal ${className}`}} open={modalProps.visible} onClose={handleModalClose} center={false} showCloseIcon={false}>
        {props.children}
    </Modal>
    )
    
}

export default CustomModal;