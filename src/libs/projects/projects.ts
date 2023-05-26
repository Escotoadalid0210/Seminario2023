export interface IProjects {
    _id?: string;
    name: string;
    description: string;
    isActive: boolean;
    CreatedAt?: Date;
    updatedAt?: Date;
}

const newProject: IProjects = {
    name: '',
    description: '',
    isActive: false 
}

const memoryProjects: IProjects[] = [];
//let createdProject: number = 0;
let createdProject = 0;

export const createProject = async (project: IProjects) => {
  const newProject = { ...project };
  newProject._id = (++createdProject).toString();
  newProject.CreatedAt = new Date();
  newProject.updatedAt = newProject.CreatedAt;
  memoryProjects.push(newProject);
  return newProject;
};

export const getProjects = async() =>{
  return memoryProjects;
}