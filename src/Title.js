import React from 'react'

function SubTitle(){

}


function Title(props) {
    const sub =[<p key="a">Hello</p>, <p key="b">Hello</p>]//props.subtext
    return (
      <div>
        <h1>{props.text}</h1>
        <p>{props.subtext}</p>
    </div>
    )
  }

  export default Title;