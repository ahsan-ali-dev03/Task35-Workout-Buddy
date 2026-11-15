import { useEffect, useContext } from "react";
import { WorkoutsContext } from "./context/WorkoutContext";
import WorkoutDetails from "./components/WorkoutDetails";
import WorkoutForm from "./components/WorkoutForm";
import "./App.css";

function App() {
  const { workouts, dispatch } = useContext(WorkoutsContext);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/workouts"
        );

        const json = await response.json();

        if (response.ok) {
          dispatch({
            type: "SET_WORKOUTS",
            payload: json,
          });
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Workout Buddy</h1>
        </div>
      </header>

      <main className="container home">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails
                key={workout._id}
                workout={workout}
              />
            ))}

          {workouts && workouts.length === 0 && (
            <p className="no-workouts">
              No workouts yet. Add your first workout!
            </p>
          )}
        </div>

        <WorkoutForm />
      </main>
    </div>
  );
}

export default App;