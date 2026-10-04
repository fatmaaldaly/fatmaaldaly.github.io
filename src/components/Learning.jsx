import SectionHeader from "./SectionHeader";
import { learning } from "../data/site";
import { iconMap } from "./icons";

export default function Learning() {
  return (
    <section id="learning" className="section" aria-labelledby="learning-title">
      <div className="container">
        <SectionHeader
          index="05"
          label="Currently learning"
          id="learning-title"
          title="What I'm working on next."
          intro="Building projects shows me what I don't know yet. These are the areas I'm actively studying and practicing right now."
        />

        <ul className="learning-grid">
          {learning.map(({ title, text, icon }) => {
            const Icon = iconMap[icon];
            return (
              <li className="learning-card reveal" key={title}>
                <span className="learning-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
