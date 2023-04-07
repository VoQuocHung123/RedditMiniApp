import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import MakePost from "./components/Posts/MakePost";
import ListPost from "./components/Posts/ListPost";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [enableEdit, setEnableEdit] = useState(false);
  const [enableCreatePost, setEnableCreatePost] = useState(false);
  const handleClickEdit = () => {
    setEnableEdit(!enableEdit);
  };
  const handleClickCreate = () => {
    setEnableCreatePost(!enableCreatePost);
  };
  return (
    <div className="bg-black h-[100vh]">
      {enableEdit ? (
        <Edit setEnableEdit={handleClickEdit} />
      ) : (
        <>
          <Header setEnableEdit={handleClickEdit} />
          {enableCreatePost ? <MakePost onClickCreate={handleClickCreate} /> : <ListPost/> }
          <Footer onClickCreate={handleClickCreate} isEnable={enableCreatePost} />
        </>
      )}
    </div>
     
  );
}

export default App;
