import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { executePost } from '../services/api';


function CreateUser(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const saveUser = () => {
        const body = {
            name,
            email,
            cpf,
            phone,
            birthdate,
        }
        executePost('/user', body, props.token)
            .then((result) => console.log('theresultis', result))
            .catch((error) => console.log(error))
            .finally(props.onHide)
    }

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Criar Usuário
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId='CreateUserForm'>
                    <Form.Control type="text" placeholder="Nome" onChange={e => setName(e.target.value)}/>
                    <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <Form.Control type="text" placeholder="CPF: 000.000.000-00" onChange={e => setCpf(e.target.value)} />
                    <Form.Control type="text" placeholder="Telefone: DDD999999999" onChange={e => setPhone(e.target.value)}/>
                    <Form.Control type="text" placeholder="Data de aniversário: AAAA-MM-DD" onChange={e => setBirthdate(e.target.value)} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' onClick={saveUser}>
                Salvar
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreateUser