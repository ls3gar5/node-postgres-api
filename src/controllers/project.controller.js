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
        
        let projects = await Project.findAll({
            attributes: ['id', 'name'],
            order: [
                    ['id', 'DESC']
                ]
        });
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

export async function updateProjectById (req, res){

    const { id } = req.params;
    const { name, priority, description, deleverydate} = req.body;

    var success = await Project.update({
        name,
        priority,
        description,
        deleverydate
    }, {
        fields:['name', 'priority', 'description', 'deleverydate'],
        where: {id: id},
        returning : true
    });

    if (success[0] >=1) {
        console.log(success);
        return res.status(200).json({
            message:'Success'
        });
    }

    return res.status(404).json({ message: 'Not Found'});

}