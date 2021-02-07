import React, { useState } from "react";
import ResultsPage from "./components/ResultsPage";
import PostcodePage from "./components/PostcodePage";
import "./App.css";

function App() {
 
 const [postcodePage, setPostcodePage] = useState(true);

const handleChangeView = (postcodePage) => {
  setPostcodePage(postcodePage);
}


  return (
    <div className="App">

    <nav>
        <button
          // Whilst in adminView, show button-active styling (see App.css)
          className={postcodePage ? "button-active" : "button"}
          onClick={() => handleChangeView(true)}
        >
          POSTCODE PAGE
        </button>

        <button
          // Whilst NOT in adminView, show button-active styling - so
          // both of these buttons toggle between the styling (see App.css)
          className={!postcodePage ? "button-active" : "button"}
          onClick={() => handleChangeView(false)}
        >
          RESULTS PAGE
        </button>
      </nav>
      <h1>Welcome to Green Spaces</h1>

       {postcodePage ? (
        <PostcodePage postcodePage={postcodePage}/>
      ) : (
        <ResultsPage
        />
      )}

    </div>
  );
}

export default App;
