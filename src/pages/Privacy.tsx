
import { MainLayout } from "@/layouts/MainLayout";

const Privacy = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead">
            This Privacy Policy describes how CancerCalc ("we", "our", or "us") collects, uses, and shares information when you use our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when using the calculators or risk assessment tools on our website. This may include patient-related data such as age, gender, medical history, and treatment information. We do not collect personally identifiable information unless explicitly provided.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Information</h2>
          <p>
            The information you provide is used solely for the purpose of generating calculator results and risk assessments. We may use anonymized, aggregated data for research, quality improvement, and to enhance our tools and services.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement reasonable precautions to protect the security of your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Changes to Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@cancercalc.org.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
