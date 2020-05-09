import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    background-color: red;
    background-image: ${(props) => props.bg};
`;

export const Container = styled.div`
    padding-top: 144px;
    padding-bottom: 152px;
    padding-left: 12px;
    padding-right: 12px;
`;

export const Wrapper = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`;

export const HeroTitle = styled.div`
    font-size: 46px;
    font-weight: 700;
    display: inline;
    color: ${(props) => props.theme.heroTextColor};
`;

export const HeroSubTitle = styled.div`
    font-size: 18px;
    margin: 24px 0;
    color: ${(props) => props.theme.heroTextColor};
`;

export const SearchInputContainer = styled.div`
    background-color: ${(props) => props.theme.heroInputContainerBgColor};
    display: flex;
    border-radius: 4px;
`;

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    color: ${(props) => props.theme.heroInputTextColor};
    height: 54px;
    display: inline-block;
    outline: none;
    padding-left: 14px;
    font-size: 100%;
`;

export const SearchSVG = styled.svg`
    width: 20px;
    height: 20px;
    display: inline-block;
    padding-left: 14px;
    margin: auto;
    fill: ${(props) => props.theme.heroSVGsFill};
`;

export const ClearButton = styled.button`
    display: block;
    border: none;
    background-color: ${(props) => props.theme.heroInputContainerBgColor};
    padding: 0 14px;
    outline: none;
`;

export const ClearSVG = styled.svg`
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.heroSVGsFill};
`;
