import { useEffect, useState } from "react";

const Question = () => {

  const [firstNumber, setFirstNumber] = useState<number>();
  const [secondNumber, setSecondNumber] = useState<number>();
  const [result, setResult] = useState<number>();
  const [goodAnswer, setGoodAndswer] = useState<boolean>();
  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {

    setNumbers();


  }, []);

  const setNumbers = () => {
    setFirstNumber(Math.floor(Math.random() * 10) + 1);
    setSecondNumber(Math.floor(Math.random() * 10) + 1);
  };

  const onValidation = () => {
    if (result) {
      if (result === (firstNumber! * secondNumber!)) {
        setNumbers();
        setGoodAndswer(true);
      }
      else {
        setGoodAndswer(false);
      }


    }

  };


  return (
    <div>
      <p>Combiens font <span>{`${firstNumber} x ${secondNumber}`}</span></p>
      <input style={{
        backgroundColor: goodAnswer ? 'green' : 'red'
      }}
        type="number" onChange={(e) => setResult(parseInt(e.target.value))} />
      <button onClick={() => onValidation()} >valider</button>
    </div>);
};

export default Question;