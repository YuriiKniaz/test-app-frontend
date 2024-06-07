import React, { useState } from 'react';
import { uploadFile } from 'api/fileApi';
import AppOpened from 'components/AppOpened/AppOpened';
import Loading from 'components/Loading/Loading';
import { NavLink } from 'react-router-dom';

const Upload = () => {
  const [file, setFile] = useState(null);
const [fileData, setFileData] = useState(null)
const [isLoading, setIsLoading] = useState(false)


 

  const onChange = e => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const onUpload = async () => {
    try {
      if (!file) {
        console.error('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      const response = await uploadFile(formData);
      setFileData(response.data)

      setTimeout(()=>{
setIsLoading(true);
      }, 3000)
     
    } catch (error) {
      setFile(null)
    }
  };

  

  return (
    <div>
      <input type="file" name="file" onChange={onChange} />
      <button onClick={onUpload}><NavLink to='/appOpened'/> Upload</button>
      {isLoading?<AppOpened file={fileData}/>:<Loading/>}
    </div>
  );
};

export default Upload;
