/* ENTORNO TOMCAT IBM DESA */

export const environment = {
  production: true,
  url_sejuegasgo: 'http://sejuegasantiago.com/futbolsantiago', //este es el backend spring
  // Va a esta ruta xq el routing de gestionComplejos esta definido asi, sino se actualiza la url y se pierde el token q se envia
  // si aqui pongo el # tengo que usar en la otra app el useHash = true
  url_gestionComplejos: 'http://sejuegasantiago.com/gestion-complejo/#',
  url_reservaCancha: 'http://sejuegasantiago.com/se-juega-sgo/#',
  url_registro: 'http://sejuegasantiago.com/registro/#',
  url_recuperarClave: 'http://sejuegasantiago.com/registro/#/registro/recuperarClave',
  // VARIABLES DE SEGURIDAD
  url_oauth_spring: 'http://sejuegasantiago.com/futbolsantiago/oauth/token',
  token_name: 'access_token', // VA ASI POR DEFECTO, ES EL NOMBRE DEL TOKEN EN EL JSON Q DEVUELVE EL BACK
  client_id: 'sejuegasantiago', // SE CORRESPONDE CON LO DEFINIDO EN EL PROPERTIES EN SPRING
  client_secret: 'sejuega2020' // SE CORRESPONDE CON LO DEFINIDO EN EL PROPERTIES EN SPRING
};
