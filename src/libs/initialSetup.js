import Role from '../models/Role';
import '../config/log';

export async function createRoles() {

    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        const roles = [
            new Role({ name: 'user' }).save(),
            new Role({ name: 'user' }).save(),
            new Role({ name: 'user' }).save()
        ];

        const values = await Promise.all(roles);
        
        winston.info('Roles was created');

        console.log(values);

    } catch (error) {

    }
} 