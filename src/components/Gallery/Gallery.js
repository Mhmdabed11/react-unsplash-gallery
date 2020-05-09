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
    );
}
