import React from 'react';
import { useForm } from 'react-hook-form';



// eslint-disable-next-line react/prop-types
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, {required})} />
  </>
);

// you can use React.forwardRef to pass the ref too
// eslint-disable-next-line react/display-name, react/prop-types
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref)=> (
  <>
  <label>{label}</label>
  <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
    <option value='20'>20</option>
    <option value='30'>30</option>
  </select>
  </>
));

const App = () => { 
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <Input label='First Name' register={register} required />
      <Select label='Age' {...register('Age')} />
      <input type='submit' />
    </form>
  )

}

export default App;
