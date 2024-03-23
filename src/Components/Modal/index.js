import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { root } from "postcss";

const CustomModal = (props) => {
    const { handleModalClose, modalProps  } = props;
    return(
    <Modal classNames={{ modal:'customModal'}} open={modalProps.visible} onClose={handleModalClose} center showCloseIcon={false}>
        {props.children}
    </Modal>
    )
    
}

export default CustomModal;