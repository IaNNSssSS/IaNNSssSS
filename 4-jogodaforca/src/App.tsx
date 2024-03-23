import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./bonequinho";
import { HangmanWord } from "./palavrasbonequinho";
import { Keyboard } from "./teclado";
import words from "./wordList.json";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );
    
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters(currentLetters => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  const resetGame = () => {
    setGuessedLetters([]);
    setWordToGuess(getWord());
  };

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      resetGame();
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);
  
  useEffect(() => {
    if (isWinner) {
      setWins(wins + 1);
    } else if (isLoser) {
      setLosses(losses + 1);
    }
  }, [isWinner, isLoser]);

  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      gap: "10px",
      alignItems: "center",
    }}>
      <div style={{
        fontSize: "20px",
        display: "flex",
        position: "absolute",
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: "5px",
        right: 500,
        left: 60,
        top: 40,
        fontFamily: "monospace",
      }}>
        <button style={{ 
          background: "rgba(0, 0, 255, 0.313)", 
          display: "flex",
          fontSize: "20px",
          cursor: "pointer",
          border: "3px solid rgb(0, 0, 0)",
          fontWeight: "bold",
          borderRadius: "10px",
          fontFamily: "monospace",
          }} 
          onClick={resetGame}>Tentar Novamente
          </button>
        <div style={{ fontWeight: "bold" }}>Derrotas:{losses}</div>
        <div style={{ fontWeight: "bold" }}>Vitórias:{wins}</div>
      </div>
        <div style={{
          fontSize: "26px",
          display: "flex",
          position: "relative",
          left: 50,
          fontFamily: "monospace",
        }}>
        {isWinner && "Você ganhou!!"}
        {isLoser && "Você perdeu :("}
        </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(
            (letter) => wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
