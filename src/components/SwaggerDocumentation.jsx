import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerJson from '../Swagger.json'; // Reemplaza con la ruta correcta a tu archivo JSON de Swagger

const SwaggerDocumentation = () => {
  const swaggerOptions = {
    spec: swaggerJson,
  };

  return <SwaggerUI {...swaggerOptions} />;
};

export default SwaggerDocumentation;

