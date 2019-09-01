import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import VideoPlayer from '../VideoPlayer/Player';

const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    uploadUserImage(file: $file) {
      status,
      path,
      mime_type
    }
  }
`;

const FileUploader = () => {

  const [ uploadFile, { loading, error, data } ] = useMutation(UPLOAD_FILE);

  console.clear();
  console.log(loading);
  console.log(error);
  console.log(data);

  if(data) {

    const { uploadUserImage } = data;
    const{ status, path, mime_type }  = uploadUserImage;

    if(status){

      if(mime_type.includes("image")){
        return <img src={path} alt={mime_type} />;
      }

      if(mime_type.includes("video")){
        return <VideoPlayer src={path} type={mime_type} />
      }
    }
  }

  const handleChange = (props) => {

    const {
       target: {
         validity,
         files: [file]
       }
     } = props;
     const size_m = file.size*0.000001;
     console.log("Size: " + size_m + " MB");
     return validity.valid && uploadFile({ variables: { file } });
   }

  return <input type="file" required onChange={handleChange} />;

};

export default FileUploader;
