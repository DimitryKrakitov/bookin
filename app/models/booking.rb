class Booking < ApplicationRecord
  belongs_to :space
  belongs_to :user

  validates :user_id, presence: true
  validates :space_id, presence: true

  validates :start, presence: true
  validates :finish, presence: true

  validates_numericality_of :finish, greater_than: :start, message: ' must be after start'


  # private

  # def valid_time_slot
  #   errors.add(:stop, "stop date cannot be older than start date") if stop < end
  # end

end
