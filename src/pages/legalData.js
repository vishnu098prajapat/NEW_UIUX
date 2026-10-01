// NOTE: These are general-purpose templates written for a digital payments / retail
// banking-services platform. Replace [bracketed] items with your real company details
// and have them reviewed by a legal professional before going live.

export const COMPANY = {
  name: 'MoneyPay',
  legal: '[Your Legal Company Name]',
  email: 'support@moneypay.in',
  phone: '+91 00000 00000',
  address: '[Registered office address, City, State – PIN]',
  updated: '21 September 2026',
}

export const privacy = {
  path: '/privacy',
  short: 'Privacy Policy',
  title: 'Privacy Policy',
  eyebrow: 'Your data, handled with care',
  intro:
    'This Privacy Policy explains what information MoneyPay collects, why we collect it, how we use and protect it, and the choices you have. By using our website, app or services you agree to the practices described here.',
  sections: [
    { id: 'collect', title: 'Information we collect', body: [
      'We collect information you give us directly and information generated when you use our services.',
      { list: [
        'Identity and contact details — name, mobile number, email address, address and business details.',
        'KYC information — documents and identifiers required by law to verify retailers and partners.',
        'Transaction information — service used, amount, beneficiary details, status, date and time.',
        'Device and usage data — IP address, browser, device type, app version and pages visited.',
      ] },
    ] },
    { id: 'use', title: 'How we use your information', body: [
      'We use your information to provide and improve our services, and specifically to:',
      { list: [
        'Create and manage your account and wallet.',
        'Process transactions such as AEPS, money transfer, recharges, bill payments, Micro ATM and insurance requests.',
        'Verify identity, prevent fraud and comply with legal and regulatory requirements.',
        'Provide customer support and send service-related notifications.',
        'Understand how our platform is used so we can make it faster and easier.',
      ] },
    ] },
    { id: 'sharing', title: 'When we share information', body: [
      'We do not sell your personal information. We share it only where necessary:',
      { list: [
        'With banks, payment networks, biller operators and other partners needed to complete your transaction.',
        'With service providers who help us run the platform (hosting, SMS, verification, analytics) under confidentiality obligations.',
        'With regulators, law-enforcement or courts when required by applicable law.',
        'In connection with a merger, acquisition or restructuring, subject to this policy.',
      ] },
    ] },
    { id: 'security', title: 'How we protect your data', body: [
      'We use reasonable technical and organisational safeguards — such as encryption in transit, access controls and monitoring — to protect information against unauthorised access, loss or misuse. No system is completely secure, so please keep your login credentials, PIN and OTPs confidential and never share them.',
    ] },
    { id: 'retention', title: 'How long we keep it', body: [
      'We keep information for as long as your account is active and for the period required to meet legal, tax, audit and dispute-resolution obligations. After that we delete or anonymise it.',
    ] },
    { id: 'rights', title: 'Your choices and rights', body: [
      'Subject to applicable law, you may request access to, correction of, or deletion of your personal information, and you may withdraw consent for optional communications at any time. To make a request, write to us at the address below; we may need to verify your identity first. Some information must be retained where the law requires it.',
    ] },
    { id: 'cookies', title: 'Cookies and similar technologies', body: [
      'Our website may use cookies and local storage to keep you signed in, remember preferences and measure performance. You can control cookies through your browser settings, though some features may not work without them.',
    ] },
    { id: 'children', title: "Children's privacy", body: [
      'Our services are intended for adults. We do not knowingly collect personal information from anyone under 18.',
    ] },
    { id: 'changes', title: 'Changes to this policy', body: [
      'We may update this policy from time to time. The “Last updated” date at the top shows when it was last revised. Continued use of our services after changes means you accept the updated policy.',
    ] },
    { id: 'contact', title: 'Contact us', body: [
      'For any privacy question or request, contact our support team using the details on this page or on our Contact page.',
    ] },
  ],
}

