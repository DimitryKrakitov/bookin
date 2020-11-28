# frozen_string_literal: true

# Classic application controller
class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def request_params
    JSON.parse(request.body.read)
  end
end
