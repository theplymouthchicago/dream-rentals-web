export function ReviewCTA() {
  return (
    <section className="bg-dr-black py-16 border-t border-dr-gold/20">
      <div className="max-container text-center px-6">
        <p className="label-tag mb-4">4,000+ Happy Guests</p>
        <h2 className="font-playfair text-3xl md:text-4xl text-dr-white mb-4">
          Loved Your Stay?
        </h2>
        <p className="text-dr-gray text-lg max-w-xl mx-auto mb-8">
          Your review helps other travelers find a great home in Chicago — and means the world to our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://g.page/r/Ca4CcGFjAoiQEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Leave a Google Review
          </a>
          <a
            href="/contact"
            className="btn-outline inline-flex items-center gap-2 justify-center"
          >
            Share Feedback With Us
          </a>
        </div>
      </div>
    </section>
  );
}
