// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_sejuegasgo: 'http://localhost:8080/futbolsantiago',
  url_gestionComplejos: 'http://localhost:4500/#',// Va a esta ruta xq el routing de gestionComplejos esta definido asi, sino se actualiza la url y se pierde el token q se envia
  url_reservaCancha: 'http://localhost:4600',
  //VARIABLES DE SEGURIDAD
  url_oauth_spring: 'http://localhost:8080/futbolsantiago/oauth/token',
  token_name:'access_token', //VA ASI POR DEFECTO, ES EL NOMBRE DEL TOKEN EN EL JSON Q DEVUELVE EL BACK
  client_id: 'sejuegasantiago', //SE CORRESPONDE CON LO DEFINIDO EN EL PROPERTIES EN SPRING
  client_secret:'sejuega2020' //SE CORRESPONDE CON LO DEFINIDO EN EL PROPERTIES EN SPRING
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
