import {Card} from "./DS/Card.tsx";

import type {Exercise} from "../types";

export type ExerciseCardProps = {
    exercise: Exercise,
    onClick?: (id: string) => void,
    onActionClick?: (id: string) => void,
}

export const ExerciseCard = ({exercise, onClick, onActionClick}: ExerciseCardProps) => {

    const buttonLabel = exercise.completedSets === exercise.totalSets - 1 ? "Complete" : "Next"
    return (
        <Card onClick={() => onClick?.(exercise.id)}>
            <p>{exercise.name}</p>
            {exercise.isCompleted
                ? <p>Completed</p>
                : <>
                    <progress
                        id={`${exercise.id}-progress`} value={exercise.completedSets}
                        max={exercise.totalSets}
                        style={{
                            width: "100%"
                        }}
                    />
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <label
                            htmlFor={`${exercise.id}-progress`}>Progress
                            ({exercise.completedSets}/{exercise.totalSets})
                        </label>
                        <button onClick={() => onActionClick?.(exercise.id)}>{buttonLabel}</button>
                    </div>
                </>
            }
        </Card>)
}
