import SectionHeader from "./SectionHeader";
import { experience } from "../data/site";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          index="04"
          label="Experience"
          id="experience-title"
          title="Where I've practiced."
          intro="Internships where I worked on real products and learned from the teams around me."
        />

        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline-item reveal" key={item.company}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-date">{item.date}</div>
              <article className="timeline-card">
                <header>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                </header>
                <p className="timeline-summary">{item.summary}</p>

                <h4 className="mini-label">What I worked on</h4>
                <ul className="check-list">
                  {item.work.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>

                <h4 className="mini-label">What I learned</h4>
                <p className="timeline-takeaway">{item.takeaway}</p>

                <ul className="tag-list" aria-label="Technologies used">
                  {item.tech.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
