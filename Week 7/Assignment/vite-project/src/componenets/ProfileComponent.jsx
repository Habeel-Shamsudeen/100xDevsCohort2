import profilePic from "./image.png";

export function ProfileComponent() {
  return (
    <div
      className="card"
      style={{
        height: "400px",
        width: "380px",
        border: "1px solid black",
        margin: "15px",
        marginTop:"80px",
        padding: "5px",
        background: "linear-gradient(to bottom, #aaf0d1 35%, #ffffff 35%)",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        className="profile-picture"
        src={profilePic}
        alt={"Profile Picture"}
        style={styles.profilePic}
      />
      <div
        className="name"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p style={styles.profileName}>Habeel Shamsudeen</p>
        <p
          className="age"
          style={{
            fontWeight: "normal",
            color: "grey",
            fontSize: "20px",
            margin: "3px",
            marginTop: "15px",
            padding: "3px",
          }}
        >
          20
        </p>
      </div>
      <div
        className="location"
        style={{
          fontWeight: "normal",
          color: "grey",
          fontSize: "20px",
          margin: "5px",
          padding: "5px",
        }}
      >
        Kannur
      </div>
      <hr />
      <div
        className="stats"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "7px",
          padding: "5px",
        }}
      >
        <div
          className="followers"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "7px",
            padding: "5px",
          }}
        >
          <b>80K</b> Followers
        </div>
        <div
          className="likes"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "7px",
            padding: "5px",
          }}
        >
          <b>800K</b>Likes
        </div>
        <div
          className="photos"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "7px",
            padding: "5px",
          }}
        >
          <b>10</b>Photos
        </div>
      </div>
    </div>
  );
}

const styles = {
  profilePic: {
    borderRadius: "50%",
    height: "130px",
    width: "130px",
    margin: "15px",
    marginTop: "30px",
    padding: "5px",
    paddingTop: "15px",
  },
  profileName: {
    fontWeight: "bold",
    fontSize: "20px",
    margin: "3px",
    marginTop: "15px",
    padding: "3px",
  },
};


// planned features 
//1. user can generate their profile card entering their name,age,location will randomly generate dp from several images present locally and genetrate a random follower,likes etc
