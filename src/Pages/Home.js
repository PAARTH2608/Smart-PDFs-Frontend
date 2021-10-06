import MotionHoc from "./MotionHoc";
import '../page-styles/home.css';
const HomeComponent = () => {
  return (
    <div className="main-1">
      <div className="heading">
        <h1>Home</h1>
      </div>
      <div className="box-1">
        <p> <span>Hey there 🖐️ ,</span> how's it going everybody.<span> Welcome to my website ❣️ . </span>Its based on a unique idea on how people face issues uploading there documents and they have to take pictures exactly at 180 deg from the paper. What if i tell you that now you dont have to bother much about this and just take the pictures at any angle from your phone or laptop and you will get a straight and clear image at the end which you can convert to pdf and download it. <span> Looks interesting??🤔 </span>Here is how it works. </p>
      </div>
      <div className="box-2">
        <div className="box-2-1">
          <h1>Working</h1>
          <p>User uploads the pictures from the upload option in the Upload Page. Pictures are send to a backend which then transfer the images to an image processing algorithm written in python. The algorithm converts the images into the desired results and transfers it back to the backend which is then fetched by the front-end to display it to the user.</p>
        </div>
        <div className="box-2-2">
          <h1>Stuck? Follow these instructions</h1>
          <p>1. Go to the Uploads page. Click choose files (you can choose mulitple files) and then the upload button.</p>
          <p>2. Go to the Documents page. There you can see all you processed images.</p>
          <p>3. According to your preference choose either Download All Images or Download PDF buttons.</p>
        </div>
      </div>
    </div>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
// User uploads the pictures from the upload option in the Upload Page. Pictures are send to a backend which then transfer the images to an image processing algorithm written in python. The algorithm converts the images into the desired results and transfers it back to the backend which is then fetched by the front-end to display it to the user.
//Stuck? Follow these instructions
// Go to the Uploads page. Click choose files (you can choose mulitple files) and then the upload button.
// Go to the Documents page. There you can see all you processed images. 
// According to your preference choose either Download All Images or Download PDF buttons.