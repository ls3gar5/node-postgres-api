import Task from "../models/tasks";

export async function createTask(req, res) {

    try {
        const {name, done, projectid} = req.body;
        let newTask = await Task.create({ 
            name,
            done,
            projectid
        }, {
            fields:['name', 'done', 'projectid']
        });

        if(newTask){
            res.json({message: 'recieved'});
        }
        
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

export async function getTasks(req, res){

    try {
        
        let tasks = await Task.findAll();
        if (tasks) {
            res.json({data: tasks})
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

export async function getTaskById(req, res) {
    const {id} = req.params;

    try {

        let taskById = await Task.findByPk(id);

        if (taskById) {
            res.json({data: taskById});
        }
        
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}


export async function getTasksByProjectId(req, res) {
    const {projectid} = req.params;
    try {
        let tasks = await Task.findAll({ where: { projectid } });

        if (!tasks || tasks.length == 0) {
            console.log('404 Not found');

            return res.status(404).json({
                message: 'No records'
            });    
        }
            
        res.json({data: tasks});

        
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Something goes wrong'
        });
    }

}

export async function updateTaskById (req, res){

    const { id } = req.params;
    const { name, done, projectid} = req.body;
    
    var success = await Task.update({
        name,
        done,
        projectid
    }, {
        fields:['name', 'done', 'projectid'],
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