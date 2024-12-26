import React, { useState } from "react"
import "./Navbar.css"
const navbar = () => {
 const [smile, setSmile] = useState(null)
 const [label, setLabel] = useState("")
 const HandleEmojiClick = (emoji, lebel) => {
  setSmile(emoji)
  setLabel(lebel)

 }
  return (
    <div className='wrapper'>
     <h1>Kayfiatingizni tanlang</h1>
     <div className='cont'>
      <button onClick={() => HandleEmojiClick("😀", "Quvonchli")}>😀</button>
      <button onClick={() => HandleEmojiClick("😓", "xafsalasiz")}>😓</button>
      <button onClick={() => HandleEmojiClick("😡", "asabiy")}>😡</button>
      <button onClick={() => HandleEmojiClick("🙄", "xayron")}>🙄</button>
      <button onClick={() => HandleEmojiClick("😴", "uyudqa")}>😴</button>
     </div>
     <div className='choose'>
      <h1>Siz tanladingiz</h1>
      <p>
       {smile}
      </p>
      <h6>{label}</h6>

     </div>


    </div>
  )
}

export default navbar


