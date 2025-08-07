import styled from "styled-components";

export const StylesLogin = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
   

    .content{
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.43);
        padding: 30px;
        border-radius: 10px;
         background-color: #fff;
         color: black;
         width: 85%;
         max-width: 600px;
        
    }

    img{
        width: 60px;
    
    }

  .content .part1{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }


    .content .part1 .title{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content .part1 .title h1{
        font-size: 2.1rem;
        margin-right: 20px;
    }

    
    .content .part1 p{
       color: #444444;
    }

    .content .part2 .inputs{

        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 1rem;
        margin-bottom: 25px;
        
    
    }

    .input-wrapper {
      position: relative;
    }

    .input-wrapper input {
      padding-left: 40px; 
      width: 100%;
      padding: 10px;
      border: 1.5px solid rgba(0, 0, 0, 0.15); /* borda clarinha */
      border-radius: 5px;
      font-size: 1rem;
      box-sizing: border-box;
      padding-left: 40px; 
      outline: none;
}
    
  .toggleEmoji {
  position: absolute;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  top: 6px;
}
    

    .input-wrapper .iconImage {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      pointer-events: none;
    }

    .content .part2 .inputs button{
        padding: 10px;
        background-color: #2563EB; 
        color: white; 
        border: none;
        font-size: 1.1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: .4s ease;

        &:hover{
             background-color: #1557e7ff;
        }
    }

    .content .part2 .links{
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        align-items: center;
        color: #444444;
        cursor: pointer;
        transition: .4s ease;

        &:hover{
              color: #312c2cff;

        }

      
       
    }

      @media screen and (min-width:768px) {
           .content .part1 .title h1{
                font-size: 2.5rem;
            }

            .content .part1 p{
                font-size: 1.1rem;
            }

            .content .part2 .inputs input{
                font-size: 1.1rem;
            }

             .content .part2 .inputs button{
                font-size: 1.1rem;
             }

             .content .links p{
                font-size: 1rem;
             }

             .toggleEmoji{
                top: 8px;
             }
        }


        @media screen and (min-width:992px) {
            .content{
                display: flex;
                flex-direction: column;
                height: 45%;
                min-height: 400px;
                justify-content: center;
            }
             .content .part1 .title h1{
                font-size: 2.8rem;
            }

            .content .part1 p{
                font-size: 1.2rem;
            }

            .content .part2 .inputs input{
                font-size: 1.2rem;
                
            }

             .content .part2 .inputs button{
                font-size: 1.2rem;
             }

             .content .links p{
                font-size: 1.1rem;
                position: relative;
                top: 10px;
             }
        }

        @media screen and (min-width: 1200px){
            .content{
                min-height: 500px;
                min-width: 800px;
                justify-content: center;
            }

            .content .part1 .title{
                position: relative;
                bottom: 20px;
            }

             .content .part1 .title h1{
                font-size: 3rem;
            }

            .content .part1 p{
                font-size: 1.4rem;
                position: relative;
                bottom: 10px;
            }

            .content .part2 .inputs input{
                font-size: 1.4rem;
                padding: 15px;
                padding-left: 40px;
                
            }

            .toggleEmoji{
                top: 16px;
            }

             .content .part2 .inputs button{
                font-size: 1.4rem;
                padding: 15px;

             }

             .content .links p{
                font-size: 1.3rem;
                position: relative;
                top: 30px;
             }


        }
`
