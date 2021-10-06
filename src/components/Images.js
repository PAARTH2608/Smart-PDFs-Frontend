import React, { useState, useEffect } from 'react';
import './component-styles/images.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { imagesActions } from '../store/images-slice';
const Images = () => {
  const [image, setImage] = useState(null);
  const [altText, setAltText] = useState('');
  const [images, setImages] = useState(null);
  const [updated, setUpdated] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          'Accept': 'application/json',
        }
      };
      try {
        const res = await axios.get('http://localhost:8000/api/image/fetch-images', config);
        if (res.status === 200) {
          setImages(res.data.images);
        }
      } catch(err) {

      }
      
    };

    fetchData();
  }, [updated]);

  useEffect(() => {
    dispatch(imagesActions.addImageToImages(images))
    
  }, [images, dispatch])

  const onFileChange = e => setImage(e.target.files[0]);
  const onTextChange = e => setAltText(e.target.value);

  const onSubmit = async e => {
    e.preventDefault();

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        }
    };

    const formData = new FormData();
    formData.append('image', image);
    formData.append('alt_text', altText);

    const body = formData;

    try {
        const res = await axios.post('http://localhost:8000/api/image/upload', body, config);

        if (res.status === 201) {
            setUpdated(!updated);
        }
    } catch(err) {

    }    
  };
    return (
      <div className="row">
        <div className='image-div'>
            <div>
              <form onSubmit={onSubmit}>
                <div className='image-inside'>
                  <label className='form-label' htmlFor='image'>Image Upload</label>
                  <input className='form-control file' type='file' name='image' onChange={onFileChange} required/>
                </div>
                <div className='image-inside'>
                  <label className='form-label' htmlFor='alt_text'>Alt Text</label>
                    <input className='form-control alt-text' type='text' name='alt_text' onChange={onTextChange} value={altText} required/>
                </div>
                <button className='upload-button' type='submit'>Upload Image</button>
              </form>
            </div>     
        </div>

        <div className='fetched-div'>
          <h3>Uploaded Images : </h3>
          {images != null && <div className="overflow">
            {
              images !== null && images !== undefined && images.length > 0 && images.map(image => (
                <div className='padding' key={image.id}>
                  <img width={250} height={150} src={`http://localhost:8000${image.image}`} alt={image.alt}/>
                </div>
              ))
            }
          </div>}
          {images === null && <div>
            <h3 className="upload-images">No Images Uploaded Yet!</h3>
          </div>}
        </div>
    </div> 
    );
};
export default Images;