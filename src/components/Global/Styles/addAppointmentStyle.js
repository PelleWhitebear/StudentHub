import styled from 'styled-components';

export const AddAppointmentBtn = styled.button`
font-size: 15px;
text-align: center;
background-color: var(--primaryColor);
border-color: var(--primaryColor);
color: white;
float: right;
border-radius: 4px;
padding: 8px;

&:hover {
    opacity: 80%;
 }
`;

export const Input = styled.input`
border-color: var(--primaryColor);
color: var(--primaryColor);
box-sizing: border-box;
height: 51px;
width: 100%;
padding: 5px;
border-radius: 4px;
border: 1px solid;
`;