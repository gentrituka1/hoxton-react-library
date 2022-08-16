type Props = {
    action: () => void,
    text: string
}

export function Button ({ action, text }: Props){
    return (
        <button className="button" onClick={action}>
            {text}
          </button> 
    )
}