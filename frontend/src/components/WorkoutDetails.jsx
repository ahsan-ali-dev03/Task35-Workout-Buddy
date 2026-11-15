import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutsContext);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/workouts/${workout._id}`,
        {
          method: "DELETE",
        }
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "DELETE_WORKOUT",
          payload: json,
        });
      }
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <div className="workout-card">
      <h4>{workout.title}</h4>

      <p>
        <strong>Load (in Kgs):</strong> {workout.load}
      </p>

      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>

      <p className="created">
        Created: {new Date(workout.createdAt).toLocaleString()}
      </p>

      <button className="delete-btn" onClick={handleDelete}>
        🗑️
      </button>
    </div>
  );
};

export default WorkoutDetails;