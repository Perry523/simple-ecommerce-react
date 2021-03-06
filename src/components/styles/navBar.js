import styled from "styled-components";

export const NavBar = styled.div`
    height: 120px;
    background-color:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    box-shadow: 0px 0px 1px 0px;
    

    img{
        padding: 5px;
        margin-left: 10%;
        flex: 1;
        height: 100%;
        max-width: 150px;
    }
    input{
        height:35px;
        padding:10px;
        border-radius:10px;
        border: 1px #eee solid;
        flex: 6;
        align-self: center;
    }
    
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    a{
        text-decoration: none;
        color: black;   
        flex: 2;
        display: flex;
        background-color: #E7FAFA;
        margin: 17px;
        width: 80%;
        border-radius: 3px;
        border: 1px;
        align-self: center;
        max-width: 150px;
        align-items: center;
        justify-content: space-between;
        p{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            text-align: center;
            font-size: 13px;
            flex: 3;
            padding-left: 15px;

        }
    }


`
export const Row2 = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    
`
export const Row = styled.div`
    display: flex;
    flex: 1;
    position: relative;
    p{
        flex: 1;
    }
`
export const Badge = styled.span`
    color: white;
    font-weight: bold;
    position: absolute;
    top: -15px;
    right: -5px;
    /*top: -9px;
    right: 7px;*/
    background-color: #d31b1b;
    border-radius: 50%;
    font-size: 10px;
    width: 12px;
    height: 13px;
    text-align: center;
`
export const Links = styled.div`
display: flex;
background-color: #B5F0F5;
/*background-color: #D0F7F7;*/
    a:hover{
        background-color: gray
    }
    a{
        max-width: 230px;
        border-right: 1px solid #eee;
        height: 100%;
        flex:1;
        display: flex;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        position: relative;
        p{
            color: black;
            font-family:Georgia, 'Times New Roman', Times, serif

        }
    
    }
`