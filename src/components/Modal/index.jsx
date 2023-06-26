import React from 'react';

import './index.css';

import { Cross } from '../Icons';

const Modal = ({active, setActive, big = false, children}) => {
    return (
        <div className={`modal${active ? " active" : ""}`}>
            <div className={`modal__inner${big ? " big" : ""}`}>
                <div className="modal__content">
                    <Cross className="modal__cross" onClick={() => setActive(false)} />

                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;