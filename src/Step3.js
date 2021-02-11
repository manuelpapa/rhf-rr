import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { enterAge } from './rootSlice';

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const age = useSelector((state) => state.age);
  const { register, handleSubmit } = useForm({ defaultValues: { age } });

  const onSubmit = (data) => {
    dispatch(enterAge(data.age));
    history.push('./Result');
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='age'>Age</label>
          <input
            ref={register({ required: true })}
            id='age'
            name='age'
            type='text'
          />
        </div>
        <button>Next</button>
      </form>
  );
};
