import Card from "./components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 relative pt-20">
      <div className={"bg-blue-300 p-4 rounded-lg h-80"}>
        <h1 className="text-3xl font-bold text-white text-center pt-10">Welcome to AI Agent</h1>
        <p className="text-white text-center pt-20 text-xl	">We provide AI solutions for various industries. Explore our solutions in education, healthcare, finance, and more.</p>
        <h2 className="text-white text-center pt-10 text-2xl">Explore</h2>
      </div>

      {/* New Section */}
      <div className="pt-20">
        <h2 className="text-2xl font-semibold text-center mb-8">Explore Our Domains</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <Card
            title="Education"
            description="AI solutions for personalized learning and teaching."
          />
          <Card
            title="Healthcare"
            description="AI-powered tools for better diagnosis and patient care."
          />
          <Card
            title="Finance"
            description="AI solutions for fraud detection and financial forecasting."
          />
          <Card
            title="Manufacturing"
            description="Optimize production processes with AI-driven analytics."
          />
        </div>
      </div>


      {/* New Features */}
      <div className="bg-white pt-10 pb-10 rounded-lg mt-10">
        <h2 className="text-2xl font-semibold text-center mb-8">Features</h2>
        <Image
          src="/features.png"
          alt="features"
          width={350}
          height={300}
          className='text-center mx-auto'
        />
      </div>

      <div className="flex flex-col items-center w-full mx-auto pt-10 pb-10">
        <h2 className="text-2xl font-semibold mb-2 pb-10">Try Agent Assistant</h2>
        <iframe
          src="https://udify.app/chatbot/8XZxLgGcbo8FdKXd"
          style={{ width: '100%', height: '100%', minHeight: '360px' }}
          allow="microphone"
          title="Dify Chatbot"
        />
      </div>

      {/* Contact Us */}
      <div className="flex flex-col items-center w-full mx-auto pt-20 pb-10" >
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg mb-4">
          If you have any questions or need further information, please reach out to us
        </p>
        <a href="mailto:synthlababc@gmail.com" className="text-blue-500 hover:underline">
          synthlababc@gmail.com
        </a>
      </div>
    </div >



  );
}