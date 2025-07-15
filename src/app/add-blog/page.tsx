'use client';

import { processSubmit } from '@/system/pages/add-blog';
import React, { JSX, useState } from 'react';

export default function Page(): JSX.Element {
  const [submitErrors, setSubmitErrors] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await processSubmit({ formData, setSubmitErrors });
  };

  return (
    <div>
      <h1>Add a new Blog Post</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" rows={15} required></textarea>
        </div>
        <div>
          <label htmlFor="tags">Tags:</label>
          <input type="text" id="tags" name="tags" placeholder="comma-separated tags" />
        </div>
        <p>{submitErrors}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}