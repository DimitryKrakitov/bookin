import React, { useEffect, useState }  from 'react';

import { getJS, postJS } from '../../lib/requests';

import BookingsSearch from "./bookings_search"

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
    Test component
    {!loading && bookings.toString()}
    <BookingsSearch setLoading={setLoading} setbookings={setbookings}/>
    </div>
}