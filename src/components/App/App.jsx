import React, { Component } from 'react';
import Form from 'components/Form/Form';
import { nanoid } from 'nanoid';
import ContactsList from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
export default class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  createContact = dataByForm => {
    const { contacts } = this.state;
    const contactName = dataByForm.name.toLowerCase();
    if (!/^[0-9-]+$/.test(dataByForm.number)) {
      alert('Please enter a valid numeric phone number.');
      return;
    }
    if (contacts.some(contact => contact.name.toLowerCase() === contactName)) {
      alert(
        `Contact with the name ${dataByForm.name} already exists in the phonebook.`
      );
      return;
    }

    const newContact = {
      ...dataByForm,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  filterContacts = filteredQuery => {
    this.setState(prevState => ({
      filter: filteredQuery,
    }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.createContact} />
        </Section>
        <Section title="Contacts">
          <Filter filterContacts={this.filterContacts} />
          <ContactsList
            contacts={this.state.contacts}
            filter={this.state.filter}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
