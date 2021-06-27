import { Component } from "react";
import Contact from "../Contact";
import PropTypes from 'prop-types';
import styles from "./ContactList.module.css"

class ContactList extends Component {
    render() {
        const { children, contacts, deleteContact} = this.props;
        return (
            <div className={styles["contact-wrapper"]}>
                {children}
                {contacts.length ?
                    (<ul className={styles["contact-list"]}>
                        {contacts.map(contact => (
                            <Contact
                                id={contact.id}
                                name={contact.name}
                                number={contact.number}
                                deleteContact={deleteContact}
                            />
                        ))}
                    </ul>) :
                    (<p className={styles["absent-contact"]}>Such contact is absent</p>)
                }
            </div>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
}

export default ContactList;
