import React from 'react';
import { shallow } from 'enzyme';
import BookingsSearch from "./bookings_search"

const props = {
    setBookings: jest.fn(),
    setLoading: jest.fn()
  }

let wrapped;

describe('BookingsForm renders correctly', () => {
  beforeEach(() => {
    wrapped = shallow(<BookingsSearch {...props} />);
  });

  it('shallow renders without crashing', () => {
    expect(wrapped.exists()).toBe(true);
  });

  it('renders button', () => {
    expect(wrapped.find(".button")).toHaveLength(1)
  });

  it('renders input', () => {
    expect(wrapped.find("input")).toHaveLength(1)
  });
});

