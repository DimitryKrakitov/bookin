class Api::V1::SpacesController < ApplicationController
  skip_before_action :verify_authenticity_token

  include BookingsHelper

  def index
    render json: {
      spaces: Space.pluck(:name)
    }
  end
end
