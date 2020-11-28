module BookingsHelper
  def display_bookings(bookings = Booking.all)
    bookings.map do |bookin|
      {
        user: bookin.user.name,
        space: bookin.space.name,
        start: bookin.start.strftime('%a, %d %b %Y - %H:%M'),
        finish: bookin.finish.strftime('%a, %d %b %Y - %H:%M')
      }
    end
  end
end
