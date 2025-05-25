import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to EcoBump
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="px-6 py-10 sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">E</div>
              <span className="ml-3 text-2xl font-bold text-gray-900">EcoBump</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-pink-500 pb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 mt-4">
              Please read these terms carefully before using our maternal and fetal monitoring service
            </p>
          </div>

          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  By accessing or using the EcoBump maternal and fetal heart monitoring service, including our wireless device and mobile application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service or device.
                </p>
              </div>
            </section>

            {/* Medical Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                2. Medical Disclaimer & Emergency Procedures
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-gray-700 mb-4 font-semibold">
                  <strong>IMPORTANT MEDICAL DISCLAIMER:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    EcoBump is a <strong>supplementary monitoring tool</strong> and is NOT a substitute for professional medical care or diagnosis.
                  </li>
                  <li>
                    <strong>Emergency Situations:</strong> If you experience concerning symptoms, severe pain, bleeding, or any emergency situation, contact your healthcare provider or emergency services immediately. Do not rely solely on EcoBump readings.
                  </li>
                  <li>
                    Our device provides monitoring data to assist you and your healthcare provider but should not replace regular prenatal checkups and medical supervision.
                  </li>
                  <li>
                    Always consult with qualified healthcare professionals for medical advice, diagnosis, and treatment decisions.
                  </li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                3. User Responsibilities
              </h2>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li>
                    <strong>Accurate Information:</strong> Provide true and current health information including due dates, medical history, and pregnancy-related data.
                  </li>
                  <li>
                    <strong>Proper Device Use:</strong> Use the EcoBump device according to provided instructions and safety guidelines. Ensure proper placement and connection.
                  </li>
                  <li>
                    <strong>Medical Supervision:</strong> Use EcoBump under the guidance of your healthcare provider and maintain regular prenatal care appointments.
                  </li>
                  <li>
                    <strong>Account Security:</strong> Maintain the confidentiality of your account credentials and prevent unauthorized access to your health data.
                  </li>
                  <li>
                    <strong>Device Care:</strong> Properly maintain and care for the monitoring device according to provided guidelines.
                  </li>
                  <li>
                    <strong>Alert Response:</strong> Respond appropriately to health alerts and notifications from the system.
                  </li>
                </ul>
              </div>
            </section>

            {/* Device Usage & Safety */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                4. Device Usage & Safety Guidelines
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  <strong>EcoBump Device Safety Requirements:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Use only the provided, FDA-approved EcoBump monitoring device
                  </li>
                  <li>
                    Follow all setup and positioning instructions for accurate readings
                  </li>
                  <li>
                    Do not attempt to modify, repair, or disassemble the device
                  </li>
                  <li>
                    Report any device malfunctions or concerning readings immediately
                  </li>
                  <li>
                    Ensure device is properly charged and maintained for optimal performance
                  </li>
                  <li>
                    Keep device clean and sanitized according to provided guidelines
                  </li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                5. Limitation of Liability
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  EcoBump provides wireless heart monitoring as a supportive health tool. Important limitations include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Our service provides monitoring data with approximately 90% accuracy under optimal conditions.
                  </li>
                  <li>
                    <strong>Device Limitations:</strong> Monitoring accuracy may be affected by device positioning, maternal movement, fetal position, or technical factors.
                  </li>
                  <li>
                    EcoBump is not liable for any medical decisions made based solely on our monitoring data.
                  </li>
                  <li>
                    We are not responsible for device connectivity issues, data transmission delays, or temporary service interruptions.
                  </li>
                  <li>
                    Users acknowledge that continuous monitoring does not guarantee detection of all potential complications.
                  </li>
                </ul>
              </div>
            </section>

            {/* Data & Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                6. Health Data & Privacy Protection
              </h2>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  <strong>HIPAA Compliance & Health Data Protection:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    EcoBump is fully HIPAA compliant and treats all health information as Protected Health Information (PHI)
                  </li>
                  <li>
                    Your heart rate data, fetal movement information, and pregnancy details are encrypted and securely stored
                  </li>
                  <li>
                    We do not sell or share your health data without explicit consent
                  </li>
                  <li>
                    Please refer to our Privacy Policy for detailed information on data collection, use, and protection
                  </li>
                  <li>
                    You maintain control over your health data and can request deletion at any time
                  </li>
                </ul>
              </div>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                7. Service Availability & Support
              </h2>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>24/7 Monitoring:</strong> Our service aims to provide continuous monitoring, but occasional maintenance or technical issues may cause temporary interruptions
                  </li>
                  <li>
                    <strong>Technical Support:</strong> Customer support is available 24/7 for device issues or urgent concerns
                  </li>
                  <li>
                    <strong>Software Updates:</strong> Regular app and device firmware updates may be required for optimal performance
                  </li>
                  <li>
                    <strong>Compatibility:</strong> Service requires compatible smartphone and stable internet/Bluetooth connectivity
                  </li>
                </ul>
              </div>
            </section>

            {/* Healthcare Provider Integration */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                8. Healthcare Provider Integration
              </h2>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    EcoBump can integrate with your healthcare provider's systems with your explicit consent
                  </li>
                  <li>
                    Sharing of monitoring data with medical professionals requires your authorization
                  </li>
                  <li>
                    Healthcare providers using EcoBump data must comply with their own medical standards and protocols
                  </li>
                  <li>
                    EcoBump data should supplement, not replace, standard prenatal care and medical examinations
                  </li>
                </ul>
              </div>
            </section>

            {/* Subscription & Billing */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                9. Subscription & Billing Terms
              </h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    EcoBump service includes device rental and monitoring software subscription
                  </li>
                  <li>
                    Subscription fees are billed monthly or as agreed upon in your service plan
                  </li>
                  <li>
                    Device must be returned in good condition at the end of subscription period
                  </li>
                  <li>
                    Cancellation requires 30-day notice and device return within 14 days
                  </li>
                  <li>
                    Refunds are available according to our refund policy for unused subscription periods
                  </li>
                </ul>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                10. Changes to Terms
              </h2>
              <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  EcoBump reserves the right to modify these Terms of Service at any time to reflect changes in our service, legal requirements, or business practices. We will notify users of significant changes via email or app notification. Continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                11. Contact & Legal Information
              </h2>
              <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  For questions about these terms or our service:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@ecobump.com</p>
                  <p><strong>Support:</strong> support@ecobump.com</p>
                  <p><strong>Phone:</strong> +1-800-ECOBUMP</p>
                  <p><strong>Emergency:</strong> For urgent medical concerns, contact your healthcare provider or emergency services</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm text-gray-500">
                Version 2.0 - Comprehensive maternal health monitoring terms
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <Link href="/privacy" className="text-pink-600 hover:text-pink-700 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/contact" className="text-pink-600 hover:text-pink-700 transition-colors">
                  Contact Support
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/" className="text-pink-600 hover:text-pink-700 transition-colors">
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}