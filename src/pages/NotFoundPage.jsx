import { MainContainerWrapper } from '../components/common/MainContainer/MainContainer.style';
import NotFound from '../components/NotFound/NotFound';

const NotFoundPage = () => {
  return (
    <MainContainerWrapper>
      <h1>404</h1>
      <NotFound />
    </MainContainerWrapper>
  );
};

export default NotFoundPage;
