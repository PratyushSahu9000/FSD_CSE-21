import React, { useState } from 'react'


const UseStateAssignment = () => {

    let height = 300;
    let width = 300;
    const [row , setRow] = useState(height);
    const [col , setCol] = useState(width);

    function row_inc(){
        setRow(row + 5);
    }

    function row_dec(){
        setRow(row - 5);
    }

    function col_inc(){
        setCol(col + 5);
    }

    function col_dec(){
        setCol(col + 5);
    }

    

    
  return (
    <div style={{ height:'600px' , width:'600px' , border:'2px solid red'}}>
      <img src='https://cdn.pixabay.com/photo/2024/10/16/16/14/cat-9125207_1280.jpg' alt="Cat image"  style={{height:row , width:col , padding:'90px'}}/>
      <br/> <br />
      <button onClick={row_inc}>Row +</button>
      <button onClick={row_dec}>Row -</button><br />
      <button onClick={col_inc}>Col +</button>
      <button onClick={col_dec}>Col +</button><br />
    </div>
  )
}

export default UseStateAssignment
