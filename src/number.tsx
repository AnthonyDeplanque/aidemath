const NumberShow = (props: { multiplier: number; }) => {
  const { multiplier } = props;

  return <div style={{
    border: "solid 1px white",
    borderRadius: "5px",
    padding: '5px',
    margin: '10px'
  }}>
    {
      Array.from(Array(10), (_, i) => i + 1).map((i) => {
        return (
          <p>{multiplier} * {i} = {multiplier * i}</p>
        );
      })
    }
  </div>;
};

export default NumberShow;