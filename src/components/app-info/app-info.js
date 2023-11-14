import styled from "styled-components"

const StyledAppInfo = styled.div`
    background-color: rgba(8, 147, 166, 1);
    border-radius: 10px;
    margin-bottom: 21px;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
    -moz-box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
    box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
`
const StyledInfoContent = styled.div`
    padding: 35px 31px 40px 31px;   
`
const StyledAppTitle = styled.h1`
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 25px;
    color: #fff;
`
const StyledAppSubtitle = styled.h2`
    font-size: 24px;
    color: #fff;
    margin-bottom: 0;
    margin-top: 0;
`
const StyledAppTopSubtitle = styled(StyledAppSubtitle)`
    margin-bottom: 15px;
` 

const AppInfo = ({totalItems, onSale}) => {
    return (
        <StyledAppInfo>
            <StyledInfoContent>
                <StyledAppTitle>учёт автомобилей в AutoBroker</StyledAppTitle>
                <StyledAppTopSubtitle>всего автомобилей: {totalItems.length}</StyledAppTopSubtitle>
                <StyledAppSubtitle>на продаже: {onSale.length}</StyledAppSubtitle>
            </StyledInfoContent>
        </StyledAppInfo>
    )
}

export default AppInfo;