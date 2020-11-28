module BookingsHelper
  def display_bookings(bookings = Booking.all)
    bookings.map do |booking|
      {
        user: booking.user.name,
        space: booking.space.name,
        description: booking.description,
        start: booking.start.strftime('%a, %d %b %Y at %H:%Mh'),
        finish: booking.finish.strftime('%a, %d %b %Y at %H:%Mh')
      }
    end
  end

  def search_bookings(name)
    spaces = Space.where('lower(name) LIKE ?', "%#{name.downcase}%")
    spaces.present? ? bookings_from_spaces(spaces) : []
  end

  private

  def bookings_from_spaces(spaces)
    spaces.map { |space| display_bookings(space.bookings) }.flatten
  end
end
