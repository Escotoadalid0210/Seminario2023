export interface ITeams {
    _id?: string;
    name: string;
    description: string;
    Values: string;
    isActive: boolean;
    CreatedAt?: Date;
    updatedAt?: Date;
}

const newteam: ITeams = {
    name: '',
    description: '',
    Values: '',
    isActive: false
}

const memoryTeams: ITeams[] = [];
//let createdProject: number = 0;
let createdProject = 0;

export const createTeam = async (project: ITeams) => {
  const newProject = { ...project };
  newProject._id = (++createdProject).toString();
  newProject.CreatedAt = new Date();
  newProject.updatedAt = newProject.CreatedAt;
  memoryTeams.push(newProject);
  return newProject;
};

export const getTeams = async() =>{
  return memoryTeams;
}

export const getTeam = async (id:string)=>{
  const project = memoryTeams.find(p => p._id === id);
  if (!project) throw new Error("Project not found");
  return project;
}

export const updateTeam = ( id:string, project:Partial<ITeams>) => {
  const index = memoryTeams.findIndex(p => p._id === id);
  if (index === -1) throw new Error('Project not found');
  memoryTeams[index] = { ...memoryTeams[index], ...project, 
  updatedAt: new Date() };
  return memoryTeams[index];
}

export const deleteTeam = (id:string) => {
  const index = memoryTeams.findIndex(p => p._id === id);
  if (index === -1) throw new Error('Project not found');
  memoryTeams.splice(index, 1);
  return true;
}


