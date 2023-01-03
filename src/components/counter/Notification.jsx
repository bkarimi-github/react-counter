import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';

export default function Notification({title, message})
{
    const [show, setShow] = useState(true);

    return (

        <ToastContainer className="p-3" position="top-end">
            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">{title}</strong>
                    <small>Just Now</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}