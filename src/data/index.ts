/**
 * Project category.
 */
export enum Category {
  Planning = 'planning',
  Interiors = 'interiors',
  Competitions = 'competitions',
}

/**
 * Represents a project item.
 */
interface ProjectItemModel {
  id: string;
  category: Category;
  dateAdded: Date;
  dateDesigned: Date;
  name: string;
  location: string;
  titleImage: string;
  images: string[];
  description?: string;
}

/**
 * Keeps all project data for the site.
 */
class ProjectRepositorySingleton {
  private allProjects: ProjectItemModel[] = [];

  registerProject(projectItem: ProjectItemModel) {
    this.allProjects.push(projectItem);
  }

  getAllProjects() {
    return this.allProjects;
  }

  getProjectsForCategory(category: Category) {
    return this.allProjects.filter(project => project.category === category);
  }
}

/**
 * Public projects repository singleton for adding and querying data.
 */
export const projectRepository = new ProjectRepositorySingleton();
