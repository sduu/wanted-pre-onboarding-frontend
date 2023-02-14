import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import NonAuthRoute from './NonAuthRoute';
import AuthRoute from './AuthRoute';
import NotFoundPage from '../pages/NotFoundPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from './../pages/SignUpPage';
import TodoPage from './../pages/TodoPage';

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
