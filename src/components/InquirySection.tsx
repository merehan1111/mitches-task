const InquirySection = () => {
    return (
      <section className="bg-[#EAEAEA] py-10 px-5  md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Text Section */}
        <div className="w-full md:w-auto">
          <h2 className="md:text-[40px] text-[28px]  font-medium text-center md:text-left">
            Are you interested in a property or  <br className="hidden md:block"/>  have any other inquiries?
          </h2>
        </div>
    
        {/* Button Section */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
            Get in touch →
          </button>
        </div>
    
      </div>
    </section>
    
    );
  };
  
  export default InquirySection;
  