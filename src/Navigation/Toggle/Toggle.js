import React, {useState} from "react";
import { ToggleBox } from "./Toggle_style";

import { useSelector, useDispatch } from 'react-redux'
import { changeToDarkMode } from "../../ReduxStore/darkModeSlice";

function Toggle (){
	const themeDark = useSelector((state) => state.themeChanger.value)
    const dispatch = useDispatch()
	const [checkBox, setCheckBox]=useState(JSON.parse(localStorage.getItem("theme")))
	  const ChangeToDarkMode= (e)=>{
		
		const dark = changeToDarkMode(!themeDark)
		dispatch(dark)
		setCheckBox(dark["payload"])
	  }
	return (

			<ToggleBox
			bgOn='#D1D100'
			bgOff='#555'
			checked={checkBox}
			switchbg={'linear-gradient(to top,#000, #555)'}
			width={30}
			onChange={ChangeToDarkMode}
			style={{top:5}}
			/>
	)
}
export default Toggle
