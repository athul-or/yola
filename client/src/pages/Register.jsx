import styled from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: url("https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=2000") center ;
display: flex;
align-items: center;
justify-content: center;
background-size:cover;
`;


const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})}
`


const Form = styled.form`
display: flex;
flex-wrap: wrap;
`


const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
 

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`


const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`


const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
border-radius: 5px;
`



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="lastname"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>

    </Container>
  )
}

export default Register