const CardBack = (props) => {
  const { stats } = props.props;

  return (
    <div
      className="card-container"
      style={{
        background: `linear-gradient(${props.finalColor[0]}, ${props.finalColor[1]})`
      }}
    >
      <div className="card-header">
        <div className="return-icon" onClick={props.handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8l-4 4 4 4M16 12H9" />
          </svg>
        </div>
      </div>
      <div className="stats-container">
        <h3>stats</h3>
        <ul>
          <li>Hp: {stats[0].base_stat}</li>
          <li>Attack: {stats[1].base_stat}</li>
          <li>Defence: {stats[2].base_stat}</li>
          <li>Sp. Attack: {stats[3].base_stat}</li>
          <li>Sp. Defence: {stats[4].base_stat}</li>
          <li>Speed: {stats[5].base_stat}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardBack;
