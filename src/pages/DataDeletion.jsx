import SEO from '../components/SEO';
export default function DataDeletion() {
  return (
    <>
      
      <SEO title="Data Deletion Instructions | ScaleBy" description="Instructions for requesting data deletion from ScaleBy." keywords="data deletion, GDPR right to be forgotten" />
      <section className="bg-emerald-50 text-slate-800 py-16 lg:py-20 relative overflow-hidden border-b border-emerald-100">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">Data Deletion Instructions</h1>
          <p className="mt-4 text-emerald-600 text-sm font-semibold tracking-wide uppercase">Last updated: 11 May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-sm leading-relaxed">
            <p>
              ScaleBy Automation LLP, operating under the brand name ScaleBy, respects your right to request deletion of your personal data.
              If you have used Facebook Login, Instagram Login, Facebook Page connection, Instagram account connection, Messenger integration, WhatsApp Business integration, or any other Meta-related integration through ScaleBy, you may request deletion of your data by following the instructions below.
            </p>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. How to Request Deletion</h2>
              <p className="mb-3">
                1. Send an email to <strong>support@scaleby.in</strong> with the subject line: &quot;User Data Deletion Request&quot;.
              </p>
              <p className="mb-3">2. In your email, please include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your full name</li>
                <li>Your registered email address or mobile number used with ScaleBy</li>
                <li>Your business name, if applicable</li>
                <li>The Facebook, Instagram, or Meta account/page connected with ScaleBy, if applicable</li>
                <li>A short request saying: &quot;Please delete my data associated with ScaleBy.&quot;</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Processing Your Request</h2>
              <p>
                3. After receiving your request, ScaleBy will verify your identity and process the deletion request in accordance with applicable laws and platform requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. What Data Will Be Deleted</h2>
              <p className="mb-3">4. Data that may be deleted includes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Account profile information</li>
                <li>Meta/Facebook/Instagram login information</li>
                <li>Connected Facebook Page or Instagram Business account details</li>
                <li>Access tokens and integration credentials</li>
                <li>Conversation/contact data stored in ScaleBy, where legally and technically possible</li>
                <li>Automation, inbox, and CRM data linked to your account, subject to applicable retention requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Retention and Exceptions</h2>
              <p className="mb-3">
                5. Some data may be retained if required for legal, tax, fraud prevention, security, dispute resolution, or compliance purposes.
              </p>
              <p>6. Once your request is processed, we will send you a confirmation by email.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Removing Access via Facebook</h2>
              <p>
                You may also remove ScaleBy’s access from your Facebook account by going to:
                <strong> Facebook Settings &gt; Apps and Websites / Business Integrations &gt; ScaleBy &gt; Remove.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact Information</h2>
              <p className="mb-3">For any questions, contact:</p>
              <p className="mb-1 font-semibold text-slate-900">ScaleBy Automation LLP</p>
              <p className="mb-1">Email: support@scaleby.in</p>
              <p>Website: <a href="https://scaleby.in" className="text-emerald-600 hover:text-emerald-700 font-medium">https://scaleby.in</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
