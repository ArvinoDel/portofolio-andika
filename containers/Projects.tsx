import React, { useState } from "react";
import { projects } from "../portfolio";
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { motion } from "framer-motion";
import classnames from "classnames";

const categories = ["All", "React", "Laravel", "Next.js", "Tailwind CSS"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.some((t) =>
            t.toLowerCase().includes(activeCategory.toLowerCase())
          )
        );

  return (
    <section className="section section-lg">
      <Container>
        {/* Header */}
        <div className="d-flex align-items-center p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info fw-bold">My Projects</h4>
            <p className="text-muted mb-0">
              A showcase of my latest work, built with modern tools and elegant
              design.
            </p>
          </div>
        </div>

       <Nav pills className="justify-content-center mb-4 modern-filter-tabs">
  {categories.map((cat) => (
    <NavItem key={cat}>
      <NavLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveCategory(cat);
        }}
        className={classnames("modern-tab-link", {
          active: activeCategory === cat,
        })}
      >
        {cat}
      </NavLink>
    </NavItem>
  ))}
</Nav>


        {/* Filtered Projects */}
        <Row className="row-grid projects-section">
          {filteredProjects.map((data, i) => (
            <ProjectsCard key={i} {...data} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
