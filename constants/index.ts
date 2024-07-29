export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/dashboard",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  Shopping: {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transport: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Food & Drink": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Income: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Utilities: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  shoppings: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },

  StayCation: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

export const transactions: Transaction[] = [
  {
    id: "1",
    $id: "1",
    name: "Purchase at Nakumatt",
    paymentChannel: "Online",
    type: "debit",
    accountId: "acc1",
    amount: 5000,
    pending: false,
    category: "Shopping",
    date: "2024-07-24T14:48:00.000Z",
    image: "image_url",
    $createdAt: "2024-07-24T14:48:00.000Z",
    channel: "Online",
    senderBankId: "KCB001",
    receiverBankId: "KCB002",
    curency: "KES",
  },
  {
    id: "2",
    $id: "2",
    name: "Fuel at Total",
    paymentChannel: "POS",
    type: "debit",
    accountId: "acc2",
    amount: 3000,
    pending: false,
    category: "Transport",
    date: "2024-07-23T10:15:00.000Z",
    image: "image_url",
    $createdAt: "2024-07-23T10:15:00.000Z",
    channel: "POS",
    senderBankId: "Equity001",
    receiverBankId: "Equity002",
    curency: "KES",
  },
  {
    id: "3",
    $id: "3",
    name: "Lunch at Java House",
    paymentChannel: "POS",
    type: "debit",
    accountId: "acc3",
    amount: 1500,
    pending: true,
    category: "Food & Drink",
    date: "2024-07-22T13:30:00.000Z",
    image: "image_url",
    $createdAt: "2024-07-22T13:30:00.000Z",
    channel: "POS",
    senderBankId: "Coop001",
    receiverBankId: "Coop002",
    curency: "KES",
  },
  {
    id: "4",
    $id: "4",
    name: "Payment from Safaricom",
    paymentChannel: "M-PESA",
    type: "credit",
    accountId: "acc4",
    amount: 10000,
    pending: false,
    category: "Income",
    date: "2024-07-21T09:00:00.000Z",
    image: "image_url",
    $createdAt: "2024-07-21T09:00:00.000Z",
    channel: "M-PESA",
    senderBankId: "M-PESA001",
    receiverBankId: "KCB003",
    curency: "KES",
  },
  {
    id: "5",
    $id: "5",
    name: "Payment to KPLC",
    paymentChannel: "Online",
    type: "debit",
    accountId: "acc5",
    amount: 2500,
    pending: true,
    category: "Bills & Utilities",
    date: "2024-07-20T14:00:00.000Z",
    image: "image_url",
    $createdAt: "2024-07-20T14:00:00.000Z",
    channel: "Online",
    senderBankId: "KCB004",
    receiverBankId: "KCB005",
    curency: "KES",
  },
  {
    id: "6",
    $id: "6",
    name: "Payment to Naivas",
    paymentChannel: "Online",
    type: "debit",
    accountId: "acc5",
    amount: 25000,
    pending: true,
    category: "shoppings",
    date: "2024-07-20T14:00:00.000Z",
    image: "image_url",
    $createdAt: "2024-07-20T14:00:00.000Z",
    channel: "Online",
    senderBankId: "KCB004",
    receiverBankId: "KCB005",
    curency: "KES",
  },
  {
    id: "7",
    $id: "7",
    name: "Payment to Villa Rosa Kempisnski",
    paymentChannel: "Online",
    type: "debit",
    accountId: "acc5",
    amount: 33000,
    pending: true,
    category: "StayCation",
    date: "2024-07-20T14:00:00.000Z",
    image: "image_url",
    $createdAt: "2024-07-20T14:00:00.000Z",
    channel: "Online",
    senderBankId: "KCB004",
    receiverBankId: "KCB005",
    curency: "KES",
  },
  {
    id: "8",
    $id: "8",
    name: "Payment to Raddison Blue",
    paymentChannel: "Online",
    type: "debit",
    accountId: "acc5",
    amount: 15000,
    pending: true,
    category: "StayCation",
    date: "2024-07-20T14:00:00.000Z",
    image: "image_url",
    $createdAt: "2024-07-20T14:00:00.000Z",
    channel: "Online",
    senderBankId: "KCB004",
    receiverBankId: "KCB005",
    curency: "KES",
  },
];

