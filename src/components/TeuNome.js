function TeuNome({setNome}){
    return(
        <div>
            <p>Digite teu nome:</p>
            <input 
                type="text" 
                placeholder="Qual teu nome?"
                onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}

export default TeuNome