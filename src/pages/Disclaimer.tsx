
import { MainLayout } from "@/layouts/MainLayout";

const Disclaimer = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Medical Disclaimer</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead">
            CancerCalc provides oncology risk assessment tools and calculators for healthcare professionals. Please read this disclaimer carefully before using our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Not a Substitute for Professional Medical Advice</h2>
          <p>
            The content on CancerCalc, including all text, calculators, risk assessment tools, and other information, is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          
          <p>
            Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on the CancerCalc website.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Appropriate Use of Calculators and Tools</h2>
          <p>
            The calculators and risk assessment tools provided on CancerCalc are designed to assist healthcare professionals in their clinical decision-making. These tools should be used in conjunction with clinical judgment, patient-specific factors, and current clinical guidelines. The results should be interpreted by qualified healthcare professionals familiar with the patient's clinical situation.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Accuracy and Updates</h2>
          <p>
            While we strive to keep our calculators and tools accurate and up-to-date with current medical knowledge and guidelines, medicine is an ever-evolving field. CancerCalc does not warrant that the information provided will be error-free, complete, or up-to-date at all times.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">No Physician-Patient Relationship</h2>
          <p>
            Use of CancerCalc does not create a physician-patient relationship. The website is not designed to collect or transmit any personally identifiable patient information to us. Users are responsible for maintaining patient confidentiality when using our tools.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Emergency Situations</h2>
          <p>
            CancerCalc is not designed for use in emergency situations. In case of a medical emergency, call your doctor or emergency services immediately.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Contact Information</h2>
          <p>
            If you have any concerns about the content or tools provided on CancerCalc, please contact us at medical@cancercalc.org.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Disclaimer;
