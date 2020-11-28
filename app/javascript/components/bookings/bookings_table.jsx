import React  from 'react';

const styles = require('./bookings_table.module.scss');

export default function BookingsTable(bookings){

  const tableHeader = () => <div className={styles.tableRowHeader}>
    <div className={styles.space}>
      Space
    </div>
    <div className={styles.user}>
      Requester
    </div>
    <div className={styles.description}>
      Description
    </div>
    <div className={styles.Start}>
      Start
    </div>
    <div className={styles.finish}>
      Finish
    </div>
  </div>

  const bookingElem = (booking, index) => <div className={styles.tableRow} key={index}>
    <div className={styles.space}>
      {booking.space}
    </div>
    <div className={styles.user}>
      {booking.user}
    </div>
    <div className={styles.description}>
      {booking.description || ' - No description - '}
    </div>
    <div className={styles.Start}>
      {booking.start}
    </div>
    <div className={styles.finish}>
      {booking.finish}
    </div>
  </div>

  const table = () => <div className={styles.table}>
    {tableHeader()}
    {bookings.map(bookingElem)}
  </div>

  return <div> {table()} </div>
}