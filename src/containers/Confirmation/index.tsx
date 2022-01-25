import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import { useUser } from '../../context/user';
import capitalize from '../../utils/capitalize';

import './styles.scss';

const Confirmation = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const onSubmit = () => {
    navigate('/success');
  };

  const onBack = () => {
    navigate('/more-info');
  };

  return (
    <div className='confirmation'>
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
