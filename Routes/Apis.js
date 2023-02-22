const router = require('express').Router();
const apiCoursesRoute = require('../controller/controller_courses');
router.use('/courses', apiCoursesRoute);
module.exports = router;