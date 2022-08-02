const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

// Llamado a mis api rutas
const apiGenresRoutes = require('./routes/api/genresRoutes');
const apiMoviesRoutes = require('./routes/api/moviesRoutes');
const apiActorsRoutes = require('./routes/api/actorsRoutes');
const apiCountriesRoutes = require('./routes/api/countriesRoutes');

//Aquí pueden colocar las rutas de las APIs


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

// API Routes
app.use('/api', apiGenresRoutes);
app.use('/api', apiMoviesRoutes);
app.use('/api', apiActorsRoutes);
app.use('/api', apiCountriesRoutes);


//Activando el servidor desde express
app.use(express.json());
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
