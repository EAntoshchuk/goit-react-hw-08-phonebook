import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import MagnifyingGlassLodaer from '../../components/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function ContactsPage() {
  const {
    contacts: { loading, error },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          marginBottom: '20px',
          padding: '20px',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <ContactForm />
      </div>
      <div
        style={{
          padding: '20px',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Contacts</h2>
        <Filter />
        {loading && !error && <MagnifyingGlassLodaer />}
        <ContactList />
      </div>
    </div>
  );
}
