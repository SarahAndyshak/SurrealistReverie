import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DreamInput from "./DreamInput";
import DreamList from "./DreamList";
import EditDream from "./EditDream";
import styled from "styled-components";
import { v4 } from "uuid";
import { db, auth } from "./../firebase.js";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

const StyledApp = styled.main`
  background-color: #222;
  font-size: 20pt;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: var(--actual-height);
  opacity: 0;
  scale: 1.1;

  transition: opacity 500ms ease, scale 500ms ease;
`;

function App() {
    useEffect(() => {
    document.getElementsByTagName('main')[0].style.opacity = 1;
    document.getElementsByTagName('main')[0].style.scale = 1;
  });

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "dreams"),
      (collectionSnapshot) => {
        const dreams = [];
        collectionSnapshot.forEach((doc) => {
          dreams.push({
            place: doc.data().place,
            length: doc.data().length,
            characters: doc.data().characters,
            body: doc.data().body,
            id: doc.id,
          });
        });
        setMainDreamList(dreams);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  const [mainDreamList, setMainDreamList] = useState([]);
  const [selectedDream, setSelectedDream] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleClickEdit = () => {
    setEditing(true);
  };

  const handleEditingDreamInList = async (dreamToEdit) => {
    if (auth.currentUser) {
      const dreamRef = doc(db, "dreams", dreamToEdit.id);
      window.history.back();
      await updateDoc(dreamRef, dreamToEdit);
      setEditing(false);
      setSelectedDream(null);
    }
  };

  const handleClickDelete = async (id) => {
    if (auth.currentUser) {
      await deleteDoc(doc(db, "dreams", id));
      setSelectedDream(null);
      console.log("App.js handleClickDelete got id", id);
    }
  };

  async function useHandleAddingNewDreamToList(newDreamData) {
    await addDoc(collection(db, "dreams"), newDreamData);
    window.history.back();
  };

  const handleChangingSelectedDream = (id) => {
    const selection = mainDreamList.filter((dream) => dream.id === id)[0];
    setSelectedDream(selection);
  };

  function handleSettingCurrentUser(userObj) {
    setCurrentUser(userObj);
  }

  return (
    <StyledApp>
      <Header 
        currentUser={currentUser} 
        handleSettingCurrentUser={handleSettingCurrentUser}
      />
      <Routes>
        <Route path="/sign-in" element={
          <SignIn 
            handleSettingCurrentUser={handleSettingCurrentUser}
          />
        } />
        {auth.currentUser && <Route
          path="/add-new"
          element={
            <DreamInput onNewDreamCreation={useHandleAddingNewDreamToList} />
          }
        />}
        {auth.currentUser && <Route
          path="/edit"
          element={<EditDream
            dream={selectedDream}
            onEditDream={handleEditingDreamInList} />}
        />}
        <Route
          path="/"
          element={
            <DreamList
              dreamList={mainDreamList}
              onDreamSelection={handleChangingSelectedDream}
              handleClickEdit={handleClickEdit}
              handleClickDelete={handleClickDelete}
            />
          }
        />
      </Routes>
      <Footer />
    </StyledApp>
  );
}

export default App;
