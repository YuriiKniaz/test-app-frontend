import React, { useState } from 'react';
import { uploadFile } from 'api/fileApi';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import Arrow from '../../images/UploadButton.svg'
import { UploadDiv, LogoWrap, UploadWrapper, InputWrapper } from './Upload.styled';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

      setIsLoading(true);

      const response = await uploadFile(formData);

      setTimeout(() => {
        setIsLoading(true);
        navigate('/appOpened', { state: { file: response.data } });
      }, 3000);

      setFile(null);
    } catch (error) {
      console.error('Upload failed', error);
      setIsLoading(false);
    }
  };

  return (
    <UploadDiv>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <LogoWrap>
            <img alt="logo" src={Logo} width="28px" height="31px" />
            <NavLink to="/test-app-frontend">Roast</NavLink>
          </LogoWrap>
          <h1>Upload your data</h1>
          <UploadWrapper>
            <p>
              Drag and Drop your <span>data.json</span> or {''}
              <span>myData.zip</span> file here
            </p>
            <InputWrapper>
              <input
                type="file"
                id="file-upload"
                name="file"
                onChange={onChange}
              />
              <label htmlFor="file-upload">
                <img alt="arrow" src={Arrow} />
              </label>
            </InputWrapper>
            <button onClick={onUpload}>Upload myData.json</button>
            <p>I don`t have it</p>
          </UploadWrapper>
        </>
      )}
    </UploadDiv>
  );
};

export default Upload;