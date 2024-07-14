const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-secondary">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms and Conditions for Al Zakati
      </h1>

      <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
      <p className="mb-4">
        Welcome to Al Zakati. These terms and conditions outline the rules and
        regulations for the use of our website, located at{" "}
        <span
          onClick={() => window.open(`https://alzakati.com`, "_blank")}
          className="text-accentPurple cursor-pointer font-smeibold"
        >
          https://alzakati.com
        </span>{" "}
        . By accessing this website, we assume you fully accept these terms and
        conditions. Do not continue to use Al Zakati&apos;s website if you do
        not accept all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Use of the Website</h2>
      <p className="mb-4">
        <strong>Eligibility:</strong> By using this website, you represent and
        warrant that you are at least 18 years old or are accessing the site
        under the supervision of a parent or guardian.
      </p>
      <p className="mb-4">
        <strong>License:</strong> Unless otherwise stated, Al Zakati and/or its
        licensors own the intellectual property rights for all material on Al
        Zakati. All intellectual property rights are reserved. You may view
        and/or print pages from{" "}
        <span
          onClick={() => window.open(`https://alzakati.com`, "_blank")}
          className="text-accentPurple cursor-pointer font-smeibold"
        >
          https://alzakati.com
        </span>{" "}
        for your personal use, subject to restrictions set in these terms and
        conditions.
      </p>
      <p className="mb-4">
        <strong>Prohibited Activities:</strong>
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>You must not republish material from our website.</li>
        <li>
          You must not sell, rent, or sub-license material from our website.
        </li>
        <li>
          You must not reproduce, duplicate, or copy material from our website.
        </li>
        <li>
          You must not redistribute content from our website unless content is
          specifically made for redistribution.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Zakat Calculator and Donation
      </h2>
      <p className="mb-4">
        <strong>Zakat Calculator:</strong> Our website offers a zakat calculator
        to help users determine their zakat obligations. The results provided by
        the calculator are for informational purposes only and do not constitute
        financial advice. Users should consult with a qualified advisor for
        personalized advice.
      </p>
      <p className="mb-4">
        <strong>Donations:</strong> Donations made through our website are
        processed through third-party payment processors. By making a donation,
        you agree to comply with the terms and conditions of these third-party
        processors. Al Zakati is not responsible for any issues arising from the
        use of these third-party services.
      </p>
      <p className="mb-4">
        <strong>Refunds:</strong> Donations made through the website are
        generally non-refundable. However, if you believe there has been an
        error in your donation, please contact us immediately, and we will
        address your concerns on a case-by-case basis.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Applying for Zakat</h2>
      <p className="mb-4">
        <strong>Application:</strong> Individuals in need can apply for zakat
        through our website. All information provided in the application must be
        accurate and truthful. Any false or misleading information may result in
        the rejection of the application.
      </p>
      <p className="mb-4">
        <strong>Approval:</strong> The approval of zakat applications is at the
        sole discretion of Al Zakati. We reserve the right to request additional
        information or documentation to verify the applicant&apos;s need.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">User Accounts</h2>
      <p className="mb-4">
        <strong>Account Responsibility:</strong> Users may create an account on
        our website to access certain features. You are responsible for
        maintaining the confidentiality of your account information and for all
        activities that occur under your account.
      </p>
      <p className="mb-4">
        <strong>Termination:</strong> We reserve the right to terminate your
        account and access to the website at our discretion, without notice, for
        conduct that we believe violates these terms or is harmful to other
        users of the website, us, or third parties, or for any other reason.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
      <p className="mb-4">
        <strong>Disclaimer:</strong> The website and its content are provided on
        an &apos;as is&apos; basis without any warranties of any kind. Al Zakati
        does not guarantee the accuracy, completeness, or usefulness of any
        content on the site.
      </p>
      <p className="mb-4">
        <strong>Limitation of Liability:</strong> In no event shall Al Zakati,
        its directors, employees, or agents be liable for any direct, indirect,
        incidental, special, or consequential damages arising out of or in
        connection with your use of the website.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
      <p className="mb-4">
        <strong>Jurisdiction:</strong> These terms and conditions are governed
        by and construed in accordance with the laws of the country in which Al
        Zakati is based, and you irrevocably submit to the exclusive
        jurisdiction of the courts in that location.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Changes to Terms and Conditions
      </h2>
      <p className="mb-4">
        <strong>Amendments:</strong> Al Zakati reserves the right to revise
        these terms and conditions at any time. By using this website, you are
        expected to review these terms on a regular basis to ensure you
        understand all terms and conditions governing the use of this website.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
      <p className="mb-4">
        <strong>Contact Us:</strong> If you have any questions about these terms
        and conditions, please contact us via the contact information provided
        on our website.
      </p>

      <p className="mb-4">
        By using our website, you hereby consent to our terms and conditions and
        agree to its terms.
      </p>
    </div>
  );
};

export default TermsAndConditions;
