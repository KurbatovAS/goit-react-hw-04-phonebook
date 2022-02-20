import React from 'react';
import shortid from 'shortid';
import Section from './Section/Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notitfication from './Notitfication';
import ContactList from './ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = e => {
    e.preventDefault();

    const newContactName = e.target.elements.name.value;
    const newContactNumber = e.target.elements.number.value;

    if (this.contactСheck(newContactName)) {
      alert(`${newContactName} is already in you contacts`);
      return;
    }

    const newContact = {
      id: shortid(),
      name: newContactName,
      number: newContactNumber,
    };

    this.addNewContact(newContact);

    e.target.reset();
  };

  addNewContact(newContact) {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  }

  contactСheck(name) {
    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  onFilterInputHandler = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  contactsFiltering() {
    const contactList = this.state.contacts;
    const filterValue = this.state.filter;

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }

  removeContactHandler = e => {
    const contactToRemove = e.target.name;
    const contactIndex = this.findContactIndex(contactToRemove);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        (contact, index) => index !== contactIndex
      ),
    }));
  };

  findContactIndex(contact) {
    const contactList = this.state.contacts;

    return contactList.findIndex(item => item.name === contact);
  }

  render() {
    const contactsLength = this.state.contacts.length;
    console.log('this.state.filter', this.state.filter);
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onFormSubmit={this.submitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter
            onFilterInputHandler={this.onFilterInputHandler}
            filterValue={this.state.filter}
          />
          {!contactsLength ? (
            <Notitfication message="There is no contacts in you contact list" />
          ) : (
            <ContactList
              contacts={this.contactsFiltering()}
              removeHandler={this.removeContactHandler}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
