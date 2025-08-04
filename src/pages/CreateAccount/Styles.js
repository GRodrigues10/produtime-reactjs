import styled from "styled-components";

export const StylesCreateAccount = styled.div ` 

        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f0f0f0;

        .content{
           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            height: 450px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 5px;
            background-color: #fff;
            
        }

        .content .title h1{
            font-size: 2.5rem;
            color:	#2d2d2d;
            margin-bottom: 30px;
        }

        .content .name{
            display: flex;
            flex-direction: column;
            gap:10px;
            margin-bottom: 10px;
            width: 100%;
            color:	#2d2d2d;
         
        }

        .content .account{
            display: flex;
            flex-direction: column;
            gap:10px;
            width: 100%;
            color:	#2d2d2d;

        }

        .content .name input{
            padding: 10px;
            border-radius: 5px;
            border: 1px solid 	#dcdcdc;
            outline: none;
        }

        .content .account input{
            padding: 10px;
            border-radius: 5px;
            border: 1px solid 	#dcdcdc;
            outline: none;
        }

        select{
            margin-top: 20px !important;
            padding:10px;
            margin: 5px;
            border-radius: 5px;
        }
        .btn{
            width: 100%;
        }

        .btn button{
            padding: 10px;
            font-size: 1.1rem;
            font-weight: bold;
            border-radius: 5px;
            margin-top: 20px;
            background-color: #007bff;
            color: white;
            border: none;
            width: 100%;
            transition: .4s ease;

            &:hover{
                background-color: #0056b3;
            }
        }

        @media screen and (min-width:768px) {
            .content{
                width: 650px;
                height: 450px;
            }
            h1{
                font-size: 2.8rem !important;
            }

            .content .name {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

            }

            .content .name input{
                padding: 15px;
                width: 100%;
                font-size: 1.1rem;
            }

            .content .account input{
                padding: 15px;
                font-size: 1.1rem;
            }

            select{
                width: 150px;
                text-align: center;
                font-size: 1.1rem;
            }

             .btn button{
                padding: 15px;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }

        @media screen and (min-width: 992px){
            .content{
                width: 800px;
                height: 550px;
            }
             h1{
                font-size: 3rem !important;
            }

            .content .name {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

            }

            .content .name input{
                padding: 20px;
                width: 100%;
                font-size: 1.2rem;
            }

            .content .account input{
                padding: 20px;
                font-size: 1.2rem;
            }

            select{
                margin-top: 30px !important;
                width: 200px;
                text-align: center;
                font-size: 1.2rem;
            }

             .btn button{
                margin-top: 30px;
                padding: 20px;
                font-size: 1.3rem;
                cursor: pointer;
            }
        }

`