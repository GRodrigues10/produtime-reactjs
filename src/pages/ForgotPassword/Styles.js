import styled from "styled-components";

export const StylesForgotPassword = styled.div `
    width: 100%;
    height: 100vh;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;

    .content{
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
         gap: 10px;
         width: 100%;
         height: 350px;
         align-items: center;
         justify-content: center;
         max-width: 700px;
    }

    .content h1{
        font-size: 2.2rem;
        color: black;
        position: relative;
        bottom: 20px;
    }

    .content input{
        border: 1px solid #cccccc;
        padding: 10px;
        font-size: 1.1rem;
        border-radius: 5px;
        width: 100%;
        outline: none;
       
    }

    .content button{
        background-color: #1881f1ff;
        color:white;
        font-weight: bold;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        width: 100%;
        position: relative;
        top: 20px;
        cursor: pointer;
        transition: .4s ease;
        &:hover{
        background-color: #0079faff;

        }

    }

    @media screen and (min-width:530px) {

        .content{
            width: 500px;
        }
    .content h1{
        font-size:2.4rem;
    }

    .content input{
        padding: 12px;
        font-size: 1.2rem;
    }

    .content button{
        padding: 12px;
        font-size: 1.2rem;
    }
        
    }


    @media screen and (min-width:768px) {
        .content{
            width: 700px;
            height: 450px;
        }
        .content h1{
            font-size: 3rem;
        }

        .content input{
            padding: 15px;
            font-size: 1.3rem;
        }

        .content button{
            padding: 15px;
            font-size: 1.3rem;
        }
    }
`
