import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFormWrapper, Button } from './AuthForm.style';
import { signInApi } from '../../apis/auth';
import InputItem from '../common/InputItem/InputItem';
import useApi from './../../hooks/useApi';
import ErrorMessage from './../common/ErrorMessage/ErrorMessage';

const AuthForm = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [{ data, error }, callSignInApi] = useApi(signInApi, [], true);

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

    callSignInApi(email, password);
  };

  useEffect(() => {
    if (!data) return;

    localStorage.setItem('access_token', data.access_token);
    navigate('/todo');
  }, [data]);

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

      <ErrorMessage>{error && '로그인에 실패했습니다.'}</ErrorMessage>
    </AuthFormWrapper>
  );
};

export default AuthForm;
