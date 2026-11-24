import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="wrap flex flex-col items-start gap-8 py-28 md:py-40">
    <span className="label">404</span>
    <h1 className="text-[72px] md:text-[140px]">
      Page not <em className="text-champagne">found.</em>
    </h1>
    <Link to="/" className="btn-light">Back to home</Link>
  </section>
);

export default NotFound;
