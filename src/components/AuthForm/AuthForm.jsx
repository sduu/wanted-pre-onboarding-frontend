import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFormWrapper, Button } from './AuthForm.style';
import { signInApi, signUpApi } from '../../apis/auth';
import InputItem from '../common/InputItem/InputItem';
import useApi from './../../hooks/useApi';
import ErrorMessage from './../common/ErrorMessage/ErrorMessage';

const AuthForm = ({ type }) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });

  const [{ data, error }, callAuthApi] = useApi(type === 'signin' ? signInApi : signUpApi, [], true);

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

    callAuthApi(email, password);
  };

  useEffect(() => {
    if (!data) return;

    if (type === 'signin') {
      localStorage.setItem('access_token', data.access_token);
      navigate('/todo');
    }

    if (type === 'signup') {
      navigate('/signin');
    }
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

      <Button type='submit' disabled={checkValid} data-testid={`${type}-button`}>
        {type === 'signin' ? '로그인' : '회원가입'}
      </Button>

      <ErrorMessage>{error && `${type === 'signin' ? '로그인' : '회원가입'}에 실패했습니다.`}</ErrorMessage>
    </AuthFormWrapper>
  );
};

export default AuthForm;
