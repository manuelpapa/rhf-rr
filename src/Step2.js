import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { enterLastName } from './rootSlice';

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const lastName = useSelector((state) => state.lastName);
  const { register, handleSubmit } = useForm({ defaultValues: { lastName } });

  const onSubmit = (data) => {
    dispatch(enterLastName(data.lastName));
    history.push('./step3');
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='lastName'>Lastname</label>
          <input
            ref={register({ required: true })}
            id='lastName'
            name='lastName'
            type='text'
          />
        </div>
        <button>Next</button>
      </form>
  );
};
