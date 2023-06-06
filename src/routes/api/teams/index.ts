import express from 'express';
const router = express.Router();

import { createTeam, deleteTeam, getTeams, updateTeam  } from '@libs/teams/teams'; 

router.get('/', (_req,res)=>{
    res.json({version:3, scope:"Hola teams"});
});

router.get('/all', async (_req,res) => {
    try{
        const projects = await getTeams();
        return res.json(projects);
    }
    catch(ex: any) {
        return res.status(500).json({error: ex?.message});
    }
});

router.post('/new', async (req,res)=>{
    try{
        const {name = '', description='',Values='', isActive=false} = req.body;
        const newProject = {name,description,Values,isActive: (isActive && true)};
        const createdProject = await createTeam(newProject);
        res.json(createdProject);
    } catch(ex: any){
        return res.status(500).json({error: ex?.message})
    }
});

router.put('/upd/:id', async (req,res)=>{
    try{
        const {id =''} = req.params;
        const { name='', description='', isActive= false} = req.body;
        const updatedProject = await updateTeam(id,{name, description,isActive:(isActive && true)});
        return res.json(updatedProject);
    } catch(ex: any){
        return res.status(500).json({error: ex?.message});
    } 
});

router.delete('/del/:id',async(req, res)=>{
    try{
        const {id = ''} = req.params;
        const deletedProject = await deleteTeam(id);
        return res.json({deleted: deletedProject, id});
    }catch(ex: any){
        return res.status(500).json({error: ex?.message});
    } 
});


export default router;