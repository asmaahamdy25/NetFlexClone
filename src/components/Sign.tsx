import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import firebaseApp from '../constants/firebase'

export const Sign = ({ history }: { history: any }) => {
  const [error, setError] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handelSignIn(event: any) {
    event.preventDefault()
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/home')
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  function handelSignUp(event: any) {
    event.preventDefault()
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/home')
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return (
    <div className='sign-continer'>
      {error && <div className='error'>{error}</div>}
      <Form className='sign-form'>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </Form.Group>
        <div className='buttons-containers'>
          <Button variant='primary' onClick={handelSignIn} type='submit'>
            Sing In
          </Button>
          <Button variant='primary' onClick={handelSignUp} type='submit'>
            Sing up
          </Button>
        </div>
      </Form>
    </div>
  )
}
