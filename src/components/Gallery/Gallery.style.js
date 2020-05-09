import styled, { css } from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
`;

const gridItemsContainerStyle = css`
    grid-column: span 2;
    grid-row: span 2;
    margin: 0;
    &:nth-child(8n + 1),
    &:nth-child(8n + 2),
    &:nth-child(8n + 6),
    &:nth-child(8n + 7) {
        grid-column: span 1;
        grid-row: span 3;
    }

    &:nth-child(8n + 3),
    &:nth-child(8n + 5) {
        grid-column: span 2;
        grid-row: span 5;
    }
    @media (max-width: 768px) {
        grid-column: span 2;
        grid-row: span 3;
        &:nth-child(8n + 1),
        &:nth-child(8n + 2),
        &:nth-child(8n + 6),
        &:nth-child(8n + 7),
        &:nth-child(8n + 3),
        &:nth-child(8n + 5) {
            grid-column: span 2;
            grid-row: span 3;
        }
    }

    @media (max-width: 500px) {
        grid-column: span 4;
        grid-row: span 3;
        &:nth-child(8n + 1),
        &:nth-child(8n + 2),
        &:nth-child(8n + 6),
        &:nth-child(8n + 7),
        &:nth-child(8n + 3),
        &:nth-child(8n + 5) {
            grid-column: span 4;
            grid-row: span 3;
        }
    }
`;

export const Grid = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 100px;
`;

export const GridFigure = styled.figure`
    ${gridItemsContainerStyle}
`;

export const GridItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const LoadingContainer = styled.div`
    ${gridItemsContainerStyle}
`;

export const Loader = styled.div`
    width: 100%;
    height: 100%;
    background: #e6e6e6;
`;

export const SearchQuery = styled.h1``;
