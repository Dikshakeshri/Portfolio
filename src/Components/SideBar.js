import Styled from 'styled-components';
import ProfilePic from "./ProfilePic";
const Wrapper = Styled.div`
width: 20%;
background: #54b788;
height: 100vh;
`

const Name = Styled.div`
font-size: 25px;
font-weight: bold;
color: white;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 10%;
`

const SideBar = (props) => {
    let name = props.name;
    if (name.length > 15) {
        name = name.substr(0,15)+"...";
    }
 return <Wrapper>
            <Name>{name}</Name>
            <ProfilePic/>

        </Wrapper>
}

 export default SideBar;