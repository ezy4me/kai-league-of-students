import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="page not-found-page">
      <div className="container not-found-page__container">
        <h1>404 Not Found</h1>
        <Link className="link" to={'/'}>На главную</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
