import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [items, setItems] = useState([]);

    function addItem(inputText){
        setItems((prevValue)=>{
            return [...prevValue, inputText];
        })
    }

    function deleteItem(id){
        setItems((prevValue)=>{
            return prevValue.filter((item, index)=>{
                return id !== index;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea addItem={addItem}/>
            {items.map((item, index)=>{
               return <Note key={index} id={index} title={item.title} content={item.content} deleteItem={deleteItem}/>
            })}
            <Footer />
        </div>
    );
}

export default App;