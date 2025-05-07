import Link from "next/link"
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="mx-auto max-w-[1216px] px-4">
        <div className="grid grid-cols-1 gap-6 md:gap-16 py-10 md:py-30 text-sm md:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={142} height={51} />
            </Link>
            <p className="text-light-blue">It’s always nice to hear from people for whom we are working day-in and day-out. We would love to hear anything that you have to say, be it a feedback, or a query.</p>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-white">Products</h4>
            <ul className="space-y-1 text-light-blue">
              <li>Allsport</li>
              <li>E-Excellence</li>
              <li>classNameCloud</li>
              <li>Motor Skill Assessment</li>
              <li>File Tracking System</li>
              <li>SportWizz</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-white">KTSPL</h4>
            <ul className="space-y-1 text-light-blue">
              <li>About Us</li>
              <li>Services</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-white">Subscribe to our newsletter</h4>
            <div className="relative w-full">
              <input type="email" placeholder="Enter your email" className="w-full rounded-md bg-[#1A1940] p-3 pr-20 text-light-blue outline-none" />
              <button className="absolute top-1 right-1 bottom-1 rounded-md px-4 font-semibold text-white">Join</button>
            </div>
            <div className="mt-4 flex space-x-3">
              <a href="#"><img src="https://img.icons8.com/ios-filled/20/ffffff/facebook.png" /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/20/ffffff/twitter.png" /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/20/ffffff/linkedin.png" /></a>
            </div>
          </div>
        </div>
      </footer>

      <div className="container bg-primary-dark mx-auto py-4 text-light-blue text-center text-sm">
        <p>Copyright &copy; 2024 Khelo Tech and Strategy Private Limited. All Rights Reserved </p>
      </div>
    </>
  );
};

export default Footer;
