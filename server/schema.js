/* como van a lucir los datos 
	Definicion de los tipos de datos 

*/

export default `

	type car {
		_id:String!
		name:String
		description:String
		price:String

	}	

	type Query {
		allCars: [car!]!
	}

	type Mutation {
		createCar(name:String! ,description:String!, price:String!):car!
	}


`;