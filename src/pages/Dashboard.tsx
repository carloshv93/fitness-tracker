import {use} from "react";

import {CreateExerciseForm} from "../components/Forms/CreateExerciseForm.tsx";
import {ExerciseList} from "../components/ExerciseList.tsx";

import {ExerciseContext} from "../context/ExerciseContext.tsx";

export const Dashboard = () => {
    const {exercises, addExercise, completeSet} = use(ExerciseContext)
    const pendingExercises = exercises.filter(ex => !ex.isCompleted)

    return (
        <>
            <h2>Exercises</h2>
            <CreateExerciseForm onSubmit={addExercise}/>
            <ExerciseList exercises={pendingExercises} onActionClick={completeSet}/>
        </>
    )
}
