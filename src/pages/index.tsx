import * as React from 'react';

import { Row, Column } from '../components/grid';
import { ProjectItem } from '../components/project-item';
import { Page } from '../components/page';
import { projectRepository, Category } from '../data';

/**
 * TODO: GP - dummy data. Get rid of this code.
 */
// START
const renderSamples = () => {
  const cols: JSX.Element[] = [];
  const allProjects = projectRepository.getAllProjects();
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

const dummyCategories: Map<number, Category> = new Map([
  [1, Category.Planning],
  [2, Category.Interiors],
  [3, Category.Competitions],
]);

for (let i = 0; i < 12; i++) {
  projectRepository.registerProject({
    id: `vila-berovo${i + 1}`,
    category: dummyCategories.get((i % 3) + 1)!,
    dateAdded: new Date(),
    dateDesigned: new Date(),
    name: `Vila berovo ${i + 1}`,
    location: 'Berovo',
    titleImage: `sample${i + 1}.jpg`,
    images: [],
    description: 'Some description',
  });
}
// END

const IndexPage = () => <Page title="Puzzle">{renderSamples()}</Page>;

export default IndexPage;
