import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import BookingsForm from "./bookings_form"

Enzyme.configure({ adapter: new ReactSixteenAdapter() })

const props = {
    setBookings: jest.fn(),
    setLoading: jest.fn()
  }

let wrapped;

describe('BookingsForm renders correctly', () => {
  beforeEach(() => {
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
    expect(wrapped.find("input")).toHaveLength(3)
  });
});
