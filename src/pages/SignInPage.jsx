import { MainContainerWrapper } from '../components/common/MainContainer/MainContainer.style';
import AuthForm from './../components/AuthForm/AuthForm';
import Linked from './../components/common/Linked/Linked';

const SignInPage = () => {
  return (
    <MainContainerWrapper>
      <h1>로그인</h1>
      <AuthForm type='signin' />
      <Linked to='/signup'>회원가입 페이지로 이동</Linked>
    </MainContainerWrapper>
  );
};

export default SignInPage;
