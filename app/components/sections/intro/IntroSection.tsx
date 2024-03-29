import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBox from './IntroSearchBox';
import DownBounce from './IntroDownBounce';
import IntroBackground from './IntroBackground';

export default function IntroSection() {
  const [checkViewPort, setCheckViewPort] = useState<boolean>(false);

  const handleCheckViewPort = (isCurrentViewPort: boolean) => setCheckViewPort(isCurrentViewPort);

  return (
    <motion.div
      id="intro"
      onViewportLeave={() => handleCheckViewPort(false)}
      onViewportEnter={() => handleCheckViewPort(true)}
      className="min-h-screen h-auto flex justify-center items-center relative"
    >
      <IntroBackground />
      <SearchBox checkViewPort={checkViewPort} />
      <DownBounce />
    </motion.div>
  );
}
