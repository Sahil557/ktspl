import Button from "./Button";

export default function CallToAction({ message = "Let's connect and get in touch.", buttonText = "Get Started" }) {
  return (
    <div className="bg-primary-ex-soft rounded-lg mt-30 py-10 text-white flex flex-col md:flex-row items-center justify-evenly text-center gap-4">
      <p className="text-2xl font-semibold">{message}</p>
      <Button text={buttonText} />
    </div>
  );
}