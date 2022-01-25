import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getColors } from 'src/api/colors';
import Button from 'src/components/Button';
import Checkbox from 'src/components/Checkbox';
import Input from 'src/components/Input';
import Select, { Option } from 'src/components/Select';
import Spinner from 'src/components/Spinner';
import { useUser } from 'src/context/user';
import capitalize from 'src/utils/capitalize';

import './styles.scss';

const AdditionalInfo = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const [color, setColor] = useState({
    key: user.color,
    value: capitalize(user.color),
  });
  const [terms, setTerms] = useState(user.terms);
  const [colors, setColors] = useState<Option[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(true);

  const onSubmit = () => {
    setSubmitted(true);
    if (!color.key) {
      return;
    }

    setUser({ ...user, terms, color: color.key });
    navigate('/confirmation');
  };

  const onBack = () => {
    setUser({ ...user, terms, color: color?.key });
    navigate('/');
  };

  const fetchColors = useCallback(async () => {
    try {
      const colorKeys = await getColors();

      const colors = colorKeys.map((key) => ({ key, value: capitalize(key) }));
      setColors(colors);
      setLoading(false);
    } catch (e) {
      navigate('/error');
    }
  }, []);

  useEffect(() => {
    fetchColors();
  });

  return (
    <div role='form' className='additional-info'>
      <Spinner show={loading} />
      <h2 className='additional-info__title'>Additional info</h2>
      <Select
        name='favorite-color'
        handleSelection={(option) => {
          setColor(option);
        }}
        label='Favorite color'
        options={colors}
        selected={color}
        errorMessage={submitted && !color.key && 'Color is required'}
      />
      <Checkbox
        text='I agree to terms and conditions'
        onClick={(value) => setTerms(value)}
        value={terms}
      />
      <div className='additional-info__buttons'>
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

export default AdditionalInfo;