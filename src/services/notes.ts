
export type ContentBlockType = 'text' | 'code';
export type LanguageType = 'Python' | 'JavaScript' | 'Java' | 'C#' | 'React';
export type ConceptType = 'apuntes' | 'practica'

export interface ContentBlock {
    type: ContentBlockType;
    value: string;
    language?: string; // Opcional, solo necesario si type es 'code'
}

export interface Concept {
    id: string;
    title: string;
    shortDescription: string;
    keyConcept: string;
    content: ContentBlock[];
    language: LanguageType;
    conceptType: ConceptType;
    tags: string[];
    difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
}

const KNOWLEDGE_BASE: Concept[] = [
    {
  "id": "fundamentos-js-parte-1",
  "title": "Introducción a JavaScript Moderno para React",
  "shortDescription": "Una guía simplificada para entender las herramientas de JavaScript que usarás día a día en React, explicadas sin tecnicismos excesivos.",
  "keyConcept": "Programar en React es mucho más fácil si aprendes a utilizar **funciones flecha** (Arrow Functions) y a cómo **desempaquetar datos** (Destructuring).",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Fundamentos",
    "Frontend",
    "Lógica"
  ],
  "difficulty": "Básico",
  "content": [
    {
      "type": "text",
      "value": "Antes de construir aplicaciones con React, necesitamos conocer bien nuestras herramientas básicas. React está hecho de JavaScript, así que si dominas estos conceptos, la mitad del trabajo está hecho."
    },
    {
      "type": "text",
      "value": "Empecemos con las **Arrow Functions** (Funciones Flecha). Piensa en ellas como una forma abreviada y moderna de escribir funciones. Los programadores somos eficientes (o vagos, según se mire) y nos gusta escribir menos para hacer lo mismo."
    },
    {
      "type": "code",
      "value": "// Función antigua (muy verbosa)\nfunction saludar(nombre) {\n  return 'Hola ' + nombre;\n}\n\n// Arrow Function (directa y limpia)\nconst saludarFlecha = (nombre) => 'Hola ' + nombre;"
    },
    {
      "type": "text",
      "value": "Fíjate en lo que acaba de pasar: hemos quitado la palabra `function`, las llaves `{}` y la palabra `return`. A esto se le llama **retorno implícito**. Si tu función hace algo simple en una sola línea, la flecha `=>` dice: 'toma esto y devuélvelo automáticamente'."
    },
    {
      "type": "text",
      "value": "Ahora, hablemos del famoso y temido **`this`**. Es uno de los conceptos que más confunde a los principiantes, así que vamos a explicarlo con una analogía sencilla."
    },
    {
      "type": "text",
      "value": "Imagínate que `this` es la respuesta a la pregunta: **'¿Quién es el dueño de esta función ahora mismo?'**. O dicho de otra forma: '¿Quién me está llamando?'."
    },
    {
      "type": "text",
      "value": "En las funciones antiguas, `this` era como un camaleón. Cambiaba de identidad dependiendo de *quién* ejecutaba la función. Si la llamaba un botón, `this` era el botón. Si la llamaba la ventana del navegador, `this` era la ventana. ¡Un caos!"
    },
    {
      "type": "text",
      "value": "Las **Arrow Functions** arreglaron esto. Ellas son leales. No les importa quién las llame; recuerdan **dónde fueron creadas**. Si creas una función flecha dentro de un componente de React, `this` siempre será ese componente, pase lo que pase."
    },
    {
      "type": "code",
      "value": "const miPerfil = {\n  nombre: 'Alex',\n  \n  // Función antigua: 'this' se confunde fácil\n  presentarAntiguo: function() {\n    // Si esto lo llama un botón, 'this' ya no es 'miPerfil'\n    console.log(this.nombre);\n  },\n\n  // Arrow Function: 'this' es leal\n  presentarNuevo: () => {\n    // Aquí 'this' recuerda el contexto donde se escribió el código\n    // Esto hace que el código sea mucho más predecible en React.\n    console.log(this.nombre);\n  }\n};"
    },
    {
      "type": "text",
      "value": "Pasemos a algo más divertido y visual: la **Destructuración** (Destructuring). No dejes que el nombre te asuste; en realidad debería llamarse 'Desempaquetado'."
    },
    {
      "type": "text",
      "value": "Imagina que tienes una mochila (un objeto) llena de cosas: un libro, una manzana y un lápiz. Antiguamente, cada vez que querías usar algo, tenías que meter la mano en la mochila."
    },
    {
      "type": "code",
      "value": "// El objeto (la mochila)\nconst mochila = { libro: 'Harry Potter', fruta: 'Manzana', util: 'Lápiz' };\n\n// La forma antigua (repetitiva)\nconst miLibro = mochila.libro;\nconst miFruta = mochila.fruta;\nconsole.log(mochila.libro);"
    },
    {
      "type": "text",
      "value": "La destructuración te permite **volcar la mochila sobre la mesa** y coger todo lo que necesitas de una sola vez, guardándolo en variables listas para usar."
    },
    {
      "type": "code",
      "value": "// Destructuración (sacamos lo que queremos)\nconst { libro, fruta } = mochila;\n\n// ¡Listo! Ya podemos usarlas directamente sin repetir 'mochila.'\nconsole.log(libro); // 'Harry Potter'"
    },
    {
      "type": "text",
      "value": "Esto es utilísimo en React. Cuando recibimos datos en un componente (las famosas `props`), en lugar de escribir `props.nombre`, `props.edad`, `props.foto` todo el rato, simplemente 'desempaquetamos' esas variables al principio."
    },
    {
      "type": "text",
      "value": "¿Y si queremos cambiarle el nombre a algo al sacarlo? Se puede. Imagina que en tu mesa ya tienes una 'fruta' y no quieres que se mezclen. Usamos los dos puntos `:` para renombrar."
    },
    {
      "type": "code",
      "value": "const { fruta: merienda } = mochila;\nconsole.log(merienda); // 'Manzana'"
    },
    {
      "type": "text",
      "value": "También existe la destructuración de **Arrays** (listas). Aquí no importa el nombre (porque los items de una lista no tienen nombre), sino el **orden**. Es como una fila de personas."
    },
    {
      "type": "code",
      "value": "const carrera = ['Oro', 'Plata', 'Bronce'];\n\n// El primero a la variable 'ganador', el segundo a 'segundo'\nconst [ganador, segundo] = carrera;\n\nconsole.log(ganador); // 'Oro'"
    },
    {
      "type": "text",
      "value": "Esto lo usarás muchísimo en React con un comando llamado `useState`, que siempre te devuelve dos cosas en una lista: el valor actual y una función para cambiarlo."
    },
    {
      "type": "text",
      "value": "Ahora hablemos de copiar cosas con el **Spread Operator** (`...` o los tres puntitos). En React, hay una regla de oro: **nunca modifiques los datos originales directamente** (inmutabilidad). Es como si tuvieras un documento importante; no escribes encima, sino que haces una fotocopia y escribes en la copia."
    },
    {
      "type": "text",
      "value": "Los tres puntitos `...` funcionan como esa fotocopiadora. Dicen: 'Copia todo lo que hay dentro de este objeto y ponlo aquí'."
    },
    {
      "type": "code",
      "value": "const usuario = { nombre: 'Juan', edad: 30 };\n\n// MAL: Modificar el original\n// usuario.edad = 31;\n\n// BIEN: Crear una copia con los cambios\nconst usuarioActualizado = {\n  ...usuario,  // Copia nombre y edad\n  edad: 31     // Sobrescribe solo la edad en la nueva copia\n};"
    },
    {
      "type": "text",
      "value": "Por último, los **Template Literals**. Es una forma elegante de mezclar texto y variables. Antes teníamos que sumar textos con el símbolo `+` y era un lío de comillas. Ahora usamos las comillas invertidas (backticks) `` ` ``."
    },
    {
      "type": "code",
      "value": "const nombre = 'React';\nconst nivel = 'Básico';\n\n// Antes\nconst mensajeFeo = 'Estoy aprendiendo ' + nombre + ' nivel ' + nivel;\n\n// Ahora (Mucho más limpio)\nconst mensajeBonito = `Estoy aprendiendo ${nombre} nivel ${nivel}`;"
    },
    {
      "type": "text",
      "value": "Con estas herramientas en tu cinturón (Arrow Functions, Destructuración, Spread y Template Literals), el código de React dejará de parecer jeroglíficos y empezará a tener todo el sentido del mundo."
    }
  ]
},
{
  "id": "fundamentos-js-parte-2",
  "title": "Orden y Tiempo: Fundamentos de JavaSript",
  "shortDescription": "Aprende a organizar tus archivos como un profesional y a manejar 'la espera' de datos (asincronía) sin volverte loco.",
  "keyConcept": "La magia de las aplicaciones modernas está en saber **pedir datos** a un servidor y **esperar** la respuesta sin congelar la pantalla.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Fundamentos",
    "Arquitectura",
    "Frontend"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "¡Bienvenido a la segunda parte! Ya sabemos escribir funciones y manejar datos. Ahora vamos a ver cómo organizar nuestra 'casa' (el código) y cómo interactuar con el mundo exterior (servidores y bases de datos)."
    },
    {
      "type": "text",
      "value": "Primero, hablemos de los **Módulos (ES Modules)**. Imagina que estás escribiendo un libro. No escribirías todo el libro en una sola página kilométrica, ¿verdad? Lo dividirías en capítulos. En programación es igual: dividimos el código en archivos separados."
    },
    {
      "type": "text",
      "value": "Para conectar estos archivos usamos dos palabras mágicas: **`export`** (para sacar algo de un archivo) y **`import`** (para traerlo a otro)."
    },
    {
      "type": "code",
      "value": "// Archivo: matematicas.js\n// Exportación Nombrada: Exportamos herramientas específicas\nexport const sumar = (a, b) => a + b;\nexport const restar = (a, b) => a - b;\n\n// Archivo: Calculadora.js\n// Importación: Necesitamos las llaves {} porque buscamos nombres exactos\nimport { sumar, restar } from './matematicas';"
    },
    {
      "type": "text",
      "value": "Existe otro tipo de exportación llamada **Default Export** (por defecto). Úsala cuando un archivo solo tiene una cosa principal, como un componente de React. Es como decir: 'Si importas este archivo, llévate esto automáticamente'."
    },
    {
      "type": "code",
      "value": "// Archivo: Boton.js\nconst Boton = () => <button>Click</button>;\nexport default Boton; // Solo uno por archivo\n\n// Archivo: App.js\n// Sin llaves. Podemos ponerle el nombre que queramos al recibirlo.\nimport MiBotonSuperChulo from './Boton';"
    },
    {
      "type": "text",
      "value": "Ahora pasemos a la toma de decisiones con los **Ternarios**. En React, a menudo queremos mostrar una cosa U otra (como 'Iniciar Sesión' o 'Cerrar Sesión'). El `if` clásico es muy aparatoso para esto."
    },
    {
      "type": "text",
      "value": "El operador ternario `? :` es como un `if/else` en una sola línea. Pregunta: `¿Condición? (Si sí, haz esto) : (Si no, haz esto)`."
    },
    {
      "type": "code",
      "value": "const edad = 20;\n\n// Ternario: ¿Es mayor de 18? \n// Si true -> 'Cerveza'\n// Si false -> 'Zumo'\nconst bebida = edad >= 18 ? 'Cerveza' : 'Zumo';"
    },
    {
      "type": "text",
      "value": "A veces solo queremos mostrar algo si la condición es verdadera, y nada si es falsa. Para eso usamos el operador **`&&`** (And). Piensa en él como un portero de discoteca: 'Si tienes entrada, pasas. Si no, te quedas fuera (y no pasa nada)'."
    },
    {
      "type": "code",
      "value": "const hayError = true;\n\n// Si hayError es true, muestra el mensaje.\n// Si es false, JavaScript se detiene y no muestra nada.\n{hayError && <p>Ocurrió un error inesperado</p>}"
    },
    {
      "type": "text",
      "value": "Cuidado con el operador `||` (O) para valores por defecto. Si usas `0`, JavaScript piensa que es 'falso'. Para arreglar esto, usamos el nuevo operador **`??`** (Nullish Coalescing). Este solo salta si el valor es realmente `null` o `undefined`."
    },
    {
      "type": "code",
      "value": "const puntos = 0;\n\n// Malo: 0 es falsy, así que muestra 'Sin puntos'\nconst marcadorMalo = puntos || 'Sin puntos'; \n\n// Bueno: 0 es un número válido, así que muestra 0\nconst marcadorBueno = puntos ?? 'Sin puntos'; "
    },
    {
      "type": "text",
      "value": "Ahora entramos en terreno pantanoso pero crucial: **La Asincronía y el Event Loop**. JavaScript es como un camarero en un restaurante muy concurrido. Solo hay UN camarero (es 'single-threaded')."
    },
    {
      "type": "text",
      "value": "Si el camarero se queda en la cocina esperando a que el chef cocine un plato, nadie atiende las mesas. Eso bloquearía el restaurante. ¿La solución? El camarero toma la nota, la pasa a cocina, y sigue atendiendo mesas. Cuando la cocina termina, le avisa."
    },
    {
      "type": "text",
      "value": "En código, esa 'nota para la cocina' es una **Promesa**. Una promesa es un objeto que te dice: 'Ahora no tengo el dato, pero te prometo que en el futuro te diré si tuve éxito o si fallé'."
    },
    {
      "type": "text",
      "value": "Para manejar estas promesas de forma moderna y fácil de leer, usamos **Async / Await**. Hacen que el código parezca una pausa natural en la lectura."
    },
    {
      "type": "code",
      "value": "// 'async' avisa de que esta función va a tener esperas\nconst pedirPizza = async () => {\n  try {\n    console.log('Pidiendo pizza...');\n    \n    // 'await' pausa ESTA función (no todo el navegador) hasta que llegue la pizza\n    const pizza = await cocinarPizza();\n    \n    console.log('¡A comer!', pizza);\n  } catch (error) {\n    // Si la cocina se quema (la promesa falla), caemos aquí\n    console.log('Hoy no se cena:', error);\n  }\n};"
    },
    {
      "type": "text",
      "value": "Finalmente, ¿cómo pedimos datos a otros servidores (APIs)? Usando **Fetch**. Es la forma nativa del navegador de hacer peticiones."
    },
    {
      "type": "text",
      "value": "Ojo, `fetch` tiene truco: es un proceso de dos pasos. Primero llega el 'paquete' (la respuesta HTTP) y luego tenemos que 'abrirlo' para leer el contenido (convertirlo a JSON)."
    },
    {
      "type": "code",
      "value": "const obtenerUsuarios = async () => {\n  // Paso 1: Hacemos la llamada (Fetch)\n  const respuesta = await fetch('https://api.ejemplo.com/usuarios');\n  \n  // Paso 2: Convertimos los datos 'crudos' a JSON entendible\n  const datos = await respuesta.json();\n  \n  return datos;\n};"
    },
    {
      "type": "text",
      "value": "Entender esto es la base de todo lo que harás en React: cargar perfiles de usuario, listas de productos, enviar formularios... todo funciona con `async`, `await` y `fetch`."
    }
  ]
},
{
  "id": "ejercicio-fundamentos-js",
  "title": "Desafío Práctico: Refactorización del 'Legacy Code'",
  "shortDescription": "Pon a prueba tus conocimientos transformando un código JavaScript antiguo y propenso a errores en una solución moderna, limpia y robusta.",
  "keyConcept": "La capacidad de **refactorizar** código antiguo aplicando sintaxis moderna (ES6+) es tan importante como escribir código nuevo desde cero.",
  "conceptType": "practica",
  "language": "React",
  "tags": [
    "Fundamentos",
    "Lógica",
    "Algoritmos"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Para consolidar los conocimientos adquiridos en los Temas 0 (Parte 1 y 2), te propongo un ejercicio de situación real. Imagina que acabas de llegar a una empresa y te encuentras con un bloque de código escrito hace 8 años."
    },
    {
      "type": "text",
      "value": "Tu tarea es actuar como el desarrollador senior y **refactorizar** este código. El código original funciona, pero tiene malas prácticas: muta datos, usa concatenación de strings, promesas encadenadas antiguas y no maneja errores correctamente."
    },
    {
      "type": "text",
      "value": "Aquí tienes el código 'Legacy' (antiguo) que debes arreglar:"
    },
    {
      "type": "code",
      "value": "// CÓDIGO A REFACTORIZAR (NO COPIAR EN TU PROYECTO)\nfunction procesarUsuario(id) {\n  var usuario = {};\n  \n  // 1. Petición antigua con .then()\n  fetch('https://api.fake.com/users/' + id)\n    .then(function(response) {\n      return response.json();\n    })\n    .then(function(data) {\n      // 2. Asignación manual y repetitiva\n      var nombre = data.name;\n      var email = data.email;\n      var ciudad = 'Desconocida';\n      if (data.address && data.address.city) {\n        ciudad = data.address.city;\n      }\n\n      // 3. Mutación directa del objeto\n      usuario.nombre = nombre;\n      usuario.info = nombre + ' vive en ' + ciudad;\n      usuario.esAdmin = false;\n\n      if (data.role === 'admin') {\n         usuario.esAdmin = true;\n      } else {\n         usuario.esAdmin = false;\n      }\n      \n      // 4. Modificación posterior destructiva\n      usuario.timestamp = Date.now();\n      \n      console.log(usuario);\n    })\n    .catch(function(err) {\n      console.error('Error');\n    });\n}"
    },
    {
      "type": "text",
      "value": "Este código es difícil de leer y mantener. A continuación, te detallo los **Requisitos del Desafío** para la versión moderna."
    },
    {
      "type": "text",
      "value": "1. **Async/Await**: Elimina los `.then()` y `.catch()`. Convierte la función principal en `async` y utiliza `await` para la petición `fetch`. Envuelve todo en un bloque `try/catch`."
    },
    {
      "type": "text",
      "value": "2. **Arrow Functions**: No utilices la palabra clave `function`. Convierte `procesarUsuario` en una constante que almacene una función flecha."
    },
    {
      "type": "text",
      "value": "3. **Desestructuración (Destructuring)**: Extrae `name`, `email`, `role` y `address` directamente de la respuesta. Usa **renombrado** para que `address.city` se guarde en una variable llamada `ciudad` y usa **valores por defecto** para evitar el `if` de la ciudad."
    },
    {
      "type": "text",
      "value": "4. **Ternarios**: Elimina el bloque `if/else` que decide si es admin. Hazlo en una sola línea usando el operador ternario."
    },
    {
      "type": "text",
      "value": "5. **Inmutabilidad**: No crees un objeto vacío `var usuario = {}` para luego llenarlo. Crea el objeto final de una sola vez (`const usuarioFinal = ...`). Si necesitas añadir el timestamp, crea un nuevo objeto copiando el anterior con el **Spread Operator**."
    },
    {
      "type": "text",
      "value": "6. **Template Literals**: Elimina las concatenaciones con `+`. Usa backticks para crear la frase de información."
    },
    {
      "type": "text",
      "value": "Tómate un momento para escribir tu solución en un papel o editor antes de ver la respuesta correcta abajo."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "Aquí tienes la **solución comentada**:"
    },
    {
      "type": "code",
      "value": "const procesarUsuarioModerno = async (id) => {\n  try {\n    // 1. Async/Await + Template Literal en la URL\n    const response = await fetch(`https://api.fake.com/users/${id}`);\n    const data = await response.json();\n\n    // 2. Destructuring anidado con Alias y Valor por Defecto\n    const {\n      name,\n      email,\n      role,\n      address: { city: ciudad = 'Desconocida' } = {} // Manejo robusto de undefined\n    } = data;\n\n    // 3. Creación del objeto base (Declarativa)\n    const usuarioBase = {\n      nombre: name,\n      email,\n      // Template Literal para strings complejos\n      info: `${name} vive en ${ciudad}`,\n      // Ternario para lógica simple\n      esAdmin: role === 'admin' ? true : false\n    };\n\n    // 4. Inmutabilidad con Spread Operator\n    // Creamos una COPIA añadiendo el timestamp, sin tocar usuarioBase\n    const usuarioFinal = {\n      ...usuarioBase,\n      timestamp: Date.now()\n    };\n\n    console.log(usuarioFinal);\n    return usuarioFinal;\n\n  } catch (error) {\n    console.error('Ha ocurrido un error al procesar:', error);\n  }\n};"
    },
    {
      "type": "text",
      "value": "Analicemos las mejoras clave. Primero, la legibilidad. El flujo se lee de arriba a abajo, sin saltos mentales provocados por los callbacks de las promesas."
    },
    {
      "type": "text",
      "value": "Segundo, la robustez. Fíjate en la línea: `address: { city: ciudad = 'Desconocida' } = {}`. Esto es un patrón avanzado. Si `data.address` viene `undefined`, el `= {}` final evita que el código explote, y `ciudad` tomará el valor 'Desconocida'."
    },
    {
      "type": "text",
      "value": "Tercero, la seguridad de los datos. Al usar `const` y el Spread Operator, nos aseguramos de no estar modificando referencias ocultas que podrían causar bugs en otras partes de la aplicación."
    },
    {
      "type": "text",
      "value": "Si has conseguido aplicar al menos 4 de los 6 requisitos, vas por buen camino. Si has entendido la lógica del `address` en la desestructuración, tu nivel es superior a la media de principiantes."
    },
    {
      "type": "text",
      "value": "Este tipo de transformaciones es lo que harás día a día al migrar componentes de clase antiguos a componentes funcionales con Hooks."
    }
  ]
},
{
  "id": "fundamentos-js-http-api-fetch",
  "title": "Protocolo HTTP, APIs y Fetch: La Comunicación de Datos",
  "shortDescription": "Dominio del intercambio de datos en la web: verbos HTTP, códigos de estado y consumo robusto de APIs mediante Fetch.",
  "keyConcept": "La **Fetch API** es el estándar moderno para peticiones asíncronas, pero requiere un manejo manual de errores HTTP ya que **no rechaza la promesa** en códigos 4xx o 5xx.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Fundamentos",
    "Backend",
    "Arquitectura"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Para que una aplicación React sea útil, necesita datos. Estos datos no viven en el navegador del usuario, sino en servidores remotos. Para acceder a ellos, utilizamos el protocolo que mueve la web: **HTTP** (Hypertext Transfer Protocol)."
    },
    {
      "type": "text",
      "value": "El modelo mental es una conversación: el Cliente (tu navegador/app React) hace una **Petición** (Request) y el Servidor responde con una **Respuesta** (Response). Esta comunicación no es libre; sigue reglas estrictas."
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "Primero, debemos entender los **Métodos HTTP** (o verbos). Indican la *intención* de la operación sobre un recurso. En una arquitectura REST, los más comunes son:"
    },
    {
      "type": "code",
      "value": "// GET:    Pedir datos (Lectura). No modifica nada en el servidor.\n// POST:   Enviar datos nuevos (Creación). Ej: Registro de usuario.\n// PUT:    Reemplazar un recurso existente completo (Edición total).\n// PATCH:  Modificar parcialmente un recurso (Edición parcial).\n// DELETE: Eliminar un recurso."
    },
    {
      "type": "text",
      "value": "Cuando el servidor responde, incluye un **Código de Estado** (Status Code). Es un número de tres cifras que nos dice 'cómo fue todo'. Memorizar los grupos principales es obligatorio:"
    },
    {
      "type": "text",
      "value": "* **2xx (Éxito):** Todo bien. (200 OK, 201 Created).\n* **3xx (Redirección):** El recurso se ha movido.\n* **4xx (Error del Cliente):** Tú (el frontend) hiciste algo mal. (400 Bad Request, 401 Unauthorized, 404 Not Found).\n* **5xx (Error del Servidor):** El backend falló. (500 Internal Server Error)."
    },
    {
      "type": "text",
      "value": "Una **API** (Application Programming Interface) es el contrato que define cómo tu frontend puede hablar con el backend. Hoy en día, el formato estándar de intercambio de datos es **JSON** (JavaScript Object Notation), que ya conocemos."
    },
    {
      "type": "text",
      "value": "Para consumir estas APIs desde JavaScript, utilizamos la **Fetch API**. Es una función nativa del navegador, basada en Promesas, que reemplazó al antiguo `XMLHttpRequest`."
    },
    {
      "type": "text",
      "value": "Una peculiaridad crítica de `fetch` es que es un proceso de **dos pasos**. La función `fetch` devuelve una promesa que se resuelve en cuanto llegan las cabeceras (headers) de la respuesta, pero el cuerpo (el JSON real) aún puede estar viajando por la red."
    },
    {
      "type": "code",
      "value": "const obtenerUsuario = async (id) => {\n  // Paso 1: Esperar la conexión y las cabeceras\n  const response = await fetch(`https://api.ejemplo.com/users/${id}`);\n  \n  // Paso 2: Leer el stream del cuerpo y parsearlo a JSON\n  const data = await response.json();\n  \n  console.log(data);\n};"
    },
    {
      "type": "text",
      "value": "Por defecto, `fetch` realiza una petición **GET**. Si queremos hacer un POST (enviar datos), debemos pasar un segundo argumento: un objeto de configuración."
    },
    {
      "type": "text",
      "value": "Aquí es vital configurar dos cosas: el `method` y, muy importante, los **Headers**. El servidor necesita saber qué tipo de datos le estás enviando. El header `Content-Type: application/json` es la norma estándar."
    },
    {
      "type": "code",
      "value": "const crearProducto = async (nuevoProducto) => {\n  const response = await fetch('https://api.ejemplo.com/productos', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json' // Avisamos que enviamos JSON\n    },\n    // El cuerpo debe ser un STRING, no un objeto JS puro\n    body: JSON.stringify(nuevoProducto)\n  });\n  \n  return await response.json();\n};"
    },
    {
      "type": "text",
      "value": "Atención al uso de `JSON.stringify()` en el `body`. No puedes enviar objetos de JavaScript puros por la red; debes serializarlos a texto plano."
    },
    {
      "type": "text",
      "value": "Ahora abordemos el punto donde fallan muchos desarrolladores: el **Manejo de Errores**. Una promesa de `fetch` **NO** se rechaza (no entra en el `catch`) si el servidor devuelve un error 404 o 500."
    },
    {
      "type": "text",
      "value": "Para `fetch`, recibir un 404 es una petición exitosa: se conectó con el servidor y el servidor respondió 'No lo encuentro'. La promesa solo falla si hay un error de red (sin internet, DNS fallido)."
    },
    {
      "type": "text",
      "value": "Por lo tanto, debemos verificar manualmente la propiedad booleana `response.ok` antes de intentar parsear el JSON."
    },
    {
      "type": "code",
      "value": "const obtenerDatosSeguro = async () => {\n  try {\n    const response = await fetch('/api/datos');\n    \n    // Verificación manual de estado HTTP (200-299)\n    if (!response.ok) {\n      throw new Error(`Error HTTP: ${response.status}`);\n    }\n\n    const data = await response.json();\n    return data;\n\n  } catch (error) {\n    // Aquí caen tanto errores de red como los que lanzamos manualmente arriba\n    console.error('Fallo en la petición:', error.message);\n  }\n};"
    },
    {
      "type": "text",
      "value": "Además del cuerpo, a veces necesitamos enviar información en la propia URL, conocida como **Query Parameters** (ej: `?busqueda=react&orden=asc`)."
    },
    {
      "type": "text",
      "value": "Aunque puedes concatenar strings manualmente, la forma profesional es usar la clase `URLSearchParams`, que se encarga de codificar correctamente los espacios y caracteres especiales."
    },
    {
      "type": "code",
      "value": "const buscar = async (termino, pagina) => {\n  const params = new URLSearchParams({\n    q: termino,\n    page: pagina,\n    lang: 'es'\n  });\n\n  // Resultado: /api/buscar?q=react&page=1&lang=es\n  const response = await fetch(`/api/buscar?${params.toString()}`);\n  const data = await response.json();\n  return data;\n};"
    },
    {
      "type": "text",
      "value": "Finalmente, hablemos de la **Autenticación**. La mayoría de APIs privadas requieren que te identifiques. Esto no suele hacerse en la URL, sino mediante un header específico, usualmente `Authorization` con un token Bearer."
    },
    {
      "type": "code",
      "value": "const headers = {\n  'Content-Type': 'application/json',\n  'Authorization': `Bearer ${tokenDeUsuario}` // Token JWT usualmente\n};\n\nfetch('/api/perfil-privado', { headers });"
    },
    {
      "type": "text",
      "value": "Dominar `fetch` nativo te da el control total y te ayuda a entender qué ocurre \"bajo el capó\", incluso si más adelante decides usar librerías como Axios o React Query."
    }
  ]
},
{
  "id": "ejercicio-fetch-pokeapi",
  "title": "Ejercicio Práctico: Consumiendo la PokéAPI con Fetch y Manejo de Errores",
  "shortDescription": "Construye un visor de Pokémon en React que gestione peticiones asíncronas, estados de carga y, crucialmente, errores HTTP 404 manuales.",
  "keyConcept": "Al consumir APIs externas con **fetch**, es imperativo implementar una gestión de estado tripular (**loading**, **error**, **data**) y verificar manualmente `response.ok` para detectar errores HTTP como el 404.",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Fundamentos",
    "Backend",
    "Frontend"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Vamos a poner a prueba tus conocimientos sobre el protocolo HTTP y la API `fetch` en un entorno de React real. Usaremos la famosa **PokéAPI**, una API pública, gratuita y excelente para practicar porque simula muy bien el comportamiento de un backend RESTful real."
    },
    {
      "type": "text",
      "value": "Tu objetivo es crear un componente llamado `VisorPokemon`. Este componente recibirá el nombre de un Pokémon como prop y deberá buscar su información en la API."
    },
    {
      "type": "text",
      "value": "El endpoint que utilizaremos es: `pokeapi.co/api/v2/pokemon/{nombre}`. Por ejemplo, para buscar a Pikachu, haríamos una petición GET a `pokeapi.co/api/v2/pokemon/pikachu`."
    },
    {
      "type": "text",
      "value": "Este ejercicio es fundamental porque te obligará a lidiar con la asincronía y los tres estados posibles de cualquier interfaz de datos: cargando, éxito y error."
    },
    {
      "type": "text",
      "value": "### Requisitos del Desafío"
    },
    {
      "type": "text",
      "value": "1. **Gestión de Estado Completa**: Tu componente debe manejar tres piezas de estado usando `useState`: `cargando` (booleano, true al inicio), `error` (string o null) y `pokemon` (objeto o null para los datos)."
    },
    {
      "type": "text",
      "value": "2. **Efecto de Búsqueda**: Utiliza `useEffect` para disparar la petición fetch cada vez que cambie la prop `nombre`. Recuerda que el nombre debe pasarse a minúsculas para que la API lo acepte."
    },
    {
      "type": "text",
      "value": "3. **Manejo Robusto de Errores HTTP**: Este es el punto crítico. Si buscas un Pokémon que no existe (ej: \"agumon\"), la PokéAPI devolverá un estado HTTP **404 Not Found**."
    },
    {
      "type": "text",
      "value": "Recuerda que `fetch` **NO** lanza una excepción en este caso. Debes verificar manualmente `response.ok` y lanzar tu propio error si es `false`. Si no lo haces, tu código intentará hacer `.json()` sobre una respuesta de error y fallará silenciosamente o de forma extraña."
    },
    {
      "type": "text",
      "value": "4. **Renderizado Condicional**: La interfaz debe mostrar algo distinto según el estado actual: un mensaje de \"Cargando...\", un mensaje de error en rojo si falló, o la foto y el nombre del Pokémon si todo fue bien."
    },
    {
      "type": "text",
      "value": "Aquí tienes el esqueleto inicial para comenzar:"
    },
    {
      "type": "code",
      "value": "import { useState, useEffect } from 'react';\n\nconst VisorPokemon = ({ nombreBusqueda }) => {\n  // 1. Define tus estados aquí (cargando, error, pokemon)\n  // const [...] = useState(...);\n\n  useEffect(() => {\n    if (!nombreBusqueda) return;\n\n    // Define tu función asíncrona aquí dentro\n    const obtenerPokemon = async () => {\n      // Reinicia estados antes de empezar\n      // Inicia el try/catch\n      // Haz el fetch\n      // CRÍTICO: Verifica response.ok\n      // Parsea el JSON\n      // Guarda los datos\n    };\n\n    obtenerPokemon();\n    \n  }, [nombreBusqueda]); // Se ejecuta al cambiar el nombre\n\n  // 2. Renderizado condicional basado en los estados\n  // if (cargando) return ...\n  // if (error) return ...\n\n  return (\n    <div className=\"tarjeta-pokemon\">\n      {/* Muestra los datos del pokemon aquí */}\n      {/* Ej: pokemon.sprites.front_default y pokemon.name */}\n    </div>\n  );\n};\n\n// Componente padre para probar\nconst App = () => {\n  const [input, setInput] = useState('pikachu');\n  return (\n    <div style={{ padding: 20 }}>\n      <input value={input} onChange={e => setInput(e.target.value)} />\n      <hr />\n      {/* Pasamos el nombre al visor */}\n      <VisorPokemon nombreBusqueda={input} />\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Tómate tu tiempo. Asegúrate de probar casos de éxito (ej: \"ditto\") y casos de error (ej: un nombre inventado). El manejo del 404 es lo que diferencia a un junior de alguien que entiende HTTP."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "### Solución"
    },
    {
      "type": "text",
      "value": "Analicemos la implementación correcta, prestando atención al flujo de datos y la gestión de excepciones."
    },
    {
      "type": "code",
      "value": "import { useState, useEffect } from 'react';\n\nconst VisorPokemon = ({ nombreBusqueda }) => {\n  // Estado tripular: Manejamos las 3 situaciones posibles de la UI\n  const [pokemon, setPokemon] = useState(null);\n  const [cargando, setCargando] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    // Evitamos peticiones si no hay nombre\n    if (!nombreBusqueda) return;\n\n    const obtenerDatos = async () => {\n      // 1. RESET: Siempre reiniciamos los estados antes de una nueva petición\n      setCargando(true);\n      setError(null);\n      setPokemon(null); // Limpiamos el anterior por si acaso\n\n      try {\n        const nombreFormateado = nombreBusqueda.toLowerCase();\n        console.log(`Pidiendo datos de: ${nombreFormateado}...`);\n        \n        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreFormateado}`);\n\n        // 2. VERIFICACIÓN HTTP CRÍTICA\n        // fetch no lanza error en 404, así que lo comprobamos manualmente.\n        if (!response.ok) {\n          if (response.status === 404) {\n             throw new Error(`El Pokémon \"${nombreBusqueda}\" no existe.`);\n          } else {\n             throw new Error(`Error del servidor: ${response.status}`);\n          }\n        }\n\n        // 3. PARSEO (Solo llegamos aquí si response.ok es true)\n        const data = await response.json();\n        \n        // 4. ÉXITO: Guardamos datos\n        setPokemon(data);\n\n      } catch (err) {\n        // 5. ERROR: Capturamos errores de red O los errores que lanzamos manualmente arriba\n        console.error('Fallo en la petición:', err.message);\n        setError(err.message);\n      } finally {\n        // 6. LIMPIEZA: Sea éxito o error, ya no estamos cargando\n        setCargando(false);\n      }\n    };\n\n    obtenerDatos();\n    \n    // (Opcional avanzado: Aquí podría ir una función de limpieza para cancelar el fetch)\n\n  }, [nombreBusqueda]); // Dependencia crucial\n\n  // Renderizado Condicional (Early Returns)\n  if (cargando) return <p className=\"loading\">⏳ Buscando en la Pokédex...</p>;\n  \n  if (error) return <p className=\"error\" style={{color: 'red'}}>❌ {error}</p>;\n\n  // Si llegamos aquí, no estamos cargando, no hay error, y tenemos pokemon\n  return (\n    <div className=\"tarjeta-pokemon\" style={{ border: '1px solid #ddd', padding: 20, maxWidth: 300 }}>\n      <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>\n      <img \n        src={pokemon.sprites.front_default} \n        alt={pokemon.name} \n        style={{ width: 150, height: 150, imageRendering: 'pixelated' }}\n      />\n      <div>\n        <small>ID: #{pokemon.id}</small>\n        <ul>\n          {pokemon.types.map(t => <li key={t.type.name}>{t.type.name}</li>)}\n        </ul>\n      </div>\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Observa el bloque `try/catch/finally`. Es el patrón estándar de oro para peticiones asíncronas."
    },
    {
      "type": "text",
      "value": "El uso de `finally` es una buena práctica: nos asegura que, pase lo que pase (éxito o error), el estado `cargando` volverá a `false`, evitando que la interfaz se quede 'colgada' con un spinner eterno."
    },
    {
      "type": "text",
      "value": "El punto más importante que debes interiorizar es el `if (!response.ok) throw new Error(...)`. Sin esto, tu aplicación no sabe diferenciar entre un \"No encontrado\" y un éxito, y tratará de renderizar datos que no existen."
    },
    {
      "type": "text",
      "value": "Este patrón es la base de toda comunicación robusta con un backend en React."
    }
  ]
},
{
  "id": "tema-1-entorno-jsx",
  "title": "Entorno de desarroollo con Vite y Sintaxis JSX",
  "shortDescription": "Establecimiento de un flujo de trabajo moderno y comprensión profunda de la extensión sintáctica JSX frente a HTML.",
  "keyConcept": "El ecosistema moderno de React prescinde de bundlers lentos en favor de **Vite** y utiliza **JSX** como una abstracción sintáctica sobre `React.createElement`.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Fundamentos",
    "Arquitectura",
    "Frontend"
  ],
  "difficulty": "Básico",
  "content": [
    {
      "type": "text",
      "value": "Iniciamos el desarrollo en React descartando herramientas obsoletas. Durante años, `create-react-app` (CRA) fue el estándar, pero su arquitectura basada en Webpack se ha vuelto lenta y pesada para los estándares actuales. La industria ha migrado hacia **Vite**."
    },
    {
      "type": "text",
      "value": "Vite (pronunciado /vit/, como 'rápido' en francés) aprovecha los módulos ES nativos del navegador. A diferencia de CRA, que empaquetaba toda la aplicación antes de iniciar el servidor, Vite sirve el código bajo demanda. Esto resulta en un arranque del servidor instantáneo y una recarga en caliente (HMR) extremadamente veloz."
    },
    {
      "type": "text",
      "value": "Para inicializar un proyecto, ejecutamos el siguiente comando en la terminal. Esto nos guiará a través de un 'scaffolding' interactivo donde seleccionaremos React y, preferiblemente, JavaScript (o TypeScript si el proyecto lo requiere)."
    },
    {
      "type": "code",
      "value": "npm create vite@latest nombre-proyecto\n# Sigue las instrucciones: Select framework > React > JavaScript\ncd nombre-proyecto\nnpm install\nnpm run dev"
    },
    {
      "type": "text",
      "value": "Una vez creado el proyecto, es crucial establecer una **Estructura de Carpetas** escalable. No debemos volcar todos los componentes en la raíz de `src`. Una arquitectura estándar organiza el código por su responsabilidad técnica o dominio."
    },
    {
      "type": "code",
      "value": "src/\n├── assets/      # Imágenes, fuentes, estilos globales\n├── components/  # Componentes reutilizables (Botones, Inputs)\n├── hooks/       # Custom Hooks (lógica reutilizable)\n├── layouts/     # Estructuras de página (Header + Footer)\n├── pages/       # Componentes que representan rutas/vistas completas\n├── services/    # Lógica de conexión con APIs (fetch/axios)\n├── utils/       # Funciones auxiliares puras (formateadores)\n├── App.jsx      # Componente raíz\n└── main.jsx     # Punto de entrada (montaje en el DOM)"
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "El punto de entrada real en Vite es el archivo `index.html` ubicado en la raíz del proyecto, no en `public`. Este archivo importa `src/main.jsx` como un módulo (`type=\"module\"`), lo que permite al navegador procesar las importaciones modernas."
    },
    {
      "type": "text",
      "value": "Ahora, abordemos **JSX (JavaScript XML)**. A primera vista, parece HTML incrustado en JavaScript, pero es fundamental entender que **JSX no es HTML**. Es una extensión de la sintaxis que los transpiladores (como Babel o SWC) convierten en llamadas a funciones de JavaScript estándar."
    },
    {
      "type": "text",
      "value": "Cada etiqueta que escribes en JSX se transforma internamente en `React.createElement()`. Debido a que estamos escribiendo JavaScript, tenemos ciertas restricciones y diferencias clave respecto al HTML tradicional."
    },
    {
      "type": "text",
      "value": "La diferencia más notoria es la gestión de atributos. Dado que `class` es una palabra reservada en JavaScript (para definir clases POO), en JSX debemos utilizar **`className`** para asignar clases CSS."
    },
    {
      "type": "code",
      "value": "// HTML (Incorrecto en JSX)\n// <div class=\"tarjeta\">...</div>\n\n// JSX (Correcto)\nconst Tarjeta = () => {\n  return <div className=\"tarjeta\">Contenido</div>;\n};"
    },
    {
      "type": "text",
      "value": "Asimismo, JSX adopta la convención **camelCase** para los atributos. Mientras que en HTML escribimos `onclick` o `tabindex`, en JSX escribiremos `onClick` y `tabIndex`. Esto mantiene la consistencia con el DOM API de JavaScript."
    },
    {
      "type": "code",
      "value": "<button \n  className=\"btn-primary\" \n  onClick={() => console.log('Click')} \n  tabIndex={0}\n>\n  Acción\n</button>"
    },
    {
      "type": "text",
      "value": "Otra regla de oro es el **Cierre de Etiquetas**. En HTML, etiquetas como `<input>` o `<img>` pueden dejarse abiertas. En JSX, es obligatorio cerrarlas, ya sea con una etiqueta de cierre o autocerrándolas si no tienen hijos."
    },
    {
      "type": "code",
      "value": "// HTML válido, JSX inválido\n// <input type=\"text\">\n// <img src=\"foto.jpg\">\n\n// JSX válido\n<input type=\"text\" />\n<img src=\"foto.jpg\" alt=\"descripción\" />"
    },
    {
      "type": "text",
      "value": "El poder real de JSX reside en su capacidad para interpolar **Expresiones de JavaScript**. Utilizando llaves `{}`, podemos 'escapar' de la sintaxis JSX e introducir variables, funciones o cualquier expresión lógica válida de JS."
    },
    {
      "type": "code",
      "value": "const Usuario = () => {\n  const nombre = \"Carlos\";\n  const esAdmin = true;\n\n  return (\n    <div>\n      {/* Interpolación de variable */}\n      <h1>Hola, {nombre}</h1>\n      \n      {/* Expresión lógica (Ternario) */}\n      <small>{esAdmin ? 'Panel de Admin' : 'Vista de Usuario'}</small>\n      \n      {/* Operación matemática */}\n      <p>Puntos: {10 * 5}</p>\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Es importante notar que dentro de las llaves `{}` solo podemos usar **expresiones** (algo que se evalúa a un valor), no **declaraciones** (como `if`, `for`, `while`). Para iterar, usamos métodos de array como `.map()`."
    },
    {
      "type": "text",
      "value": "Una restricción arquitectónica de JSX es que un componente debe devolver un **único elemento padre**. No podemos devolver dos etiquetas hermanas adyacentes sin envolverlas. Para evitar llenar el DOM de `divs` innecesarios, usamos **Fragmentos** (`<React.Fragment>` o la sintaxis corta `<>...</>`)."
    },
    {
      "type": "code",
      "value": "// Incorrecto\n// return (\n//   <h1>Título</h1>\n//   <p>Párrafo</p>\n// );\n\n// Correcto: Uso de Fragment\nreturn (\n  <>\n    <h1>Título</h1>\n    <p>Párrafo</p>\n  </>\n);"
    },
    {
      "type": "text",
      "value": "Finalmente, los **estilos en línea** en JSX no son strings, sino objetos. Las propiedades de CSS con guiones se convierten a camelCase (ej: `background-color` pasa a ser `backgroundColor`)."
    },
    {
      "type": "code",
      "value": "const estiloAlerta = {\n  backgroundColor: 'red',\n  color: 'white',\n  padding: '10px',\n  borderRadius: '5px'\n};\n\n// Aplicación del objeto de estilos\n<div style={estiloAlerta}>Error Crítico</div>"
    },
    {
      "type": "text",
      "value": "Comprender que JSX es JavaScript disfrazado te permitirá utilizar toda la potencia lógica del lenguaje (arrays, métodos, variables) directamente en la construcción de tu interfaz, eliminando la brecha entre lógica y vista."
    }
  ]
},
{
  "id": "tema-2-componentes-props-listas",
  "title": "Arquitectura de Componentes: Props y Listas en React",
  "shortDescription": "Dominio de la creación de componentes funcionales, comunicación unidireccional mediante props y estrategias eficientes de renderizado de listas.",
  "keyConcept": "Los componentes son **funciones puras** que transforman datos (**props**) en interfaz (**JSX**), y la propiedad **key** es vital para la identidad de los elementos en listas dinámicas.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Arquitectura",
    "Frontend",
    "Rendimiento"
  ],
  "difficulty": "Básico",
  "content": [
    {
      "type": "text",
      "value": "En la arquitectura moderna de React, el **Componente Funcional** es la unidad atómica de construcción. Conceptualmente, un componente no es más que una función de JavaScript que acepta entradas (arbitrarias) y devuelve elementos de React que describen lo que debe aparecer en pantalla."
    },
    {
      "type": "text",
      "value": "El principio de **Atomización** es fundamental aquí. En lugar de crear un único archivo monolítico con miles de líneas de código, dividimos la interfaz en piezas pequeñas, aisladas y reutilizables. Un botón, un formulario o una tarjeta de producto son candidatos perfectos para ser componentes independientes."
    },
    {
      "type": "code",
      "value": "// Definición de un Componente Funcional básico\n// La convención es usar PascalCase para el nombre del componente\n\nconst TarjetaUsuario = () => {\n  return (\n    <div className=\"tarjeta\">\n      <h2>Usuario Anónimo</h2>\n      <p>Sin descripción disponible.</p>\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Sin embargo, un componente estático tiene poca utilidad. Para que sean dinámicos y reutilizables, necesitamos pasarles datos. Aquí entran en juego las **Props** (propiedades). Las props son el mecanismo de comunicación unidireccional desde el componente Padre hacia el componente Hijo."
    },
    {
      "type": "text",
      "value": "Podemos ver las props como la **API** del componente. Definen qué datos necesita el componente para funcionar correctamente. En términos de JavaScript puro, las props son simplemente el primer argumento que recibe la función del componente: un objeto que contiene todos los valores pasados."
    },
    {
      "type": "code",
      "value": "// Componente Padre\nconst App = () => {\n  return (\n    <section>\n      {/* Pasamos datos mediante atributos 'props' */}\n      <Saludo nombre=\"Laura\" rol=\"Desarrolladora\" />\n      <Saludo nombre=\"Pedro\" rol=\"Diseñador\" />\n    </section>\n  );\n};\n\n// Componente Hijo recibiendo props\nconst Saludo = (props) => {\n  // props es un objeto: { nombre: \"Laura\", rol: \"Desarrolladora\" }\n  return <h3>Hola {props.nombre}, eres {props.rol}.</h3>;\n};"
    },
    {
      "type": "text",
      "value": "Como vimos en la lección de fundamentos, es una buena práctica y un estándar de la industria utilizar la **desestructuración** directamente en la firma del componente para acceder a las props. Esto mejora la legibilidad y hace explícita la API del componente."
    },
    {
      "type": "code",
      "value": "// Sintaxis con desestructuración\nconst Saludo = ({ nombre, rol }) => {\n  return <h3>Hola {nombre}, eres {rol}.</h3>;\n};"
    },
    {
      "type": "text",
      "value": "Es vital recordar que las props son de **solo lectura (read-only)**. Un componente funcional nunca debe modificar sus propias props. Deben comportarse como funciones puras respecto a sus entradas. Si necesitas cambiar un valor, eso corresponde al Estado (que veremos más adelante), no a las props."
    },
    {
      "type": "text",
      "value": "Existe una prop especial llamada **`children`**. Esta prop permite pasar elementos hijos directamente dentro de las etiquetas de apertura y cierre de nuestro componente, de la misma forma que anidamos un `<div>` dentro de otro en HTML. Esto habilita el patrón de **Composición**."
    },
    {
      "type": "code",
      "value": "// Componente contenedor 'Wrapper'\nconst Marco = ({ children, colorBorde }) => {\n  return (\n    <div style={{ border: `2px solid ${colorBorde}`, padding: '10px' }}>\n      {/* Aquí renderizamos lo que sea que nos pasen dentro */}\n      {children}\n    </div>\n  );\n};\n\n// Uso\n<Marco colorBorde=\"blue\">\n  <h1>Este es el contenido hijo</h1>\n  <p>Puede ser cualquier cosa, incluso otros componentes.</p>\n</Marco>"
    },
    {
      "type": "text",
      "value": "Avancemos hacia el **Renderizado de Listas**. En el desarrollo frontend, es extremadamente común tener que mostrar una colección de datos (un array de objetos). En React, no usamos bucles `for` tradicionales dentro del JSX. La herramienta estándar es el método **`.map()`** de los arrays."
    },
    {
      "type": "text",
      "value": "`map` es perfecto porque transforma un array de datos en un nuevo array de elementos JSX, que React sabe renderizar automáticamente."
    },
    {
      "type": "code",
      "value": "const productos = [\n  { id: 1, nombre: 'Laptop', precio: 1000 },\n  { id: 2, nombre: 'Ratón', precio: 20 },\n  { id: 3, nombre: 'Teclado', precio: 50 }\n];\n\nconst ListaProductos = () => {\n  return (\n    <ul>\n      {productos.map((producto) => (\n        <li key={producto.id}>\n          {producto.nombre} - {producto.precio}€\n        </li>\n      ))}\n    </ul>\n  );\n};"
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "Habrás notado la prop **`key`** en el ejemplo anterior. Esta no es una prop opcional; es **crítica** para el algoritmo de reconciliación de React. Cuando renderizamos listas, React necesita una forma de identificar qué ítems han cambiado, se han añadido o se han eliminado."
    },
    {
      "type": "text",
      "value": "La `key` debe ser un identificador **único** y **estable** entre renderizados para cada elemento hermano. Generalmente, utilizamos el ID único que viene de nuestra base de datos."
    },
    {
      "type": "text",
      "value": "Si no proporcionas una `key`, React lanzará una advertencia en la consola. Por defecto, usará el índice del array, pero esto es peligroso y puede causar bugs severos en el estado de los componentes o problemas de rendimiento si la lista se reordena o filtra."
    },
    {
      "type": "code",
      "value": "// ❌ MALA PRÁCTICA: Usar el índice como key\n// Si la lista cambia de orden, React se confundirá sobre qué elemento es cuál.\n{usuarios.map((usuario, index) => (\n  <li key={index}>{usuario.nombre}</li>\n))}\n\n// ✅ BUENA PRÁCTICA: Usar un ID único y estable\n{usuarios.map((usuario) => (\n  <li key={usuario.id}>{usuario.nombre}</li>\n))}"
    },
    {
      "type": "text",
      "value": "Es importante destacar que la prop `key` no se pasa al componente hijo. Si intentas acceder a `props.key` dentro del componente hijo, obtendrás `undefined`. Es un valor reservado exclusivamente para el uso interno de React."
    },
    {
      "type": "text",
      "value": "En resumen: usa `.map()` para transformar datos en JSX y asegúrate siempre de asignar una `key` única basada en los datos (como un ID) para mantener el Virtual DOM sincronizado y eficiente."
    },
    {
      "type": "text",
      "value": "El dominio de las props, la composición con children y el manejo correcto de listas constituyen la base estructural sobre la que se asientan todas las aplicaciones React profesionales."
    }
  ]
},
{
  "id": "ejercicio-tema-1-2-jsx-componentes",
  "title": "Ejercicio Práctico: De HTML Estático a Componentes React Dinámicos",
  "shortDescription": "Un desafío de refactorización visual donde transformarás maquetación repetitiva en componentes reutilizables utilizando JSX y Props.",
  "keyConcept": "La transición de **HTML imperativo** a **React declarativo** se basa en identificar patrones visuales repetitivos, abstraerlos en **Componentes** y alimentarlos dinámicamente mediante **Props** y **Listas**.",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Frontend",
    "Arquitectura",
    "Fundamentos"
  ],
  "difficulty": "Básico",
  "content": [
    {
      "type": "text",
      "value": "Imagina la siguiente situación laboral: Un diseñador te entrega un archivo HTML con una sección de 'Nuestro Equipo'. El código funciona, pero es **HTML estático**, repetitivo y difícil de mantener. Si mañana cambia el diseño de la tarjeta, tendrías que editarlo en 20 sitios distintos."
    },
    {
      "type": "text",
      "value": "Aquí tienes el código 'sucio' inicial que te han entregado:"
    },
    {
      "type": "code",
      "value": "\n<div class=\"contenedor-equipo\">\n  \n  \n  <div class=\"tarjeta-empleado destacada\">\n    <img src=\"/img/ana.jpg\" class=\"foto\" />\n    <h3 class=\"nombre\">Ana García</h3>\n    <p class=\"rol\">CEO</p>\n    <span class=\"etiqueta\">Jefa de Equipo</span>\n  </div>\n\n  \n  <div class=\"tarjeta-empleado\">\n    <img src=\"/img/beto.jpg\" class=\"foto\" />\n    <h3 class=\"nombre\">Beto Pérez</h3>\n    <p class=\"rol\">Desarrollador</p>\n    \n  </div>\n\n  \n  <div class=\"tarjeta-empleado\">\n    <img src=\"/img/carla.jpg\" class=\"foto\" />\n    <h3 class=\"nombre\">Carla Ruiz</h3>\n    <p class=\"rol\">Diseñadora</p>\n  </div>\n\n</div>"
    },
    {
      "type": "text",
      "value": "Tu misión es refactorizar esto a una aplicación React moderna. Te proporciono los datos en formato JSON para que no tengas que inventártelos."
    },
    {
      "type": "code",
      "value": "const datosEquipo = [\n  { id: 1, nombre: 'Ana García', rol: 'CEO', esJefa: true, foto: 'ana.jpg' },\n  { id: 2, nombre: 'Beto Pérez', rol: 'Desarrollador', esJefa: false, foto: 'beto.jpg' },\n  { id: 3, nombre: 'Carla Ruiz', rol: 'Diseñadora', esJefa: false, foto: 'carla.jpg' },\n];"
    },
    {
      "type": "text",
      "value": "### Requisitos del Ejercicio"
    },
    {
      "type": "text",
      "value": "1. **Componente `TarjetaEmpleado`**: Crea un componente funcional que acepte las propiedades necesarias. No escribas el HTML tres veces."
    },
    {
      "type": "text",
      "value": "2. **Sintaxis JSX**: Asegúrate de corregir los atributos de HTML que no son válidos en JSX (pista: fíjate en las clases CSS y el cierre de etiquetas de imagen)."
    },
    {
      "type": "text",
      "value": "3. **Renderizado Condicional**: Si la propiedad `esJefa` es verdadera, el componente debe mostrar la etiqueta `<span>Jefa de Equipo</span>` y añadir una clase extra al contenedor (por ejemplo, 'destacada'). Si es falsa, no debe mostrar nada extra."
    },
    {
      "type": "text",
      "value": "4. **Renderizado de Listas**: En el componente principal `GaleriaEquipo`, utiliza `.map()` para iterar sobre el array `datosEquipo` y renderizar las tarjetas. No olvides la prop crítica para el rendimiento."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "### Solución Propuesta"
    },
    {
      "type": "text",
      "value": "A continuación, presento cómo resolveríamos esto en un entorno profesional, aplicando desestructuración, template literals para clases dinámicas y operadores lógicos."
    },
    {
      "type": "code",
      "value": "// 1. Definimos el componente unitario\nconst TarjetaEmpleado = ({ nombre, rol, esJefa, foto }) => {\n  \n  // Lógica para clases dinámicas (JSX requiere className, no class)\n  // Usamos un Template Literal para inyectar 'destacada' si es necesario\n  const claseContenedor = `tarjeta-empleado ${esJefa ? 'destacada' : ''}`;\n\n  return (\n    <div className={claseContenedor}>\n      {/* Las etiquetas img deben cerrarse explícitamente en JSX */}\n      <img src={`/img/${foto}`} alt={nombre} className=\"foto\" />\n      \n      <h3 className=\"nombre\">{nombre}</h3>\n      <p className=\"rol\">{rol}</p>\n\n      {/* Renderizado Condicional con Short-circuit (&&) */}\n      {/* Si esJefa es true, renderiza el span. Si no, no renderiza nada */}\n      {esJefa && <span className=\"etiqueta\">Jefa de Equipo</span>}\n    </div>\n  );\n};\n\n// 2. Componente contenedor principal\nconst GaleriaEquipo = () => {\n  const datosEquipo = [\n    { id: 1, nombre: 'Ana García', rol: 'CEO', esJefa: true, foto: 'ana.jpg' },\n    { id: 2, nombre: 'Beto Pérez', rol: 'Dev', esJefa: false, foto: 'beto.jpg' },\n    { id: 3, nombre: 'Carla Ruiz', rol: 'Diseño', esJefa: false, foto: 'carla.jpg' },\n  ];\n\n  return (\n    <div className=\"contenedor-equipo\">\n      {/* Uso de .map para transformar datos en componentes */}\n      {datosEquipo.map((empleado) => (\n        <TarjetaEmpleado\n          key={empleado.id} // ⚠️ CRÍTICO: La prop key es obligatoria en listas\n          nombre={empleado.nombre}\n          rol={empleado.rol}\n          esJefa={empleado.esJefa}\n          foto={empleado.foto}\n          \n          // Truco Pro: Podríamos haber usado {...empleado} para pasar todo junto,\n          // pero ser explícito es mejor para aprender.\n        />\n      ))}\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Analicemos los cambios clave respecto al HTML original:"
    },
    {
      "type": "text",
      "value": "Primero, **`class` vs `className`**: En el HTML original usábamos `class`. En JSX, como es JavaScript, `class` es una palabra reservada, así que hemos migrado todo a `className`."
    },
    {
      "type": "text",
      "value": "Segundo, el **Cierre de Etiquetas**: La etiqueta `<img ... >` del HTML original daría error en React. Hemos añadido la barra de cierre `<img ... />`."
    },
    {
      "type": "text",
      "value": "Tercero, la **Lógica Visual**: En lugar de escribir manualmente la clase `destacada` en el primer div, hemos dejado que sea una consecuencia de la prop `esJefa`. Si mañana Beto asciende a jefe, solo cambiamos el `json` a `true` y el estilo se aplica solo."
    },
    {
      "type": "text",
      "value": "Cuarto, la prop **`key`**: Al hacer el `.map()`, hemos asignado `key={empleado.id}`. Sin esto, React no sabría cómo optimizar el re-ordenamiento de la lista si los datos cambiaran."
    },
    {
      "type": "text",
      "value": "Si has entendido cómo conectar los datos del array con las props del componente hijo, has superado la barrera más importante de React: pensar en componentes dinámicos."
    }
  ]
},
{
  "id": "tema-3-eventos-react",
  "title": "Manejo de Eventos y SyntheticEvent en React",
  "shortDescription": "Aprende a capturar y gestionar las interacciones del usuario mediante el sistema de eventos sintéticos de React.",
  "keyConcept": "React utiliza el **SyntheticEvent**, una capa de abstracción sobre los eventos nativos del navegador, para garantizar un comportamiento consistente en cualquier entorno.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Fundamentos",
    "Frontend",
    "Lógica"
  ],
  "difficulty": "Básico",
  "content": [
    {
      "type": "text",
      "value": "Una interfaz de usuario sin interactividad es simplemente un documento digital. Para crear aplicaciones dinámicas, debemos responder a las acciones del usuario: clics, escritura en teclado, envío de formularios, etc. En React, el manejo de eventos es muy similar al DOM estándar, pero con diferencias sintácticas y arquitectónicas cruciales."
    },
    {
      "type": "text",
      "value": "La primera diferencia que notarás es la convención de nombres. Mientras que en HTML los eventos se escriben en minúsculas (`onclick`, `onchange`), en React utilizamos **camelCase**. Esto es coherente con el hecho de que estamos escribiendo JavaScript, no HTML puro."
    },
    {
      "type": "code",
      "value": "// HTML Tradicional\n// <button onclick=\"activar()\">Pulsar</button>\n\n// JSX en React\n<button onClick={activar}>Pulsar</button>"
    },
    {
      "type": "text",
      "value": "Observa el ejemplo anterior. En React, pasamos la **función en sí** (la referencia), no un string. Un error muy común en principiantes es invocar la función inmediatamente al renderizar, lo que causa bucles infinitos o comportamientos no deseados."
    },
    {
      "type": "code",
      "value": "const Manejador = () => {\n  const handleClick = () => console.log('Click');\n\n  return (\n    // ❌ INCORRECTO: Se ejecuta automáticamente al cargar la página\n    // <button onClick={handleClick()}>Mal</button>\n\n    // ✅ CORRECTO: Pasamos la referencia, React la ejecutará al hacer click\n    <button onClick={handleClick}>Bien</button>\n  );\n};"
    },
    {
      "type": "text",
      "value": "El evento más básico y utilizado es **`onClick`**. Se utiliza en botones, enlaces (aunque con cuidado en el routing) y cualquier elemento interactivo. Es el equivalente directo a escuchar un 'click' en el DOM."
    },
    {
      "type": "text",
      "value": "A veces necesitamos pasar argumentos a nuestra función manejadora. Como no podemos ejecutar la función directamente (`handleClick(id)`), debemos envolverla en una función anónima o arrow function."
    },
    {
      "type": "code",
      "value": "const ListaItems = () => {\n  const eliminarItem = (id) => {\n    console.log(`Eliminando item ${id}`);\n  };\n\n  return (\n    <button onClick={() => eliminarItem(42)}>\n      Eliminar Item 42\n    </button>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Otro evento fundamental es **`onChange`**. A diferencia del HTML, donde `onchange` suele dispararse solo al perder el foco, en React `onChange` se dispara con **cada pulsación de tecla** o cambio de valor. Es la base para crear 'Formularios Controlados'."
    },
    {
      "type": "code",
      "value": "const InputNombre = () => {\n  const manejarCambio = (evento) => {\n    // Accedemos al valor actual del input\n    console.log(evento.target.value);\n  };\n\n  return <input type=\"text\" onChange={manejarCambio} />;\n};"
    },
    {
      "type": "text",
      "value": "Para gestionar el envío de datos, utilizamos **`onSubmit`** en la etiqueta `<form>`. Aquí nos encontramos con un concepto vital: el comportamiento por defecto del navegador. Al enviar un form, el navegador tiende a recargar la página. En una SPA (Single Page Application) hecha con React, **debemos evitar esa recarga**."
    },
    {
      "type": "code",
      "value": "const Formulario = () => {\n  const enviarDatos = (e) => {\n    e.preventDefault(); // 🛑 Detiene la recarga de la página\n    console.log(\"Formulario enviado sin recargar\");\n  };\n\n  return (\n    <form onSubmit={enviarDatos}>\n      <button type=\"submit\">Enviar</button>\n    </form>\n  );\n};"
    },
    {
      "type": "text",
      "value": "¿Qué es ese argumento `e` o `evento` que recibimos en las funciones? Aquí es donde entra la magia de React: el **SyntheticEvent** (Evento Sintético)."
    },
    {
      "type": "text",
      "value": "Los navegadores (Chrome, Firefox, Safari) a veces manejan los eventos nativos de forma ligeramente distinta. Para evitar que los desarrolladores tengan que lidiar con estas inconsistencias, React envuelve el evento nativo del navegador en un objeto contenedor llamado `SyntheticEvent`."
    },
    {
      "type": "text",
      "value": "El `SyntheticEvent` tiene la misma interfaz que un evento nativo (métodos como `stopPropagation()` y `preventDefault()`), pero funciona idénticamente en todos los navegadores. React 'normaliza' el evento para ti."
    },
    {
      "type": "code",
      "value": "const AnalisisEvento = () => {\n  const verEvento = (e) => {\n    console.log(e); // SyntheticBaseEvent\n    console.log(e.nativeEvent); // El evento original del navegador (PointerEvent, etc.)\n    console.log(e.target); // El elemento que disparó el evento\n    console.log(e.currentTarget); // El elemento que tiene el listener (el botón)\n  };\n\n  return <button onClick={verEvento}>Analizar</button>;\n};"
    },
    {
      "type": "text",
      "value": "Hablemos de la **Propagación de Eventos** (Event Bubbling). Por defecto, los eventos en JavaScript 'burbujean' hacia arriba. Si haces clic en un botón dentro de un `div`, el evento clic se dispara primero en el botón y luego sube al `div`."
    },
    {
      "type": "text",
      "value": "A veces necesitamos detener este comportamiento para evitar que un clic en un botón cierre, por ejemplo, el modal que lo contiene. Para eso usamos `e.stopPropagation()`."
    },
    {
      "type": "code",
      "value": "const Modal = () => {\n  const cerrarModal = () => console.log(\"Cerrando modal...\");\n  \n  const clickEnContenido = (e) => {\n    e.stopPropagation(); // 🛑 Evita que el click llegue al div padre\n    console.log(\"Click en contenido, no cerramos\");\n  };\n\n  return (\n    <div className=\"overlay\" onClick={cerrarModal}>\n      <div className=\"contenido-modal\" onClick={clickEnContenido}>\n        Haga click aquí sin cerrar\n      </div>\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Es importante mencionar que React optimiza el manejo de eventos utilizando una técnica llamada **Event Delegation**. En lugar de añadir un escuchador (listener) a cada nodo del DOM (lo cual sería lento), React añade un solo escuchador en el elemento raíz del documento y gestiona todos los eventos desde allí internamente."
    },
    {
      "type": "text",
      "value": "Resumen práctico: Utiliza siempre la referencia a la función (sin paréntesis), recuerda prevenir el comportamiento por defecto en los formularios y confía en que el objeto `e` que recibes funcionará igual independientemente del navegador del usuario."
    }
  ]
},
{
  "id": "tema-4-estado-usestate",
  "title": "El Estado en React y el Hook useState",
  "shortDescription": "Comprensión profunda de la reactividad, la inmutabilidad y la gestión de datos dinámicos mediante el hook fundamental useState.",
  "keyConcept": "El **Estado** es la memoria del componente. A diferencia de las variables locales, actualizar el estado dispara un **re-renderizado**, y respetar la **inmutabilidad** es obligatorio para que React detecte estos cambios.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Fundamentos",
    "Lógica",
    "Rendimiento"
  ],
  "difficulty": "Básico",
  "content": [
    {
      "type": "text",
      "value": "Hasta ahora, nuestros componentes han sido estáticos o simplemente reactivos a las props que reciben. Sin embargo, una aplicación real necesita 'recordar' cosas: el texto en un input, si un modal está abierto o el contenido de un carrito de compra. A esta memoria interna del componente la llamamos **Estado**."
    },
    {
      "type": "text",
      "value": "Podrías preguntarte: '¿Por qué no usar simplemente variables locales con `let`?'. La respuesta radica en el ciclo de vida de React. Las variables locales se 'olvidan' (se reinician) cada vez que el componente se vuelve a ejecutar (renderizar). Además, cambiar una variable local no avisa a React de que debe actualizar la interfaz."
    },
    {
      "type": "text",
      "value": "Para gestionar el estado en componentes funcionales, utilizamos el Hook **`useState`**. Este hook nos devuelve un array con dos elementos: el valor actual del estado y una función (setter) para actualizarlo."
    },
    {
      "type": "code",
      "value": "import { useState } from 'react';\n\nconst Contador = () => {\n  // Declaración: [valorActual, funcionParaActualizar] = useState(valorInicial)\n  const [cuenta, setCuenta] = useState(0);\n\n  return (\n    <button onClick={() => setCuenta(cuenta + 1)}>\n      Has hecho clic {cuenta} veces\n    </button>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Aquí entramos en el concepto más crítico de React: la **Inmutabilidad**. En React, nunca debemos modificar (mutar) el estado directamente. Expresiones como `cuenta = 5` o `usuario.nombre = 'Ana'` están terminantemente prohibidas."
    },
    {
      "type": "text",
      "value": "¿Por qué? React utiliza una comparación superficial (shallow comparison) para decidir si debe actualizar el DOM. Si modificas las propiedades de un objeto existente, la **referencia en memoria** del objeto no cambia. React pensará que el objeto es el mismo y no renderizará los cambios en la pantalla."
    },
    {
      "type": "text",
      "value": "Para actualizar el estado, debemos proporcionar siempre un **nuevo valor** o un **nuevo objeto/array**. Aquí es donde el *Spread Operator* que vimos en la introducción se vuelve indispensable."
    },
    {
      "type": "text",
      "value": "Veamos cómo manejar el **Estado con Objetos**. Supongamos que tenemos un estado que agrupa varios datos de un perfil. Al actualizar solo un campo, debemos asegurarnos de no borrar los demás."
    },
    {
      "type": "code",
      "value": "const [perfil, setPerfil] = useState({\n  nombre: 'Carlos',\n  edad: 28,\n  email: 'carlos@email.com'\n});\n\nconst actualizarNombre = () => {\n  // ❌ MAL: Mutación directa (React no se entera)\n  // perfil.nombre = 'Juan';\n\n  // ❌ MAL: Reemplazo total (Perdemos edad y email)\n  // setPerfil({ nombre: 'Juan' });\n\n  // ✅ BIEN: Copia inmutable\n  setPerfil({\n    ...perfil,       // Copiamos todas las propiedades existentes\n    nombre: 'Juan'   // Sobrescribimos solo la que nos interesa\n  });\n};"
    },
    {
      "type": "text",
      "value": "La situación es similar con los **Arrays**. Métodos como `.push()`, `.pop()` o `.splice()` mutan el array original y deben evitarse. En su lugar, preferimos `.map()`, `.filter()` o el spread operator para crear nuevos arrays."
    },
    {
      "type": "code",
      "value": "const [todos, setTodos] = useState(['Aprender React', 'Hacer deporte']);\n\nconst agregarTarea = (nuevaTarea) => {\n  // ❌ MAL: todos.push(nuevaTarea);\n  \n  // ✅ BIEN: Crear un nuevo array con el elemento añadido\n  setTodos([...todos, nuevaTarea]);\n};\n\nconst eliminarTarea = (indice) => {\n  // ✅ BIEN: .filter devuelve un array nuevo\n  setTodos(todos.filter((_, i) => i !== indice));\n};"
    },
    {
      "type": "text",
      "value": "Un matiz técnico importante es que las actualizaciones de estado en React son **asíncronas** (conceptualmente). Cuando llamas a `setCuenta(5)`, React no detiene el código inmediatamente para actualizar el DOM. En su lugar, 'agenda' una actualización para el futuro cercano."
    },
    {
      "type": "text",
      "value": "Esto nos lleva al **Batching** (Agrupamiento). React 18+ es lo suficientemente inteligente como para agrupar múltiples llamadas de estado en un solo re-renderizado para mejorar el rendimiento. Si cambias el nombre, la edad y el email en la misma función, React solo renderizará una vez al final."
    },
    {
      "type": "text",
      "value": "Sin embargo, esta naturaleza asíncrona puede causar problemas si intentamos calcular el nuevo estado basándonos en el valor *antiguo* inmediatamente después de setearlo, o múltiples veces seguidas."
    },
    {
      "type": "code",
      "value": "const incrementarTriple = () => {\n  // Supongamos que 'cuenta' vale 0\n  setCuenta(cuenta + 1); // 0 + 1\n  setCuenta(cuenta + 1); // 0 + 1 (React aún 've' cuenta como 0 en este ciclo)\n  setCuenta(cuenta + 1); // 0 + 1\n  \n  // Resultado final: 1 (NO 3)\n};"
    },
    {
      "type": "text",
      "value": "Para solucionar esto, utilizamos las **Actualizaciones Funcionales**. En lugar de pasar un valor al setter, pasamos una función callback. Esta función recibe el estado más reciente (garantizado) como argumento."
    },
    {
      "type": "code",
      "value": "const incrementarTripleCorrecto = () => {\n  // React pone estas funciones en una cola y las ejecuta en orden\n  setCuenta(prevCuenta => prevCuenta + 1); // 0 -> 1\n  setCuenta(prevCuenta => prevCuenta + 1); // 1 -> 2\n  setCuenta(prevCuenta => prevCuenta + 1); // 2 -> 3\n  \n  // Resultado final: 3\n};"
    },
    {
      "type": "text",
      "value": "Esta forma funcional `setEstado(prev => nuevo)` es la recomendada siempre que el nuevo estado dependa del anterior, especialmente en contadores, toggles (booleanos) o acumuladores."
    },
    {
      "type": "text",
      "value": "Recuerda las reglas de oro de los Hooks: solo pueden llamarse en el **nivel superior** del componente (nunca dentro de loops `for`, condiciones `if` o funciones anidadas). Esto permite a React mantener el orden interno de los estados entre renderizados."
    },
    {
      "type": "text",
      "value": "En resumen: `useState` dota de vida al componente. Trata el estado como algo sagrado e inmutable, utiliza copias para actualizar objetos complejos y confía en las actualizaciones funcionales para operaciones secuenciales."
    }
  ]
},
{
  "id": "ejercicio-tema-3-4-eventos-estado",
  "title": "Ejercicio Práctico: Interactividad y Estado con Hooks",
  "shortDescription": "Un desafío para transformar una interfaz muerta en un componente reactivo utilizando el manejo de eventos y el hook useState.",
  "keyConcept": "La interactividad en React nace de la unión de **Eventos** (que capturan la intención del usuario) y **Estado** (que almacena el resultado de esa intención y actualiza la vista).",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Fundamentos",
    "Lógica",
    "Frontend"
  ],
  "difficulty": "Básico",
  "content": [
    {
      "type": "text",
      "value": "Vamos a poner en práctica lo aprendido en el **Tema 3 (Eventos)** y el **Tema 4 (Estado/useState)**. Sin estos dos pilares, React sería solo una herramienta de plantillas estáticas."
    },
    {
      "type": "text",
      "value": "Imagina que estás construyendo la página de detalle de producto para un e-commerce. Tu tarea es implementar el **Selector de Cantidad**. El usuario debe poder sumar o restar unidades antes de añadir al carrito."
    },
    {
      "type": "text",
      "value": "Te han pasado un componente 'dummy' (tonto) que no hace nada, solo tiene `console.log` y alertas molestas. Tu misión es darle vida."
    },
    {
      "type": "code",
      "value": "// CÓDIGO INICIAL (NO FUNCIONAL)\nconst SelectorCantidad = () => {\n  // Problema: Esto es una variable local. \n  // React NO se entera si esto cambia, así que la pantalla nunca se actualiza.\n  let cantidad = 1;\n\n  const restar = () => {\n    cantidad = cantidad - 1;\n    console.log(\"Restando... Valor actual:\", cantidad);\n  };\n\n  const sumar = () => {\n    cantidad = cantidad + 1;\n    console.log(\"Sumando... Valor actual:\", cantidad);\n  };\n\n  return (\n    <div className=\"selector\">\n      <button onClick={restar}>-</button>\n      <span>{cantidad}</span>\n      <button onClick={sumar}>+</button>\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "### Requisitos del Desafío"
    },
    {
      "type": "text",
      "value": "1. **Implementar `useState`**: Sustituye la variable `let cantidad` por un estado real de React para que la vista se actualice al hacer clic."
    },
    {
      "type": "text",
      "value": "2. **Límites Lógicos**: Modifica las funciones manejadoras para imponer reglas de negocio:\n   * No se puede bajar de **0** (no existen cantidades negativas).\n   * No se puede subir de **10** (límite de stock ficticio)."
    },
    {
      "type": "text",
      "value": "3. **Renderizado Condicional Visual**: Si la cantidad llega a 10, el botón de sumar (+) debe deshabilitarse (`disabled`). Si llega a 0, el botón de restar (-) debe deshabilitarse."
    },
    {
      "type": "text",
      "value": "4. **Mensaje Dinámico**: Añade un pequeño párrafo debajo: si la cantidad es 0, debe decir 'Selecciona al menos 1 unidad'. Si es mayor que 0, debe decir 'Total: [cantidad] unidades'."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "### Solución"
    },
    {
      "type": "text",
      "value": "Aquí tienes cómo implementaría esto un desarrollador senior, utilizando actualizaciones funcionales y gestión limpia de eventos."
    },
    {
      "type": "code",
      "value": "import { useState } from 'react';\n\nconst SelectorCantidad = () => {\n  // 1. Declaración del Estado\n  // Inicializamos en 1 porque es lo habitual en compras\n  const [cantidad, setCantidad] = useState(1);\n  const STOCK_MAXIMO = 10;\n\n  // 2. Manejadores de Eventos (Event Handlers)\n  const restar = () => {\n    // Lógica de protección (Guard Clause)\n    if (cantidad <= 0) return;\n    \n    // Actualización basada en el valor anterior (Best Practice)\n    setCantidad(prev => prev - 1);\n  };\n\n  const sumar = () => {\n    if (cantidad >= STOCK_MAXIMO) return;\n    setCantidad(prev => prev + 1);\n  };\n\n  return (\n    <div className=\"tarjeta-compra\">\n      <h3>Auriculares Pro</h3>\n      \n      <div className=\"controles\">\n        {/* 3. Atributo 'disabled' dinámico basado en el estado */}\n        <button onClick={restar} disabled={cantidad === 0}>\n          -\n        </button>\n        \n        <span className=\"numero\">{cantidad}</span>\n        \n        <button onClick={sumar} disabled={cantidad === STOCK_MAXIMO}>\n          +\n        </button>\n      </div>\n\n      {/* 4. Feedback visual al usuario */}\n      <p className=\"mensaje\">\n        {cantidad === 0 \n          ? <span style={{ color: 'red' }}>⚠️ Selecciona al menos 1 unidad</span>\n          : `Has seleccionado ${cantidad} unidades`\n        }\n      </p>\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "### Análisis de la Solución"
    },
    {
      "type": "text",
      "value": "**¿Por qué `setCantidad(prev => prev + 1)`?**\nAunque `setCantidad(cantidad + 1)` funcionaría aquí, usar la forma funcional (recibiendo `prev`) es la práctica correcta. Garantiza que si el usuario hace clic muy rápido, React siempre calculará basándose en el valor más reciente y no en uno obsoleto atrapado en el cierre (closure)."
    },
    {
      "type": "text",
      "value": "**Botones Deshabilitados**\nEl uso de la propiedad `disabled={condicion}` es UX pura. No solo evita que la función se ejecute, sino que da feedback visual al usuario (el botón se pone gris) indicando que ha alcanzado un límite."
    },
    {
      "type": "text",
      "value": "Si has logrado conectar los clics con el cambio de número en pantalla, ¡felicidades! Has dominado el ciclo fundamental de React: **Evento -> Cambio de Estado -> Re-renderizado**."
    }
  ]
},
{
  "id": "tema-5-inputs-lifting",
  "title": "Control de Formularios y Elevación del Estado",
  "shortDescription": "Dominio de los formularios controlados y patrones de arquitectura para compartir información entre componentes hermanos.",
  "keyConcept": "En React, la interfaz no guarda el estado; lo refleja. El patrón **Single Source of Truth** y el **Lifting State Up** garantizan la sincronización de datos en toda la aplicación.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Arquitectura",
    "Fundamentos",
    "Lógica"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "En el desarrollo web tradicional con HTML y jQuery, el DOM es quien 'guarda' los datos. Si quieres saber qué ha escrito un usuario, consultas el valor del input directamente en el DOM. En React, este paradigma se invierte completamente."
    },
    {
      "type": "text",
      "value": "Introducimos el concepto de **Componentes Controlados** (Controlled Components). La premisa es simple: el estado de React (`useState`) debe ser la **Única Fuente de Verdad** (Single Source of Truth). El DOM simplemente se limita a reflejar lo que dice el estado, sin tener autonomía propia."
    },
    {
      "type": "text",
      "value": "Para lograr esto, establecemos un ciclo de retroalimentación cerrado: 1. El `input` recibe su valor del estado. 2. El evento `onChange` captura la interacción del usuario. 3. Se actualiza el estado, lo que dispara un re-renderizado con el nuevo valor."
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "code",
      "value": "const InputControlado = () => {\n  const [texto, setTexto] = useState('');\n\n  // El input no 'tiene' el texto, solo lo muestra porque React se lo dice\n  return (\n    <div>\n      <label>Escribe algo: </label>\n      <input \n        type=\"text\" \n        value={texto}             // 1. Vinculación (Binding) al estado\n        onChange={(e) => setTexto(e.target.value)} // 2. Actualización\n      />\n      <p>Estás escribiendo: {texto}</p>\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Observa el atributo `value={texto}`. Al hacer esto, bloqueamos el input. Si intentaras escribir sin definir el `onChange`, el input parecería congelado, porque React forzaría que el valor sea siempre igual al estado (que no cambia)."
    },
    {
      "type": "text",
      "value": "Esta técnica nos otorga un control total. Podemos transformar la entrada en tiempo real (ej: forzar mayúsculas), validarla instantáneamente o impedir caracteres no deseados antes de que siquiera aparezcan en pantalla."
    },
    {
      "type": "code",
      "value": "const InputMayusculas = () => {\n  const [valor, setValor] = useState('');\n\n  const manejarCambio = (e) => {\n    // Interceptamos el input y lo transformamos antes de guardarlo\n    const textoMayus = e.target.value.toUpperCase();\n    setValor(textoMayus);\n  };\n\n  return <input value={valor} onChange={manejarCambio} />;\n};"
    },
    {
      "type": "text",
      "value": "Ahora que controlamos los datos de un componente, surge un problema arquitectónico común: ¿Cómo compartimos este estado con otro componente? Por ejemplo, un input que filtra una lista situada en otro componente hermano."
    },
    {
      "type": "text",
      "value": "En React, el flujo de datos es **unidireccional descendente** (de padres a hijos). Los componentes hermanos no pueden pasarse datos directamente entre sí. Son como dos ramas separadas de un árbol que solo se conectan en el tronco."
    },
    {
      "type": "text",
      "value": "La solución a este dilema es el patrón de **Levantamiento de Estado** (Lifting State Up). Consiste en mover el estado (`useState`) del componente hijo hacia el **ancestro común más cercano** (el padre de ambos)."
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "Al elevar el estado, el componente padre se convierte en el 'dueño' de los datos. Luego, distribuye estos datos a los hijos mediante **props**: a uno le pasa el valor para mostrarlo, y al otro le pasa la función setter (encapsulada en una callback) para modificarlo."
    },
    {
      "type": "text",
      "value": "Implementemos un ejemplo clásico: Un convertidor de moneda donde dos inputs (Euros y Dólares) deben estar sincronizados. Si escribes en uno, el otro se actualiza. El estado no puede vivir en ninguno de los inputs; debe vivir en el padre."
    },
    {
      "type": "code",
      "value": "// Componente Hijo: Input genérico de moneda\n// Nota: No tiene estado propio, recibe 'valor' y 'onCambio' del padre\nconst InputMoneda = ({ moneda, valor, onCambio }) => (\n  <fieldset>\n    <legend>Cantidad en {moneda}</legend>\n    <input \n      value={valor}\n      onChange={(e) => onCambio(e.target.value)} \n    />\n  </fieldset>\n);"
    },
    {
      "type": "text",
      "value": "Ahora construyamos el Padre (el orquestador). Este componente mantendrá el estado de la cantidad y calculará las conversiones al vuelo."
    },
    {
      "type": "code",
      "value": "// Componente Padre: Convertidor\nconst Convertidor = () => {\n  const [cantidad, setCantidad] = useState(0);\n  const TASA_CAMBIO = 1.1; // 1 Euro = 1.1 USD\n\n  // Funciones manejadoras que pasaremos a los hijos\n  const cambiarDesdeEuros = (val) => setCantidad(val); // El estado guarda Euros\n  const cambiarDesdeDolares = (val) => setCantidad(val / TASA_CAMBIO);\n\n  return (\n    <div>\n      {/* Hermano 1: Controla Euros */}\n      <InputMoneda \n        moneda=\"Euros\" \n        valor={cantidad} \n        onCambio={cambiarDesdeEuros} \n      />\n      \n      {/* Hermano 2: Controla Dólares */}\n      {/* Calculamos el valor de visualización al vuelo */}\n      <InputMoneda \n        moneda=\"Dólares\" \n        valor={cantidad * TASA_CAMBIO} \n        onCambio={cambiarDesdeDolares} \n      />\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Analicemos la magia: `InputMoneda` es un componente 'tonto' o presentacional. No sabe de tasas de cambio ni de lógica de negocio. Solo recibe un número y notifica cuando el usuario escribe. El componente `Convertidor` (Padre) centraliza la lógica."
    },
    {
      "type": "text",
      "value": "Este patrón es fundamental. Siempre que te encuentres intentando sincronizar dos componentes, detente y pregunta: '¿Quién es el padre común?'. Mueve el `useState` allí."
    },
    {
      "type": "text",
      "value": "El levantamiento de estado tiene un beneficio adicional: mejora la 'testabilidad'. Al separar la lógica (en el padre) de la vista (en los hijos), es más fácil probar cada parte de forma aislada."
    },
    {
      "type": "text",
      "value": "En resumen: Un input controlado es aquel cuyo valor lo dicta React, no el usuario. Y cuando varios componentes necesitan compartir esos datos, 'elevamos' el estado hacia arriba en la jerarquía para que fluya hacia abajo como una cascada."
    },
    {
      "type": "text",
      "value": "Dominar el flujo unidireccional y saber dónde ubicar el estado es lo que diferencia a un programador de React novato de uno arquitectónicamente sólido."
    }
  ]
},
{
  "id": "tema-6-useeffect-ciclo-vida",
  "title": "Masterizando useEffect: El Ciclo de Vida y la Sincronización",
  "shortDescription": "Una guía definitiva para entender cuándo se ejecuta tu código, cómo controlar los efectos secundarios y evitar los temidos bucles infinitos.",
  "keyConcept": "El hook **useEffect** no sirve para 'hacer cosas'; sirve para **sincronizar** tu componente con sistemas externos (APIs, DOM, temporizadores) basándose en sus dependencias.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Fundamentos",
    "Lógica",
    "Rendimiento"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Aquí es donde la curva de aprendizaje se vuelve vertical. Si los componentes funcionales son el cuerpo de React, `useEffect` es su sistema nervioso autónomo. Es el lugar donde ocurren los 'Efectos Secundarios' (Side Effects)."
    },
    {
      "type": "text",
      "value": "En programación funcional, una función pura (como un componente ideal) solo debería calcular la UI basándose en las props. Pero en el mundo real, necesitamos hacer cosas 'impuras': pedir datos a un servidor, suscribirnos a un evento del chat o cambiar el título del documento. Para eso existe `useEffect`."
    },
    {
      "type": "text",
      "value": "El error número uno de los desarrolladores junior es tratar `useEffect` como si fuera un flujo procedimental estándar. Debes cambiar tu modelo mental: no le dices a React 'haz esto ahora', le dices 'sincroniza esto cuando aquello cambie'."
    },
    {
      "type": "text",
      "value": "La estructura del hook es engañosamente simple: `useEffect(función, array_de_dependencias)`. Sin embargo, el segundo argumento, el **Array de Dependencias**, es el que controla el tiempo y el espacio de tu aplicación."
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "Analicemos el primer escenario: **El Array Vacío `[]`**. Esto le dice a React: 'Este efecto no depende de ningún valor de las props o del estado, así que nunca necesita volver a ejecutarse'."
    },
    {
      "type": "text",
      "value": "En la práctica, esto equivale al antiguo `componentDidMount`. El código se ejecuta **una sola vez**, inmediatamente después de que el componente se ha pintado en el navegador por primera vez. Es el lugar estándar para llamadas a APIs."
    },
    {
      "type": "code",
      "value": "useEffect(() => {\n  console.log('Esto se imprime UNA sola vez al montar el componente');\n  \n  // Ideal para conectar con APIs\n  fetch('/api/datos').then(data => data.json());\n}, []); // <--- Ojo a los corchetes vacíos"
    },
    {
      "type": "text",
      "value": "Segundo escenario: **Array con Dependencias `[prop, estado]`**. Aquí le decimos a React: 'Ejecuta este efecto al montarse, Y TAMBIÉN cada vez que alguna de estas variables cambie de valor'."
    },
    {
      "type": "text",
      "value": "React utiliza una comparación superficial (shallow comparison). Si `propAnterior !== propNueva`, el efecto se dispara. Esto es vital para mantener la sincronización. Si tu efecto usa una variable, esa variable **DEBE** estar en el array."
    },
    {
      "type": "code",
      "value": "const PerfilUsuario = ({ userId }) => {\n  useEffect(() => {\n    // Se ejecuta al inicio Y cuando 'userId' cambia\n    console.log(`Cargando datos del usuario ${userId}...`);\n    \n    fetch(`https://api.com/users/${userId}`);\n  }, [userId]); // <--- Dependencia explícita\n\n  return <div>Perfil</div>;\n};"
    },
    {
      "type": "text",
      "value": "Tercer escenario: **Sin Array (omitido)**. Este es el territorio del peligro. Si omites el segundo argumento, el efecto se ejecutará **después de CADA renderizado**."
    },
    {
      "type": "text",
      "value": "¿Por qué es peligroso? Porque si dentro de ese efecto actualizas el estado (`useState`), provocarás un nuevo renderizado. Ese renderizado disparará el efecto de nuevo. El efecto actualizará el estado otra vez. Resultado: **Bucle Infinito** (Infinite Loop) y navegador congelado."
    },
    {
      "type": "code",
      "value": "useEffect(() => {\n  console.log('Peligro: Me ejecuto en cada render');\n  \n  // ❌ CRÍTICO: Esto causará un bucle infinito y colgará la pestaña\n  // setContador(c => c + 1);\n}); // <--- ¡Falta el array!"
    },
    {
      "type": "text",
      "value": "Es fundamental entender el orden de ejecución (Timing). `useEffect` se ejecuta **después** de que el navegador ha pintado la pantalla. React prioriza mostrar la interfaz al usuario para que la app se sienta rápida, y luego ejecuta tus efectos."
    },
    {
      "type": "text",
      "value": "Hablemos ahora de la **Función de Limpieza** (Cleanup Function). A veces, los efectos crean conexiones que deben cerrarse, como Websockets o `setInterval`. Si no limpiamos, creamos fugas de memoria (memory leaks)."
    },
    {
      "type": "text",
      "value": "Para limpiar, tu efecto debe **retornar una función**. React ejecutará esta función de limpieza antes de aplicar el efecto la próxima vez, o cuando el componente se desmonte (desaparezca de la pantalla)."
    },
    {
      "type": "code",
      "value": "useEffect(() => {\n  // 1. Setup: Crear el intervalo\n  const idIntervalo = setInterval(() => {\n    console.log('Tic Tac');\n  }, 1000);\n\n  // 2. Cleanup: Esta función se guarda y se ejecuta al desmontar\n  return () => {\n    console.log('Limpiando intervalo...');\n    clearInterval(idIntervalo);\n  };\n}, []);"
    },
    {
      "type": "text",
      "value": "Un error común de concepto es pensar en `useEffect` como 'quiero hacer X cuando pase Y'. Intenta pensar en 'quiero que mi componente esté sincronizado con el recurso Z'. La diferencia es sutil pero importante."
    },
    {
      "type": "text",
      "value": "Una trampa habitual para juniors es **mentirle al array de dependencias**. A veces, el linter (ESLint) te grita que falta una dependencia, y tú la omites para evitar un bucle infinito. Eso es un error. Si tienes un bucle, el problema no es la dependencia, es la lógica de tu efecto."
    },
    {
      "type": "text",
      "value": "Otra precaución: Los **Objetos y Arrays como dependencias**. En JavaScript, `{ id: 1 } !== { id: 1 }` (referencias distintas). Si pones un objeto en el array de dependencias que se crea en cada render, el efecto se ejecutará infinitamente. Solución: usa primitivos (`id`) o `useMemo` (que veremos más adelante)."
    },
    {
      "type": "text",
      "value": "Resumen de supervivencia: 1. Usa siempre el array de dependencias. 2. Si usas `useState` dentro, asegúrate de que el array no esté vacío ni cause cambios constantes. 3. Si te suscribes a algo, recuerda retornar la función de limpieza."
    }
  ]
},
{
  "id": "proyecto-integrador-fundamentos",
  "title": "Proyecto de práctica: Tablón de tareas",
  "shortDescription": "Consolidación de conocimientos construyendo una aplicación completa con gestión de estado, componentes controlados y efectos secundarios.",
  "keyConcept": "La integración de **useState** para la interactividad y **useEffect** para la sincronización con sistemas externos (APIs simuladas y el DOM) es el núcleo de cualquier SPA moderna.",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Fundamentos",
    "Arquitectura",
    "Frontend"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Ha llegado el momento de graduarte de los fundamentos. Vamos a combinar todo lo aprendido (JSX, Props, State, Eventos, Lifting State Up y useEffect) en un único proyecto coherente."
    },
    {
      "type": "text",
      "value": "Tu cliente ficticio necesita un **Gestor de Tareas (Todo App)**, pero con un giro técnico: quiere simular que los datos vienen de un servidor lento y que la aplicación reacciona al entorno del navegador."
    },
    {
      "type": "text",
      "value": "### Requisitos Funcionales del Proyecto"
    },
    {
      "type": "text",
      "value": "1. **Arquitectura de Componentes**: La aplicación debe tener al menos tres componentes separados:\n   * `App`: El orquestador principal (padre).\n   * `TaskForm`: Formulario para añadir tareas.\n   * `TaskList`: Lista que renderiza las tareas."
    },
    {
      "type": "text",
      "value": "2. **Carga Asíncrona (Simulada)**: \n   * Al cargar la página, la lista de tareas debe estar vacía.\n   * Usa un `useEffect` con array de dependencias vacío `[]` para simular una petición a una API. \n   * Usa `setTimeout` para esperar 2 segundos y luego cargar 3 tareas iniciales predefinidas.\n   * Mientras carga, debes mostrar un mensaje de \"Cargando datos...\" (Renderizado Condicional)."
    },
    {
      "type": "text",
      "value": "3. **Efectos de Actualización**: \n   * Crea un segundo `useEffect`. Cada vez que cambie la lista de tareas (añadir o borrar), actualiza el **Título de la Pestaña** del navegador (`document.title`) para que diga: \"Tienes X tareas pendientes\"."
    },
    {
      "type": "text",
      "value": "4. **Gestión de Estado**: \n   * El usuario debe poder añadir tareas (Input Controlado).\n   * El usuario debe poder borrar tareas (pasando el ID).\n   * El usuario debe poder marcar tareas como completadas (Toggle)."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "### Solución del Senior Developer"
    },
    {
      "type": "text",
      "value": "A continuación, presento una solución modular. Observa cómo separamos responsabilidades y manejamos los efectos secundarios."
    },
    {
      "type": "code",
      "value": "import { useState, useEffect } from 'react';\n\n// 1. Componente de Formulario (Input Controlado)\nconst TaskForm = ({ onAddTask }) => {\n  const [texto, setTexto] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (!texto.trim()) return;\n    onAddTask(texto);\n    setTexto(''); // Limpiar input\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input \n        type=\"text\" \n        value={texto}\n        onChange={(e) => setTexto(e.target.value)}\n        placeholder=\"Nueva tarea...\"\n      />\n      <button type=\"submit\">Añadir</button>\n    </form>\n  );\n};\n\n// 2. Componente de Lista (Presentacional)\nconst TaskList = ({ tasks, onToggle, onDelete }) => {\n  if (tasks.length === 0) return <p>No hay tareas. ¡Añade una!</p>;\n\n  return (\n    <ul>\n      {tasks.map((task) => (\n        <li key={task.id} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>\n          <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>\n            {task.text}\n          </span>\n          <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>\n            ❌\n          </button>\n        </li>\n      ))}\n    </ul>\n  );\n};\n\n// 3. Componente Principal (Lógica y Estado)\nconst App = () => {\n  const [tasks, setTasks] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  // EFECTO 1: Simulación de carga inicial (Mount)\n  useEffect(() => {\n    console.log(\"Montando componente y pidiendo datos...\");\n    const timer = setTimeout(() => {\n      const datosIniciales = [\n        { id: 1, text: 'Aprender React', done: true },\n        { id: 2, text: 'Dominar useEffect', done: false },\n        { id: 3, text: 'Hacer deporte', done: false },\n      ];\n      setTasks(datosIniciales);\n      setLoading(false);\n    }, 2000);\n\n    // Cleanup (buena práctica por si el componente se desmonta antes de los 2s)\n    return () => clearTimeout(timer);\n  }, []); // Array vacío = Solo una vez\n\n  // EFECTO 2: Sincronización con el navegador (Update)\n  useEffect(() => {\n    const pendientes = tasks.filter(t => !t.done).length;\n    document.title = `Tienes ${pendientes} tareas pendientes`;\n  }, [tasks]); // Se ejecuta cada vez que 'tasks' cambia\n\n  // Helpers para modificar estado\n  const addTask = (text) => {\n    const newTask = { id: Date.now(), text, done: false };\n    setTasks([...tasks, newTask]); // Inmutabilidad\n  };\n\n  const toggleTask = (id) => {\n    setTasks(tasks.map(t => \n      t.id === id ? { ...t, done: !t.done } : t\n    ));\n  };\n\n  const deleteTask = (id) => {\n    setTasks(tasks.filter(t => t.id !== id));\n  };\n\n  return (\n    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>\n      <h1>Dashboard de Tareas</h1>\n      \n      {loading ? (\n        <p>⏳ Cargando datos del servidor...</p>\n      ) : (\n        <>\n          <TaskForm onAddTask={addTask} />\n          <hr />\n          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />\n        </>\n      )}\n    </div>\n  );\n};\n\nexport default App;"
    },
    {
      "type": "text",
      "value": "### Puntos Clave a Revisar"
    },
    {
      "type": "text",
      "value": "1. **Doble `useEffect`**: Hemos separado las preocupaciones. Un efecto se encarga de 'traer' los datos (solo al principio) y otro de 'sincronizar' el título (siempre que cambien los datos)."
    },
    {
      "type": "text",
      "value": "2. **Renderizado Condicional**: El ternario `loading ? (...) : (...)` es vital para una buena experiencia de usuario (UX). Evita mostrar una lista vacía antes de que lleguen los datos."
    },
    {
      "type": "text",
      "value": "3. **Lifting State Up**: `TaskForm` no guarda la lista de tareas. Recoge el texto y se lo pasa a `App` mediante la prop `onAddTask`. `App` es la única fuente de verdad."
    },
    {
      "type": "text",
      "value": "Si has logrado construir esto, ya tienes la base sólida para empezar a trabajar con APIs reales en el siguiente módulo."
    }
  ]
},

