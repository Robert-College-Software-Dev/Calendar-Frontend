import React, {useState} from 'react';

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboardComponent = ({text}: CopyToClipboardProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = (clip: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset 'copied' state after 3 seconds
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  const handleCopyClick = () => {
    const textToCopy = text;
    copyToClipboard(textToCopy);
  };

  return (
    <div className='text-xs hover:cursor-pointer inline-block text-orange-500 underline underline-offset-2'>
      <p
        className='inline-block  hover:underline hover:underline-offset-2'
        onClick={handleCopyClick}>
        Click here to copy
      </p>
      {copied && (
        <span className='ml-2 underline underline-offset-2 inline-block'>
          Copied to clipboard!
        </span>
      )}
    </div>
  );
};

export default CopyToClipboardComponent;
