import React, { useEffect, useState }  from 'react';

import { getJS } from '../../lib/requests';

import BookingsSearch from "./bookings_search"
import BookingsTable from "./bookings_table"
import BookingsForm from "./bookings_form"

const styles = require('./bookings_index.module.scss');

export default function BookingsIndex(){

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = () => {
    const url = "/api/v1/bookings/index";

    getJS(url)
      .then(response => {
        setBookings(response.bookings)
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
        <BookingsSearch setLoading={setLoading} setBookings={setBookings}/>
    </div>
      <div className={styles.halfContainer}>
        <BookingsForm setLoading={setLoading} setBookings={setBookings}/>
      </div>
    </div>
      {!loading && BookingsTable(bookings)}
    </div>
}