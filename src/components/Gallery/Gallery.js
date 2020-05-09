import React from "react";
import { Grid, GridItemImg, GridFigure, LoadingContainer, Loader, Container, SearchQuery } from "./Gallery.style";

export default function Gallery({ images, loading, searchQuery, renderedRandomList }) {
    if (loading) {
        return (
            <Container>
                <Grid style={{ marginTop: "51px" }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((loadingEntry, index) => (
                        <LoadingContainer key={loadingEntry}>
                            <Loader />
                        </LoadingContainer>
                    ))}
                </Grid>
            </Container>
        );
    }
    return (
        <Container>
            <SearchQuery>
                {!loading && renderedRandomList && images.length === 0
                    ? `No results found for ${searchQuery}`
                    : searchQuery}
            </SearchQuery>
            <Grid>
                {images.map((img) => (
                    <GridFigure key={img.id}>
                        <a href={img.links.html}>
                            <GridItemImg
                                src={img.urls.small}
                                alt={img.alt_description}
                                title={`Photo by ${img.user.first_name} ${img.user.last_name}`}
                            />
                        </a>
                    </GridFigure>
                ))}
            </Grid>
        </Container>
    );
}
