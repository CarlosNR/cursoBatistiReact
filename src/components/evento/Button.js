function Button(props){
    //props alem de atributos genericos tambem podem ser atributos da classe pai
    return <button onClick={props.event}>{props.text}</button>
}

export default Button