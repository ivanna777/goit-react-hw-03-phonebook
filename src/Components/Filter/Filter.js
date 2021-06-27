import { Component } from "react";
import PropTypes from 'prop-types';
import styles from "./Filter.module.css";

class Filter extends Component {
    render() {
        return (
            <div className={styles["filter-wrapper"]}>
                <label className={styles["filter-label"]}>Find contacts by name
                    <input
                        type="text"
                        name="name"
                        onChange={this.props.filtredName}
                        className={styles["filter-input"]}
                    />
                </label>
        
            </div>
        )
    }
}

Filter.propTypes = {
    filtredName: PropTypes.func,
}

export default Filter;