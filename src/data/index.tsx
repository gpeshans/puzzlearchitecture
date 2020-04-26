import * as React from 'react';

import { Column } from '../components/grid';
import { ProjectTile } from '../components/project-tile';

/**
 * Project category.
 */
export enum Category {
  Planning = 'planning',
  Interiors = 'interiors',
  Competitions = 'competitions',
  Residential = 'residential',
  Commercial = 'commercial',
  Public = 'public',
}

/**
 * Project item model.
 */
export interface ProjectItem {
  name: string;
  category: Category;
  location: string;
  year: number;
  titleImage: string;
  images: string[];
  surface?: number;
  description?: string;
}

/**
 * Project list graphql query result.
 */
export interface ProjectsListQuery {
  allSitePage: {
    edges: {
      node: {
        context: ProjectItem;
      };
    }[];
  };
}

/**
 * Util that renders project list query result.
 * @param data the data to render
 */
export const renderProjectsDataList = (data: ProjectsListQuery) => {
  return data.allSitePage.edges.map(edge => {
    const project = edge.node.context;
    return (
      <Column key={project.name} spanXl={3} spanLg={4} spanMd={6} spanSm={12}>
        <ProjectTile
          name={project.name}
          location={project.location}
          year={project.year}
          titleImage={project.titleImage}
        />
      </Column>
    );
  });
};
