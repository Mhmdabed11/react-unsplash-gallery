import React from "react";
import { Grid, GridItemImg, GridFigure, LoadingContainer, Loader } from "./Gallery.style";

export default function Gallery({ images, loading }) {
    if (loading) {
        return (
            <Grid>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((loadingEntry, index) => (
                    <LoadingContainer key={loadingEntry}>
                        <Loader />
                    </LoadingContainer>
                ))}
            </Grid>
        );
    }
    return (
        <Grid>
            {images.map((img) => (
                <GridFigure key={img.id}>
                    <GridItemImg src={img.urls.small} />
                </GridFigure>
            ))}
        </Grid>
    );
}
