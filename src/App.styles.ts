import styled from "styled-components"

export const Container = styled.div`
background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
    color: #FFF;
    min-height:100vh;
`;

export const Area = styled.div`
    margin:auto;
    max-width:980px;
    padding:30px 0;

`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin--bottom:20px;
    }
`

export const PhotoList = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const UploadForm = styled.form`
    background-color: #80008054;
    padding: 15px;
    border-radius: 10px;
    margin-bottom:10px;

    input[type=submit]{
        background-color:#756DF4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size:15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor:pointer;
        
        &:hover{
            opacity: .9;
        }
    }

`