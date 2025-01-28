import Modal from './Modal'
import { useState } from "react";
import "./index.scss";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={()=>{setOpen(true)}}>Open the window</button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}