export const refund = {
  path: '/refund',
  short: 'Refund Policy',
  title: 'Refund & Cancellation Policy',
  eyebrow: 'Clear, fair and quick',
  intro:
    'We want every transaction to go through smoothly. If something goes wrong, this policy explains when a transaction is reversed or refunded and how long it usually takes.',
  sections: [
    { id: 'overview', title: 'Overview', body: [
      'Because most of our services (recharges, bill payments, transfers and withdrawals) are processed instantly through banks, operators and payment networks, completed transactions generally cannot be cancelled. Refunds and reversals apply mainly to failed or incorrectly processed transactions.',
    ] },
    { id: 'failed', title: 'Failed transactions', body: [
      'If money is debited from your wallet or account but the service is not delivered, the amount is automatically reversed to your MoneyPay wallet or original payment source.',
      { list: [
        'Wallet debits for failed transactions are usually reversed instantly or within 24 hours.',
        'Where the bank or network is involved, reversal may take up to 7 working days.',
        'You will see the status update in your transaction history.',
      ] },
    ] },
    { id: 'pending', title: 'Pending transactions', body: [
      'Sometimes a transaction stays “pending” while the bank or operator confirms the final status. Please wait for the status to update before retrying, to avoid duplicate payments. If it fails, the amount will be reversed as described above.',
    ] },
    { id: 'services', title: 'Service-specific notes', body: [
      { list: [
        'Mobile & DTH recharge — once successfully credited by the operator, the recharge cannot be reversed. Wrong-number recharges are not refundable.',
        'Bill payments (BBPS) — successful payments are settled with the biller. Disputes about the bill amount must be raised with the biller; we will help track the payment.',
        'Money transfer (DMT) — a transfer that reaches the beneficiary account cannot be cancelled. If credited to a wrong account because of incorrect details entered by the user, recovery depends on the receiving bank.',
        'AEPS & Micro ATM — if cash is not dispensed but the account is debited, the bank reverses the amount as per its timelines.',
        'Insurance — cancellations and refunds follow the insurer’s policy terms and free-look period.',
      ] },
    ] },
    { id: 'eligibility', title: 'When a refund is not possible', body: [
      { list: [
        'Transactions completed successfully as per the details entered by the user.',
        'Losses caused by sharing PIN, OTP or credentials with others.',
        'Transactions found to be fraudulent, abusive or in violation of our Terms.',
      ] },
    ] },
    { id: 'process', title: 'How to raise a request', body: [
      'If a refund has not reached you within the timelines above, contact our support team with the transaction ID, date, amount and a short description. We will investigate with the concerned bank or partner and update you.',
    ] },
    { id: 'wallet', title: 'Wallet balance refunds', body: [
      'Unused wallet balance can be requested back to your verified bank account, subject to KYC checks and any pending disputes. Fees already charged for completed services are non-refundable.',
    ] },
    { id: 'contact', title: 'Need help?', body: [
      'Reach us any time through the Contact page — we usually respond within one working day.',
    ] },
  ],
}

export const terms = {
  path: '/terms',
  short: 'Terms & Conditions',
  title: 'Terms & Conditions',
  eyebrow: 'The rules of using MoneyPay',
  intro:
    'These Terms & Conditions govern your access to and use of the MoneyPay website, app and services. Please read them carefully. By registering or using our services, you agree to be bound by them.',
  sections: [
    { id: 'about', title: 'About MoneyPay', body: [
      'MoneyPay provides a digital platform that lets registered retailers and partners offer services such as AEPS, domestic money transfer (DMT), mobile and DTH recharge, bill payments (BBPS), Micro ATM and insurance to their customers. Some services are delivered through banks and other authorised partners, and are subject to their rules as well.',
    ] },
    { id: 'eligibility', title: 'Eligibility and registration', body: [
      { list: [
        'You must be at least 18 years old and legally able to enter into a contract.',
        'You must complete KYC and provide accurate, current and complete information.',
        'You are responsible for all activity under your account and for keeping your credentials confidential.',
        'We may approve, suspend or reject any registration at our discretion, in line with the law.',
      ] },
    ] },
    { id: 'services', title: 'Using our services', body: [
      'You agree to use our services only for lawful purposes and in accordance with these Terms, applicable laws and the rules of banks, networks and billers. Service availability, limits and features may change and may vary by region, bank or operator.',
    ] },
    { id: 'wallet', title: 'Wallet, fees and commissions', body: [
      { list: [
        'You must load your wallet before offering services that draw on wallet balance.',
        'Applicable charges, service fees and commissions are shown on the platform or communicated to you, and may be revised with notice.',
        'You are responsible for the accuracy of amounts, account numbers and other details you enter.',
        'Taxes, where applicable, are charged as per law.',
      ] },
    ] },
    { id: 'prohibited', title: 'Prohibited activities', body: [
      'You must not:',
      { list: [
        'Use the platform for money laundering, fraud, terrorism financing or any illegal activity.',
        'Process transactions without the customer’s knowledge or consent.',
        'Misuse biometric, card or personal information of customers.',
        'Attempt to hack, disrupt, reverse-engineer or overload the platform.',
        'Share your account or allow others to operate under your credentials.',
      ] },
    ] },
    { id: 'transactions', title: 'Transactions, failures and disputes', body: [
      'Transactions are processed through third parties and we cannot guarantee that every attempt will succeed. Failed transactions are handled as described in our Refund Policy. Please report disputes promptly with full transaction details.',
    ] },
    { id: 'liability', title: 'Limitation of liability', body: [
      'To the maximum extent permitted by law, MoneyPay is not liable for indirect or consequential losses, or for delays or failures caused by banks, networks, billers, telecom operators, internet outages or events beyond our reasonable control. Nothing in these Terms limits liability that cannot be excluded by law.',
    ] },
    { id: 'ip', title: 'Intellectual property', body: [
      'The MoneyPay name, logo, design and platform content are owned by us or our licensors. You may not copy, modify or use them without written permission.',
    ] },
    { id: 'suspension', title: 'Suspension and termination', body: [
      'We may suspend or terminate your access if you breach these Terms, if we suspect fraud or misuse, or if required by law or a regulator. You may stop using the services at any time, after settling any outstanding dues.',
    ] },
    { id: 'law', title: 'Governing law', body: [
      'These Terms are governed by the laws of India. Courts at [Your City, State] shall have exclusive jurisdiction, subject to any mandatory legal provisions.',
    ] },
    { id: 'changes', title: 'Changes to these Terms', body: [
      'We may revise these Terms from time to time. The updated version will be posted here with a new “Last updated” date. Continuing to use our services means you accept the changes.',
    ] },
    { id: 'contact', title: 'Contact', body: [
      'Questions about these Terms? Get in touch through the Contact page or the details below.',
    ] },
  ],
}

export const legalDocs = { privacy, refund, terms }
