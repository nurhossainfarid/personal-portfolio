import Providers from "@/lib/Providers";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <Providers>
      <div className="w-[90%] mx-auto">
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          width={500}
          height={500}
          alt="loading"
          className="w-96 mx-auto"
        />
      </div>
    </Providers>
  );
};

export default LoadingPage;
