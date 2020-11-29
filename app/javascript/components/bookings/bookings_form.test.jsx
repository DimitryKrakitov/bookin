import React from 'react';
import { shallow } from 'enzyme';
import BookingsForm from "./bookings_form"

const createProps = {
    setBookings: jest.fn(),
    setLoading: jest.fn()
  }

let props;
let wrapped;

describe('BookingsForm renders correctly', () => {
  beforeEach(() => {
    props = createProps();
    wrapped = shallow(<BookingsForm {...props} />);
  });

  it('shallow renders without crashing', () => {
    expect(wrapped.exists()).toBe(true);
  });

  it('renders button', () => {
    expect(wrapped.find(".button")).toHaveLength(1)
  });

  it('renders select', () => {
    expect(wrapped.find("select")).toHaveLength(1)
  });

  it('renders all 3 text inputs', () => {
    expect(wrapped.find("select")).toHaveLength(3)
  });
});