import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to EcoBump
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="px-6 py-10 sm:px-10">
          <div className="max-w-prose mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">E</div>
                <span className="ml-3 text-2xl font-bold text-gray-900">EcoBump</span>
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-pink-500 pb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600 mt-4">
                Your privacy and the safety of your pregnancy data is our highest priority
              </p>
            </div>

            <div className="space-y-8">
              {/* Information Collection */}
              <section>
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  Health Information Collection
                </h2>
                <p className="text-gray-600 mb-4">
                  At EcoBump, we are committed to protecting your sensitive health information while providing 
                  continuous maternal and fetal monitoring. We carefully collect and manage the following 
                  types of information:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-gray-700">
                  <li>
                    <strong>Heart Rate Data:</strong> Real-time maternal and fetal heart rate measurements 
                    from your EcoBump device
                  </li>
                  <li>
                    <strong>Fetal Movement Tracking:</strong> Movement patterns and frequency data 
                    for comprehensive monitoring
                  </li>
                  <li>
                    <strong>Pregnancy Information:</strong> Due dates, gestational age, and relevant 
                    medical history you choose to share
                  </li>
                  <li>
                    <strong>Device Data:</strong> Connection logs, battery status, and technical 
                    performance metrics
                  </li>
                  <li>
                    <strong>Usage Analytics:</strong> Anonymous app usage patterns to improve our service
                  </li>
                </ul>
              </section>

              {/* Purpose of Information Use */}
              <section>
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We utilize your health information with the utmost care and specific medical purposes:
                </p>
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-100">
                  <ul className="space-y-3 pl-5 list-disc text-gray-700">
                    <li>
                      <strong>Real-time Monitoring:</strong> Provide continuous heart rate and movement tracking
                    </li>
                    <li>
                      <strong>Health Alerts:</strong> Send immediate notifications for concerning patterns
                    </li>
                    <li>
                      <strong>Trend Analysis:</strong> Generate comprehensive health reports and insights
                    </li>
                    <li>
                      <strong>Medical Integration:</strong> Share data with your healthcare providers (with consent)
                    </li>
                    <li>
                      <strong>Device Optimization:</strong> Improve monitoring accuracy and device performance
                    </li>
                  </ul>
                </div>
              </section>

              {/* HIPAA Compliance */}
              <section>
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  HIPAA Compliance & Medical Privacy
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-gray-700 mb-3">
                    <strong>EcoBump is fully HIPAA compliant</strong> and treats all health information as Protected Health Information (PHI):
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>All health data is encrypted using AES-256 encryption</li>
                    <li>Access is restricted to authorized medical and technical personnel only</li>
                    <li>We maintain detailed audit logs of all data access</li>
                    <li>Regular third-party security assessments ensure compliance</li>
                    <li>Data is stored in HIPAA-compliant cloud infrastructure</li>
                  </ul>
                </div>
              </section>

              {/* Data Protection Commitment */}
              <section>
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  Advanced Security Measures
                </h2>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-gray-700 mb-2">
                    We employ medical-grade security protocols to ensure:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>End-to-end encryption for all device-to-app communication</li>
                    <li>Biometric authentication options for app access</li>
                    <li>Automatic data backup with encrypted cloud storage</li>
                    <li>Real-time threat monitoring and intrusion detection</li>
                    <li>Compliance with FDA guidelines for medical devices</li>
                    <li>Regular penetration testing and security audits</li>
                  </ul>
                </div>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  Data Sharing & Healthcare Integration
                </h2>
                <p className="text-gray-600 mb-4">
                  Your health data is never sold or shared without your explicit consent. We may share data only in these circumstances:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><strong>With Your Doctor:</strong> Direct integration with your healthcare provider's systems (with your authorization)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><strong>Emergency Situations:</strong> Critical health alerts to emergency contacts you designate</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><strong>Research (Anonymous):</strong> De-identified data for medical research (opt-in only)</p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  Your Privacy Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  As an EcoBump user, you have comprehensive control over your health data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Data Access & Control</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>View all collected health data</li>
                      <li>Export your complete health records</li>
                      <li>Delete specific data points or all data</li>
                      <li>Control data sharing preferences</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Privacy Management</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Opt-out of analytics collection</li>
                      <li>Manage emergency contact permissions</li>
                      <li>Control healthcare provider access</li>
                      <li>Request complete account deletion</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Retention Policy */}
              <section>
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  Data Retention & Deletion
                </h2>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Health Data Retention:</strong>
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Active monitoring data: Retained for the duration of your pregnancy + 2 years</li>
                    <li>Historical records: Available for download anytime during active account</li>
                    <li>Account deletion: All data permanently deleted within 30 days of request</li>
                    <li>Legal compliance: Some data may be retained longer if required by law</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  Privacy Officer Contact
                </h2>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <p className="text-gray-700 mb-2">
                    For any privacy-related questions or requests:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> privacy@ecobump.com</p>
                    <p><strong>Phone:</strong> +1-800-ECOBUMP (Privacy Line)</p>
                    <p><strong>Mail:</strong> EcoBump Privacy Officer, [Your Address]</p>
                    <p><strong>Response Time:</strong> Within 48 hours for privacy requests</p>
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
                  Version 2.0 - Enhanced for maternal health monitoring
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                  <Link href="/terms" className="text-pink-600 hover:text-pink-700 transition-colors">
                    Terms of Service
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/contact" className="text-pink-600 hover:text-pink-700 transition-colors">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}