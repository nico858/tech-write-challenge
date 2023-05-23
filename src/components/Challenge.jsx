import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define el tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: "#0F3057", // Color azul oscuro
    },
    text: {
      primary: "white", // Color blanco para el texto
    },
  },
});

export default function Challenge() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 1000,
            backgroundColor: "#7086FC",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Libreria/SDK
            </Typography>
            <Typography variant="body1">
              Este es el contenido de la tarjeta 1 o acaso la tarjeta se ajusta al tamaño del texto?.<br></br>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 600,
            marginLeft: 32,
            backgroundColor: "#7086FC",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Conclusiones
            </Typography>
            <Typography variant="body1">
              Este es el contenido de la tarjeta 2 entonces que pasa si ambas tarjetas son demasiado anchas?.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
