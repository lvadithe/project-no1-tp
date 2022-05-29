import { useState } from "react";

interface FormState {
    nick: string
    subMonths: number
    avatar: string
    description: string
}

const Form = () => {
    const [inputValues, setInputValues] = useState<FormState>({
        nick: "",
        subMonths: 0,
        avatar: "",
        description: ""
    })

    const handlerSubmit = () => { }

    const handlerChange = (evt: React.ChangeEvent<HTMLInputElement |
        HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input onChange={handlerChange} value={inputValues.nick} type="text" name="nick" placeholder='nick' />
                <input onChange={handlerChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder='subMonths' />
                <input onChange={handlerChange} value={inputValues.avatar} type="text" name="avatar" placeholder='avatar' />
                <textarea onChange={handlerChange} value={inputValues.description} name="description" placeholder='description' />
                <button>
                    Save new sub!
                </button>
            </form>
        </div>
    )
}

export default Form;