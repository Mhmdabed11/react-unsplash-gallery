import React, { useState } from "react";
import {
    Section,
    Container,
    Wrapper,
    HeroTitle,
    HeroSubTitle,
    SearchInput,
    SearchInputContainer,
    SearchSVG,
    ClearButton,
    ClearSVG,
} from "./MainHero.style";

export default function MainHero({ bg }) {
    const [searchTerm, handleChange, setSearchTerm] = useFormInput("");

    function handleClearButtonClick() {
        setSearchTerm("");
    }
    return (
        <Section bg={bg}>
            <Container>
                <Wrapper>
                    <HeroTitle>Unsplash</HeroTitle>
                    <HeroSubTitle>
                        The internet’s source of freely usable images.
                        <br /> Powered by creators everywhere.
                    </HeroSubTitle>
                    <SearchInputContainer>
                        <SearchSVG version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
                            <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
                        </SearchSVG>
                        <SearchInput type="text" name="search" id="search" value={searchTerm} onChange={handleChange} />
                        <ClearButton disabled={!searchTerm} onClick={handleClearButtonClick}>
                            {searchTerm ? (
                                <ClearSVG version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
                                    <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
                                </ClearSVG>
                            ) : null}
                        </ClearButton>
                    </SearchInputContainer>
                </Wrapper>
            </Container>
        </Section>
    );
}

const useFormInput = (initialValue) => {
    const [val, setVal] = useState(initialValue);
    const handleChange = (e) => setVal(e.target.value);

    return [val, handleChange, setVal];
};
