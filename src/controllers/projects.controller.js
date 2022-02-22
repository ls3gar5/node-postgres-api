import Project from '../models/projects'

export async function createProject(req, res) {

    try {

        const { name, priority, description, deleverydate} = req.body;
        let newProject = await Project.create({
            name,
            priority,
            description,
            deleverydate
        }, {
            fields:['name', 'priority', 'description', 'deleverydate']
        });
    
        if(newProject){
            res.json({message: 'recieved'});
        }

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Something goes wrong'
        });
    }


}

export async function getProjects(req, res){
    try {
        
        let projects = await Project.findAll();
        if(projects){
            res.json({data: projects});
        }

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Something goes wrong'
        });
        
    }
}

export function getProjectById(req, res){
    
        const { id }= req.params;
        let projectName=''; 
        Project.findByPk(id).then(project => {
            
                res.json({data: project});
            
        }).catch(error =>  {
            console.log(error);

                res.status(500).json({
                    message: 'Something goes wrong'
                });
    });
}