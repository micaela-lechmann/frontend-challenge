import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { useUser } from '../../context/user';

import './styles.scss';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const [submitted, setSubmitted] = useState(false);

  const errorMessage = (field: string) => `${field} is required`;

  const onSubmit = () => {
    setSubmitted(true);

    if (!name || !email || !password) {
      return;
    }

    setUser({ ...user, name, email, password });
    navigate('more-info');
  };

  return (
    <div role='form' className='personal-info'>
      <h2 className='personal-info__title'>Sign up</h2>
      <Input
        value={name}
        label='First name'
        name='name'
        type='text'
        handleChange={(e) => {
          setName(e.target.value);
        }}
        errorMessage={submitted && !name && errorMessage('Name')}
      />
      <Input
        value={email}
        label='E-mail'
        type='email'
        name='email'
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
        errorMessage={submitted && !email && errorMessage('E-mail')}
      />
      <Input
        value={password}
        label='Password'
        type='password'
        name='password'
        handleChange={(e) => {
          setPassword(e.target.value);
        }}
        errorMessage={submitted && !password && errorMessage('Password')}
      />
      <Button type='primary' onClick={onSubmit}>
        Next
      </Button>
    </div>
  );
};

export default PersonalInfo;
