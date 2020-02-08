
import React,{useState} from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";
import CommentSection from "./components/CommentSection/CommentSectionContainer";


const App = () => {
  const [data] = useState(dummyData);
  return (
    <div className="App">
      <SearchBar />
      <PostsPage newdata={data} />
    </div>
    
  );
};

export default App;