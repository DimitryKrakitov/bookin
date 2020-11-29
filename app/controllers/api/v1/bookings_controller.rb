class Api::V1::BookingsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  skip_before_action :verify_authenticity_token

  include BookingsHelper

  def create
    booking = Booking.new(create_params)

    if booking.save
      render json: {
        bookings: display_bookings
      }
    else
      render json: {
        bookings: display_bookings,
        errors: booking.errors.messages
      }
    end
  rescue
    render json: {
      bookings: display_bookings,
      errors: { booking: ['Unknown problem booking a new meeting'] }
    }
  end

  def index
    render json: {
      bookings: display_bookings,
      user: current_user.present?
    }
  end

  def search
    render json: {
      bookings: search_bookings(search_params),
      user: current_user.present?
    }
  end

  private

  def search_params
    request_params['name']
  end

  def create_params
    new_params = request_params
    {
      space_id: Space.find_by(name: new_params['room'])&.id,
      start: new_params['Start'],
      finish: new_params['Finish'],
      description: new_params['Description'],
      user_id: current_user.id
    }
  end
end
