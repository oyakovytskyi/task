import "./MainPage.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/towers");
  };

  return (
    <div className="main-container">
      <div className="overlay"></div>
      <div className="main-content">
        <h1>The chemical negatively charged</h1>
        <p>
          Numerous calculations predict, and experiments confirm, that the force field reflects the
          beam, while the mass defect is not formed. The chemical compound is negatively charged.
          While the mass defect is...
        </p>
        <button className="main-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MainPage;
