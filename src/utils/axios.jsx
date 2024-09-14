import axios from "axios";

const intance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzBhYjc1ZTc1MGU4Zjc0YmY3ZTNkYWI3MTcxZGIxNiIsInN1YiI6IjY2MDdlOGIzYTZkZGNiMDE3YzQ3NDg2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fk2xevLH2cePFS6OJzPA7ZrJT4qTkVZZ1GI6xydeM_c',
  },
});

export default intance;
