import app from './app';

//servicio de la nube process.env.port sino el por defecto el 4800
var port = process.env.DEV_PORT  || 4000; 

async function  main () {
    await app.listen(port);
    console.log('API escuchando en el puertos ' + port)
}

main();