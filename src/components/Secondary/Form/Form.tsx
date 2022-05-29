import { Sub } from "../../../types.d";
import { useNewSubForm } from "../../hooks/useNewSubForm";

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
    /* const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE) */

    const [inputValues, dispatch] = useNewSubForm()

    const handlerSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handlerChange = (evt: React.ChangeEvent<HTMLInputElement |
        HTMLTextAreaElement>) => {
        const { name, value } = evt.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({
            type: "clear"
        })
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input onChange={handlerChange} value={inputValues.nick} type="text" name="nick" placeholder='nick' />
                <input onChange={handlerChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder='subMonths' />
                <input onChange={handlerChange} value={inputValues.avatar} type="text" name="avatar" placeholder='avatar' />
                <textarea onChange={handlerChange} value={inputValues.description} name="description" placeholder='description' />
                <button onClick={handleClear} type="button">
                    Clear form
                </button>
                <button type="submit">
                    Save new sub!
                </button>
            </form>
        </div>
    )
}

export default Form;