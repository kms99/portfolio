import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBox from './SearchBox';
import DownBounce from './DownBounce';

export default function MainIntro() {
  const [checkViewPort, setCheckViewPort] = useState<boolean>(false);

  const handleCheckViewPort = (isCurrentViewPort: boolean) =>
    setCheckViewPort(isCurrentViewPort);

  return (
    <motion.div
      id="intro"
      onViewportLeave={() => {
        handleCheckViewPort(false);
      }}
      onViewportEnter={() => {
        handleCheckViewPort(true);
      }}
      className="h-screen flex justify-center items-center bg-i relative mb-1"
    >
      <SearchBox checkViewPort={checkViewPort} />
      <DownBounce />
    </motion.div>
  );
}
