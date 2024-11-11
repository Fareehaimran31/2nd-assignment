export default function FigmaProject() {
  return (
    <div className="bg-[#1d1e2c] min-h-[1028px]:">
      <nav className="w-full py-6 flex justify-between items-center px-12">
        <div className="font-bold text-white text-xl">BrandName </div>
        <div className="text-white flex space-x-8">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Product
          </a>
          <a href="#" className="hover:text-gray-400">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-white">
            Login
          </a>
          <button className="text-white bg-blue-500 px-3 py-1 rounded hover-blue-600">
            Join us
          </button>
        </div>
      </nav>
      <div className="text-center mt-16 justify-center">
        <p className="text[#23a6f0] text-size-16-px mb-4">Welcome</p>
        <h1 className="text-5xl text-white font-bold mb-6">Selling on the</h1>
        <h1 className="text-5xl text-white font-bold mb-6">
          internet like a pro
        </h1>
        <p className="text-gray-300 text-lg mb-10">
          We know how large objects will acts,but things on a<br />
          small scale just do not act that way
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:to-blue-600 ">
            Get Quote Now
          </button>
          <button className="text-blue-500 border-blue-500 py-3 px-8 rounded-lg hover:bg-blue-600 hover:text ">
            Learn More
          </button>
        </div>
        <div className="flex justify-center space-x-8 mt-20">
          <div className="bg-white p-6 w-80">
            <div className="w-12 h-12 rounded-lg bg-red-200 mb-4"></div>
            <h1 className="text-gray-900 font-bold text-xl mb-2">
              training courses
            </h1>
            <p className="text-gray-900 ">
              The gradual accumalation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="bg-white p-6 w-80">
            <div className="w-12 h-12 rounded-lg bg-red-200 mb-4"></div>
            <h1 className="text-gray-900 font-bold text-xl mb-2">
              2,769 online courses
            </h1>
            <p className="text-gray-900 ">
              The gradual accumalation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="bg-blue-500 p-6 w-80">
            <div className="w-12 h-12 rounded-lg bg-white mb-4"></div>
            <h1 className="text-white font-bold text-xl mb-2">
             Training courses
            </h1>
            <p className="text-gray-900 ">
              The gradual accumalation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
