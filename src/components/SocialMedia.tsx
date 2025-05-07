import Image from 'next/image';
import data from "../content/social-media.json";

export default function SocialMedia() {
  return (
    <div>
      <h2 className="mb-4 text-2xl md:text-4xl font-bold text-white">On <span className="text-secondary">Social Media</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
