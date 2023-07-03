import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { fetchContacts } from 'redux/contacts-api';
import MagnifyingGlassLodaer from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
// const LoginPage = lazy(() => import('../Pages/LoginPage'));
// const RegistrPage = lazy(() => import('../Pages/RegisterPage'));
const ContactPage = lazy(() => import('../Pages/ContactPage/ContactPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Suspense fallback={<MagnifyingGlassLodaer />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<ContactPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
