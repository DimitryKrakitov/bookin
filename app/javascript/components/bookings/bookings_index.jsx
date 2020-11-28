import React, { useEffect, useState }  from 'react';

import { getJS, postJS } from '../../lib/requests';

const styles = require('./bookings_index.module.scss');

export default function BookingsIndex(props){

  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = (name = null) => {
    const url = "/api/v1/bookings/index";

    getJS(url)
      .then(response => {
        debugger
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

  return <div> Test component </div>
}