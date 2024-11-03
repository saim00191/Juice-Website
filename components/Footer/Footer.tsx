import Link from "next/link";
import Logo from "../Logo/Logo";
import Container from "@/shared/Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm">
                We are dedicated to providing the best service to our customers.
                Our mission is to make your experience exceptional.
              </p>
              <div className="space-y-2">
                <p className="text-sm">Contact us:</p>
                <p className="text-sm">Email: info@example.com</p>
                <p className="text-sm">Phone: (123) 456-7890</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                {["Product 1", "Product 2", "Product 3", "Product 4"].map(
                  (product) => (
                    <li key={product}>
                      <Link href="/" className="text-sm hover:text-green-600">
                        {product}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-sm hover:text-green-600">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-sm">
                <li>Monday - Friday: 9am - 5pm</li>
                <li>Saturday: 10am - 4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-green-600">Juice Lab.</span> All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
