import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFormWrapper, Button } from './AuthForm.style';
import { signInApi } from '../../apis/auth';
import InputItem from '../common/InputItem/InputItem';

const AuthForm = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const checkValid = !(formValue.email.includes('@') && formValue.password.length >= 8);

  const onChangeHandler = e => {
    const { type, value } = e.target;
    setFormValue(prevValue => ({ ...prevValue, [type]: value }));
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    const email = formValue.email;
    const password = formValue.password;

    const response = await signInApi(email, password);

    if (response.status === 200) {
      localStorage.setItem('access_token', response.data.access_token);
      navigate('/todo');
    }
  };

  return (
    <AuthFormWrapper onSubmit={onSubmitHandler}>
      <InputItem
        type='email'
        value={formValue.email}
        label='이메일'
        placeholder='이메일을 입력하세요'
        onChange={onChangeHandler}
        id='email'
      />
      <InputItem
        type='password'
        value={formValue.password}
        label='비밀번호'
        placeholder='비밀번호를 입력하세요'
        onChange={onChangeHandler}
        id='password'
      />

      <Button type='submit' disabled={checkValid} data-testid={`signin-button`}>
        로그인
      </Button>
    </AuthFormWrapper>
  );
};

export default AuthForm;
