import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GenreListItem from "./GenreListItem";

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  }
});

const GenreList = props => {
  const { classes, genres, loading, url } = props;

  return (
    <React.Fragment>
      {loading && <p style={{ textAlign: "center" }}>Loading Please Wait</p>}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {genres &&
            genres.map(({ name, id }) => (
              <Grid item key={id} xs={6} sm={6} md={3}>
                <Link
                  to={{
                    pathname: `/${url}/${name}`,
                    id: `${id}`
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <GenreListItem name={name} />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(GenreList);
