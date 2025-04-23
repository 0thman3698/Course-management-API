import Course from "../models/courseModel.js";


const getAllCourses = async (req, res)=>{

    try {
        const courses = await Course.find({});

        if(courses.length === 0){
            return res.status(404).json({
                status: 'fail',
                message: 'No courses found'
              });
        };

        res.status(200).json({
            status: 'success',
            courses
        })   
    } catch(err){
        res.status(500).json({ 
            status: 'fail',
            message: 'Error getting courses', 
            error: err.message 
        });

    }
};

const getCourse = async (req, res)=>{
    const {id}= req.params;
    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({
              status: 'fail',
              message: 'Course not found'
            });
          }
    
        res.status(200).json({
            status:'sucess',
            course
        })
    } catch(err){
        res.status(500).json({ 
            status: 'fail',
            message: 'Error getting course', 
            error: err.message 
        });
    }
}

const createCourse = async (req, res)=>{
    try {
        const course = new Course(req.body);
        await course.save();
    
        res.status(201).json({
            status:'success',
            message: 'Course added successfully',
            course
        })

    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: 'Failed to create course',
            error: err.message
          });
    }
};

const updateCourse = async (req, res)=>{
    const {id}= req.params
    try {
        const course = await Course.findByIdAndUpdate(id, req.body, { new: true , runValidators: true});
        if (!course) {
          return res.status(404).json({
            success: false,
            message: 'Course not found'
          });
        }
        res.status(200).json({
          status: 'success',
          message: 'Course updated successfully',
          data: course
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: 'Failed to update course',
          error: err.message
        });
      }

};

const deleteCourse = async (req, res) => {
    const {id}= req.params
    try {
      const course = await Course.findByIdAndDelete(id);
      if (!course) {
        return res.status(404).json({
          status: 'fail',
          message: 'Course not found!'
        });
      }
      res.status(200).json({
        status: 'success',
        message: 'Course deleted successfully.'
      });
    } catch (error) {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to delete course!',
        error: error.message
      });
    }
  };

  export {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
  }