const education = [
  {
    degree: "Business Informatics, Bachelor degree",
    institution: "German University in Cairo",
    date: "2021 - 2025",
  },
  {
    degree: "American Diploma",
    institution: "Summits international school",
    date: "2019 - 2021",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section section-alt"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>
        <div className="education-grid">
          {education.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <h3 className="card-title">{item.degree}</h3>
                {/* <p className="card-title">{item.degree}</p> */}
                <p className="card-subtitle">{item.institution}</p>
                <p className="card-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
