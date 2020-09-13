import React, { useState, useEffect } from 'react';
import { FiDownload, } from 'react-icons/fi'
import Swal from 'sweetalert2'
import fileDownload from 'js-file-download'

import api from '../../services/api';
import './styles.css';

function DownloadPage() {

  const [files, setFiles] = useState([])
  const [selectedFile, setSelectedFile] = useState('')

  useEffect(() => {
   api.get("listagem") 
      .then(response => {
      setFiles(response.data.files)
    })
  }, [selectedFile])

  async function baixarFile(e) {
    e.preventDefault()
    try {
      await api.get('download', {
        headers: {
          file: selectedFile,
          responseType: 'blob',
        }
      }).then(response => {
        fileDownload(response.data, selectedFile)
      })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'ERRO AO ESTABELECER CONEXÃO COM O SERVIDOR',
      })
    }
  }

  function buttonDownload() {
    document.getElementById('buttonDownload').click()
  }

  return (
    <div className="downloadpage-container">
    
      <div className="content">
        <h1>ARQUIVOS</h1>
      </div>

      <ul>
        {files.map(files => (
          <li key={files} >
            <strong>{files}</strong>
            <p><br/></p>
            <label htmlFor={files}>
              <FiDownload  size={60} />
            </label>
            <input 
              type="radio"
              id={files}
              name="Radiobutton"
              value={files}
              onMouseOver={e => setSelectedFile(e.target.value)}
              onClick={buttonDownload}
            />
          </li>
        ))}
      </ul>

      <button id="buttonDownload" onClick={baixarFile}/>
    </div>
  )
}

export default DownloadPage;