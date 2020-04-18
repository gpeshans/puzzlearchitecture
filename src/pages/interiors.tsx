import * as React from 'react';

import { Row, Column } from '../components/grid';
import { ProjectItem } from '../components/project-item';
import { Page } from '../components/page';
import { projectRepository, Category } from '../data';

const renderSamples = () => {
  const cols: JSX.Element[] = [];
  const allProjects = projectRepository.getProjectsForCategory(Category.Interiors);
  allProjects.forEach((project, index) => {
    const col = (
      <Column key={index} spanXl={3} spanLg={4} spanMd={6} spanSm={12}>
        <ProjectItem
          name={project.name}
          location={project.location}
          year={project.dateDesigned}
          imageFilename={project.titleImage}
        />
      </Column>
    );
    cols.push(col);
  });
  const row = <Row key="row">{cols.map(c => c)} </Row>;
  return [row];
};

const Interiors = () => <Page title="Interiors">{renderSamples()}</Page>;

export default Interiors;
