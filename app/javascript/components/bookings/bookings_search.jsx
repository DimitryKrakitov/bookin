import React, { useEffect, useState }  from 'react';

import { getJS, postJS } from '../../lib/requests';

const styles = require('./bookings_search.module.scss');

export default function BookingsSearch(props){

  const { setbookings, setLoading } = props;
  const searchBookings = () => {

    const params = {
      name: 'room'
    }

    postJS(
      "/api/v1/bookings/search",
      params
      )
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
    searchBookings();
  }, [])

  return <div> Bookings Search component </div>
}