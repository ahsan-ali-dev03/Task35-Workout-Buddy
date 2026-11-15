const Workout = require("../models/Workout");

// GET all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new workout
const createWorkout = async (req, res) => {
  try {
    const { title, load, reps } = req.body;

    const emptyFields = [];

    if (!title || !title.trim()) emptyFields.push("title");
    if (load === "" || load === undefined) emptyFields.push("load");
    if (reps === "" || reps === undefined) emptyFields.push("reps");

    if (emptyFields.length > 0) {
      return res.status(400).json({
        message: "Please fill in all fields.",
        emptyFields,
      });
    }

    if (isNaN(load) || isNaN(reps) || Number(load) < 0 || Number(reps) < 0) {
      return res.status(400).json({
        message: "Load and reps must be valid positive numbers.",
      });
    }

    const workout = await Workout.create({
      title: title.trim(),
      load: Number(load),
      reps: Number(reps),
    });

    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      return res.status(400).json({ message: "Invalid workout ID." });
    }

    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found." });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
};