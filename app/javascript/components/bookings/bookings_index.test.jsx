import React from 'react';
import { shallow } from 'enzyme';
import BookingsIndex from "./bookings_index"

import BookingsSearch from "./bookings_search"
import BookingsTable from "./bookings_table"
import BookingsForm from "./bookings_form"

let wrapped;

describe('BookingsForm renders correctly', () => {
  beforeEach(() => {
    wrapped = shallow(<BookingsIndex />);
  });

  it('shallow renders without crashing', () => {
    expect(wrapped.exists()).toBe(true);
  });

  it('renders BookingsForm', () => {
    expect(wrapped.find(BookingsForm)).toHaveLength(1)
  });

  it('renders BookingsTable', () => {
    expect(wrapped.find(BookingsTable)).toHaveLength(1)
  });

  it('renders BookingsSearch', () => {
    expect(wrapped.find(BookingsSearch)).toHaveLength(1)
  });
});
