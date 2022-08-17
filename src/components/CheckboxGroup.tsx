type Props = {
    question: string;
    name: string;
    options: string[];
}

export function CheckboxGroup ({question, name, options}: Props){
    return (
        <>
        <h1>{question}</h1>
        {options.map(option => 
            <label>
                {option}
                <input type="checkbox" name={name} value={option.toLowerCase()}/>
            </label>
        )}
        </>
    )
}