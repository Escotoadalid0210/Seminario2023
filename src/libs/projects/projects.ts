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
/********* TAREA PUT Y DEL ********* */
export const updateProject = ( id:string, project:IProjects) => {
  const index = memoryProjects.findIndex(p => p._id === id);
  if (index === -1) throw new Error('Project not found');
  memoryProjects[index] = { ...memoryProjects[index], ...project, 
  updatedAt: new Date() };
  return memoryProjects[index];
}

export const deleteProject = (id:string) => {
  const index = memoryProjects.findIndex(p => p._id === id);
  if (index === -1) throw new Error('Project not found');
  memoryProjects.splice(index, 1);
  return true;
}


