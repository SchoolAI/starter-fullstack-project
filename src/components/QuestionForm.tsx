import React, { useState } from 'react';
import { api } from '../utils/api';

export const QuestionForm: React.FC = () => {


  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Ask a question..."
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Ask
      </button>
    </form>
  );
};