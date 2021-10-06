import jsPDF from 'jspdf';
import MotionHoc from "./MotionHoc";
import '../page-styles/document.css';
import { useSelector } from 'react-redux';

const DocumentsComponent = () => {

  const generatePDF = () => {
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    for(let i=0;i<getImages.length;i++){
      doc.addImage(`http://localhost:8000${getImages[i].image}`, 'PNG', 15, 40, 580, 360);
      doc.addPage();
    }
    doc.save('final.pdf')
  }
  
  const getImages = useSelector(state => state.image.images);
  const download = () => {
    getImages.forEach(image => {
      const element = document.createElement("a");
      const file = new Blob(
        [
          `http://localhost:8000${image.image}`
        ],
        { type: "image/*" }
      );
      element.href = URL.createObjectURL(file);
      element.download = `image${image.image}.jpg`;
      element.click();
    });
  };

  return (
    <>
    <div className="documents">

      <div className="document-header">
        <h1>Documents</h1>
      </div>

      <div className="images-docs">
        <h1>Your Documents Will Be Displayed Here...</h1>
      </div>

      <div className="all-images">
        <div>
          {getImages && getImages.map(image => (
            <img width={270} height={170} src={`http://localhost:8000${image.image}`} alt={image.alt} key={image.id}/>  
          ))}
          {!getImages && <h1>No Images Retrieved From The Database! Make Sure You Have Uploaded Some In The Upload's Page</h1>}
        </div>
      </div>

      <div className="document-btn">
          <button className="doc-btn" onClick={() => download()}> Download All Images </button>
          <button className="doc-btn" onClick={generatePDF}> Download PDF </button>
      </div>
    </div>      
    </>
  );
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
