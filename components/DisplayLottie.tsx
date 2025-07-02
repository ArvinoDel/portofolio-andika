import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures this only runs on the client
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {isClient && (
        // @ts-ignore
        <Lottie options={defaultOptions} />
      )}
    </div>
  );
};

export default GreetingLottie;
