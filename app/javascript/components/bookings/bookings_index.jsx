import React, { useEffect, useState }  from 'react';

import { getJS } from '../../lib/requests';

import BookingsSearch from "./bookings_search"
import BookingsTable from "./bookings_table"

const styles = require('./bookings_index.module.scss');

export default function BookingsIndex(){

  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = () => {
    const url = "/api/v1/bookings/index";

    getJS(url)
      .then(response => {
        setbookings(response.bookings)
        setLoading(false)
      })
      .catch(() => {
        alert("Couldn't fetch booking info")
      });
  }

  useEffect(() => {
    fetchBookings();
  }, [])

  return <div>
    <div className={styles.upperContainer}>
      <div className={styles.halfContainer}>
        <BookingsSearch setLoading={setLoading} setbookings={setbookings}/>
    </div>
      <div className={styles.halfContainer}>
        here be booking creator
      </div>
    </div>
      {!loading && BookingsTable(bookings)}
    </div>
}