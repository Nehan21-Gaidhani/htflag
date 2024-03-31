import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import './cardComp.css';

const CardComp = ({ title, description, alertDesc, pdfPath, questionId }) => {
    const [showModal, setShowModal] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const handleCardClick = () => {
        if (!answeredQuestions.includes(questionId)) {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleSave = () => {
        setShowModal(false);
        setSubmitted(true);
        checkAnswer(textInput);
        setTextInput('');
    };

    const checkAnswer = (input) => {
        const answers = ["answer1", "answer2", "answer3"];
        if (answers.indexOf(input) + 1 === questionId) {
            setIsCorrect(true);
            console.log("Correct answer!");
            setAnsweredQuestions([...answeredQuestions, questionId]); // Add the answered question to the list
        } else {
            setIsCorrect(false);
            console.log("Incorrect answer.");
        }
    };

    const handleDownloadFile = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfPath;
        const fileName = pdfPath.split('/').pop(); // Extract filename with extension from pdfPath
        downloadLink.download = fileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <>
            <div onClick={handleCardClick}>
                <Card style={{ width: '18rem', borderRadius: '20px', backgroundColor: submitted ? (isCorrect ? 'lightcoral' : 'inherit') : 'inherit', color: submitted ? (isCorrect ? 'white' : 'inherit') : 'inherit' }} className='mx-5 my-5 custom-card' id='custom-card'>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <Modal id="modal" show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{alertDesc}</p>
                    <Form>
                        <Form.Group controlId="formTextInput">
                            <Form.Label className='mt-3'>Your response :</Form.Label>
                            <Form.Control type="text" value={textInput} onChange={handleInputChange} placeholder="CTF(...)" />
                        </Form.Group>
                    </Form>
                    <Button variant="primary" onClick={handleDownloadFile}>Download file</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CardComp;
