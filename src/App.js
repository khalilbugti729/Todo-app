import React, { useState, useEffect } from "react";
import db from "./firebase";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import firebase from 'firebase'
import DeleteIcon from '@material-ui/icons/Delete';

import "./App.css";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection("todos").orderBy("createdAt","desc").onSnapshot((snapshot) => {
      setData((p) =>
        snapshot.docs.map((mapData) => ({
          text: mapData.data().text,
          id: mapData.id,
        }))
      );
      console.log("data look like", data);
    });
  }, []);

  const [singleData, setSingleData] = useState(() => null);

  const setSingleDataHandle = (event) => {
    setSingleData(event.target.value);
  };

  const submitHandle = () => {
    db.collection("todos").add({
      text: singleData,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const deleteFunction = (id) => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <div className="App">
      <section>
        <Input
        placeholder={"Write any message"}
          value={singleData}
          onChange={setSingleDataHandle}
          className={"Input"}
          type="text"
        />
        <Button
        variant="contained" color="primary"
          disabled={!singleData}
          className={"Button-Style"}
          onClick={submitHandle}
          className={"Button"}
        >
          submit
        </Button>
      </section>
      <div>
        {data.map((data) => (
          <section className={"divItems"}>
            <li>{data.text}</li>
            <DeleteIcon className={"material-Icon"} variant="contained"  onClick={() => deleteFunction(data.id)}>delete</DeleteIcon>
          </section>
        ))}
      </div>
    </div>
  );
}
export default App;
