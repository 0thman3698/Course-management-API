import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Course must have a title!']
      },
    description:{
        type: String,
        required: [true, 'Course must have a description']

      },
    image: {
        type: String,
      },
    startDate: {
        type: Date,
      },
    endDate: {
        type: Date,
      },
    price: {
        type: Number,
        required: [true, 'Course must have a price!'],
      },

},
{
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema)

export default Course;