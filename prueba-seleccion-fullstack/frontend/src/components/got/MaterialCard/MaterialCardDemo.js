import Axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    let query = "http://localhost:5000/got/characters/" + id;
    const data = await Axios.get(query);
    console.log(data);
    setData(data.data);
  };

  function printAlive(e) {
    if (e === true) {
      return <>Vivo</>;
    } else {
      return <>Muerto</>;
    }
  }

  function printGender(e) {
    if (e === "male") {
      return <>Masculino</>;
    }
    if (e === "female") {
      return <>Femenino</>;
    }
    if (e == null) {
      return <>Indefinido</>;
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        {data.map((row) => (
          <>
            <Typography variant="h5" gutterBottom>
              Informacion Detallada:
            </Typography>
            <Typography variant="body1" gutterBottom>
              _id: {row._id}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Genero: {printGender(row.genero)}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Casa: {row.casa}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Slug: {row.slug}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vivo?: {printAlive(row.vivo)}
            </Typography>
          </>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to="/">VOLVER ATRAS</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
