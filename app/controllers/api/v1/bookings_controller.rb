class Api::V1::BookingsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  skip_before_action :verify_authenticity_token

  include BookingsHelper

  def index
    # binding.pry
    render json: {
      bookings: display_bookings
    }
  end

  private

  def page_response(json)
    [json['date'].to_date, json['target'].to_sym]
  end
end
