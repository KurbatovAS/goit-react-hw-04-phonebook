function getContactsFromLS(key) {
  const contactsLS = localStorage.getItem(key);
  return contactsLS ? JSON.parse(contactsLS) : null;
}

function addContactsToLS(key, contacts) {
  localStorage.setItem(key, JSON.stringify(contacts));
}

export { getContactsFromLS, addContactsToLS };
