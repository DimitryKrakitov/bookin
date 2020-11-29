import React, { useState, useRef, useEffect }  from 'react';

import { getJS, postJS } from '../../lib/requests';

const styles = require('./bookings_form.module.scss');

const placeholders = {
  Description: "E.g. Business Meeting",
  Start: "28/11/2020 10:15",
  Finish: "28/11/2020 11:30"
}

export default function BookingsForm(props){
  const { setBookings, setLoading } = props;
  const [rooms, setRooms] = useState([]);

  const [description, setDescription] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [room, setRoom] = useState('');


  const descriptionRef = useRef(null);
  const startRef = useRef(null);
  const finishRef = useRef(null);

  // const formRefs = {
  //   Description: descriptionRef,
  //   Start: startRef,
  //   Finish: finishRef
  // }

  // const formSetters = {
  //   Description: setDescription,
  //   Start: setStart,
  //   Finish: setFinish
  // }

  const fromHandler = {
    Description: { setter: setDescription, state: description, ref: descriptionRef },
    Start: { setter: setStart, state: start, ref: startRef },
    Finish: { setter: setFinish, state: finish, ref: finishRef }
  }

  const resetform = () => Object.keys(fromHandler).forEach(
    (formInput) => fromHandler[formInput].setter('')
  )

  const fetchSpaces = () => {
    const url = "/api/v1/spaces/index";

    getJS(url)
      .then(response => {
        setRooms(response.spaces)
        setRoom(response.spaces[0])
      })
      .catch(() => {
        alert("Couldn't fetch room names")
      });
  }

  useEffect(() => {
    fetchSpaces();
  }, [])

  const createBooking = () => {
    setLoading(true)
    const params = Object.keys(fromHandler).reduce(
      (accumulator, inputName) => {
        accumulator[inputName] = fromHandler[inputName].state;
        return accumulator;
      }
      ,
      { room }
    )

    postJS(
      "/api/v1/bookings/create",
      params
      )
      .then(response => {
        setBookings(response.bookings)
        if (response.errors) {
          // debugger
          alert(Object.entries(response.errors).map(
            ([name, value]) => `${name}: ${value.join("\n")}`
          ).join("\n"));
        } else {
          resetform();
        }
        setLoading(false);
      })
      .catch(() => {
        alert("There was an unknown problem booking a new meeting");
        setLoading(false);
      });
  }


  const defaultInput = (kind) => <div className={styles.input} key={kind}>
    <div className={styles.inputName}>
      {`${kind}:`}
    </div>
    <input
      className={styles.textInput}
      // onChange={() => formSetters[kind](formRefs[kind].current.value)}
      onChange={() => fromHandler[kind].setter(fromHandler[kind].ref.current.value)}
      value={fromHandler[kind].state}
      placeholder={placeholders[kind]}
      ref={fromHandler[kind].ref}
    />
  </div>

  const form = () => <div className={styles.form}>
    <div className={styles.leftForm}>
      <div className={styles.formTitle}>Schedule Meeting</div>
      {Object.keys(placeholders).map(defaultInput)}
    </div>
    <div className={styles.rightForm}>
      <div className={styles.input}>
        <div className={styles.smallInputName}>
          {'Space:'}
        </div>
        <select
          value={room}
          className={styles.select}
          onChange={(event) => setRoom(event.target.value)}
        >
          { rooms.map(selectRoom => <option
                                      value={selectRoom}
                                      key= {selectRoom}
                                    >
                                        {selectRoom}
                                    </option>) }
        </select>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button} onClick={createBooking}>
          Book
        </div>
      </div>

    </div>
  </div>

  return form();
}