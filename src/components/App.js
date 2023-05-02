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

  transition: opacity 500ms ease, scale 500ms ease;
`;

/////////////////////////////////////////////////////////

const pause = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function createTitle(titleText) {
  const titleArea = document.getElementById("title-area");
  const titleArray = titleText.split("");
  for (let i = 0; i < titleArray.length; i++) {
    let printedChar;
    if (titleArray[i] === " ") {
      printedChar = "&nbsp;";
    } else {
      printedChar = titleArray[i];
    }
    titleArea.innerHTML += `
      <span class='title-letter' id='title-letter-${i}'>
        ${printedChar}
      </span>
    `;
  }
}

async function revealTitle(options) {
  // options = {
  //   revealSpeed: '150',
  //   letterAnimationSpeed: '400'
  // }
  document.documentElement.style.setProperty(
    "--letter-animation-speed",
    options.letterAnimationSpeed + "ms"
  );
  const titleArea = document.getElementById("title-area");
  const titleArray = titleArea.innerText.split("");
  for (let i = 0; i < titleArray.length; i++) {
    const currentLetter = document.getElementById(`title-letter-${i}`);
    currentLetter.classList.add("revealed");
    await pause(options.revealSpeed);
  }
}

/////////////////////////////////////////////////////////////////////

function App() {
  // useEffect(() => {
  // document.getElementsByTagName('main')[0].style.opacity = 1;
  // document.getElementsByTagName('main')[0].style.scale = 1;

  // useEffect(() => {
    // try {
    //   createTitle('Surrealist Reveries');
    //   revealTitle({
    //     revealSpeed: '150',
    //     letterAnimationSpeed: '400'
    //   });
    // }
    // catch {
    //   console.log("header title didn't fancy")
    // }
  // }, []);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "dreams"),
      (collectionSnapshot) => {
        // const unSubscribe = onSnapshot(
        //   (collectionSnapshot) => {
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
  const [dreamList, setDreamList] = useState([
    {
      place: "Zimbabwe",
      length: "12 minutes",
      characters: "Romy and Michele",
      body: "We went to Ikea and bought a brass waterbed",
      id: v4(),
    },
    {
      place: "Milan, Italy",
      length: "12 days",
      characters: "Willem Dafoe",
      body: "An idyllic odyssey through the sparkling rivers of south Milan",
      id: v4(),
    },
  ]);

  const handleClickEdit = () => {
    setEditing(true);
  };

  const handleEditingDreamInList = async (dreamToEdit) => {
    const dreamRef = doc(db, "dreams", dreamToEdit.id);
    await updateDoc(dreamRef, dreamToEdit);
    setEditing(false);
    setSelectedDream(null);
  };

  const handleClickDelete = async (id) => {
    await deleteDoc(doc(db, "dreams", id));
    setSelectedDream(null);
    console.log("App.js handleClickDelete got id", id);
  };

  const handleAddingNewDreamToList = async (newDreamData) => {
    await addDoc(collection(db, "dreams"), newDreamData);
  };

  const handleChangingSelectedDream = (id) => {
    const selection = mainDreamList.filter((dream) => dream.id === id)[0];
    setSelectedDream(selection);
  };

  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/add-new"
          element={
            <DreamInput onNewDreamCreation={handleAddingNewDreamToList} />
          }
        />

        <Route
          path="/edit"
          element={<EditDream
            dream={selectedDream}
            onEditDream={handleEditingDreamInList} />}
        />
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
