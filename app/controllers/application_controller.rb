# frozen_string_literal: true

# Classic application controller
class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def format_response
    JSON.parse(request.body.read)
  end
end
