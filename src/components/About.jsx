import { TbSchool, TbCode, TbBulb, TbPalette } from "react-icons/tb";
import SectionHeader from "./SectionHeader";
import { education, hobbies } from "../data/site";

export default function About() {
  const [degree] = education;

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          index="01"
          label="About"
          id="about-title"
          title="From business systems to building them."
        />

        <div className="about-grid">
          <div className="about-story reveal">
            <p className="lead">
              Business Informatics sits between business and technology. While
              studying it at the German University in Cairo, I noticed which
              side I kept coming back to: the part where you actually build
              the thing.
            </p>
            <p>
              I started with the frontend (HTML, CSS, JavaScript and then
              React) because I loved seeing an idea take shape on screen. Over
              time I got curious about what happens after the click: how data
              is modeled, how APIs are designed, how authentication really
              works. That curiosity is what pulled me toward the backend and
              full-stack development.
            </p>
            <p>
              Most of what I know, I learned by building: reading the docs,
              breaking things, and figuring out why. I enjoy practical
              applications that make a real workflow easier, and I try to
              write code that's clear for whoever reads it next. I'm early in
              my career and that's exactly why I'm building as much as I can.
            </p>
          </div>

          <aside className="about-facts reveal" aria-label="Quick facts">
            <dl>
              <div className="fact">
                <dt>
                  <TbSchool aria-hidden="true" /> Education
                </dt>
                <dd>
                  {degree.degree}
                  <span>
                    {degree.institution} · {degree.date}
                  </span>
                </dd>
              </div>
              <div className="fact">
                <dt>
                  <TbCode aria-hidden="true" /> Focus
                </dt>
                <dd>
                  Full-stack web development
                  <span>React, Next.js, Node.js, PostgreSQL</span>
                </dd>
              </div>
              <div className="fact">
                <dt>
                  <TbBulb aria-hidden="true" /> I enjoy
                </dt>
                <dd>
                  Understanding how systems fit together
                  <span>and turning that into working software</span>
                </dd>
              </div>
              <div className="fact">
                <dt>
                  <TbPalette aria-hidden="true" /> Away from the keyboard
                </dt>
                <dd>
                  {hobbies.join(", ")}
                  <span>experimenting with recipes and colors</span>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
