export default function Hanged(props) {
    return (
        <div className="Hanged">
             
             <svg height="250" width="200" className="figure-container">
  {/* <!-- Rod --> */}
  <line x1="60" y1="20" x2="140" y2="20" stroke="white" />
  <line x1="140" y1="20" x2="140" y2="50" stroke="white" />
  <line x1="60" y1="20" x2="60" y2="230" stroke="white" />
  <line x1="20" y1="230" x2="100" y2="230" stroke="white" />

  {/* <!-- Head --> */}
  {props.errors > 0 &&
    <circle cx="140" cy="70" r="20" stroke="white" fill="white" />
  }
  {/* <!-- Body --> */}
  {props.errors > 1 &&
    <line x1="140" y1="90" x2="140" y2="150" stroke="white" />
  }
  {/* <!-- Arms --> */}
  {props.errors > 2 &&
    <line x1="140" y1="120" x2="120" y2="100" stroke="white" />
  }
  {props.errors > 3 &&
    <line x1="140" y1="120" x2="160" y2="100" stroke="white" />
  }
  {/* <!-- Legs --> */}
  {props.errors > 4 &&
    <line x1="140" y1="150" x2="120" y2="180" stroke="white" />
  }
  {props.errors > 5 &&
    <line x1="140" y1="150" x2="160" y2="180" stroke="white" />
  }
</svg>


        </div>
    )
}