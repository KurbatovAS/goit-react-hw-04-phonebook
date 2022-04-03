import { useEffect, useState } from 'react';
import shortid from 'shortid';
import Section from './Section/Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notitfication from './Notitfication';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState(()=>([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]));
  const [filter, setFilter] = useState('');
  
  const submitHandler = (newContactName, newContactNumber) => {
    if (contactСheck(newContactName)) {
      alert(`${newContactName} is already in you contacts`);
      return;
    }

    const newContact = {
      id: shortid(),
      name: newContactName,
      number: newContactNumber,
    };

    addNewContact(newContact);    
  };

  function contactСheck(name) {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  function addNewContact(newContact) {
    setContacts(prevState => [...prevState, newContact]    
    );
  }

  const onFilterInputHandler = e => {
    setFilter(e.target.value.toLowerCase());
  };

  function contactsFiltering() {
    const contactList = contacts;
    const filterValue = filter;

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }

  const removeContactHandler = e => {
    const contactToRemove = e.target.name;
    const contactIndex = findContactIndex(contactToRemove);

    setContacts(prevState => 
      prevState.filter(
        (contact, index) => index !== contactIndex
      ),
    );
  };

  function findContactIndex(contact) {
    const contactList = contacts;

    return contactList.findIndex(item => item.name === contact);
  }

  const contactsLength = contacts.length;

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onFormSubmit={submitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter
          onFilterInputHandler={onFilterInputHandler}
          filterValue={filter}
        />
        {!contactsLength ? (
          <Notitfication message="There is no contacts in you contact list" />
        ) : (
          <ContactList
            contacts={contactsFiltering()}
            removeHandler={removeContactHandler}
          />
        )}
      </Section>
    </>
  );
}

export default App;