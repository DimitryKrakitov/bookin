class Booking < ApplicationRecord
  belongs_to :space
  belongs_to :user

  validates :user_id, presence: true
  validates :space_id, presence: true

  validates :start, presence: true
  validates :finish, presence: true

  # validates_numericality_of :finish, greater_than: :start, message: 'finish must be after start'

  validate :valid_time_slot

  private

  def valid_time_slot
    errors.add(:finish, 'Finish must be after start') if start && finish && start >= finish
  end
end
