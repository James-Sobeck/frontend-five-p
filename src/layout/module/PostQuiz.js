import { Link } from "react-router-dom";

export default function PostQuiz(){
    return(
        <>
          <h1 style={{ textAlign: "center" }}>The Five Principles</h1>
      <div
       
      >
        <form>
          <div style={{
          marginRight: "auto",
          marginLeft: "auto",
          textAlign:'center',
        }}>
            <legend>1. Question </legend>
            <input type="checkbox" id="q1" value="A" style={{marginLeft:'5px'}}/> <label>A</label>
            <input type="checkbox" id="q1" value="B" style={{marginLeft:'5px'}}/> <label>b</label>
            <input type="checkbox" id="q1" value="C" style={{marginLeft:'5px', marginRight:'5px'}}/>
            <label>C</label>
            <div>
              <legend>2. Question</legend>
              <input type="text" id="q2" value="Type answer here" />
            </div>
            <div>
              <legend>3. Question</legend>
              <input type="text" id="q3" value="Type answer here" />
            </div>
            <legend>4. Question </legend>
            <input type="checkbox" id="q4" value="A" style={{marginLeft:'5px'}}/> <label>A</label>
            <input type="checkbox" id="q4" value="B" style={{marginLeft:'5px'}}/> <label>b</label>
            <input type="checkbox" id="q4" value="C" style={{marginLeft:'5px', marginRight:'5px'}}/>
            <label>C</label>
            <div>
              <Link to="/module1">
                <button type="submit" className="btn btn-primary mr-1">
                  Submit
                </button>{" "}
              </Link>{" "}
            </div>{" "}
          </div>
        </form>{" "}
      </div>
        </>
    )
}