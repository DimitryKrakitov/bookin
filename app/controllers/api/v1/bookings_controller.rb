class Api::V1::BookingsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  skip_before_action :verify_authenticity_token

  include BookingsHelper

  def create
    binding.pry

  rescue
    render json: {
      bookings: display_bookings,
      errors: "Unknown problem booking a new meeting"
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
end
