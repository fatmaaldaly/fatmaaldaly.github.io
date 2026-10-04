import SectionHeader from "./SectionHeader";
import { skillGroups } from "../data/site";
import { iconMap } from "./icons";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          index="02"
          label="Skills"
          id="skills-title"
          title="Tools I build with."
          intro="Technologies I've used in projects and internships, grouped by where they fit in the stack."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group reveal" key={group.title}>
              <header>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </header>
              <ul className="skill-list">
                {group.items.map(({ name, icon }) => {
                  const Icon = iconMap[icon];
                  return (
                    <li className="skill-chip" key={name}>
                      {Icon && <Icon aria-hidden="true" />}
                      {name}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
