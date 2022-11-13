# NcrChallenge

### Antes que nada me gustaría agradecerles por la oportunidad de estar acá, con toda sincera hice las cosas con los conocimientos que cuento actualmente. La parte de test unitarios no la complete de la mejor manera porque es un tema desconocido para mi y por razones de tiempo no pude avanzar mucho en el tema, por otra parte, me encantaría poder recibir capacitaciones o formar parte de un equipo en el se trabaje con herramientas de este tipo ya que genera un ambiente de trabajo más prolijo con código de calidad.

## Pasos para poner en funcionamiento la aplicación: 

1. Clonar el repositorio https://github.com/AleMejias/NCR-Challenge.git
2. Abrir la consola y volver a instalar los paquetes de Node con el comando npm install
3. Una vez instalado se debe verificar que estamos en la carpeta del proyecto, una vez verificado, hacer ng serve -o para que nos abra la apliación en nuestro navegador por defecto.

#


## Pipes

1. handleTypeAccount => Recupera el atributo "tipo_letra" y muestra en pantalla que tipo de cuenta es.
2. handleAccountNumber => Debido a que uno de los valores viene con el número de cuenta vacio, tome la decisión de utilizar un Pipe para mostrarlo como "No disponible"
3. formatBalance => Debido a que uno de los valores viene con guiones en el atributo "saldo", tome la decisión de utilizar un Pipe que me regrese solo los números para luego ser pasado por el pipe de Angular "number".

## Servicios

1. AccountService => Encargado de traer los datos desde la api utilizando el metodo getAllAccounts()
2. SessionStorageService => Creado con la intención de que al recargar la página en el componente _AccountDetail_, no se pierdan los datos y en consecuencia la pantalla quede en blanco. El funcionamiento se basa en que __AccountService__ nos provee un observable con los datos recuperados el cual será completado nuevamente en caso de recargar la página por el metodo _getAccountsFromSessionStorage_
3. PaginationService => Creado para manejar la paginación de las cards, su proposito es devolver recibir una copia de todas las cuentas recuperadas por __AccountService__ y dependiendo de la página donde te encuentres y de cuenta información quede en el Array, te devolvera un array cortado con las cuentas necesarias para completar dicha página. Tambien se encarga de controlar devolver "false" para que el componente __AccountList__ oculte el boton de "Más operaciones".

## Agregado y consideraciones

````
1. Decidí agregar un Spinner interceptor como complemento debido a que mis tests unitarios están bastante flojos

2. Debido a que tenemos dos valores con el mismo número de cuenta, utilice un parametro adicional en la ruta llamado "currency" para poder diferenciarlos por su tipo de moneda a la hora de recuperar el detalle.

3. La consigna pedía pesos y dolares. Decidí incluir también los pesos uruguayos debido a que no era especifico.


