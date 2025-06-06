import {use} from "react";

import {ExerciseList} from "../components/ExerciseList.tsx";
import {ExerciseContext} from "../context/ExerciseContext.tsx";

export const History = () => {
    const {exercises} = use(ExerciseContext)

    const completedExercises = exercises.filter(ex => ex.isCompleted)
    return (
        <>
            <h2>Completed Exercises</h2>
            <ExerciseList exercises={completedExercises}/>
        </>
    )
}
