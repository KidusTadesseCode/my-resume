import React, {useState, useEffect} from "react";
import { ToggleContainer, ToggleBox } from "./Toggle_style";

import { useSelector, useDispatch } from 'react-redux'
import { changeToDarkMode } from "../../ReduxStore/darkModeSlice";

function Toggle (){
	const themeDark = useSelector((state) => state.themeChanger.value)
    const dispatch = useDispatch()
	const [checkBox, setCheckBox]=useState(JSON.parse(localStorage.getItem("theme")))
	
	useEffect(()=>{
		const local= JSON.parse(localStorage.getItem("theme"))
		localStorage.setItem('theme', JSON.stringify(!local));
	  }, [checkBox])
  
	  const ChangeToDarkMode= (e)=>{
		// dispatch(changeToDarkMode(!themeDark))
		dispatch(!themeDark)
		const local= JSON.parse(localStorage.getItem("theme"))
		setCheckBox(!local)
	  }
	return (
		// <ToggleContainer>
			<ToggleBox
			bgOn='#D1D100'
			bgOff='#555'
			checked={checkBox}
			switchbg={'linear-gradient(to top,#000, #555)'}
			width={30}
			onChange={ChangeToDarkMode}
			style={{top:5}}
			/>
		// </ToggleContainer>
	)
}
export default Toggle
