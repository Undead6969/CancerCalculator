
import { MainLayout } from "@/layouts/MainLayout";

const Terms = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead">
            Welcome to CancerCalc. By accessing this website, you agree to be bound by these Terms and Conditions.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Medical Disclaimer</h2>
          <p>
            CancerCalc provides information and tools for healthcare professionals. The information and tools are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Use of Calculators and Tools</h2>
          <p>
            The calculators and risk assessment tools provided on CancerCalc are designed to assist healthcare professionals in their clinical decision-making. These tools should not be relied upon as the sole basis for medical decisions. Results should be interpreted in conjunction with clinical judgment and other relevant patient information.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, CancerCalc and its developers will not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with access to or use of the website, whether based on contract, tort, strict liability, or otherwise.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Updates to Terms and Conditions</h2>
          <p>
            CancerCalc may revise these Terms and Conditions at any time without notice. By using this website, you are agreeing to be bound by the current version of these Terms and Conditions.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at contact@cancercalc.org.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
