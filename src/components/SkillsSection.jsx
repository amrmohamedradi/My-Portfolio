import { useState } from "react";
import cn from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "ASP.NET Core", level: 80, category: "backend" },
  { name: "Entity Framework Core", level: 75, category: "backend" },
  { name: "SQL Server", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "gRPC / GraphQL for .NET", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];
export const SkillsSection = () => {
  const [activecCategore, setActivecCategore] = useState("all");
  const filteredSkills = skills.filter((skill) => 
    activecCategore === "all" || skill.category === activecCategore);
  

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex justify-center flex-wrap mb-12 gap-4">
          `{" "}
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActivecCategore(category)}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activecCategore === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"

                  )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-lift animate-[grow_1.5s_ease_out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
