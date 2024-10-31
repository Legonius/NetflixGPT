const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

// Default Background Image

const backgroundImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/MM-en-20241021-TRIFECTA-perspective_501f7616-5f20-4d49-b4e6-ef7dcfcc2cf4_large.jpg";
// const TMDB_URL =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_release_type=2|3";

// Now Playing List
const TMDB_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

// Search Video by ID
const VIDEO_ID = "https://api.themoviedb.org/3/movie/";
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
  },
};
const IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";

export { NETFLIX_LOGO, TMDB_URL, options, IMAGE_CDN, backgroundImage };
