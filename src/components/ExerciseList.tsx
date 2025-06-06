import type {Exercise} from "../types";
import {ExerciseCard} from "./ExerciseCard.tsx";

export type ExerciseListProps = {
    exercises: Exercise[],
    onActionClick?: (id: string) => void,
    onExerciseClick?: (id: string) => void,
}

export const ExerciseList = ({exercises, onActionClick, onExerciseClick}: ExerciseListProps) => {

    if (exercises.length === 0) return (
        <p>No exercises, please add a new exercise</p>
    )
    return (
        <ul style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "0.5rem",
            listStyleType: "none",
        }}>
            {
                exercises.map(exercise => (
                    <li key={exercise.id} style={{
                        padding: "1rem",
                        gap: "0.5rem",
                    }}>
                        <ExerciseCard
                            exercise={exercise}
                            onClick={onExerciseClick}
                            onActionClick={onActionClick}
                        />

                    </li>
                ))}
        </ul>
    )
}
