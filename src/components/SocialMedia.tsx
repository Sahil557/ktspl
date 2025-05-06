import Image from 'next/image';
import data from "../content/social-media.json";

export default function SocialMedia() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-white">On <span className="text-yellow-400">Social Media</span></h2>
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
    </div>
  );
}
