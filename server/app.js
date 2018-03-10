import express from 'express';
import mongoose from 'mongoose';
import {  graphiqlExpress, graphqlExpress } from 'apollo-server-express';
// Importo los modulos de mongo db

import car from './models/car'; 
// para poder usar lo de los Schema en graphql 
import {makeExecutableSchema} from 'graphql-tools';

// importar los esquemas de graphql 
// la definicion de los datos 
import typeDefs from './schema';
import resolvers from './resolvers';

mongoose.connect('mongodb://localhost/Examplegrapql')
		.then(() => { console.log("connected succesfull")})
		.catch( err => console.log(err));

const app=express();

//definimos como van a lucir nuestros schemas en
// graphql 
const schema= makeExecutableSchema(
	{
		// como van a lucir mis datos
		typeDefs,  // propiedades 
		resolvers  // metodos 

	}
)



// definimos el puerto disponible o en su defecto el 3000
app.set('port',process.env.PORT || 3200);

// rutas de graphql, ruta por la cual las app
// alteran los datos de graphql
// todas las peticiones se manejan en json 
app.use('/graphql', express.json(), graphqlExpress({
	schema: schema, // como van a sulir mis modelos
	context:{ // los modelos en los cuales se va a guiar
	// aqui van los modelos de mongo db :D
	car
	}
}));

// interface grafica que nos permitira hacer las consultas
app.use('/graphiql',graphiqlExpress({
	endpointURL: '/graphql'
}));





app.listen(app.get('port'),() => {
	console.log("Server escuchando por el puerto 3000");
});




