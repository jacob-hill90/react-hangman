function Guessed ({guessed, setGuessed}){

    const addTo = () =>{
        let letter = document.getElementsByClassName(guess).value
        console.log(letter)
        if(guessed.includes(letter)){
            alert('You already tried that!')
        }else{
            const newGuessed = [...guessed,letter]
            setGuessed(newGuessed)
        }
    }

    return (
        <div>
            <h1>{guessed}</h1>
        </div>
    )

}

export default Guessed