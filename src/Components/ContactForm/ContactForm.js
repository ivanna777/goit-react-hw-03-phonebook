import { Component } from "react";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    render() {
        const { onSubmit, onChange} = this.props;
        return (
        <form onSubmit={onSubmit} className={styles["contact-form"]}>
          
            <label className={styles["contact-label"]}>Name
              <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={onChange}
              className={styles["contact-input"]}/>
          </label>

          <label className={styles["contact-label"]}>Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
                onChange={onChange}
                className={styles["contact-input"]}
            />
          </label>

        <button type="submit" className={styles["add-contact-btn"]}>Add contact</button>
        </form>)
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
}

export default ContactForm;

