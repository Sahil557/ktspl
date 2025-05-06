import Image from 'next/image';
import data from "../content/social-media.json";

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {data.map((social, index) => (
        <Image
          key={index}
          src={social.imageUrl}
          alt={social.alt}
          width={social.width}
          height={social.height}
        />
      ))}
    </div>
  );
}
