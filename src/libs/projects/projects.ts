import {ProjectsDao} from '@dao/models/ProjectsDao'
export interface IProject {
    _id?: string;
    name: string;
    description: string;
    isActive: boolean;
    CreatedAt?: Date;
    updatedAt?: Date;
}

const newProject: IProject = {
    name: '',
    description: '',
    isActive: false 
}

const ProjectDaoInstance = new ProjectsDao()

export const createProject = async (project: IProject) => {
   return ProjectDaoInstance.create(project)
};

export const getProjects = () => {
  return ProjectDaoInstance.find({});
};

export const getProject = (id:string)=>{
  return ProjectDaoInstance.findOne(id);
};

export const updateProject = ( id:string, project:Partial<IProject>) => {
  return ProjectDaoInstance.update(id,project);
}

export const deleteProject = (id:string) => {
  return ProjectDaoInstance.delete(id);
}


