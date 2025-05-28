import '../App.css'

function Pelicula (props) {
  return (
    <main className='movie-container'>
      <div className='movie-header'>
        <h2 className='movie-title'>{props.Title} <span className='movie-year'>({props.Year})</span></h2>
        <div className='movie-meta'>
          <span className='movie-rating'>{props.Rated}</span>
          <span className='movie-runtime'>{props.Runtime}</span>
          <span className='movie-genre'>{props.Genre}</span>
        </div>
      </div>
      <div className='movie-content'>
        <div className='movie-poster'>
          <img src={props.Poster ? props.Poster : 'https://m.media-amazon.com/images/I/61s8vyZLSzL._AC_UF894,1000_QL80_.jpg'} alt={`Poster de ${props.Title}`} />
        </div>
        <div className='movie-details'>
          <p className='movie-plot'>{props.Plot}</p>
          <div className='movie-info'>
            <p><strong>Director:</strong> {props.Director}</p>
            <p><strong>Reparto:</strong> {props.Actors}</p>
            <p><strong>Guionistas:</strong> {props.Writer}</p>
            <p><strong>Estreno:</strong> {props.Released}</p>
            <p><strong>Taquilla:</strong> {props.BoxOffice}</p>
            <p><strong>Premios:</strong> {props.Awards}</p>
          </div>
          <div className='movie-ratings'>
            <h3>Calificaciones:</h3>
            <ul>
              {props.Ratings && props.Ratings.map((rating, index) => (
                <li key={index}>
                  <strong>{rating.Source}:</strong> {rating.Value}
                </li>
              ))}
              <li><strong>IMDb Rating:</strong> {props.imdbRating}/10 ({props.imdbVotes} votos)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pelicula
