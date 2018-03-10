import mongoose from 'mongoose';

const Schema= mongoose.Schema;


const carSchema=new Schema(
{
	name: String,
	description: String,
	price: String
}
);

const car = mongoose.model('cars',carSchema);
export default car;