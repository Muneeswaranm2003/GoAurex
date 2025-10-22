import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using GoAurex services, you agree to be bound by these Terms and Conditions.
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
            <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use our services in any way that violates any applicable law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
              <li>Attempt to gain unauthorized access to any portion of the services</li>
              <li>Upload or transmit viruses or any other malicious code</li>
              <li>Impersonate or attempt to impersonate GoAurex or any employee</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
            <p className="mb-4">
              The services and all content, features, and functionality are owned by GoAurex and are protected
              by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate and complete information.
              You are responsible for maintaining the confidentiality of your account and password and for
              restricting access to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Fees and Payment</h2>
            <p className="mb-4">
              Some aspects of our services may be provided for a fee. You agree to pay all fees and charges
              associated with your account. All fees are non-refundable unless otherwise specified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and access to the services immediately, without prior
              notice, for any reason, including if you breach these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              GoAurex shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws, without
              regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will notify you of any changes by
              posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-primary">contact@goaurex.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
