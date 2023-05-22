const tmdbApiKey:string = "ea278a76dc83b9f2dbfd65b54085eb13"; // API Key utilizzata per ogni HTTP Request che si fa al back-end di TMDB

export const firstPartUrl:string = "https://api.themoviedb.org/3/movie/"; // Prima parte dell'URL degli endpoint di TMDB a cui si fanno le HTTP Request

export const queryParameters:string = `?api_key=${tmdbApiKey}&language=en-US`; // Query parameters che vogliono tutti gli URL degli endpoint di TMDB a cui si fanno le HTTP Request

export const loginUrl = "http://localhost:3000/login"; // URL dell'endpoint di JSON Server che permette di effettuare il login

export const signUpUrl = "http://localhost:3000/signup"; // URL dell'endpoint di JSON Server che permette di effettuare la registrazione

export const messagesUrl = "http://localhost:3000/messages"; // URL dell'endpoint di JSON Server che permette di salvare le informazioni che sono state inserite nel form Contatti

export const buyMovieUrl = "http://localhost:3000/buyMovie"; // URL dell'endpoint di JSON Server che permette all'utente di acquistare un film

export const moviesBoughtByUserUrl = "http://localhost:3000/moviesBought/"; // URL dell'endpoint di JSON Server che permette di recuperare i film che sono stati acquistati dall'utente
