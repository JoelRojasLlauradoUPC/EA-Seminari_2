# EA Node.js + TypeScript + Mongoose

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [MongoDB](https://www.mongodb.com/) (puede ser local o en la nube a través de MongoDB Atlas)
- [npm](https://www.npmjs.com/) 
- [TS] TypeScript

Instalar TypeScript
```
npm install -g typescript
```

## Clonar el proyecto

```
git clone https://github.com/rocmeseguer/EA-Mongoose
cd EA-Mongoose
```

## Dependencias del proyecto

Instalar Mongoose y otras dependencias
```
npm install
```

## Complilación y ejecución

Transpilar de TS a JS
```
tsc 
```

Ejecutar JS
```
node dist/mongoogse.js
```

## Materials Consultats
- Els disponibles a Atenea.
- Operacions bàsiques amb CRUD i Mongoose: https://stackoverflow.com/questions/70537035/crud-operations-using-mongoose-and-express
- Relacionar models Mongoose: https://es.stackoverflow.com/questions/250826/error-relacionando-modelos-con-mongoose

## Detall d'ús de la IA generativa
No s'ha utilitzat IA generativa durant el desenvolupament del codi. No obstant, si s'ha fet servir l'IA generativa per fer una revisió final de l'exercici un cop el codi ja funcionava per tal d'obtenir suggerències sobre aspectes de millora.

D'entre les suggerencies que es van obtenir s'han implementat les següents:
- Millora i compactació de l'estructura de crud.ts per tal de simplificar-lo, centralitzant totes les operacions que involucren la nova clase enllaçada.

## Vídeo amb la DEMO
https://youtu.be/wyxxrFBrcIM