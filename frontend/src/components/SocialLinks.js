import { Link } from 'react-router-dom';

function SocialLinks() {
  return (
    <div className="social-links text-center">
      <Link
        className="btn btn-link btn-floating btn-lg m-1"
        to="facebook"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-facebook-f"></i>
      </Link>

      <Link
        className="btn btn-link btn-floating btn-lg m-1"
        to="twitter"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-twitter"></i>
      </Link>

      <Link
        className="btn btn-link btn-floating btn-lg m-1"
        to="google"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-google"></i>
      </Link>

      <Link
        className="btn btn-link btn-floating btn-lg m-1"
        to="instagram"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-instagram"></i>
      </Link>

      <Link
        className="btn btn-link btn-floating btn-lg m-1"
        to="linkedin"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-linkedin"></i>
      </Link>

      <Link
        className="btn btn-link btn-floating btn-lg m-1"
        to="github"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-github"></i>
      </Link>
    </div>
  );
}

export default SocialLinks;
