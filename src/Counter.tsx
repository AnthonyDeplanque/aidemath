const Counter = (props: { count: number; }) => {
  const count = { props };

  return <div>
    <p>Nombre de bonnes réponses : {count}</p>
  </div>;
};

export default Counter;