import cover1 from '../assets/movie1.jpg';
import cover2 from '../assets/movie2.jpg';
import cover3 from '../assets/movie3.jpg';

export interface Movie {
    title?: string;
    name?: string;
    cover?: string;
    poster_path?: string;
    vote_average?: number | string;
}


const mockdata: Movie[] = [
    {
        title: "Avengers",
        cover: cover1,
    },

    {
        title: "Missão impossível",
        cover: cover2,
    },

    {
        title: "Megatubarão",
        cover: cover3,
    },
    {
        title: "Avengers",
        cover: cover1,
    },

    {
        title: "Missão impossível",
        cover: cover2,
    },

    {
        title: "Megatubarão",
        cover: cover3,
    },
    {
        title: "Avengers",
        cover: cover1,
    },

    {
        title: "Missão impossível",
        cover: cover2,
    },

    {
        title: "Megatubarão",
        cover: cover3,
    },
    {
        title: "Avengers",
        cover: cover1,
    },

    {
        title: "Missão impossível",
        cover: cover2,
    },

    {
        title: "Megatubarão",
        cover: cover3,
    },
    {
        title: "Avengers",
        cover: cover1,
    },

    {
        title: "Missão impossível",
        cover: cover2,
    },

    {
        title: "Megatubarão",
        cover: cover3,
    }

];

export default mockdata;