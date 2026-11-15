import { useState, useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useContext(WorkoutsContext);

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    try {
      const response = await fetch(
        "https://task35-workout-buddy.onrender.com/api/workouts",
        {
          method: "POST",
          body: JSON.stringify(workout),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setError(json.message);
        setEmptyFields(json.emptyFields || []);
      }

      if (response.ok) {
        setTitle("");
        setLoad("");
        setReps("");
        setError("");
        setEmptyFields([]);

        dispatch({
          type: "CREATE_WORKOUT",
          payload: json,
        });
      }
    } catch (error) {
      setError("Unable to connect to the server.");
    }
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (in Kgs):</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Reps:</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>

      {error && <div className="form-error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;