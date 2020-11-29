import React from 'react';
import { shallow } from 'enzyme';
import BookingsTable from "./bookings_table"

const props = {
    bookings = [
      {
        space: 'Space 1',
        user: 'Requester 1',
        description: 'Description 1',
        start: '12/34/56 78:90',
        finish: '12/34/56 78:91'
      },
      {
        space: 'Space 2',
        user: 'Requester 2',
        description: 'Description 2',
        start: '12/34/56 78:90',
        finish: '12/34/56 78:91'
      },
    ]
  }

let wrapped;

describe('BookingsForm renders correctly', () => {
  beforeEach(() => {
    wrapped = shallow(<BookingsTable {...props} />);
  });

  it('shallow renders without crashing', () => {
    expect(wrapped.exists()).toBe(true);
  });

  it('renders 1 table', () => {
    expect(wrapped.find(".table")).toHaveLength(1)
  });

  it('renders correct number of rows', () => {
    expect(wrapped.find(".tableRow")).toHaveLength(props.bookings.length)
  });
});