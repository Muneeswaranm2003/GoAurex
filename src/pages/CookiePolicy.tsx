import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit our website.
              They are widely used to make websites work more efficiently and provide information to the
              owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">GoAurex uses cookies for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: Help us understand how visitors interact with our website</li>
              <li>Functional cookies: Enable enhanced functionality and personalization</li>
              <li>Marketing cookies: Used to track visitors across websites to display relevant ads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Session Cookies</h3>
                <p>These are temporary cookies that expire when you close your browser.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Persistent Cookies</h3>
                <p>These remain on your device for a set period or until you delete them.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">First-party Cookies</h3>
                <p>Set by GoAurex directly.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Third-party Cookies</h3>
                <p>Set by third-party services we use, such as analytics providers.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. You can set your browser to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Block all cookies</li>
              <li>Allow only first-party cookies</li>
              <li>Clear all cookies when you close the browser</li>
              <li>Notify you when a cookie is being set</li>
            </ul>
            <p className="mt-4">
              Please note that blocking cookies may impact your experience on our website and limit functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
            <p className="mb-4">
              We may use third-party services that set cookies on our behalf. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for social sharing features</li>
              <li>Marketing and advertising platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Consent</h2>
            <p className="mb-4">
              By continuing to use our website, you consent to our use of cookies as described in this policy.
              You can withdraw your consent at any time by changing your browser settings or contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="text-primary">contact@goaurex.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
