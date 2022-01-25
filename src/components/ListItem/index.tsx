import React from 'react';

import './styles.scss';

type Props = { label: string; description: string };

const ListItem = ({ label, description }: Props) => {
  return (
    <div className='list-item'>
      <p className='list-item__label'>{label}</p>
      <p className='list-item__description'>{description}</p>
    </div>
  );
};

export default ListItem;
