import Styled from 'styled-components';
import image from '../Images/profilePic.jpg'

const Wrapper = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Image = Styled.img`
padding-top : 10%;
border-radius: 50%;
`

const ProfilePic = () => {
   return <Wrapper>
            <Image src={image} alt={"profile Pic"} width={150} height={150}/>
          </Wrapper>
}

export default ProfilePic;