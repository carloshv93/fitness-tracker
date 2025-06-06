import {useActionState} from "react";

type FormState = {
    status: number
    message: string
}

const initialFormState: FormState = {
    status: 200,
    message: "",
}

const createAction = (addExercise: (name: string, totalSets: number) => void) => async (_: FormState, formData: FormData): Promise<FormState> => {
    const name = formData.get("name")?.toString().trim() || ''
    const totalSets = parseInt(formData.get("totalSets")?.toString() || '0')
    addExercise(name, totalSets)
    return new Promise((resolve) => {
        setTimeout(() =>
                resolve({
                    status: 200,
                    message: "Exercise added successfully",
                })
            , 1000)
    })
}

export const CreateExerciseForm = ({onSubmit}: { onSubmit: (name: string, totalSets: number) => void }) => {

    const RegisterExerciseAction = createAction(onSubmit)

    const [_, handleAddExercise, isPending] = useActionState<FormState, FormData>(RegisterExerciseAction, initialFormState)

    return (
        <form action={handleAddExercise} style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
        }}>
            <input type="text" name="name" placeholder="Exercise name" autoFocus required/>
            <input type="number" name="totalSets" placeholder="Amount of sets" min={1} required/>
            <button disabled={isPending}>
                {isPending ? "Loading" : "Add exercise"}</button>
        </form>
    )
}
