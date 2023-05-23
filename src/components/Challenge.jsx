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
              <ol>
                <li><span style={{ fontWeight: 'bold' }}>Lenguaje de programación: React y Node.js</span></li>
                  <ul>
                    <li>React es una biblioteca de JavaScript muy popUnorderedListar para construir interfaces de usuario interactivas. Al utilizar React, puedes crear componentes reutilizables que faciliten la integración de la API en aplicaciones web.</li>
                    <li>Node.js es un entorno de ejecución de JavaScript del lado del servidor que permite construir aplicaciones y servicios web escalables. Al usar Node.js, puedes aprovechar su capacidad para manejar solicitudes HTTP y realizar llamadas a la API.</li>
                  </ul>
                  <li><span style={{ fontWeight: 'bold' }}>Estructura de la biblioteca:</span></li>
                    <ul>
                      <li>La carpeta <span style={{ fontWeight: 'bold' }}>'src/api/'</span> contendrá los archivos relacionados con la API, como <span style={{ fontWeight: 'bold' }}>'api.js'</span>, donde se implementará la lógica para conectarse y comunicarse con la API, y <span style={{ fontWeight: 'bold' }}>'endpoints.js'</span>, donde se definirán los endpoints disponibles y sus métodos correspondientes.</li>
                      <li>La carpeta <span style={{ fontWeight: 'bold' }}>'src/utils/'</span> contendrá utilidades adicionales para ayudar en la comunicación con la API, como el archivo <span style={{ fontWeight: 'bold' }}></span>request.js, que puede contener funciones para enviar solicitudes HTTP y manejar respuestas.</li>
                      <li>El archivo <span style={{ fontWeight: 'bold' }}>'src/index.js'</span> servirá como punto de entrada principal de la biblioteca, donde se exportarán los componentes y métodos públicos de la API.</li>
                      <li>La carpeta <span style={{ fontWeight: 'bold' }}>'test/'</span> contendrá pruebas automatizadas para asegurar el correcto funcionamiento de la biblioteca.</li>
                      <li>El archivo <span style={{ fontWeight: 'bold' }}>'package.json'</span> contendrá las dependencias y los scripts necesarios para construir, probar y publicar la biblioteca.</li>
                      <li>El archivo <span style={{ fontWeight: 'bold' }}>'README.md'</span> proporcionará instrucciones detalladas de instalación, configuración y uso de la biblioteca.</li>
                      <li>El archivo <span style={{ fontWeight: 'bold' }}>'.gitignore'</span> especificará los archivos y directorios que no deben ser incluidos en el control de versiones.</li>
                    </ul>
              </ol>
              Flujo de trabajo de la biblioteca:
              <ol>
              <li><span style={{ fontWeight: 'bold' }}>Configuración del entorno:</span></li>
                  <ul>
                    <li>Instala Node.js y configura un nuevo proyecto utilizando <span style={{ fontWeight: 'bold' }}>'npm init'</span>.</li>
                  </ul>
                <li><span style={{ fontWeight: 'bold' }}>Implementación de la API:</span></li>
                  <ul>
                    <li>En el archivo <span style={{ fontWeight: 'bold' }}>'api.js'</span>, utiliza la biblioteca axios (u otra similar) para enviar solicitudes HTTP a los endpoints de la API definidos en <span style={{ fontWeight: 'bold' }}>'endpoints.js'</span>.</li>
                    <li>En <span style={{ fontWeight: 'bold' }}>'api.js'</span>, implementa funciones que abstraigan las llamadas a los endpoints y devuelvan las respuestas correspondientes.</li>
                  </ul>
                <li><span style={{ fontWeight: 'bold' }}>Pruebas automatizadas:</span></li>
                  <ul>
                    <li>En el archivo <span style={{ fontWeight: 'bold' }}>'api.test.js'</span>, utiliza una biblioteca de pruebas como Jest para escribir pruebas unitarias que verifiquen el comportamiento correcto de la biblioteca.</li>
                  </ul>
                <li><span style={{ fontWeight: 'bold' }}>Documentación y ejemplos:</span></li>
                  <ul>
                    <li>En el archivo <span style={{ fontWeight: 'bold' }}>'README.md'</span>, proporciona instrucciones claras y ejemplos de cómo instalar la biblioteca, configurar la API y utilizar los diferentes métodos y componentes.</li>
                  </ul>
                <li><span style={{ fontWeight: 'bold' }}></span>Publicación de la biblioteca:</li>
                  <ul>
                    <li>Empaqueta la biblioteca utilizando herramientas como webpack o rollup para crear un archivo distribuible.</li>
                    <li>Si deseas compartir la biblioteca con otros desarrolladores, considera publicarla en un registro de paquetes, como <span style={{ fontWeight: 'bold' }}>'npm'</span>, para facilitar su instalación y gestión. Para ello, puedes utilizar el comando npm publish en la raíz del proyecto después de configurar una cuenta en <span style={{ fontWeight: 'bold' }}>'npmjs.com'</span>.</li>
                    <li>Asegúrate de proporcionar una descripción clara y concisa, etiquetas y una versión adecuada para la biblioteca. También es recomendable incluir un archivo <span style={{ fontWeight: 'bold' }}>'package.json'</span> correctamente configurado.</li>
                  </ul>
              </ol>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 600,
            marginLeft: 32,
            marginRight: 5,
            backgroundColor: "#7086FC",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Conclusiones
            </Typography>
            <Typography variant="body1">
              Considero que la aplicación cumple con lo básico para el manejo de los usuarios. Aún faltan una serie de detalles para la implementación de las transferencias y no sobra decir que desconozco el funcionamiento del backend por lo tanto asumiré que no hay mas medidas de seguridad y aún no se ha implementado una base de datos idonea.<br></br>
              <ul>
                <li>Creo que se debería implementar mas seguridad para los usuarios como un hash para la contraseña y el usuario, para comenzar a mejorar los aspectos de seguridad.</li>
                <li>Se debe crear un clase mas robusta con datos que podrían ser utiles para implementación de otras funcionalidad como el correo para el usuario.</li>
                <li>Considero que se debe comenzar a trabajar con una base de datos para un mejor manejo de toda la información.</li>
                <li>Se deben implementar pruebas para el entorno de desarrollo y evitar un crecimiento exponencial de la deuda técnica.</li>
                <li>En general considero que la API cumple con lo que ofrece y con la documentación realizada será mucho mas fácil trabajar con ella sin importar que tanto conocimiento tengas sobre programación.</li>
                <li></li>
              </ul>
              Con respecto a la prueba tengo que decir que me hubiera gustado tener acceso al backend de la API para realizar las pruebas en postman con mayor comodidad.<br></br>
              Como último debo decir que la parte mas difícil fue la construcción de la librería/SDK debido a que se deben tener en cuenta una serie de muchos factores para decidir cuales son las mejores plataformas y lenguajes teniendo en cuenta los requisitos y carácteristicas de la API.<br></br>
              Es probable que con un poco mas de experiencia e información sobre la aplicación se hubieran podido elegir mejores herramientas de acuerdo a las necesidades.<br></br><br></br>

              ¡Muchas gracias!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
