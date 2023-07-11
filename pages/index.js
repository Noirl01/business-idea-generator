// file: /pages/index.js
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import TextInput from '@/components/TextInput';
import SubmitButton from '@/components/SubmitButton';
import ResponseDisplay from '@/components/ResponseDisplay';
import useApi from '@/hooks/useApi';
import { getUserPrompt } from "../prompts/promptUtils";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const { data, error, loading } = useApi('/api/openai', 'POST', submitValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitValue(getUserPrompt(inputValue)); // Update the payload here
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>AI Business Idea Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className={inter.className}>AI Business Idea Generator</h1>
        <p className={inter.className}>A budget-based business idea generator that helps aspiring entrepreneurs kickstart their ventures. Users input their available budget, and the app suggests a step-by-step plan to start a business. It provides key considerations, target market analysis, marketing strategies, and potential revenue streams. With this app, users can efficiently explore business opportunities and lay the foundation for their entrepreneurial journey.</p>
        <form onSubmit={handleSubmit}>
          <ResponseDisplay data={data} error={error} loading={loading} />
          <TextInput value={inputValue} onChange={handleInputChange} placeholder={'Enter your budget'} />
          <SubmitButton disabled={loading} />
        </form>
      </main>
    </>
  );
}