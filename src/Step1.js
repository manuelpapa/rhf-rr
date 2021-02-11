import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { enterFirstName } from './rootSlice';

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const firstName = useSelector(state => state.firstName);
  const { register, handleSubmit } = useForm({ defaultValues: { firstName } });

  const onSubmit = (data) => {
    dispatch(enterFirstName(data.firstName));
    history.push('./step2');
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='firstName'>Firstname</label>
          <input
            ref={register({ required: true })}
            id='firstName'
            name='firstName'
            type='text'
          />
        </div>
        <button>Next</button>
      </form>
  );
};
