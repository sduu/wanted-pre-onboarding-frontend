import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import SignInPage from './../pages/SignInPage';
import SignUpPage from './../pages/SignUpPage';
import TodoPage from './../pages/TodoPage';
import NotFoundPage from './../pages/NotFoundPage';

const authToken = localStorage.getItem('access_token');

const AuthRoute = () => (!authToken ? <Navigate to='/signin' /> : <Outlet />);

const NonAuthRoute = () => (!authToken ? <Outlet /> : <Navigate to='/todo' />);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NonAuthRoute />}>
          <Route path='/' element={<Navigate to='/signin' />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Route>

        <Route element={<AuthRoute />}>
          <Route path='/todo' element={<TodoPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
