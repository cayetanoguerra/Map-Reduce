#### Master in Web Technology and Digital Business - ULPGC

# Map-Reduce
Práctica de Arquitecturas de Sistemas Web del Máster de Informática de la ULPGC

Estudiaremos en esta práctica el uso del patrón de procesamiento Map-Reduce en MongoDB. Para ello, vamos a trabajar en MongoDB no mediante una aplicación en Node.JS sino a través de scripts en Javascript. Partimos teniendo ya una base de datos MongoDB en ejecución.

```
$ sudo mongod --dbpath ./data/db
```

Arrancamos otra terminal y accedemos al cliente de MongoDB.

```
$ mongo
```

Creamos nuestra base de datos mydb.

```
$ use mydb
```

En nuestro editor favorito abrimos el fichero map_reduce_prac0.js. Vemos que al ejecutar este código crearemos la colección sessions y pondremos algunos registros (documentos).

```
$ mongo mydb map_reduce_prac0.js
```

Cargamos ahora en nuestro editor el fichero map_reduce_prac1.js. Este código ejecutará un proceso map-reduce que generará una nueva colección llamada session_stat y que recogerá el número de sesiones y el tiempo promedio de sesión de cada usuario.

```
$ mongo mydb map_reduce_prac1.js
```

### Tareas prácticas

1. Generar una colección llamada session_watching donde almacenaremos el número total de items vistos por cada usuario.

2. Generar una colección llamada item_popularity donde almacenaremos el número de usuarios que ven cada item.
