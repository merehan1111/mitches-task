const InquirySection = () => {
  return (
    <section className="bg-[#EAEAEA] py-10 px-5 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Text Section */}
        <div className="w-full md:flex-1 text-center md:text-left">
          <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-medium leading-snug">
            Are you interested in a property or 
            <br className="hidden md:block"/> have any other inquiries?
          </h2>
        </div>

        {/* Button Section */}
        <div className="w-full md:flex-1 flex justify-center md:justify-end">
          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition text-sm sm:text-base md:text-lg">
            Get in touch →
          </button>
        </div>

      </div>
    </section>
  );
};

export default InquirySection;
