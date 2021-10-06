import MotionHoc from "./MotionHoc";
import '../page-styles/connect.css';
import Form from "../components/form";
import ContactInfo from "../components/contact-info";
import Socials from "../components/socials";
const ProjectsComponent = () => {
  return (
    <div>
      <div className="connect-header">
        <h1>Connect With Me</h1>
      </div>
      <div className="rowo">
        <Form/>
        <div className="colo">
          <ContactInfo/>
          <Socials/>
        </div>
      </div>
    </div>
  );
};

const Connect = MotionHoc(ProjectsComponent);

export default Connect;
