import { MainContainerWrapper } from '../components/common/MainContainer/MainContainer.style';
import AuthForm from './../components/AuthForm/AuthForm';

const SignUpPage = () => {
  return (
    <MainContainerWrapper>
      <h1>회원가입</h1>
      <AuthForm type='signup' />
    </MainContainerWrapper>
  );
};

export default SignUpPage;
