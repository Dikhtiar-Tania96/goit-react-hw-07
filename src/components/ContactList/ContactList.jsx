import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "./Contact/Contact";
import css from './ContactList.module.css'
import {useSelector} from 'react-redux'

const ContactList = () =>{
    const contacts = useSelector (selectContacts);
    const filter = useSelector(selectNameFilter)



const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) 
  return (
    <ul className={css.contactList}>
      {filterContacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ul>
  );
}

export default ContactList;