{
  "id": "tema-7-cleanup-strict-mode",
  "title": "Gestión de Memoria: Cleanup Functions y Strict Mode",
  "shortDescription": "Dominio del ciclo de vida de los efectos para prevenir fugas de memoria y comprensión del comportamiento de doble invocación en desarrollo.",
  "keyConcept": "La **Función de Limpieza** es el mecanismo que permite a un componente 'recoger su basura' antes de desaparecer, siendo vital para evitar **Memory Leaks** y comportamientos erráticos.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Rendimiento",
    "Debugging",
    "Fundamentos"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "En la lección anterior introdujimos `useEffect`, pero dejamos pendiente su fase final: la limpieza. Un componente profesional no solo debe saber 'arrancar' procesos, sino también detenerlos ordenadamente. Ignorar esto es la causa principal de los **Memory Leaks** (Fugas de Memoria)."
    },
    {
      "type": "text",
      "value": "Un Memory Leak ocurre cuando un componente ha sido eliminado de la pantalla (desmontado), pero sigue consumiendo recursos del navegador porque dejó procesos activos en segundo plano. Esto ralentiza la aplicación progresivamente hasta colapsar la pestaña."
    },
    {
      "type": "text",
      "value": "Para prevenir esto, `useEffect` nos permite retornar una función. React ejecutará esta función en dos momentos clave: 1. Justo antes de que el componente se desmonte (desaparezca). 2. Justo antes de volver a ejecutar el efecto (si las dependencias cambiaron), para limpiar la ejecución anterior."
    },
    {
      "type": "code",
      "value": "import { useState, useEffect } from 'react';\n\nconst Reloj = () => {\n  const [hora, setHora] = useState(new Date());\n\n  useEffect(() => {\n    // 1. Setup: Iniciamos un intervalo que corre cada segundo\n    const idIntervalo = setInterval(() => {\n      console.log('Tic Tac');\n      setHora(new Date());\n    }, 1000);\n\n    // 2. Cleanup: Si no detenemos esto, el reloj seguirá corriendo\n    // en memoria incluso si el usuario navega a otra página.\n    return () => {\n      console.log('Componente destruido, limpiando intervalo...');\n      clearInterval(idIntervalo);\n    };\n  }, []); // Array vacío: Solo al montar y desmontar\n\n  return <h2>{hora.toLocaleTimeString()}</h2>;\n};"
    },
    {
      "type": "text",
      "value": "Imagina que el usuario entra y sale 10 veces de la vista del `Reloj`. Si no tuviéramos la función `clearInterval` en el retorno, tendríamos 10 relojes invisibles corriendo simultáneamente en segundo plano, consumiendo CPU y lanzando errores al intentar actualizar el estado de un componente que ya no existe."
    },
    {
      "type": "text",
      "value": "Este patrón de limpieza es obligatorio para: **Timers** (`setInterval`, `setTimeout`), **Listeners del DOM** (`window.addEventListener`), conexiones a **WebSockets** y suscripciones a observables (como en RxJS)."
    },
    {
      "type": "code",
      "value": "const SeguidorRaton = () => {\n  const [coords, setCoords] = useState({ x: 0, y: 0 });\n\n  useEffect(() => {\n    const manejarMovimiento = (e) => {\n      setCoords({ x: e.clientX, y: e.clientY });\n    };\n\n    // Suscripción al evento global del navegador\n    window.addEventListener('mousemove', manejarMovimiento);\n\n    // Cleanup IMPRESCINDIBLE: Eliminar la suscripción\n    return () => {\n      window.removeEventListener('mousemove', manejarMovimiento);\n    };\n  }, []);\n\n  return <p>Posición: {coords.x}, {coords.y}</p>;\n};"
    },
    {
      "type": "text",
      "value": "Ahora, abordemos una de las dudas más frecuentes y frustrantes para los desarrolladores de React: **'¿Por qué mis console.log aparecen dos veces?'**."
    },
    {
      "type": "text",
      "value": "Esto se debe al **Strict Mode** (`<React.StrictMode>`). Si observas tu archivo `main.jsx` o `index.js`, verás que tu App está envuelta en esta etiqueta. Es una herramienta de desarrollo que intencionalmente provoca este comportamiento."
    },
    {
      "type": "text",
      "value": "En desarrollo (y SOLO en desarrollo), React realiza una 'prueba de estrés' a tus componentes. Cuando un componente se monta, React hace lo siguiente de forma inmediata: **Montar -> Desmontar -> Montar**."
    },
    {
      "type": "text",
      "value": "¿Por qué hace esto React? Precisamente para verificar que tu **Función de Limpieza** funciona correctamente. Si tu efecto crea una conexión y la limpieza la cierra, al hacerlo dos veces (Conectar -> Desconectar -> Conectar), el estado final debería ser una conexión activa y sana."
    },
    {
      "type": "text",
      "value": "Si tu lógica de limpieza está mal implementada (o no existe), esta prueba doble revelará bugs visuales o lógicos inmediatamente. Por ejemplo, si ves dos conexiones de WebSocket abiertas, sabes que te olvidaste de cerrar la primera en el cleanup."
    },
    {
      "type": "code",
      "value": "// Comportamiento en Strict Mode (Desarrollo):\n\nuseEffect(() => {\n  console.log('Conectando...');\n  return () => console.log('Desconectando...');\n}, []);\n\n// Consola:\n// > Conectando... (Primer montaje)\n// > Desconectando... (Simulación de desmontaje)\n// > Conectando... (Segundo montaje definitivo)\n\n// Si tu código es robusto, el usuario no notará nada."
    },
    {
      "type": "text",
      "value": "No intentes 'arreglar' esto eliminando el Strict Mode. Es tu mejor aliado para garantizar que tu aplicación sea resistente y no tenga fugas de memoria. Recuerda: en Producción, este comportamiento doble desaparece y los efectos se ejecutan una sola vez."
    }
  ]
},
{
  "id": "tema-8-useref-custom-hooks",
  "title": "Referencias y Lógica Reutilizable: useRef y Custom Hooks",
  "shortDescription": "Dominio del acceso imperativo al DOM, gestión de valores mutables persistentes y la arquitectura de lógica compartida mediante Hooks personalizados.",
  "keyConcept": "Mientras **useRef** nos permite persistir valores entre renderizados sin disparar actualizaciones visuales, los **Custom Hooks** son la herramienta arquitectónica para abstraer y compartir **lógica de estado**.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Arquitectura",
    "Lógica",
    "Frontend"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Hasta ahora, hemos operado bajo el paradigma declarativo de React: cambiamos el estado y la interfaz se actualiza sola. Sin embargo, hay situaciones donde necesitamos 'saltarnos' este ciclo o almacenar datos que no afectan a la vista. Aquí entra `useRef`."
    },
    {
      "type": "text",
      "value": "El hook **`useRef`** sirve para dos propósitos fundamentalmente distintos pero relacionados mecánicamente. El primero es el **acceso al DOM real**. A veces necesitamos hacer focus en un input, medir el ancho de un div o integrar una librería de terceros (como D3.js o Google Maps)."
    },
    {
      "type": "text",
      "value": "Al usar `useRef(valorInicial)`, React nos devuelve un objeto con una única propiedad: `{ current: valorInicial }`. Este objeto es persistente; mantiene su referencia de memoria durante toda la vida del componente."
    },
    {
      "type": "code",
      "value": "import { useRef, useEffect } from 'react';\n\nconst FormularioFocus = () => {\n  // 1. Creamos la referencia (inicialmente null)\n  const inputRef = useRef(null);\n\n  useEffect(() => {\n    // 3. Al montar, accedemos al nodo DOM real mediante .current\n    inputRef.current.focus();\n  }, []);\n\n  return (\n    // 2. Conectamos la referencia al elemento JSX\n    <input ref={inputRef} type=\"text\" placeholder=\"Foco automático aquí\" />\n  );\n};"
    },
    {
      "type": "text",
      "value": "El segundo uso de `useRef`, y a menudo el más incomprendido, es como **almacén de valores mutables**. Piensa en `useRef` como una 'caja fuerte' donde puedes guardar cualquier valor. Lo crucial es que, a diferencia de `useState`, **modificar `ref.current` NO dispara un re-renderizado**."
    },
    {
      "type": "text",
      "value": "Esto es ideal para guardar valores que necesitamos recordar entre renders pero que no queremos que actualicen la pantalla, como IDs de temporizadores (`setTimeout`), valores previos para comparación, o banderas de estado interno."
    },
    {
      "type": "code",
      "value": "const Cronometro = () => {\n  const [segundos, setSegundos] = useState(0);\n  // Guardamos el ID del intervalo aquí porque no afecta a la vista directamente\n  // y necesitamos que persista entre renders para poder limpiarlo después.\n  const intervaloRef = useRef(null);\n\n  const iniciar = () => {\n    if (intervaloRef.current) return; // Ya está corriendo\n    \n    intervaloRef.current = setInterval(() => {\n      setSegundos(s => s + 1);\n    }, 1000);\n  };\n\n  const detener = () => {\n    clearInterval(intervaloRef.current);\n    intervaloRef.current = null;\n  };\n\n  return (\n    <>\n      <h1>{segundos}s</h1>\n      <button onClick={iniciar}>Start</button>\n      <button onClick={detener}>Stop</button>\n    </>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Ahora, demos el salto arquitectónico más importante en React: los **Custom Hooks**. Si te encuentras copiando y pegando lógica (como `useEffect` para hacer fetch, o lógica de formularios) entre componentes, necesitas un Custom Hook."
    },
    {
      "type": "text",
      "value": "Un Custom Hook no es más que una función de JavaScript que **invoca a otros Hooks** (`useState`, `useEffect`, etc.). Por convención obligatoria, su nombre debe empezar por **`use`** (ej: `useFetch`, `useForm`, `useUser`)."
    },
    {
      "type": "text",
      "value": "El objetivo es separar la **UI** (lo visual) de la **Lógica de Negocio**. El componente solo debe preocuparse de pintar cosas; el Custom Hook se encarga de 'pensar' y gestionar el estado sucio."
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "code",
      "value": "// hooks/useToggle.js\n// Un hook simple para abstraer la lógica de true/false\n\nimport { useState } from 'react';\n\nexport const useToggle = (inicial = false) => {\n  const [estado, setEstado] = useState(inicial);\n\n  // Función auxiliar para invertir el valor\n  const toggle = () => setEstado(prev => !prev);\n\n  // Devolvemos lo que el componente necesita consumir (API pública)\n  return [estado, toggle];\n};"
    },
    {
      "type": "text",
      "value": "Ahora, cualquier componente de nuestra aplicación puede tener funcionalidad de toggle (abrir/cerrar menús, modales, spoilers) con una sola línea de código, sin reescribir `useState` y funciones manejadoras una y otra vez."
    },
    {
      "type": "code",
      "value": "// Componente consumidor\nimport { useToggle } from './hooks/useToggle';\n\nconst Menu = () => {\n  // Reutilizamos la lógica. Cada llamada crea un estado INDEPENDIENTE.\n  const [esVisible, alternarVisibilidad] = useToggle(false);\n\n  return (\n    <div>\n      <button onClick={alternarVisibilidad}>\n        {esVisible ? 'Ocultar' : 'Mostrar'} Menú\n      </button>\n      {esVisible && <nav>Items del menú...</nav>}\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Es vital entender que los Custom Hooks **reutilizan la lógica de estado, no el estado en sí**. Si usas `useToggle` en dos componentes distintos, cada uno tiene su propio estado `true/false` independiente. No comparten la variable."
    },
    {
      "type": "text",
      "value": "Para cerrar este tema, debemos repasar las **Reglas de los Hooks**. React impone dos restricciones severas para que su magia interna funcione. Si las rompes, la aplicación fallará con errores crípticos."
    },
    {
      "type": "text",
      "value": "1. **Solo llamar Hooks en el nivel superior**: No llames a Hooks dentro de bucles (`for`), condiciones (`if`) o funciones anidadas. React confía en el orden de llamada para saber qué estado corresponde a qué `useState`."
    },
    {
      "type": "code",
      "value": "// ❌ MAL: Rompe el orden de los hooks si la condición cambia\nif (usuarioLogueado) {\n  useEffect(() => { ... });\n}\n\n// ✅ BIEN: La condición va DENTRO del hook\nuseEffect(() => {\n  if (usuarioLogueado) { ... }\n}, [usuarioLogueado]);"
    },
    {
      "type": "text",
      "value": "2. **Solo llamar Hooks desde funciones de React**: Puedes llamarlos desde Componentes Funcionales o desde otros Custom Hooks. Nunca desde funciones de JavaScript regulares o clases."
    },
    {
      "type": "text",
      "value": "Dominar `useRef` y la creación de `Custom Hooks` es lo que te permite dejar de escribir código 'spaghetti' y comenzar a construir librerías de lógica robusta y mantenible."
    }
  ]
},
{
  "id": "proyecto-practica-habitloop",
  "title": "Proyecto de práctica: Rastreador de Hábitos",
  "shortDescription": "Un proyecto enfocado en la lógica de estado local y la experiencia de usuario (UX). Construye una aplicación para gestionar tus rutinas diarias con persistencia de datos y gamificación.",
  "keyConcept": "Este proyecto se centra en dominar el **CRUD (Create, Read, Update, Delete) en el Cliente**. Cuando entendamos cómo conectar nuestro frontend a una base de datos, volveremos a hacer uno muy similar. Buscamos enfocarno en la manipulación inmutable del estado y la persistencia en **LocalStorage**.",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Frontend",
    "Lógica",
    "Arquitectura"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Como primer proyecto real, vamos a construir una aplicación útil pero sencilla para tu día a día: **Controla tus hábitos**."
    },
    {
      "type": "text",
      "value": "**El Concepto**: Una aplicación minimalista para rastrear tus hábitos diarios (beber agua, leer 30 min, hacer ejercicio...). El usuario define su lista, marca lo que va completando durante el día y cuenta con una barra de progreso visual. Los datos no se deben perder si cierras el navegador."
    },
    {
      "type": "text",
      "value": "**Requerimientos Funcionales:**\n1.  **Añadir Hábito**: Un formulario simple para crear nuevos hábitos.\n2.  **Toggle Completado**: Click en un hábito para marcarlo/desmarcarlo.\n3.  **Borrar Hábito**: Opción para eliminar algo que ya no quieras hacer.\n4.  **Persistencia**: Usar `localStorage` para que los hábitos sobrevivan al refresco.\n5.  **Feedback Visual**: Una barra de progreso que se llene según el % de hábitos completados."
    },
    {
      "type": "text",
      "value": "**Referencia Visual**: Puedes inspirarte en aplicaciones como 'Habitica' o 'Streaks'. Aquí tienes una referencia funcional de una app similar: https://habit-tracker-sample.vercel.app/"
    },
    {
      "type": "text",
      "value": "**La Estructura de Datos**: Necesitamos un array de objetos. Cada objeto debe tener un ID único (puedes usar `crypto.randomUUID()` o `Date.now()`)."
    },
    {
      "type": "code",
      "value": "// Ejemplo de un hábito en el estado\n{\n  id: \"1743-adfe-2921\",\n  title: \"Beber 2L de agua\",\n  completed: false,\n  createdAt: \"2023-10-27T10:00:00.000Z\"\n}",
      "language": "javascript"
    },
    {
      "type": "text",
      "value": "**Buena práctica: El Hook useLocalStorage**. En lugar de escribir `localStorage.getItem` y `setItem` dentro de tu Contexto, extrae esa lógica a un Custom Hook genérico. Este es un ejercicio clásico de entrevista técnica."
    },
    {
      "type": "text",
      "value": "**Buena práctica: Inmutabilidad**. Al marcar un hábito como completado, no puedes modificar el objeto directamente. Debes usar `.map()` para crear un nuevo array donde solo cambie el objeto con el ID coincidente."
    },
    {
      "type": "code",
      "value": "const toggleHabit = (id) => {\n  setHabits(currentHabits => \n    currentHabits.map(habit => \n      habit.id === id \n        ? { ...habit, completed: !habit.completed } // Invertimos solo este\n        : habit // Dejamos el resto igual\n    )\n  );\n};",
      "language": "javascript"
    },
    {
      "type": "text",
      "value": "**Buena práctica: Estado Derivado**. Para la barra de progreso, **no** crees un estado llamado `progress`. El progreso se puede *calcular* en tiempo real basándose en los hábitos. `const progress = (habits.filter(h => h.completed).length / habits.length) * 100`. Haz esto dentro de tu componente."
    },
    {
      "type": "text",
      "value": "**Wireframe Textual (Vista Principal)**:"
    },
    {
      "type": "code",
      "value": "--------------------------------------------------\n|  HabitLoop        [=========== 60% ]  (Barra)  |\n--------------------------------------------------\n\n  [ Input: \"Leer 10 págs\" ]  [ Botón: + ]\n\n  LISTA DE HOY:\n  \n  [x]  Hacer la cama             [🗑️]\n  [ ]  Beber Agua                [🗑️]\n  [x]  Estudiar React            [🗑️]\n  [ ]  Caminar 10k pasos         [🗑️]\n\n  (Si completas todo -> ¡Lanzar Confetti! 🎉)\n--------------------------------------------------",
      "language": "text"
    },
    {
      "type": "text",
      "value": "**Gamificación (Bonus UI)**: Si quieres que tu app destaque, añade una librería de confeti (por ejemplo, https://www.npmjs.com/package/react-confetti). Renderiza el componente `<Confetti />` condicionalmente solo cuando la barra de progreso llegue al 100%."
    },
    {
      "type": "text",
      "value": "**Extensiones posibles**: Añade React Router con una página `/stats`. En esta página, podrías mostrar simplemente \"Total de hábitos creados históricamente\" o \"Completados\"."
    },
  ]
},
{
  "id": "tema-9-react-router",
  "title": "Enrutamiento Moderno y SPAs con React Router v6",
  "shortDescription": "Implementación de navegación completa en el lado del cliente, gestión de rutas dinámicas y arquitecturas de layout anidadas.",
  "keyConcept": "En una **Single Page Application (SPA)**, la navegación es una ilusión: no solicitamos nuevos documentos al servidor, sino que intercambiamos componentes dinámicamente usando la **History API** del navegador.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Arquitectura",
    "Frontend",
    "Fundamentos"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Tradicionalmente, la navegación web implicaba solicitar un nuevo archivo HTML al servidor cada vez que el usuario hacía clic en un enlace. La pantalla se ponía en blanco un instante y todo se recargaba. React cambia este paradigma con el concepto de **Single Page Application (SPA)**."
    },
    {
      "type": "text",
      "value": "En una SPA, solo cargamos un único archivo HTML (`index.html`) al principio. A partir de ahí, JavaScript toma el control. Cuando el usuario 'navega', React intercepta esa acción y, en lugar de pedir otra página, simplemente desmonta el componente actual y monta el nuevo."
    },
    {
      "type": "text",
      "value": "Para gestionar esto, el estándar de la industria es la librería **React Router** (específicamente su versión 6+). Todo comienza envolviendo nuestra aplicación en el proveedor de contexto `BrowserRouter`."
    },
    {
      "type": "code",
      "value": "// main.jsx (Punto de entrada)\nimport { BrowserRouter } from 'react-router-dom';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n);"
    },
    {
      "type": "text",
      "value": "Dentro de nuestra aplicación, definimos el mapa de navegación usando los componentes `Routes` y `Route`. `Routes` actúa como un `switch`: busca entre sus hijos la primera ruta que coincida con la URL actual del navegador y renderiza su componente asociado."
    },
    {
      "type": "code",
      "value": "// App.jsx\nimport { Routes, Route } from 'react-router-dom';\n\nconst App = () => {\n  return (\n    <Routes>\n      {/* Ruta raíz (Home) */}\n      <Route path=\"/\" element={<Home />} />\n      \n      {/* Ruta estática */}\n      <Route path=\"/contacto\" element={<Contacto />} />\n      \n      {/* Ruta 'Catch-all' para errores 404 */}\n      <Route path=\"*\" element={<NotFound />} />\n    </Routes>\n  );\n};"
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "Un error crítico en principiantes es usar la etiqueta HTML estándar `<a>` para navegar. Si usas `<a href=\"/contacto\">`, el navegador forzará una recarga completa de la página, reiniciando todo tu estado de Redux/Context y haciendo la app más lenta."
    },
    {
      "type": "text",
      "value": "En su lugar, debemos usar el componente **`<Link>`** (o `<NavLink>` si necesitamos estilos activos). Este componente renderiza un `<a>` visible, pero internamente previene el comportamiento por defecto y usa la API del historial del navegador para cambiar la URL sin recargar."
    },
    {
      "type": "code",
      "value": "import { Link } from 'react-router-dom';\n\nconst Navbar = () => (\n  <nav>\n    {/* ❌ MAL: Provoca recarga completa (Full Page Reload) */}\n    <a href=\"/contacto\">Contacto Lento</a>\n\n    {/* ✅ BIEN: Navegación instantánea (Client Side Routing) */}\n    <Link to=\"/contacto\">Contacto Rápido</Link>\n  </nav>\n);"
    },
    {
      "type": "text",
      "value": "Pasemos a las **Rutas Dinámicas**. A menudo, no sabemos la URL exacta de antemano (ej: perfiles de usuario, detalles de productos). Para esto usamos los 'wildcards' o parámetros, indicados con dos puntos `:`."
    },
    {
      "type": "text",
      "value": "Por ejemplo, para una ruta de detalle de producto, definiríamos el path como `/producto/:id`. Aquí, `:id` es un marcador de posición que aceptará cualquier valor."
    },
    {
      "type": "text",
      "value": "Para leer ese valor dentro del componente renderizado, React Router nos proporciona el hook **`useParams`**. Este hook devuelve un objeto con las claves correspondientes a los parámetros definidos en la ruta."
    },
    {
      "type": "code",
      "value": "// Definición en Routes:\n// <Route path=\"/producto/:id\" element={<DetalleProducto />} />\n\nimport { useParams } from 'react-router-dom';\n\nconst DetalleProducto = () => {\n  // Extraemos el parámetro 'id' de la URL\n  const { id } = useParams();\n\n  // Ahora podemos usar ese ID para hacer fetch de los datos\n  return <h1>Viendo el producto número: {id}</h1>;\n};"
    },
    {
      "type": "text",
      "value": "Una de las características más potentes de la v6 son las **Rutas Anidadas** (Nested Routes) y el componente **`<Outlet>`**. Imagina que tu aplicación tiene un menú de navegación (Navbar) y un pie de página (Footer) que deben verse en todas las páginas."
    },
    {
      "type": "text",
      "value": "En lugar de repetir el Navbar en cada componente individual, creamos un **Layout** principal. Las rutas anidadas permiten que el componente padre (el Layout) persista, mientras solo cambia una sección específica de su interior."
    },
    {
      "type": "code",
      "value": "// Componente Layout\nimport { Outlet } from 'react-router-dom';\n\nconst LayoutPrincipal = () => {\n  return (\n    <div>\n      <Navbar /> {/* Se mantiene fijo */}\n      \n      <main style={{ padding: '20px' }}>\n        {/* <Outlet> es el hueco donde se renderizarán las rutas hijas */}\n        <Outlet />\n      </main>\n\n      <Footer /> {/* Se mantiene fijo */}\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Configurar esto en el enrutador es sencillo: envolvemos las rutas hijas dentro de la ruta del layout. Esto crea una jerarquía visual que coincide con la jerarquía de la URL."
    },
    {
      "type": "code",
      "value": "<Routes>\n  {/* El Layout envuelve a las demás rutas */}\n  <Route path=\"/\" element={<LayoutPrincipal />}>\n    \n    {/* Estas se renderizarán DENTRO del <Outlet> del Layout */}\n    <Route index element={<Home />} /> {/* Ruta por defecto */}\n    <Route path=\"perfil\" element={<Perfil />} />\n    <Route path=\"ajustes\" element={<Ajustes />} />\n    \n  </Route>\n</Routes>"
    },
    {
      "type": "text",
      "value": "Finalmente, a veces necesitamos navegar no por un clic del usuario, sino como resultado de una operación lógica (ej: redirigir al Dashboard después de un Login exitoso). Esto se llama **Navegación Programática**."
    },
    {
      "type": "text",
      "value": "Para ello utilizamos el hook **`useNavigate`**. Nos devuelve una función que podemos llamar con la ruta destino. Es el equivalente moderno a `history.push` de versiones anteriores."
    },
    {
      "type": "code",
      "value": "import { useNavigate } from 'react-router-dom';\n\nconst Login = () => {\n  const navigate = useNavigate();\n\n  const handleLogin = async () => {\n    await servicioDeLogin();\n    // Redirigir al usuario tras la autenticación\n    navigate('/dashboard');\n    \n    // Nota: navigate(-1) equivale a darle al botón 'Atrás' del navegador\n  };\n\n  return <button onClick={handleLogin}>Entrar</button>;\n};"
    },
    {
      "type": "text",
      "value": "El dominio de React Router, especialmente el uso correcto de `<Outlet>` para layouts y `useParams` para datos dinámicos, es esencial para construir aplicaciones complejas que se sientan robustas y profesionales."
    }
  ]
},
{
  "id": "ejercicio-routing-custom-hooks",
  "title": "Proyecto Práctico: Blog SPA con Hooks Personalizados",
  "shortDescription": "Construcción de una arquitectura de navegación completa separando la lógica de datos de la vista mediante custom hooks.",
  "keyConcept": "La excelencia en React se logra cuando la **Navegación** gestiona la URL y los **Custom Hooks** gestionan los datos, dejando a los componentes únicamente la responsabilidad de renderizar.",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Arquitectura",
    "Frontend",
    "Fundamentos"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "Vamos a subir el nivel. Ahora que dominas los componentes y el estado, necesitamos que tu aplicación deje de ser una sola pantalla y se convierta en un sitio web completo navegable."
    },
    {
      "type": "text",
      "value": "En este ejercicio, simularás ser el Arquitecto Frontend de un nuevo **Portal de Noticias**. El objetivo es crear una aplicación que cargue artículos, permita leerlos en detalle y gestione la lógica de datos de forma limpia."
    },
    {
      "type": "text",
      "value": "El desafío combina dos habilidades críticas: **React Router v6** para movernos entre pantallas y **Custom Hooks** para no repetir la lógica de `fetch` en cada componente."
    },
    {
      "type": "text",
      "value": "### Escenario y Recursos"
    },
    {
      "type": "text",
      "value": "No tenemos un backend real, así que usaremos esta función simulada (Mock) que actúa como base de datos. Copia esto en un archivo `api.js` o al principio de tu ejercicio:"
    },
    {
      "type": "code",
      "value": "// Simulación de API (No modificar)\nexport const fakeApi = {\n  getPosts: () => Promise.resolve([\n    { id: 1, title: 'React 19 novedades', content: 'Todo sobre el compilador...' },\n    { id: 2, title: 'Adiós a CRA', content: 'Por qué Vite es el rey...' },\n    { id: 3, title: 'Hooks avanzados', content: 'Domina useRef y useMemo...' },\n  ]),\n  getPostById: (id) => Promise.resolve({\n    id,\n    title: `Detalle del Post ${id}`,\n    content: 'Contenido completo y extenso del artículo...',\n    author: 'Admin'\n  })\n};"
    },
    {
      "type": "text",
      "value": "### Requisitos del Proyecto"
    },
    {
      "type": "text",
      "value": "1. **Custom Hook `useAsync`**: \n   No quiero ver `useEffect` ni `useState` repetidos en los componentes de vista. Crea un hook genérico que reciba una función asíncrona (promesa), la ejecute y devuelva un objeto con: `{ data, loading, error }`."
    },
    {
      "type": "text",
      "value": "2. **Configuración de Rutas**: \n   Implementa `BrowserRouter`. Necesitamos tres rutas:\n   * `/`: La Home que muestra la lista de títulos.\n   * `/noticia/:id`: La vista de detalle del artículo.\n   * `*`: Una página 404 para rutas no existentes."
    },
    {
      "type": "text",
      "value": "3. **Navegación Declarativa (`Link`)**: \n   En la Home, cada título debe ser un enlace que lleve a la ruta de detalle correspondiente. No uses `<a>`."
    },
    {
      "type": "text",
      "value": "4. **Parámetros de URL (`useParams`)**: \n   En el componente de detalle, extrae el `id` de la URL y úsalo para pedir los datos específicos a la API simulada usando tu Custom Hook."
    },
    {
      "type": "text",
      "value": "5. **Navegación Imperativa (`useNavigate`)**: \n   En la vista de detalle, añade un botón \"Volver atrás\" que regrese a la Home programáticamente."
    },
    {
      "type": "text",
      "value": "Intenta estructurar tu solución antes de ver la respuesta. Piensa: ¿Qué responsabilidad tiene el Router y cuál tiene el Hook?"
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "### Solución del Arquitecto"
    },
    {
      "type": "text",
      "value": "A continuación, la implementación completa. Fíjate en cómo los componentes de vista (`Home` y `PostDetail`) quedan limpios y enfocados solo en renderizar, gracias al Custom Hook."
    },
    {
      "type": "code",
      "value": "import { useState, useEffect, useCallback } from 'react';\nimport { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';\nimport { fakeApi } from './api'; // Asumiendo que guardaste el mock\n\n// --- 1. CUSTOM HOOK: Lógica de Negocio ---\n// Este hook encapsula el ciclo de vida de cualquier petición asíncrona\nconst useAsync = (asyncFunction, immediate = true) => {\n  const [status, setStatus] = useState('idle');\n  const [data, setData] = useState(null);\n  const [error, setError] = useState(null);\n\n  // El useCallback asegura que la función no cambie en cada render\n  const execute = useCallback(() => {\n    setStatus('pending');\n    setData(null);\n    setError(null);\n\n    return asyncFunction()\n      .then(response => {\n        setData(response);\n        setStatus('success');\n      })\n      .catch(error => {\n        setError(error);\n        setStatus('error');\n      });\n  }, [asyncFunction]);\n\n  useEffect(() => {\n    if (immediate) {\n      execute();\n    }\n  }, [execute, immediate]);\n\n  return { data, isLoading: status === 'pending', error };\n};\n\n// --- 2. VISTAS (COMPONENTES) ---\n\nconst Home = () => {\n  // Usamos el hook para pedir TODOS los posts. El componente no sabe cómo se piden.\n  // Nota: En un caso real, fakeApi.getPosts debería estar memoizada o ser estable.\n  const { data: posts, isLoading } = useAsync(fakeApi.getPosts);\n\n  if (isLoading) return <div>Cargando portada...</div>;\n\n  return (\n    <div>\n      <h1>Últimas Noticias</h1>\n      <ul>\n        {posts?.map(post => (\n          <li key={post.id}>\n            {/* Navegación Declarativa */}\n            <Link to={`/noticia/${post.id}`}>\n              {post.title}\n            </Link>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nconst PostDetail = () => {\n  const { id } = useParams(); // Extraemos el ID de la URL\n  const navigate = useNavigate();\n\n  // Creamos una función 'al vuelo' que pide este ID concreto\n  // En casos reales, usaríamos useCallback aquí si la API function cambia\n  const fetchPost = useCallback(() => fakeApi.getPostById(id), [id]);\n  \n  const { data: post, isLoading } = useAsync(fetchPost);\n\n  if (isLoading) return <div>Cargando artículo...</div>;\n  if (!post) return <div>Artículo no encontrado</div>;\n\n  return (\n    <article>\n      <h1>{post.title}</h1>\n      <p>{post.content}</p>\n      <small>Autor: {post.author}</small>\n      <br />\n      <hr />\n      {/* Navegación Imperativa */}\n      <button onClick={() => navigate('/')}>← Volver al inicio</button>\n    </article>\n  );\n};\n\nconst NotFound = () => <h2>404 - Página no encontrada 😢</h2>;\n\n// --- 3. ENRUTAMIENTO PRINCIPAL ---\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <div className=\"container\">\n        <nav style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>\n           <Link to=\"/\">Mi Blog Tech</Link>\n        </nav>\n\n        <Routes>\n          <Route path=\"/\" element={<Home />} />\n          <Route path=\"/noticia/:id\" element={<PostDetail />} />\n          <Route path=\"*\" element={<NotFound />} />\n        </Routes>\n      </div>\n    </BrowserRouter>\n  );\n};\n\nexport default App;"
    },
    {
      "type": "text",
      "value": "### Análisis de la Arquitectura"
    },
    {
      "type": "text",
      "value": "1. **Abstracción Total (`useAsync`)**: Observa `Home`. No tiene `useEffect`, ni `fetch`, ni `then`. Solo dice 'Dame los datos usando esta función'. Esto hace que `Home` sea increíblemente fácil de leer y testear."
    },
    {
      "type": "text",
      "value": "2. **Dynamic Routing**: La ruta `/noticia/:id` actúa como un comodín. No importa si el ID es 1, 99 o 'abc', el componente `PostDetail` se montará y `useParams` capturará el valor."
    },
    {
      "type": "text",
      "value": "3. **Estabilidad de Referencias**: En `PostDetail`, usamos `useCallback` para crear la función que le pasamos al hook. Esto es vital. Si no lo hiciéramos, en cada render se crearía una nueva función, el hook `useAsync` detectaría que su dependencia cambió y entraría en un bucle infinito de peticiones."
    },
    {
      "type": "text",
      "value": "Este ejercicio demuestra cómo React Router y los Hooks trabajan en equipo: el Router te dice **DÓNDE** estás (el ID) y el Hook te dice **QUÉ** mostrar (los datos)."
    }
  ]
},
{
  "id": "tema-10-react-query-data-fetching",
  "title": "Gestión de Datos Asíncronos con TanStack Query",
  "shortDescription": "Abandona los useEffects manuales para el fetching de datos y adopta la gestión de estado de servidor con caché inteligente, invalidación y sincronización automática.",
  "keyConcept": "El estado de la interfaz (**Client State**) y el estado del servidor (**Server State**) son fundamentalmente diferentes. **React Query** gestiona el segundo, eliminando la necesidad de `useEffect` para llamadas a APIs y resolviendo problemas complejos de caché.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Arquitectura",
    "Backend",
    "Rendimiento"
  ],
  "difficulty": "Avanzado",
  "content": [
    {
      "type": "text",
      "value": "Llegamos a uno de los puntos de inflexión más importantes en la carrera de un desarrollador React. Hasta ahora, probablemente hayas utilizado `useEffect` para pedir datos a una API. Si bien funciona para demos, esta aproximación es **insuficiente y peligrosa** para aplicaciones de producción."
    },
    {
      "type": "text",
      "value": "Gestionar datos remotos manualmente implica reinventar la rueda constantemente. Tienes que declarar estados para `loading`, `error` y `data`. Además, te enfrentas a problemas invisibles pero críticos como las **Race Conditions**."
    },
    {
      "type": "text",
      "value": "Una *Race Condition* ocurre, por ejemplo, cuando un usuario cambia rápidamente entre pestañas o filtros. Si la petición 'A' tarda más que la petición 'B', pero el usuario solicitó 'B' al final, tu interfaz podría terminar mostrando los datos de 'A' (obsoletos) porque su respuesta llegó la última. `useEffect` no cancela ni descarta respuestas anteriores automáticamente."
    },
    {
      "type": "code",
      "value": "// ❌ EL 'ANTIPATRÓN' DE USEEFFECT MANUAL\n// Esto no gestiona caché, ni reintentos, ni race conditions.\n\nconst [data, setData] = useState(null);\nconst [isLoading, setIsLoading] = useState(true);\nconst [error, setError] = useState(null);\n\nuseEffect(() => {\n  let ignore = false;\n  fetch('/api/data')\n    .then(res => res.json())\n    .then(json => {\n       if (!ignore) setData(json);\n    })\n    .catch(err => setError(err))\n    .finally(() => setIsLoading(false));\n    \n  return () => { ignore = true; }; // Limpieza manual tediosa\n}, []);"
    },
    {
      "type": "text",
      "value": "Para solucionar esto profesionalmente, debemos distinguir entre **Estado del Cliente** (UI, inputs, modales, gestionado por `useState` o Context) y **Estado del Servidor** (datos remotos que no poseemos, que pueden estar desactualizados y requieren asincronía)."
    },
    {
      "type": "text",
      "value": "La herramienta estándar de la industria hoy en día para gestionar el estado del servidor es **TanStack Query** (conocida comúnmente como React Query). No es solo una librería de fetching; es un gestor de estado asíncrono inteligente."
    },
    {
      "type": "text",
      "value": "Antes de usarla, debemos configurar el entorno envolviendo nuestra aplicación en un `QueryClientProvider`. Esto inyecta la caché en todo el árbol de componentes."
    },
    {
      "type": "code",
      "value": "// main.jsx\nimport { QueryClient, QueryClientProvider } from '@tanstack/react-query';\n\n// Creamos la instancia del cliente de caché\nconst queryClient = new QueryClient();\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <QueryClientProvider client={queryClient}>\n    <App />\n  </QueryClientProvider>\n);"
    },
    {
      "type": "text",
      "value": "Para leer datos (operaciones GET), utilizamos el hook **`useQuery`**. Este hook requiere dos cosas: una **`queryKey`** (un array que identifica únicamente a estos datos en la caché) y una **`queryFn`** (la función asíncrona que hace el fetch real)."
    },
    {
      "type": "code",
      "value": "import { useQuery } from '@tanstack/react-query';\n\nconst PerfilUsuario = ({ userId }) => {\n  // ✅ SINTAXIS MODERNA (v5)\n  const { data, isLoading, isError, error } = useQuery({\n    queryKey: ['usuario', userId], // La clave incluye las dependencias\n    queryFn: async () => {\n      const res = await fetch(`/api/users/${userId}`);\n      if (!res.ok) throw new Error('Error de red');\n      return res.json();\n    },\n    staleTime: 1000 * 60, // Los datos se consideran 'frescos' por 1 minuto\n  });\n\n  if (isLoading) return <Spinner />;\n  if (isError) return <p>Error: {error.message}</p>;\n\n  return <div><h1>{data.nombre}</h1></div>;\n};"
    },
    {
      "type": "text",
      "value": "Observa la limpieza del código. React Query gestiona automáticamente los estados de carga y error. Además, gracias a la `queryKey`, si el componente se desmonta y se vuelve a montar, React Query servirá los datos de la caché instantáneamente mientras verifica en segundo plano si hay actualizaciones (estrategia **Stale-While-Revalidate**)."
    },
    {
      "type": "text",
      "value": "Otra característica 'mágica' es el **Refetching Automático**. Si el usuario cambia de pestaña en el navegador y vuelve a tu app, React Query detecta el foco de la ventana (`refetchOnWindowFocus`) y actualiza los datos automáticamente para asegurar que no ve información obsoleta."
    },
    {
      "type": "text",
      "value": "Para modificar datos (POST, PUT, DELETE), utilizamos el hook **`useMutation`**. A diferencia de `useQuery`, las mutaciones no se ejecutan automáticamente; nos devuelven una función `.mutate()` para que la llamemos cuando ocurra un evento (como un submit)."
    },
    {
      "type": "code",
      "value": "import { useMutation, useQueryClient } from '@tanstack/react-query';\n\nconst CrearTodo = () => {\n  const queryClient = useQueryClient();\n\n  const mutation = useMutation({\n    mutationFn: (nuevoTodo) => {\n      return fetch('/api/todos', {\n        method: 'POST',\n        body: JSON.stringify(nuevoTodo),\n      });\n    },\n    // Callback vital: Qué hacer si la mutación tiene éxito\n    onSuccess: () => {\n      // ⚠️ INVALIDACIÓN DE CACHÉ\n      // Le decimos a React Query: 'La lista de todos ya no es válida, recárgala'.\n      queryClient.invalidateQueries({ queryKey: ['todos'] });\n    },\n  });\n\n  return (\n    <button onClick={() => mutation.mutate({ titulo: 'Aprender React Query' })}>\n      Crear Tarea {mutation.isPending && 'Guardando...'}\n    </button>\n  );\n};"
    },
    {
      "type": "text",
      "value": "El concepto de **Invalidación de Caché** (`invalidateQueries`) es la pieza clave de la arquitectura. En lugar de intentar actualizar manualmente el estado local de una lista compleja tras añadir un elemento, simplemente invalidamos la caché de esa lista."
    },
    {
      "type": "text",
      "value": "Al invalidar, React Query marca los datos antiguos como 'rancios' (stale) y lanza automáticamente una nueva petición `GET` en segundo plano. Esto garantiza que nuestra interfaz siempre muestre la **Verdad del Servidor**, manteniendo la sincronización perfecta."
    },
    {
      "type": "text",
      "value": "React Query también maneja **Reintentos** (Retries). Si una petición falla (por ejemplo, el servidor está caído momentáneamente), la librería reintentará la petición 3 veces (por defecto) con un retraso exponencial antes de lanzar el estado `isError`."
    },
    {
      "type": "text",
      "value": "Para escenarios avanzados, podemos implementar **Optimistic Updates** (Actualizaciones Optimistas). Esto consiste en actualizar la interfaz *antes* de que el servidor responda, asumiendo que todo saldrá bien, para dar una sensación de velocidad instantánea, y revertir los cambios si ocurre un error."
    },
    {
      "type": "text",
      "value": "En resumen: `useEffect` es para sincronizar con sistemas externos, pero React Query es para sincronizar datos. Usar la herramienta correcta reduce drásticamente las líneas de código y elimina una categoría entera de bugs relacionados con la gestión del estado asíncrono."
    },
    {
      "type": "text",
      "value": "Dominar React Query es obligatorio en el desarrollo moderno, ya que separa limpiamente la lógica de la UI de la lógica de adquisición y caché de datos."
    }
  ]
},
{
  "id": "tema-11-estado-global-zustand",
  "title": "Arquitectura de Estado Global: Context API y Zustand",
  "shortDescription": "Estrategias para gestionar datos compartidos en toda la aplicación, desde la solución nativa Context hasta gestores de estado modernos como Zustand.",
  "keyConcept": "El **Estado Global** debe usarse con moderación. Mientras **Context API** es ideal para inyección de dependencias estáticas, librerías como **Zustand** ofrecen rendimiento y granularidad para datos dinámicos complejos.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Arquitectura",
    "Rendimiento",
    "Fundamentos"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "A medida que una aplicación React escala, nos encontramos inevitablemente con el problema de compartir datos entre componentes que no tienen una relación directa padre-hijo. Hasta ahora, hemos confiado en el estado local (`useState`), pero este enfoque tiene límites arquitectónicos claros."
    },
    {
      "type": "text",
      "value": "El primer síntoma de una mala gestión de estado es el **Prop Drilling** (taladrado de props). Esto ocurre cuando necesitamos pasar un dato (ej: un usuario autenticado) desde el componente raíz `<App />` hasta un componente nieto muy profundo, como `<Avatar />`."
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "Si para que el dato llegue a su destino tiene que atravesar cuatro o cinco componentes intermedios que *no utilizan* ese dato para nada, tenemos un problema de mantenibilidad. Esos componentes intermedios se ensucian con props innecesarias."
    },
    {
      "type": "code",
      "value": "// ❌ EL PROBLEMA: Prop Drilling\n// 'Layout' y 'Header' no necesitan 'user', solo lo pasan como pasamanos.\n\nconst App = () => {\n  const [user] = useState({ name: 'Alex' });\n  return <Layout user={user} />;\n};\n\nconst Layout = ({ user }) => <Header user={user} />;\nconst Header = ({ user }) => <UserMenu user={user} />;\nconst UserMenu = ({ user }) => <Avatar username={user.name} />;"
    },
    {
      "type": "text",
      "value": "Para solucionar esto de forma nativa, React ofrece la **Context API**. Piensa en el Contexto como un mecanismo de teletransportación. Nos permite definir un dato en lo alto del árbol y acceder a él desde cualquier componente descendiente, sin importar la profundidad, saltándonos los intermediarios."
    },
    {
      "type": "code",
      "value": "// ✅ LA SOLUCIÓN NATIVA: Context API\nimport { createContext, useContext } from 'react';\n\n// 1. Creamos el contexto\nconst UserContext = createContext(null);\n\nconst App = () => {\n  const user = { name: 'Alex' };\n  \n  // 2. Proveemos el valor a todo el árbol\n  return (\n    <UserContext.Provider value={user}>\n      <Layout />\n    </UserContext.Provider>\n  );\n};\n\n// ... Layout y Header ya no reciben props ...\n\nconst Avatar = () => {\n  // 3. Consumimos el valor directamente\n  const user = useContext(UserContext);\n  return <p>{user.name}</p>;\n};"
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "Sin embargo, **Context API no es una bala de plata**. Muchos desarrolladores cometen el error de usarlo para todo el estado global. El problema radica en el rendimiento: cuando el valor del Contexto cambia, **TODOS** los componentes que consumen ese contexto se re-renderizan forzosamente."
    },
    {
      "type": "text",
      "value": "Por tanto, la regla de oro es: Usa Context API para **estados de baja frecuencia de actualización** (Temas Dark/Light, Usuario Autenticado, Idioma/i18n). NO lo uses para datos que cambian constantemente (inputs de usuario, coordenadas de ratón, listas de datos en tiempo real)."
    },
    {
      "type": "text",
      "value": "Para estados globales complejos y de alta frecuencia, necesitamos un **Gestor de Estado** externo. Durante años Redux fue el rey, pero su complejidad (boilerplate) es excesiva para la mayoría de apps modernas. Aquí entra **Zustand**."
    },
    {
      "type": "text",
      "value": "Zustand (alemán para 'Estado') es una librería minimalista, rápida y basada en hooks. A diferencia de Redux, no necesita envolver tu app en un Provider. Funciona creando un **Store** (almacén) que contiene tanto el estado como las acciones para modificarlo."
    },
    {
      "type": "code",
      "value": "// Instalación: npm install zustand\nimport { create } from 'zustand';\n\n// Definimos el Store\n// 'set' es la función mágica para actualizar el estado\nexport const useStore = create((set) => ({\n  // Estado inicial\n  osos: 0,\n  \n  // Acciones (Actions)\n  incrementarOsos: () => set((state) => ({ osos: state.osos + 1 })),\n  resetear: () => set({ osos: 0 }),\n}));"
    },
    {
      "type": "text",
      "value": "Observa lo limpio que es. No hay 'reducers', ni 'dispatch', ni 'action types'. La lógica de actualización vive junto a los datos. La función `set` fusiona el estado automáticamente (shallow merge), por lo que no necesitas copiar manualmente el resto de propiedades no modificadas."
    },
    {
      "type": "text",
      "value": "Para usar este estado en un componente, simplemente invocamos el hook que acabamos de crear. Aquí es donde Zustand brilla frente a Context: el uso de **Selectores**."
    },
    {
      "type": "text",
      "value": "Podemos (y debemos) suscribirnos solo a la parte específica del estado que nos interesa. Si el estado tiene 50 propiedades y solo usamos una, el componente solo se re-renderizará si cambia ESA propiedad. Esto es rendimiento gratuito."
    },
    {
      "type": "code",
      "value": "// Componente A: Solo le interesa mostrar el número\nconst Contador = () => {\n  // Selector: Extraemos solo la propiedad 'osos'\n  const osos = useStore((state) => state.osos);\n  return <h1>Hay {osos} osos</h1>;\n};\n\n// Componente B: Solo le interesa la acción de controlar\nconst Controles = () => {\n  // Selector: Extraemos la función\n  const incrementar = useStore((state) => state.incrementarOsos);\n  return <button onClick={incrementar}>Sumar oso</button>;\n};"
    },
    {
      "type": "text",
      "value": ""
    },
    {
      "type": "text",
      "value": "Zustand también maneja acciones **asíncronas** de forma trivial. A diferencia de Redux que requiere middleware (Thunk/Saga), en Zustand simplemente haces la función `async` y esperas dentro."
    },
    {
      "type": "code",
      "value": "export const useDataStore = create((set) => ({\n  data: [],\n  loading: false,\n  \n  fetchData: async () => {\n    set({ loading: true });\n    const response = await fetch('/api/data');\n    const json = await response.json();\n    set({ data: json, loading: false });\n  }\n}));"
    },
    {
      "type": "text",
      "value": "En resumen, la arquitectura moderna de React sugiere una hibridación: Usa **Context API** para 'Inyección de Dependencias' o configuración global que rara vez cambia. Usa **Zustand** (o Redux Toolkit/Jotai) para la gestión del flujo de datos de la aplicación y lógica de negocio compleja."
    },
    {
      "type": "text",
      "value": "Evitar el Prop Drilling mejora la legibilidad, pero elegir la herramienta de estado correcta mejora el rendimiento y la escalabilidad de tu software."
    }
  ]
},
{
  "id": "tema-12-optimizacion-rendimiento",
  "title": "Optimización de Rendimiento Avanzada en React",
  "shortDescription": "Estrategias profesionales para detectar cuellos de botella, evitar renderizados superfluos y reducir el tamaño del bundle inicial.",
  "keyConcept": "La optimización en React no se trata de hacer que el código sea 'más rápido', sino de **hacer menos trabajo**: evitar renderizados innecesarios y cargar código solo cuando se necesita.",
  "language": "React",
  "conceptType": "apuntes",
  "tags": [
    "Rendimiento",
    "Arquitectura",
    "Debugging"
  ],
  "difficulty": "Avanzado",
  "content": [
    {
      "type": "text",
      "value": "React es rápido por defecto gracias al Virtual DOM, pero a medida que una aplicación crece, la cantidad de cálculos y actualizaciones puede empezar a afectar la fluidez de la interfaz. Entramos en el terreno de la **Optimización de Rendimiento**."
    },
    {
      "type": "text",
      "value": "El problema más común son los **Renderizados Innecesarios** (Wasted Renders). Por defecto, cuando un componente padre se renderiza (cambia su estado o props), React renderiza recursivamente a **todos** sus hijos, hayan cambiado sus props o no."
    },
    {
      "type": "text",
      "value": "Para detectar esto, no adivines. Utiliza las **React DevTools**. En la configuración del Profiler, activa la opción 'Highlight updates when components render'. Verás parpadeos de colores en la pantalla. Si escribes en un input y todo el layout parpadea, tienes un problema de rendimiento."
    },
    {
      "type": "text",
      "value": "Para solucionar esto, utilizamos la técnica de **Memoización**. Empezamos con **`React.memo`**. Es un Higher-Order Component que envuelve a tu componente y le dice a React: 'Si mis props no han cambiado, no me vuelvas a renderizar, usa el resultado anterior'."
    },
    {
      "type": "code",
      "value": "const TarjetaProducto = React.memo(({ producto }) => {\n  console.log('Renderizando tarjeta...'); // Solo se verá si 'producto' cambia\n  return (\n    <div className=\"card\">\n      <h3>{producto.nombre}</h3>\n      <p>{producto.precio} €</p>\n    </div>\n  );\n});"
    },
    {
      "type": "text",
      "value": "Sin embargo, `React.memo` tiene una trampa mortal relacionada con la **Igualdad Referencial**. En JavaScript, `{ a: 1 } !== { a: 1 }`. Si el padre pasa un objeto o una función creada 'al vuelo' en cada render, `React.memo` creerá que es una prop nueva y renderizará igual."
    },
    {
      "type": "text",
      "value": "Aquí entra **`useCallback`**. Este hook sirve para 'congelar' la definición de una función entre renderizados, manteniendo la misma referencia de memoria siempre que sus dependencias no cambien."
    },
    {
      "type": "code",
      "value": "// Padre\nconst ListaDeCompras = () => {\n  const [items, setItems] = useState([]);\n\n  // Sin useCallback, esta función se recrea en CADA render.\n  // Eso rompería el React.memo del hijo <Item />.\n  const eliminarItem = useCallback((id) => {\n    setItems(prev => prev.filter(i => i.id !== id));\n  }, []); // Dependencias vacías: la función es estable para siempre\n\n  return (\n    <>\n      {items.map(item => (\n        <Item key={item.id} item={item} onDelete={eliminarItem} />\n      ))}\n    </>\n  );\n};"
    },
    {
      "type": "text",
      "value": "Similarmente, tenemos **`useMemo`**. Mientras `useCallback` guarda funciones, `useMemo` guarda **el resultado de una función**. Es útil para cálculos costosos (como filtrar una lista de 10,000 elementos) que no queremos repetir si los datos no han cambiado."
    },
    {
      "type": "code",
      "value": "const AnalisisDatos = ({ datos }) => {\n  // Solo recalculamos si la prop 'datos' cambia.\n  // Si el componente se renderiza por otro motivo (ej: cambio de tema),\n  // reutilizamos el valor 'promedio' guardado.\n  const promedio = useMemo(() => {\n    console.log('Calculando promedio costoso...');\n    return datos.reduce((a, b) => a + b, 0) / datos.length;\n  }, [datos]);\n\n  return <div>Promedio: {promedio}</div>;\n};"
    },
    {
      "type": "text",
      "value": "🛑 **Advertencia Crítica**: No optimices prematuramente. `useMemo` y `useCallback` tienen un coste: consumen memoria y React debe comparar las dependencias. Si envuelves todo tu código en estos hooks 'por si acaso', harás tu aplicación más lenta y compleja de leer. Úsalos solo cuando identifiques un problema real."
    },
    {
      "type": "text",
      "value": "Cambiando de enfoque, hablemos del tamaño de la aplicación. Si tu app pesa 5MB, el usuario tardará en cargarla. **Code Splitting** (División de Código) nos permite partir ese bloque gigante en pedazos pequeños y cargarlos solo cuando el usuario los necesite."
    },
    {
      "type": "text",
      "value": "La herramienta para esto es **`React.lazy`**. Nos permite definir un componente que se importará dinámicamente. Como la descarga toma tiempo, debemos envolver estos componentes en un **`Suspense`**, que muestra un fallback (como un spinner) mientras llega el código."
    },
    {
      "type": "code",
      "value": "import React, { Suspense } from 'react';\n\n// Este componente NO se descarga en el bundle inicial.\n// Se descargará solo cuando se intente renderizar.\nconst PanelAdmin = React.lazy(() => import('./PanelAdmin'));\n\nconst App = () => {\n  return (\n    <div>\n      <Navbar />\n      \n      {/* Mostramos 'Cargando...' mientras baja el archivo JS del panel */}\n      <Suspense fallback={<div className=\"spinner\">Cargando módulo...</div>}>\n        {usuarioEsAdmin && <PanelAdmin />}\n      </Suspense>\n    </div>\n  );\n};"
    },
    {
      "type": "text",
      "value": "El lugar más natural para aplicar Code Splitting es en el **Enrutamiento**. Cada página de tu aplicación debería ser un 'chunk' separado. Así, el usuario solo descarga el código de la página 'Home' al entrar, y no el de 'Ajustes' o 'Perfil' hasta que navegue allí."
    },
    {
      "type": "code",
      "value": "import { Routes, Route } from 'react-router-dom';\nconst Home = React.lazy(() => import('./pages/Home'));\nconst About = React.lazy(() => import('./pages/About'));\n\nconst Rutas = () => (\n  <Suspense fallback={<LoadingPage />}>\n    <Routes>\n      <Route path=\"/\" element={<Home />} />\n      <Route path=\"/about\" element={<About />} />\n    </Routes>\n  </Suspense>\n);"
    },
    {
      "type": "text",
      "value": "Optimizar es un arte de equilibrio. Usa las DevTools para encontrar qué sobra, aplica memoización quirúrgicamente para evitar re-cálculos y divide tu código para que el navegador solo procese lo indispensable."
    }
  ]
},
{
  "id": "ejercicio-context-zustand",
  "title": "Desafío Híbrido: Tienda con Tema y Carrito",
  "shortDescription": "Implementación de una arquitectura profesional que combina Context API para configuraciones globales y Zustand para la gestión de datos transaccionales.",
  "keyConcept": "La arquitectura moderna de React a menudo es **híbrida**: reservamos **Context** para estados estáticos (temas, usuario) y gestores como **Zustand** para estados dinámicos complejos (carrito de compra) para evitar renderizados innecesarios.",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Arquitectura",
    "Rendimiento",
    "Frontend"
  ],
  "difficulty": "Avanzado",
  "content": [
    {
      "type": "text",
      "value": "Para finalizar este recorrido por el estado global, vamos a enfrentarnos a un escenario muy común en la industria: una aplicación que necesita gestionar dos tipos de estado muy diferentes simultáneamente."
    },
    {
      "type": "text",
      "value": "Imagina que estás construyendo una **Mini Tienda Online**. Tienes dos requisitos funcionales claros que, si se gestionan mal, podrían arruinar el rendimiento de la app:"
    },
    {
      "type": "text",
      "value": "1. **Preferencia de UI (Tema)**: El usuario puede cambiar entre 'Modo Claro' y 'Modo Oscuro'. Esto afecta a toda la aplicación (colores de fondo, textos), pero cambia muy raramente."
    },
    {
      "type": "text",
      "value": "2. **Estado del Negocio (Carrito)**: El usuario añade productos, elimina items y vacía la cesta constantemente. Necesitamos saber cuántos artículos hay en el carrito en tiempo real en la barra de navegación."
    },
    {
      "type": "text",
      "value": "Tu misión es implementar ambos sistemas eligiendo la herramienta adecuada para cada uno: **Context API** para el tema y **Zustand** para el carrito."
    },
    {
      "type": "text",
      "value": "### Datos Iniciales (Mock)"
    },
    {
      "type": "code",
      "value": "const PRODUCTOS = [\n  { id: 1, nombre: 'Teclado Mecánico', precio: 120 },\n  { id: 2, nombre: 'Ratón Gaming', precio: 60 },\n  { id: 3, nombre: 'Monitor 4K', precio: 300 },\n];"
    },
    {
      "type": "text",
      "value": "### Requisitos del Desafío"
    },
    {
      "type": "text",
      "value": "1. **Contexto del Tema (`ThemeContext`)**: \n   * Debe proveer un valor `theme` ('light' o 'dark') y una función `toggleTheme`.\n   * Debe envolver toda la aplicación."
    },
    {
      "type": "text",
      "value": "2. **Store de Zustand (`useCartStore`)**: \n   * Estado: Un array `items`.\n   * Acciones: `addToCart(producto)` y `removeFromCart(productoId)`.\n   * Selector: En el componente `Navbar`, quiero que te suscribas **SOLO** al número de elementos (`items.length`). Si añado un producto, el `Navbar` debe actualizarse, pero si cambio el nombre de un producto (hipotéticamente), no."
    },
    {
      "type": "text",
      "value": "3. **Interfaz de Usuario**: \n   * Un `Navbar` que muestre el contador del carrito y el botón de cambiar tema.\n   * Un `ProductList` que liste los productos con un botón de \"Añadir\"."
    },
    {
      "type": "text",
      "value": "Intenta estructurar los archivos mentalmente: ¿Dónde va el `create` de Zustand? ¿Dónde va el `createContext` de React?"
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "..."
    },
    {
      "type": "text",
      "value": "### Solución"
    },
    {
      "type": "text",
      "value": "A continuación, te muestro cómo conviven ambas tecnologías en armonía. Observa cómo separamos las preocupaciones."
    },
    {
      "type": "code",
      "value": "import React, { createContext, useContext, useState } from 'react';\nimport { create } from 'zustand';\n\n// --- 1. ZUSTAND: Gestión del Carrito (Estado Dinámico) ---\n// Definimos el store fuera del árbol de componentes\nconst useCartStore = create((set) => ({\n  items: [],\n  addToCart: (product) => set((state) => ({\n    items: [...state.items, product]\n  })),\n  removeFromCart: (id) => set((state) => ({\n    items: state.items.filter(item => item.id !== id)\n  })),\n  clearCart: () => set({ items: [] })\n}));\n\n// --- 2. CONTEXT API: Gestión del Tema (Estado Estático) ---\nconst ThemeContext = createContext();\n\nconst ThemeProvider = ({ children }) => {\n  const [theme, setTheme] = useState('light');\n  \n  const toggleTheme = () => {\n    setTheme(prev => prev === 'light' ? 'dark' : 'light');\n  };\n\n  // Estilos básicos para la demo\n  const styles = {\n    background: theme === 'light' ? '#fff' : '#333',\n    color: theme === 'light' ? '#000' : '#fff',\n    minHeight: '100vh',\n    padding: '20px'\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme, styles }}>\n      <div style={styles}>\n        {children}\n      </div>\n    </ThemeContext.Provider>\n  );\n};\n\n// Hook personalizado para consumir el contexto fácilmente\nconst useTheme = () => useContext(ThemeContext);\n\n// --- 3. COMPONENTES ---\n\nconst Navbar = () => {\n  const { toggleTheme, theme } = useTheme();\n  \n  // ZUSTAND SELECTOR: Rendimiento crítico\n  // Este componente SOLO se renderiza si cambia la longitud del array.\n  // Si cambiara otra propiedad del store, este componente ni se enteraría.\n  const cartCount = useCartStore(state => state.items.length);\n\n  return (\n    <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>\n      <h1>Mi Tienda</h1>\n      <div>\n        <span>🛒 {cartCount} items </span>\n        <button onClick={toggleTheme} style={{ marginLeft: '10px' }}>\n          Modo {theme === 'light' ? 'Oscuro' : 'Claro'}\n        </button>\n      </div>\n    </nav>\n  );\n};\n\nconst ProductList = () => {\n  // Extraemos la acción directamente. Esto es estable y no provoca re-renders.\n  const addToCart = useCartStore(state => state.addToCart);\n\n  const PRODUCTOS = [\n    { id: 1, nombre: 'Teclado Mecánico', precio: 120 },\n    { id: 2, nombre: 'Ratón Gaming', precio: 60 },\n    { id: 3, nombre: 'Monitor 4K', precio: 300 },\n  ];\n\n  return (\n    <div style={{ display: 'grid', gap: '10px' }}>\n      {PRODUCTOS.map(prod => (\n        <div key={prod.id} style={{ border: '1px solid gray', padding: '10px' }}>\n          <h3>{prod.nombre} - {prod.precio}€</h3>\n          <button onClick={() => addToCart(prod)}>\n            Añadir al carrito\n          </button>\n        </div>\n      ))}\n    </div>\n  );\n};\n\n// --- 4. APP (Punto de Entrada) ---\nconst App = () => {\n  return (\n    // El Provider envuelve todo, inyectando el tema\n    <ThemeProvider>\n      <Navbar />\n      <ProductList />\n    </ThemeProvider>\n  );\n};\n\nexport default App;"
    },
    {
      "type": "text",
      "value": "### Análisis del Rendimiento"
    },
    {
      "type": "text",
      "value": "Fíjate en la línea clave dentro de `Navbar`: `const cartCount = useCartStore(state => state.items.length);`."
    },
    {
      "type": "text",
      "value": "Si hubiéramos usado Context API para el carrito, cada vez que añadieras un producto, **TODOS** los componentes que consumieran el contexto se re-renderizarían (incluyendo quizás la lista de productos o el footer)."
    },
    {
      "type": "text",
      "value": "Con Zustand y su selector, `Navbar` solo está escuchando el *número* de items. Mientras tanto, `ProductList` solo extrae la función `addToCart` (que nunca cambia), por lo que **ProductList NO se re-renderiza** cuando añades un item. Esto es eficiencia pura."
    },
    {
      "type": "text",
      "value": "Por otro lado, usar Context para el tema es perfecto porque, cuando cambias el tema, **quieres** que toda la aplicación se re-renderice para aplicar los nuevos colores."
    },
    {
      "type": "text",
      "value": "Esta distinción entre estado de 'grano fino' (Zustand) y estado de 'grano grueso' (Context) es lo que define a una arquitectura React escalable."
    }
  ]
},
{
  "id": "proyecto-practica-cineverse",
  "title": "Proyecto de práctica: CineVerse",
  "shortDescription": "Guía exhaustiva para construir tu primera Single Page Application profesional, integrando enrutamiento, gestión de estado global y consumo de APIs externas.",
  "keyConcept": "El desarrollo de una aplicación React profesional requiere orquestar múltiples piezas móviles: **Routing** para la navegación, **Context** para el estado global y **Custom Hooks** para la lógica de negocio, todo bajo una arquitectura de carpetas escalable.",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Arquitectura",
    "Frontend",
    "Backend"
  ],
  "difficulty": "Intermedio",
  "content": [
    {
      "type": "text",
      "value": "¡Felicidades! Has cubierto los 10 pilares fundamentales de React. Ahora es el momento de dejar de hacer ejercicios aislados y construir un sistema cohesivo. Tu misión es desarrollar **CineVerse**, una aplicación para buscar películas y guardar tus favoritas."
    },
    {
      "type": "text",
      "value": "Este no es un ejercicio trivial; es una simulación de una prueba técnica real para un puesto Junior/Mid. Te enfrentarás a problemas de asincronía, prop drilling (que solucionarás con Context), y organización de código. Antes de escribir una sola línea, visualicemos el objetivo."
    },
    {
      "type": "text",
      "value": "Para que tengas una referencia visual clara de la UI, el flujo de navegación y la experiencia de usuario que buscamos, hemos desplegado una versión de referencia. Úsala como guía, no es necesario que la copies píxel por píxel, pero sí en funcionalidad: https://proyecto-cine-basico.vercel.app/"
    },
    {
      "type": "text",
      "value": "Vamos a desglosar los **requerimientos Técnicos** parte por parte:"
    },
    {
      "type": "text",
      "value": "1. **React Router (La Navegación)**: Tu app no debe recargar nunca. Necesitamos tres rutas principales:\n   - `/`: La **Home**, donde estará el buscador y el grid de resultados.\n   - `/movie/:id`: La vista de **Detalle**. Al hacer click en una película, navegaremos aquí para ver su sinopsis completa, año y director.\n   - `/favorites`: Una vista dedicada para listar las películas que el usuario ha guardado."
    },
    {
      "type": "text",
      "value": "2. **Context API (El Estado Global)**: Aquí reside el corazón de la app. Necesitas un `FavoritesContext`. ¿Por qué? Porque el contador de favoritos en el Navbar debe actualizarse estés donde estés, y la lista de favoritos debe  (no debe cambiar) aunque cambies de ruta. Este contexto debe exponer:\n   - `favorites`: El array de películas.\n   - `addFavorite(movie)`: Función para agregar (evitando duplicados).\n   - `removeFavorite(id)`: Función para eliminar."
    },
    {
      "type": "text",
      "value": "3. **API & Fetching (Datos Reales)**: Usaremos datos reales. Debes gestionar correctamente el ciclo de vida de la petición. Tu interfaz debe ser capaz de responder a tres estados: 'Cargando' (Spinner), 'Error' (Mensaje amigable) y 'Éxito' (Grilla de películas)."
    },
    {
      "type": "text",
      "value": "**Configuración de la API OMDb**:\nEs una API sencilla y gratuita. Sigue estos pasos:\n1. Ve a https://www.omdbapi.com/apikey.aspx\n2. Solicita una llave gratuita (te llega al email).\n3. Tus endpoints serán:\n   - **Búsqueda**: `https://www.omdbapi.com/?apikey=TU_KEY&s=Batman` (Donde 'Batman' es lo que el usuario escribe).\n   - **Detalle**: `https://www.omdbapi.com/?apikey=TU_KEY&i=tt0372784` (Donde 'tt...' es el ID de la película)."
    },
    {
      "type": "text",
      "value": "4. **Custom Hooks (Lógica Limpia)**: No queremos ver `fetch` y `useEffect` gigantes dentro de tus componentes visuales. Debes abstraer esta lógica. Crea un hook llamado `useMovies(search)` que devuelva `{ movies, loading, error }`. Esto hará que tu componente `Home.jsx` sea increíblemente limpio y legible."
    },
    {
      "type": "text",
      "value": "5. **Arquitectura de Carpetas Sugerida**: Para mantener el orden, te recomiendo encarecidamente esta estructura. Es un estándar en la industria para proyectos medianos."
    },
    {
      "type": "code",
      "value": "src/\n├── components/       // Componentes reutilizables tontos (UI)\n│   ├── Navbar.jsx\n│   ├── MovieCard.jsx\n│   └── SearchBar.jsx\n├── pages/            // Vistas completas (Rutas)\n│   ├── Home.jsx\n│   ├── MovieDetail.jsx\n│   └── Favorites.jsx\n├── context/          // Estado global\n│   └── FavoritesContext.jsx\n├── hooks/            // Lógica reutilizable\n│   └── useMovies.js\n├── services/         // (Opcional) Funciones fetch puras\n│   └── omdb.js\n├── App.jsx           // Configuración de Rutas y Provider\n└── main.jsx          // Punto de entrada",
      "language": "text"
    },
    {
      "type": "text",
      "value": "6. **Formularios Controlados**: La barra de búsqueda debe ser un input controlado por React (`value` + `onChange`). Opcionalmente, puedes hacer que la búsqueda se dispare al presionar 'Enter' o tener un botón de 'Buscar'."
    },
    {
      "type": "text",
      "value": "Un consejo pro para la **Gestión de Favoritos**: Cuando añadas una película, verifica primero si ya existe en el array para no duplicarla. El método `.some()` de los arrays de JavaScript es perfecto para esto: `if (!favorites.some(fav => fav.imdbID === movie.imdbID)) { ... }`."
    },
    {
      "type": "text",
      "value": "Finalmente, recuerda el **Manejo de Errores**. Si la API de OMDb no encuentra películas, devuelve un objeto con `Response: \"False\"`. Tu aplicación debe detectar esto y mostrar un mensaje como 'No se encontraron resultados para tu búsqueda', en lugar de romperse intentando hacer un `.map` sobre algo que no existe."
    }
  ],
},
{
  "id": "proyecto-final-stayspot",
  "title": "Proyecto Integrador: StaySpot - Plataforma de Reservas",
  "shortDescription": "El desafío definitivo. Construye una plataforma de alquiler vacacional completa que integre autenticación, filtros complejos, formularios multi-paso y testing automatizado.",
  "keyConcept": "Este proyecto simula un entorno de producción real donde debes orquestar **autenticación**, **gestión de estados complejos (filtros + carrito)** y **testing** bajo una arquitectura escalable.",
  "language": "React",
  "conceptType": "practica",
  "tags": [
    "Avanzado",
    "Arquitectura",
    "Testing"
  ],
  "difficulty": "Avanzado",
  "content": [
    {
      "type": "text",
      "value": "Vamos a construir **StaySpot**, una plataforma tipo Airbnb para reservar alojamientos. Este proyecto te obligará a conectar todos los puntos: desde el 'Hola Mundo' hasta el despliegue con CI/CD."
    },
    {
      "type": "text",
      "value": "**El Escenario**: Eres el Frontend Lead de una startup. Necesitas construir el MVP (Producto Mínimo Viable) que permita a los usuarios buscar alojamientos por ciudad, filtrar por precio/comodidades, y realizar una reserva simulada. Además, el código debe ser robusto porque 'hay inversores mirando'."
    },
    {
      "type": "text",
      "value": "**Requerimientos Técnicos Obligatorios:**\n1.  **Routing**: Rutas anidadas, rutas protegidas (solo usuarios logueados pueden reservar) y manejo de 404.\n2.  **Estado Global Mixto**: `AuthContext` para el usuario y `BookingContext` para el proceso de reserva.\n3.  **URL como Estado**: Los filtros (destino, precio, personas) deben reflejarse en la URL (`?city=Madrid&minPrice=100`) para poder compartir enlaces.\n4.  **Formularios Profesionales**: React Hook Form + Zod para el formulario de pago y datos del huésped.\n5.  **Optimización**: Virtualización para la lista de resultados y `React.lazy` para las rutas.\n6.  **Testing**: Al menos 2 Unit Tests (lógica de precios) y 1 Integration Test (flujo de reserva)."
    },
    {
      "type": "text",
      "value": "**Arquitectura de Carpetas (Clean Architecture)**:\nVamos a separar las capas de responsabilidad estrictamente."
    },
    {
      "type": "code",
      "value": "src/\n├── assets/           // Imágenes estáticas\n├── components/\n│   ├── common/       // Button, Input, Modal, Spinner\n│   ├── layout/       // Header, Footer, Sidebar\n│   └── properties/   // PropertyCard, FilterBar\n├── context/          // AuthContext, ToastContext\n├── hooks/            // useDebounce, useSearchFilters\n├── layouts/          // MainLayout, AuthLayout\n├── lib/              // Utilidades (formatCurrency, calculadoras)\n├── pages/            // Home, SearchResults, PropertyDetail, Checkout\n├── services/         // api.js (Mock de fetch), auth.js\n├── test/             // Configuración de Vitest\n└── App.jsx",
      "language": "text"
    },
    {
      "type": "text",
      "value": "**Paso 1: La Capa de Datos (Mocking)**:\nNo necesitas un backend real. Crea un archivo `properties.json` con 20 alojamientos. Crea un servicio `services/api.js` que simule latencia (usando `setTimeout`) para devolver estos datos. Esto te permitirá mostrar Spinners y estados de carga realistas."
    },
    {
      "type": "text",
      "value": "**Paso 2: Filtros Sincronizados con URL**:\nEste es un reto clave. No uses `useState` para los filtros. Usa `useSearchParams` de React Router. Si el usuario marca 'WiFi', la URL cambia. Si recarga la página, el filtro debe persistir leyendo la URL. Crea un custom hook `useUrlFilters` para abstraer esta lógica."
    },
    {
      "type": "code",
      "value": "// Ejemplo conceptual del hook de filtros\nfunction useUrlFilters() {\n  const [searchParams, setSearchParams] = useSearchParams();\n  \n  const setFilter = (key, value) => {\n    const newParams = new URLSearchParams(searchParams);\n    if (value) newParams.set(key, value);\n    else newParams.delete(key);\n    setSearchParams(newParams);\n  };\n\n  return { filters: Object.fromEntries(searchParams), setFilter };\n}",
      "language": "javascript"
    },
    {
      "type": "text",
      "value": "**Paso 3: Formularios y Validación (Zod)**:\nEl formulario de reserva es crítico. Debe validar: fecha de entrada < fecha de salida, número de tarjeta de crédito válido (formato), y email. Usa **Zod** para definir el esquema y conéctalo a **React Hook Form**. Si la validación falla, el input debe ponerse rojo y mostrar el mensaje accesiblemente."
    },
    {
      "type": "text",
      "value": "**Paso 4: Rutas Protegidas (Higher Order Components o Wrappers)**:\nCrea un componente `<ProtectedRoute>`. Si el usuario no está en el `AuthContext`, redirígelo a `/login` guardando la ubicación intentada para devolverlo allí tras loguearse (UX de oro)."
    },
    {
      "type": "code",
      "value": "const ProtectedRoute = ({ children }) => {\n  const { user } = useAuth();\n  const location = useLocation();\n\n  if (!user) {\n    // Redirigir al login, pero recordando de dónde venía\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n\n  return children;\n};",
      "language": "javascript"
    },
    {
      "type": "text",
      "value": "**Paso 5: Testing (Tema 13)**:\nNo puedes desplegar sin pruebas. \n1. **Unit**: Crea una función `calculateTotal(pricePerNight, nights, serviceFee)` en `lib/utils.js` y testéala con Vitest para asegurar que las matemáticas son correctas.\n2. **Integration**: Usa React Testing Library para renderizar el `<BookingForm />`. Simula que el usuario escribe un email inválido y asegura que aparece el mensaje de error."
    },
    {
      "type": "text",
      "value": "**Paso 6: Optimización (Tema 12)**:\nUsa `React.memo` en el componente `<PropertyCard />`. En la vista de resultados, si cambias el filtro de precio, solo deberían re-renderizarse las tarjetas que cambian de visibilidad, no todo el layout. Usa el Profiler para demostrar que funciona."
    },
    {
      "type": "text",
      "value": "**Wireframe Textual (Vista de Búsqueda)**:"
    },
    {
      "type": "code",
      "value": "------------------------------------------------------------\n| StaySpot  [🔍 Madrid, 2 huéspedes]   [Usuario ▼]         |\n------------------------------------------------------------\n| FILTROS      |  RESULTADOS: 15 alojamientos              |\n|              |                                           |\n| Precio máx:  |  [FOTO] Villa Sol                         |\n| [----O--]    |  Madrid Centro • 120€/noche               |\n|              |  ★ 4.8 (120 reviews)       [Ver Detalle]  |\n| Tipo:        |                                           |\n| [x] Apto.    |  [FOTO] Loft Moderno                      |\n| [ ] Casa     |  Barrio Salamanca • 95€/noche             |\n|              |  ★ 4.9 (50 reviews)        [Ver Detalle]  |\n| Servicios:   |                                           |\n| [x] WiFi     |  (Lista virtualizada con scroll infinito) |\n------------------------------------------------------------",
      "language": "text"
    },
    {
      "type": "text",
      "value": "**Despliegue y CI/CD (Tema 14)**:\nConfigura tu repositorio para que, al hacer push a la rama `main`, se ejecuten los tests en GitHub Actions. Si pasan, configura Vercel para que despliegue automáticamente. Añade un archivo `.env` para la URL de la API (aunque sea simulada, es buena práctica)."
    },
    {
      "type": "text",
      "value": "**Extra Challenge (Nivel Dios)**: Implementa un **Dark Mode** persistente usando Tailwind CSS y Context, que respete la preferencia del sistema operativo por defecto pero permita al usuario cambiarlo manualmente."
    },
    {
      "type": "text",
      "value": "Este proyecto es tu tesis. No solo demuestra que sabes React, demuestra que sabes construir software. Cubre UI, UX, Lógica, Estado, API, Rendimiento, Calidad y Despliegue. Si logras terminarlo, estarás técnicamente preparado para cualquier puesto Frontend Junior/Mid."
    }
  ]
}

]

export const notesService = {
    getAll: (): Concept[] => {
        return KNOWLEDGE_BASE;
    },
    getById: (id: string): Concept | undefined => {
        return KNOWLEDGE_BASE.find(note => note.id === id);
    }
};