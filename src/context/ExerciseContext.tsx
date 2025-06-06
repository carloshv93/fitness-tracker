import {createContext, type PropsWithChildren} from "react";
import type {Exercise} from "../types";
import {useLocalStorage} from "../hooks/useLocalStorage.ts";

type ExerciseContextType = {
    exercises: Exercise[]
    addExercise: (name: string, totalSets: number) => void
    completeSet: (id: string) => void
    resetExercises: () => void
}

export const ExerciseContext = createContext<ExerciseContextType>({
    exercises: [],
    addExercise: () => {
    },
    completeSet: () => {
    },
    resetExercises: () => {
    },
})

export const ExerciseProvider = ({children}: PropsWithChildren) => {
    const [exercises, setExercises] = useLocalStorage<Exercise[]>("exercises", [])

    const addExercise = (name: string, totalSets: number) => {
        setExercises([...exercises, {
            id: crypto.randomUUID(),
            name,
            totalSets,
            completedSets: 0,
            isCompleted: false,
            createdAt: new Date().toISOString(),
        }])
    }

    const completeSet = (id: string) => {
        setExercises(prevState => {
            return prevState.map(ex => {
                const completedSets = ex.completedSets + 1
                if (ex.id === id) {
                    return {
                        ...ex,
                        completedSets: completedSets,
                        isCompleted: completedSets === ex.totalSets,
                    }
                }
                return ex
            })
        })
    }

    const resetExercises = () => {
        setExercises([])
    }

    return (
        <ExerciseContext value={{
            exercises,
            addExercise,
            completeSet,
            resetExercises,
        }}>
            {children}
        </ExerciseContext>
    )
}
