import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const nav = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-6 text-secondary">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Effective Date: 15 July 2024</strong>
      </p>
      <p className="mb-4">
        Al Zakati (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
        dedicated to safeguarding your privacy. This Privacy Policy elucidates
        how we gather, utilize, disclose, and protect your information when you
        access our website alzakati.com, as well as any other media form, media
        channel, mobile website, or mobile application related to it
        (collectively, the &quot;Site&quot;). Please read this privacy policy
        attentively. If you do not concur with the terms of this privacy policy,
        please refrain from accessing the site.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <ul className="list-disc ml-8 mb-4">
        <li>
          <strong>Personal Data:</strong> Personally identifiable information,
          such as your name, email address, phone number, and any other
          information you willingly provide to us when you register on the Site,
          subscribe to a newsletter, or fill out a form.
        </li>
        <li>
          <strong>Non-Personal Data:</strong> Information that does not directly
          identify you, such as anonymous usage data, referring/exit pages and
          URLs, platform types, preferences you submit, and preferences that are
          generated based on the data you submit and number of clicks.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        2. Use of Your Information
      </h2>
      <ul className="list-disc ml-8 mb-4">
        <li>Establish and manage your account.</li>
        <li>
          Process your transactions and send you related information, including
          purchase confirmations and invoices.
        </li>
        <li>
          Handle your inquiries and send you administrative communications.
        </li>
        <li>Enhance the functionality and user experience of our Site.</li>
        <li>Respond to product and customer service requests.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        3. Disclosure of Your Information
      </h2>
      <ul className="list-disc ml-8 mb-4">
        <li>
          <strong>By Law or to Protect Rights:</strong> If we believe the
          release of information about you is necessary to respond to legal
          process, to investigate or resolve potential violations of our
          policies, or to safeguard the rights, property, and safety of others,
          we may share your information as permitted or required by any
          applicable law, rule, or regulation.
        </li>
        <li>
          <strong>Business Transfers:</strong> We may share or transfer your
          information in connection with, or during negotiations of, any merger,
          sale of company assets, financing, or acquisition of all or a portion
          of our business to another company.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        4. Security of Your Information
      </h2>
      <p className="mb-4">
        We employ administrative, technical, and physical security measures to
        help safeguard your personal information. Although we have taken
        reasonable steps to secure the personal information you provide to us,
        please be aware that no security measures are perfect or impenetrable,
        and no method of data transmission can be guaranteed against any
        interception or other type of misuse.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        5. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may revise this Privacy Policy from time to time to reflect changes
        to our practices or for other operational, legal, or regulatory reasons.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
      <p className="mb-4">
        If you have questions or comments about this Privacy Policy, please
        reach out to us using the following contact information:
      </p>
      <p
        className="mb-4 text-accentRed cursor-pointer font-bold"
        onClick={() => nav("/contact")}
      >
        Send us mail
      </p>

      <p className="mb-4">
        This Privacy Policy details how our website collects, uses, and protects
        user information, ensuring transparency and compliance with privacy
        laws. Customize the details based on your specific practices and legal
        requirements.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
