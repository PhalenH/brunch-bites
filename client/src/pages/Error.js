import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <span>Page not found</span>
      <br></br>
      <Link to="/" className="here">Back home</Link>
    </section>
  );
};
export default Error;
