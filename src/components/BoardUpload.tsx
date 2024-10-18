import React, { useState } from 'react';
import { Upload, Plus } from 'lucide-react';

const BoardUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [boardName, setBoardName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length > 0 && boardName) {
      console.log('Uploading board:', boardName, 'with files:', files.map(f => f.name));
      // Here you would typically send the files and board name to your server
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Board Upload</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Board Name"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <div className="flex items-center justify-center w-full">
          <label htmlFor="board-dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">Multiple files allowed</p>
            </div>
            <input id="board-dropzone-file" type="file" className="hidden" onChange={handleFileChange} multiple />
          </label>
        </div>
        {files.length > 0 && (
          <div>
            <p className="text-sm text-gray-500 mb-2">Selected files:</p>
            <ul className="list-disc list-inside">
              {files.map((file, index) => (
                <li key={index} className="text-sm text-gray-500">{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
          Create Board
        </button>
      </form>
    </div>
  );
};

export default BoardUpload;