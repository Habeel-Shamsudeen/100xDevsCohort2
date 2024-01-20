export function CreateCard({updateDetails}){
    return <div style={Styles.card}>
        <h2>Create a Buisness Card</h2>
        <hr />
        <input type="text" placeholder="Name" id="Name" style={Styles.input}/>
        <br />
        <input type="text" placeholder="Description" id="desc" style={Styles.input}/>
        <br />
        <input type="text" placeholder="Interests" id="interests" style={Styles.input}/>
        <br />
        <input type="text" placeholder="LinkedIn link" id="linkedin" style={Styles.input}/>
        <br />
        <input type="text" placeholder="Twitter Link" id="twitter" style={Styles.input}/>
        <br />
        <button onClick={()=>{
            let interest=document.getElementById("interests").value;
            interest= interest.split(" ");
            const newDetails={
                Name:document.getElementById("Name").value,
                desc:document.getElementById("desc").value,
                interests:interest,
                linkedIn:document.getElementById("linkedin").value,
                twitter:document.getElementById("twitter").value
            }
            updateDetails(newDetails);
            document.getElementById("Name").value="";
            document.getElementById("desc").value="";
            document.getElementById("interests").value="";
            document.getElementById("linkedin").value="";
            document.getElementById("twitter").value="";
        }  
        }>Create Card</button>

    </div>
}


const Styles={
    card:{
        border:"2px solid white",
        padding: 10,
        margin: 10,
        borderRadius:10,
        textAlign: "center",
        height:"450px",
        width:"350px"
    },
    input:{
        padding: 10,
        margin: 10
    }
};