import './App.css'
import Calculatrice from "./component/Calculatrice/index.jsx";
import styled from "styled-components";
import {useState} from "react";
import {toast, Toaster} from "react-hot-toast";
import {useAxios} from "./context/useAxios.jsx";

const StyledDiv = styled.div`
  width: 100px;
  height: 25px;
  background: ${(props) => {
      return props.$active ? 'red' : 'green'
  }};
  
  position: relative;
`

const StyledChildren = styled.div`
  position: absolute;
  height: ${props => props.$isActive ? '400' : '0'}px;
  width: 150px;
  background: yellow;
  transition: all .3s ease-in-out;
  top: 30px;
`

function App() {

    const {get} = useAxios()

    const [isActive, setIsActive] = useState(false)
    const toggleIsActive = () => {
        setIsActive(!isActive)
    }

    const sendToast = () => {
        toast.promise(
            get('search', {params: {q: 'p'}}),
            {
                loading: 'Requete en cours',
                success: (res) => `${res.toString()}`,
                error: (err) => `${err.toString()}`
            }
        )
    }

    return (
        <>
            <button onClick={sendToast} >Toast Me !</button>
            <StyledDiv onClick={toggleIsActive} $active={isActive}>
                <StyledChildren $isActive={isActive} />
            </StyledDiv>
            <Toaster />
        </>
    )
}

export default App
