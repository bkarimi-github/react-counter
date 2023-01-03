import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AddCounter({updateMainCounter}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const showModel = () => setShow(true);
  

  return (
    <>
      <button className="btn btn-lg btn-outline-primary col-12" onClick={showModel}>Add</button>    
      <AddModel show={show} updateMainCounter={updateMainCounter} handleClose={handleClose} />
      
    </>
  );
}

function AddModel({show, updateMainCounter, handleClose})
{
    function handleSubmit(counterValueToAdd)
    {
        updateMainCounter(counterValueToAdd);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm handleSubmit={handleSubmit}/>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEvent}>
                    Save Changes
                </Button>
            </Modal.Footer> */}
      </Modal>
    );
}


    function AddForm({handleSubmit}) {
      
        const [validated, setValidated] = useState(false);

        const handleSubmitEvent = (event) => {
            const form = event.currentTarget;
            event.preventDefault();
            event.stopPropagation();
            
            if(form.checkValidity())
            {
                setValidated(true);
                const value = form.counterValue.value;
                console.log("Counter Value: " + value);
                handleSubmit(value);
            }
        };
      
        return (
          <Form noValidated validated={validated} onSubmit={handleSubmitEvent}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Counter Value to Add</Form.Label>
                <Form.Control 
                  autoFocus
                  required
                  type="number"
                  placeholder="Counter"
                  min={0}
                  name="counterValue"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Button type="submit">Add to Counter</Button>
          </Form>
        );
      }