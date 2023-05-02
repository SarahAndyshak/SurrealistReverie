import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import DreamInput from './DreamInput';
import DreamList from './DreamList';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { db, auth } from "./../firebase.js";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

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
  scale: 1.5;

  transition: opacity 500ms ease, scale 500ms ease;
`;

function App() {

  useEffect(() => {
    document.getElementsByTagName('main')[0].style.opacity = 1;
    document.getElementsByTagName('main')[0].style.scale = 1;
    // collection(db, "dreams"),

    const unSubscribe = onSnapshot(
      (querySnapshot) => {
        const dreams = [];
        querySnapshot.forEach((doc) => {
          dreams.push({ place: doc.data().place, length: doc.data().length, characters: doc.data().characters, body: doc.data().body, id: doc.id, });
        });
        setMainDreamList(dreams);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  const [mainDreamList, setMainDreamList]= useState([]);
  const [selectedDream, setSelectedDream] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [ dreamList, setDreamList ] = useState([
    {
      place: 'Zimbabwe',
      length: '12 minutes',
      characters: 'Romy and Michele',
      body: 'We went to Ikea and bought a brass waterbed',
      id: v4(),
    },
    {
      place: 'Milan, Italy',
      length: '12 days',
      characters: 'Willem Dafoe',
      body: 'An idyllic odyssey through the sparkling rivers of south Milan',
      id: v4(),
    },
  ]);

  

  const handleClickEdit = (id) => {
    setEditing(true);
    console.log('App.js handleClickEdit got id', id)
  }

  const handleEditingDreamInList = async (dreamToEdit) => {
    const dreamRef = doc(db, "dreams", dreamToEdit.id);
    await updateDoc(dreamRef, dreamToEdit);
    setEditing(false);
  }

  const handleClickDelete = async (id) => {
    await deleteDoc(doc(db, "dreams", id));
    // setSelectedDream(null);
    console.log('App.js handleClickDelete got id', id)
  }

  const handleAddingNewDreamToList = async (newDreamData) => {
    await addDoc(collection(db, "dreams"), newDreamData);
  }

  // const handleChangingSelectedDream = (id) => {
  //   const selection = mainDreamList.filter(dream => dream.id === id)[0];
  //   setSelectedDream(selection);
  // }

  if (auth.currentUser == null) {
    return (
      <h1>You must be signed in to access the queue.</h1>
    );
    } else if (auth.currentUser !=null) {
      let buttonText=null;
    } 
    if (error) {
      <p>There was an error: {error}</p>;
    }
    else if (editing) {
      <DreamInput
      dream={selectedDream}
      onEditDream={handleEditingDreamInList}
      buttonText = "Placeholder"
      />
    }

  return (
    <StyledApp>
      <Header />
      <DreamInput
        onNewDreamCreation={handleAddingNewDreamToList} />
      <DreamList 
        dreamList={dreamList}
        handleClickEdit={handleClickEdit}
        handleClickDelete={handleClickDelete}
      />
      <Footer />
    </StyledApp>
  );
}

export default App;
