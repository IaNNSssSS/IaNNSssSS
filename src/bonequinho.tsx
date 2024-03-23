const CABECA = (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "10px",
      }}
    />
  )
  
  const CORPO = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 40,

      }}
    />
  )
  
  const BRACODIREITO = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "130px",
        right: "-50px",
        rotate: "50deg",
        transformOrigin: "left bottom",
      }}
    />
  )
  
  const BRACOESQUERDO = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "130px",
        right: "40px",
        rotate: "-50deg",
        transformOrigin: "right bottom",
      }}
    />
  )
  
  const PERNADIREITA = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-50px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  )
  
  const PERNAESQUERDA = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: 40,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  )
  
  const PARTESDOCORPO = [CABECA, CORPO, BRACODIREITO, BRACOESQUERDO, PERNADIREITA, PERNAESQUERDA]
  
  type HangmanDrawingProps = {
    numberOfGuesses: number
  }
  
  export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
      <div style={{ position: "relative" }}>
        {PARTESDOCORPO.slice(0, numberOfGuesses)}
        <div
          style={{
            width: "10px",
            height: "50px",
            background: "black",
            position: "absolute",
            left: 300,
          }}
        />
        <div
          style={{
            height: "10px",
            maxWidth: "200px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div
          style={{
            height: "300px",
            width: "10px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div style=
        {{ 
            height: "5px", 
            width: "350px", 
            background: "black" 
        }} />
      </div>
    )
  }