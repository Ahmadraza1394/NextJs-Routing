// app/page.tsx
import Image from "next/image";
import img1 from "/public/image.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Our Web Development Services
          </h1>
          <p className="text-lg mb-8">
            We create modern, responsive websites that help your business grow.
          </p>
          <a
            href="#services"
            className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Explore Our Services
          </a>
        </div>
        <div className="-z-10">
          <div>this is image</div>
          <Image className="" src={img1} width={500} height={500} alt="image" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Custom Web Design</h3>
              <p>
                We craft visually appealing websites tailored to your brand,
                ensuring a unique and engaging user experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Responsive Development
              </h3>
              <p>
                Our websites are fully responsive, ensuring optimal performance
                on all devices, from desktops to smartphones.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">E-commerce Solutions</h3>
              <p>
                We build robust e-commerce platforms that help you sell online,
                providing seamless shopping experiences for your customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
              <p>
                Our SEO services ensure your website ranks high in search
                engines, driving more traffic to your business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Web App Development</h3>
              <p>
                We specialize in building custom web applications tailored to
                your business needs, enhancing your online capabilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Maintenance & Support</h3>
              <p>
                We offer ongoing support and maintenance to ensure your website
                remains up-to-date and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to discuss how we can help you build a strong
            online presence.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
