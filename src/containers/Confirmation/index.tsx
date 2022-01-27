import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { submitForm } from '../../api/submit';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import Loader from '../../components/Loader';
import { useUser } from '../../context/user';
import capitalize from '../../utils/capitalize';

import './styles.scss';

const Confirmation = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await submitForm(user);
      navigate('/success');
    } catch (e) {
      navigate('/error');
    }
  };

  const onBack = () => {
    navigate('/more-info');
  };

  return (
    <div className='confirmation'>
      <Loader show={loading} />
      <h2 className='confirmation__title'>Confirmation</h2>
      <div className='confirmation__list'>
        <ListItem label='First name' description={user?.name} />
        <ListItem label='E-mail' description={user?.email} />
        <ListItem
          label='Password'
          description={user?.password?.replace(/./g, '*')}
        />
        <ListItem
          label='Favorite color'
          description={capitalize(user?.color)}
        />
        <ListItem
          label='Terms and conditions'
          description={user?.terms ? 'Agreed' : 'Not agreed'}
        />
      </div>
      <div className='confirmation__buttons'>
        <Button type='secondary' onClick={onBack}>
          Back
        </Button>
        <Button type='primary' onClick={onSubmit}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
