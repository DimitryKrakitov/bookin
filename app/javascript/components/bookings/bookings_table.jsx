import React  from 'react';

const styles = require('./bookings_table.module.scss');

export default function BookingsTable(bookings){

  const headerPlaceholder = {
    space: 'Space',
    user: 'Requester',
    description: 'Description',
    start: 'Start',
    finish: 'Finish',
  }

  const tableRow = (booking) => <>
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
  </>

  const tableHeader = () => <div className={styles.tableRowHeader}>
    {tableRow(headerPlaceholder)}
  </div>

  const bookingElem = (booking, index) => <div className={styles.tableRow} key={index}>
    {tableRow(booking)}
  </div>

  const table = () => <div className={styles.table}>
    {tableHeader()}
    {bookings.map(bookingElem)}
  </div>

  return <div> {table()} </div>
}