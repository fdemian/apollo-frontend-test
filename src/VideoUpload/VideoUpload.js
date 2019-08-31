import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    uploadUserImage(file: $file) {
      status
    }
  }
`;

const FileUploader = () => {

  const [ uploadFile ] = useMutation(UPLOAD_FILE);

  const handleChange = (props) => {

    const {
       target: {
         validity,
         files: [file]
       }
     } = props;
     const vars = { variables: { file } };
     console.log(vars);
     return validity.valid && uploadFile(vars);
   }

  return <input type="file" required onChange={handleChange} />;

};

export default FileUploader;
