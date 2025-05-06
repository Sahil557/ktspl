import Image from 'next/image';
import data from "../content/our-partners.json";

export default function OurPartners() {
  return (
    <div className="bg-primary-soft rounded-xl flex flex-wrap justify-center items-center gap-25 py-10">
      {data.map((partner) => (
        <Image
          key={partner.name}
          src={partner.imageUrl}
          alt={partner.alt}
          width={partner.width}
          height={partner.height}
        />
      ))}
    </div>
  );
}