export const featuresData = [
  {
    title: "Easy to use",
    description: "Our user-friendly interface is designed with you in mind.",
  },
  {
    title: "Reliable",
    description:
      "With PayTeller, you can count on uninterrupted access to your accounts and transactions .",
  },
  {
    title: "Secure",
    description:
      "Reliability is at the heart of everything we do. With PayTeller, you can count on uninterrupted access to your accounts and transactions",
  },
  {
    title: "Fast",
    description:
      " PayTeller offers quick and seamless transactions, ensuring that your financial operations are completed swiftly.",
  },
  {
    title: "Affordable",
    description:
      "PayTeller offers competitive pricing structures that cater to a wide range of needs and budgets. ",
  },
  {
    title: "Scalable",
    description:
      "PayTeller evolves with you. Our scalable solutions are designed to grow alongside you, whether you’re a small business or a large enterprise.",
  },
];
export const Plans = [
  {
    title: "Basic",
    price: "$9.99",
    features: [
      "1 GB Storage",
      "1 Email Account",
      "1 Domain",
      "1 Website",
      "1 Database",
      "1 SSL Certificate",
      "1 Support Ticket",
    ],
  },
  {
    title: "Standard",
    price: "$19.99",
    features: [
      "10 GB Storage",
      "10 Email Accounts",
      "10 Domains",
      "10 Websites",
      "10 Databases",
      "10 SSL Certificates",
      "10 Support Tickets",
    ],
  },
  {
    title: "Premium",
    price: "$29.99",
    features: [
      "100 GB Storage",
      "100 Email Accounts",
      "100 Domains",
      "100 Websites",
      "100 Databases",
      "100 SSL Certificates",
      "100 Support Tickets",
    ],
  },
];

export const Testimonials = [
  {
    name: "Rose Roberson",
    feedback:
      "Proident sunt exercitation minim laborum enim laboris labore esse. Nostrud tempor sunt fugiat.",
    title: "CEO at Company",
  },
  {
    name: "Chace Rodgers",
    feedback:
      "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    title: "CEO at Company",
  },
  {
    name: "Cornelius Sheppard",
    feedback:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    title: "CEO at Company",
  },
  {
    name: "Destinee Woods",
    feedback:
      "Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore.",
    title: "CEO at Company",
  },
  {
    name: "Kaleb Mccormick",
    feedback:
      "Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.",
    title: "CEO at Company",
  },
  {
    name: "Jazmin Mccall",
    feedback:
      "Magna officia quis ea ea in officia non voluptate ipsum culpa do labore sunt.",
    title: "CEO at Company",
  },
];

export const Faqs = [
  {
    question: "Is this a secure service?",
    answer:
      "Yes, PayTeller is a highly secure online banking system. The platform utilizes advanced encryption protocols and multi-factor authentication to protect your financial information.",
  },
  {
    question: "How can I cancel my payments?",
    answer:
      "Cancelling your PayTeller subscription is straightforward. You can do this by logging into your account and navigating to the payments management section. There, you'll find an option to cancel your payments",
  },
  {
    question: "How does the free trial work?",
    answer:
      "PayTeller offers a free to all, to allow you to explore the features of the platform before committing to a transaction. ",
  },

  {
    question: "Do you offer refunds?",
    answer:
      "PayTeller has a refund policy that typically applies under specific circumstances. If you are not satisfied with the service or encounter issues, you can request a refund according to their policy.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, PayTeller offers comprehensive customer support. The support team is available to assist with any questions or issues you may encounter.",
  },
];
