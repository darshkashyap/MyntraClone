export default function AboutPage() {
  return (
    <div className="w-full">

    
      <div className="w-full">
        <img
          src="/AboutTop.png"
          className="w-full object-cover"
        />
      </div>

     
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Mission
        </h2>

        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 mb-6"></div>

        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed max-w-3xl mx-auto">
          We’re working toward a future where shopping is sustainable,  
          <br />
          style stays fun and affordable,  
          <br />
          and the things you no longer use find a new home.
        </h3>
      </section>

      
      <section className="px-4 md:px-10 lg:px-20 py-10 text-center">

        <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          <span className="text-6xl inline-block mr-2">❝</span>
          Every year, the fashion world produces around 53 million tonnes of fibre.
          Sadly, most of it ends up being burnt or dumped into landfills instead of
          being reused or recycled.
        </p>
        <div className="mt-10 flex justify-center">
          <img
            src="/image.png"
            className="w-full max-w-3xl"
          />
        </div>

       
        <div className="mt-10 bg-yellow-300 py-6 px-4 rounded-lg max-w-4xl mx-auto flex items-start justify-between">  
          <p className="text-gray-900 font-medium leading-relaxed text-left flex-1">
            India’s shift toward a circular economy could bring in nearly  
            <strong> $624 billion a year by 2050,</strong>  
            along with a significant drop — about 44% — in greenhouse gas emissions.
          </p>
          <span className="text-7xl text-gray-900 ml-4 ">
            ❝
          </span>
        </div>

      </section>
      <section className="px-6 md:px-16 lg:px-24 py-16">

  <div className="grid md:grid-cols-3 gap-12 text-center">
    <div>
      <img src="/img1.png" className="w-full rounded-lg" />
      <h3 className="text-xl font-semibold mt-6">Sustainable & Affordable Fashion</h3>
      <p className="text-gray-600 mt-3 leading-relaxed">
        At FreeUp, our mission is to make fashion and e-commerce sustainable, fun and affordable.
        We are a fast-growing, trusted community of 200,000+ women across India who thrift
        pre-loved items from each other.
      </p>
    </div>

   
    <div>
      <img src="/img2.png" className="w-full rounded-lg" />
      <h3 className="text-xl font-semibold mt-6">Sell & Get Rewarded</h3>
      <p className="text-gray-600 mt-3 leading-relaxed">
        Using our easy-to-use app, you can sell whatever you no longer need, wear, or have outgrown.
        Selling old clothes is rewarding with FreeUp—earn cash and shopping credits on every sale!
      </p>
    </div>

  
    <div>
      <img src="/img3.png" className="w-full rounded-lg" />
      <h3 className="text-xl font-semibold mt-6">Thrift Trendy Items</h3>
      <p className="text-gray-600 mt-3 leading-relaxed">
        Buy like-new women’s, kids’, or men’s fashion at up to 90% off MRP! Find treasures
        from Biba, Max, H&M, Urbanic, Shein & more. Shop one-of-a-kind styles at amazing prices.
      </p>
    </div>

  </div>

  <div className="grid md:grid-cols-4 gap-6 mt-16">

    <div className="bg-yellow-300 rounded-xl py-8 text-center shadow">
      <h2 className="text-3xl font-bold">500</h2>
      <p className="text-gray-700 mt-2">Cities are thrifting</p>
    </div>

    <div className="bg-yellow-300 rounded-xl py-8 text-center shadow">
      <h2 className="text-3xl font-bold">10 Lakh+</h2>
      <p className="text-gray-700 mt-2">App downloads in India</p>
    </div>

    <div className="bg-yellow-300 rounded-xl py-8 text-center shadow">
      <h2 className="text-3xl font-bold">1.5 Lakh+</h2>
      <p className="text-gray-700 mt-2">Items listed every month</p>
    </div>

    <div className="bg-yellow-300 rounded-xl py-8 text-center shadow">
      <h2 className="text-3xl font-bold">4.5 ★</h2>
      <p className="text-gray-700 mt-2">Play Store Rating</p>
    </div>

  </div>

  <div className="text-center mt-20">
    <h2 className="text-3xl font-bold">Our Impact</h2>
    <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 mb-6"></div>
    <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
      We give a second life to millions of used clothes.  
      Together, we help reduce carbon footprints, clean out closets, and save money.
    </p>
  </div>

  
  <div className="grid md:grid-cols-3 gap-10 mt-16 text-center">   
    <div>
      
      <h3 className="font-bold mt-3">₹1.3 Crores+</h3>
      <p className="text-gray-600">Money saved with FreeUp Coins</p>
    </div>

    
    <div>
      
      <h3 className="font-bold mt-3">1.8 Lakh+</h3>
      <p className="text-gray-600">Items sold & found new home</p>
    </div>

    
    <div>
      
      <h3 className="font-bold mt-3">11.25 Lakhs+</h3>
      <p className="text-gray-600">CO₂ emissions avoided</p>
    </div>

  </div>

</section>

    </div>
  );
}
