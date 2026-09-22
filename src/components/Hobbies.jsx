const hobbies = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21c0-2.5-3.5-4-8-4s-8 1.5-8 4"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M12 14l3-3 3 3-3 3-3-3z"></path>
      </svg>
    ),
    hobby: "BAKING",
    description:
      "I enjoy baking in my free time—experimenting with new recipes.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
    hobby: "PAINTING",
    description:
      "Painting allows me to express my creativity and unwind. I love working with colors and bringing ideas to life on canvas.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
        <line x1="6" y1="17" x2="18" y2="17"></line>
      </svg>
    ),
    hobby: "COOKING",
    description:
      "Cooking is both a passion and a way to relax. I enjoy trying out new dishes and exploring different cuisines.",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="hobbies-grid">
          <div className="hobbies-title">
            <h2
              className="section-title"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              HOBBIES
            </h2>
          </div>
          <div className="hobbies-content">
            {hobbies.map((item, index) => (
              <div
                className="hobby-card"
                data-aos="fade-right"
                data-aos-duration="1000"
                key={index}
              >
                <div className="hobby-icon">{item.icon}</div>
                <div className="hobby-content">
                  <h3
                    className="hobby-title"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {item.hobby}
                  </h3>
                  <p className="hobby-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
