import styled from "styled-components";
const ToggleContainer =styled.div`

`
const ToggleBox = styled.input.attrs((props)=>({
    type: 'checkbox',
    checked: props.checked,
    }))`
    position: relative;
    width: ${({width}) => width+"px"};
    height: ${({width}) => width/3+"px"};
    margin: 10px;
    outline: none;
    background: ${({bgOff})=> bgOff};
    -webkit-appearance: none;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.1),
                5px 5px 10px rgba(0, 0, 0, 1),
                inset -2px -2px 5px rgba(255, 255, 255, 0.1),
                inset 2px 2px 5px rgba(255, 255, 255, 0.5),
                0 0 0 2px #1f1f1f;
    transition: 0.5s;
    &:checked {
        background: #20b7ff;
        background: ${({bgOn})=> bgOn};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: ${({width}) => width/3+"px"};
        width:${({width}) => width/1.5+"px"};
        background: ${({switchbg}) => switchbg};
        border-radius: 20px;
        box-shadow: 0 0 0 1px #232323;
        transform: scale(0.98, 0.96);
        transition: 0.5s;
    }
    &:checked::before {
        left: ${({width}) => width/3+"px"};
    }
    &:after {
        content: '';
        position: absolute;
        left: ${({width}) => (width/1.8)+"px"};
        top: calc(50% - 2px);       
        height: ${({width}) => width/30+"px"};
        width: ${({width}) => width/30+"px"};
        border-radius: 50%;
        background: ${({bgOff})=> bgOff};
        transition: 0.5s;
    }
    &:checked::after {
        left: ${({width}) => (width/1.8)+(width/3)+"px"};
        background: ${({bgOn})=> bgOn};
        box-shadow: 0 0 5px ${({bgOn})=> bgOn}, 0 0 15px ${({bgOn})=> bgOn}, 0 0 30px ${({bgOn})=> bgOn};
    }
`


export {
	ToggleContainer, ToggleBox
}