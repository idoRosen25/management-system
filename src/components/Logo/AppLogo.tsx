import Image, { StaticImageData } from 'next/image';

type AppLogoProps = {
  logo: StaticImageData;
};

const AppLogo = ({ logo }: AppLogoProps) => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center p-5 mb-7">
      <div className="flex">OctoManage</div>
      <Image
        src={logo}
        alt="Platform Icon"
        className="rounded-full cursor-pointer"
        width={300}
        height={300}
      />
    </div>
  );
};
export default AppLogo;
