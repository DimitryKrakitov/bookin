import React, { useState, useRef }  from 'react';

import { postJS } from '../../lib/requests';

const styles = require('./bookings_search.module.scss');

export default function BookingsSearch(props){

  const { setBookings, setLoading } = props;

  const [name, setName] = useState('');
  const textInputRef = useRef(null);

  const searchBookings = () => {

    setLoading(true)

    const params = {
      name
    }

    postJS(
      "/api/v1/bookings/search",
      params
      )
      .then(response => {
        setBookings(response.bookings)
        setLoading(false)
      })
      .catch(() => {
        alert("Couldn't fetch booking info")
      });
  }

  const searchContainer = () => <div className={styles.searchContainer}>
    <div className={styles.inputContainer}>
      <input
        className={styles.textInput}
        onChange={() => setName(textInputRef.current.value)}
        value={name}
        placeholder="Room 3"
        ref={textInputRef}
      />
    </div>

    <div className={styles.buttonContainer}>
      <div className={styles.button} onClick={searchBookings}>
        Search
      </div>
    </div>
  </div>

  return searchContainer();
}