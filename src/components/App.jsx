import { useState, useEffect } from 'react';
import shortid from 'shortid';
import Section from './Section/Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notitfication from './Notitfication';
import ContactList from './ContactList';
import {
  getContactsFromLS,
  addContactsToLS,
} from './LocalStorage/LocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App () {
  const [contacts, setContacts] = useState(() => {
    if (getContactsFromLS('contacts')) {
      return getContactsFromLS('contacts');
    } else {
      return initialContacts;
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    addContactsToLS('contacts', contacts);
  }, [contacts]) 

  const submitHandler = e => {
    e.preventDefault();

    const newContactName = e.target.elements.name.value;
    const newContactNumber = e.target.elements.number.value;

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

    e.target.reset();
  };

  function addNewContact(newContact) {
    setContacts(prev => [...prev, newContact])
  }

  function contactСheck(name) {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  const onFilterInputHandler = e => {
    setFilter(e.target.value.toLowerCase())
  };

  function contactsFiltering() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  const removeContactHandler = e => {
    const contactToRemove = e.target.name;
    const contactIndex = findContactIndex(contactToRemove);

    setContacts(prev => prev.filter(
      (contact, index) => index !== contactIndex
    ))    
  };

  function findContactIndex(contact) {
    return contacts.findIndex(item => item.name === contact);
  }

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
          {!contacts.length ? (
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
