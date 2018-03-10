// la operaciones que puede hacer con el objeto

export default {
// async es de EMCS 6
	Query:{
			allCars: async (parent, args, {car}) => {
				const cars = await car.find();
				return cars.map(x => {
					x._id=x._id.toString(); // convierte a string los id
					return x;
				}) 

			}
	},
	Mutation:{ // en args viene los datos que manda el cliente
		createCar: async (parent, args, {car}) => {
			const Car = await new car(args).save();
			Car._id=Car._id.toString();
			return Car;
		}
	}

}

