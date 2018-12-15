import React from 'react';
import { Link } from 'react-router-dom';

function UploadImage({ imageUpload, handleFile, imagePreview, handleOtherFile }) {
  return (
    <div>
      {imageUpload === 'close' ? (<div className='project-image'>
        <div className='project-image-inner'>
          <div className='project-image-inner-title'>Project image</div>
          <div className='project-image-inner-content'>
            <div className='project-image-upload'>
              <div className='project-image-upload-inner'>
                <label htmlFor='image-upload'>
                  <input id='image-upload' onChange={handleOtherFile} type='file' />
                  <span className='choose-an-image'>Choose an image from your computer</span>
                  <span className='choose-an-image-description'>This is the main image associated with your project. Make it count!</span>
                  <span className='choose-an-image-description'>JPEG, PNG, GIF, or BMP • 200MB file limit</span>
                  <span className='choose-an-image-description'>At least 1024x576 pixels • 16:9 aspect ratio</span>
                </label>
              </div>
            </div>
            <div className='project-image-content'>
              <p>This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. <Link className='some-tips' to='/help/images'>Here are some tips.</Link></p>
            </div>
          </div>
        </div>
      </div>) : (<div className='project-image-open'>
        <div className='project-image-inner-open'>
          <div className='project-image-inner-title'>Project image</div>
          <div className='project-image-inner-content'>
            <div className='project-image-upload-open'>
              <div className='project-image-upload-inner-inner'>
                {imagePreview}
              </div>
              <div className='project-image-upload-inner-open'>
                <label htmlFor='image-upload'>
                  <input id='image-upload' onChange={handleFile} type='file' />
                  <span className='choose-an-image'>Choose an image from your computer</span>
                  <span className='choose-an-image-description'>This is the main image associated with your project. Make it count!</span>
                  <span className='choose-an-image-description'>JPEG, PNG, GIF, or BMP • 200MB file limit</span>
                  <span className='choose-an-image-description'>At least 1024x576 pixels • 16:9 aspect ratio</span>
                </label>
              </div>
            </div>
            <div className='project-image-content-open'>
              <p>This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. <Link className='some-tips' to='/help/images'>Here are some tips.</Link></p>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default UploadImage;
