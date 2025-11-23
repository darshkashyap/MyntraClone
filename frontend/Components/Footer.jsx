export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">

        
        <div>
          <div className="flex items-center space-x-2 mb-4">
            </div>
            <h1 className="text-3xl font-semibold italic">FreeUp</h1>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Shop Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Women</li>
            <li>Men</li>
            <li>Baby & Kids</li>
            <li>Beauty & Care</li>
            <li>Books</li>
            <li>Home & Kitchen</li>
            <li>Gadgets</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Popular Brands</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Zara</li>
            <li>Mamaearth</li>
            <li>Shein</li>
            <li>Biba</li>
            <li>Avaasa</li>
            <li>Babyhug</li>
            <li>H&M</li>
            <li>Forever 21</li>
            <li>Max</li>
            <li>Urbanic</li>
            <li>Zudio</li>
            <li>MyGlamm</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Help Center</li>
            <li>Community Guidelines</li>
            <li>Cancelation, Refunds & Returns</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
