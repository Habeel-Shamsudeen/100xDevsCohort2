export function Card({ details }) {
  if (!details.Name) return;
  return (
    <div style={Styles.card}>
      <h2 style={Styles.name}>{details.Name}</h2>
      <p style={Styles.description}>{details.desc}</p>
      <h3 style={Styles.interestsHeader}>Interests</h3>
      <ul style={Styles.interestsList}>
        {details.interests.map((interest, index) => {
          return (
            <li key={index} style={Styles.interestItem}>
              {interest}
            </li>
          );
        })}
      </ul>
      <h3 style={Styles.interestsHeader}>Socials</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          gap: "10px",
        }}
      >
        <button>
          <a href={details.linkedIn}>LinkedIn</a>
        </button>
        <button>
          <a href={details.twitter}>Twitter</a>
        </button>
      </div>
    </div>
  );
}

const Styles = {
  card: {
    border: "1px solid black",
    borderRadius: "8px",
    padding: "15px",
    margin: "15px",
    maxHeight: "450px",
    minWidth: "550px",
    boxShadow: "0px 4px 8px rgba(255,255,255, 0.5)",
    backgroundColor: "#f8f9fa",
  },
  name: {
    fontSize: "21px",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  interestsHeader: {
    fontSize: "17px",
    marginBottom: "10px",
    color: "#333",
  },
  interestsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    color: "#333",
  },
  interestItem: {
    fontSize: "13px",
    marginBottom: "5px",
    color: "#555",
  },
};
