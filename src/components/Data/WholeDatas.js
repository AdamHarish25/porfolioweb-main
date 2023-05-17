import IDFlag from '../../images/CountryFlags/1x1/id.svg';
import USFlag from '../../images/CountryFlags/1x1/us.svg';
import { FaDesktop, FaLaptopCode, FaPencilRuler, FaServer } from 'react-icons/fa'
import peopleExited from '../../images/3PExcited.jpg';
import keenWorker from "../../images/keenWorker.jpg";


const DataStorageEN = {
  AboutData: {
    title1: "About me",
    subtitle: (
      <>
        Hello! I'm <strong>Adam Harits Abdurrahman</strong>, I'm still a student
        to a vocational highschool and I experienced a lot including learning
        about website making from scratch with unique programming languages, And
        this is what I can do :
      </>
    ),

    myfrontWebSkills: [
      {
        skill: "Html",
      },
      {
        skill: "Css",
      },
      {
        skill: "Javascript",
      },
      {
        skill: "Tailwind",
      },
      {
        skill: "React JS",
      },
    ],

    mybackWebSkills: [
      {
        skill: "Mysql",
      },
      {
        skill: "MongoDB",
      },
      {
        skill: "NodeJS",
      },
    ],

    title2: (
      <>
        My expertise and skills <br />
        in progressbar
      </>
    ),

    mySkillsBar: [
      {
        title: "Typing / Writing",
        value: "80%",
        valueBar: "w-[80%]",
      },
      {
        title: "Html",
        value: "67%",
        valueBar: "w-[67%]",
      },
      {
        title: "Javascript & React Js",
        value: "80%",
        valueBar: "w-[80%]",
      },
      {
        title: "TailwindCss & Css",
        value: "75%",
        valueBar: "w-[75%]",
      },
      {
        title: "My Sql & MongoDb",
        value: "65%",
        valueBar: "w-[65%]",
      },
      {
        title: "NodeJS",
        value: "66%",
        valueBar: "w-[66%]",
      },
    ],
  },

  ContactData: {
    title: "Get in touch",
    form1: "Your name",
    form2: "Object's name",
    form3: "Your message",
    form4: "Your email",
    button: "Submit",
    title2: "Example",
    content1: "From",
    content2: "To",
    content3: `Messages: "Hi Bro, how do You feel? Feel any better now?"`,
    content4: "Note: Your email is required for replying",
    addition1: "OR",
    addition2: "Consultation for free",
  },

  FooterData: {
    title1: "Resources",
    title2: "Social Media",
  },

  BenefitsData: [
    {
      title: "85% Client's expetation fulfilled",
      img: peopleExited,
      titlePos: "order-2",
      imgPos: "order-1",
      subtitle:
        "By meticulously understanding their unique requirements and leveraging the right expertise, we have delivered results that meet 85% of average client expectations.",
      buttonLink: "",
      buttonTitle: "",
    },
    {
      title: "Enterprising Web Developers",
      img: keenWorker,
      titlePos: "order-1",
      imgPos: "order-2",
      subtitle:
        "With our active developers, our passion for crafting exceptional online experiences sets us apart. We understand that a website is more than just a digital presence; it is a powerful tool that reflects a brand's identity and communicates its message effectively.",
      buttonLink: "ContactSect",
      buttonTitle: "Consultation for free",
    },
  ],

  HomeData: {
    title:
      "Wanna have a good looking website but don't want to be complicated?",
    subtitle: "With professional & kind developers, leave it to us! Let us do the work and you just sit back and wait.",
  },

  ServicesData: {
    title: "Available Services",

    services: [
      {
        title: "Graphic Design",
        icon: <FaPencilRuler />,
      },
      {
        title: "Web Design",
        icon: <FaDesktop />,
      },
      {
        title: "Web Developer",
        icon: <FaLaptopCode />,
      },
      {
        title: "Server-side Developer",
        icon: <FaServer />,
      },
    ],
  },

  WorksData: {
    title: "My Works",
    subtitle: "Websites UI-side & Server-side",
  },

  SidebarData: {
    menus: [
      {
        title: "Home",
        link: "",
      },

      {
        title: "My Works",
        link: "#WorksSect",
      },

      {
        title: "Pricing Lists",
        link: "#PricingSect",
      },

      {
        title: "About",
        link: "#AboutSect",
      },

      {
        title: "Contact me",
        link: "#ContactSect",
      },
    ],

    buttonTitle1: "Menu",

    buttonTitle2: "Close",
  },

  DropdownData: [
    {
      label: "EN",
      value: "1",
      flag: USFlag,
    },
    {
      label: "ID",
      value: "2",
      flag: IDFlag,
    },
  ],

  PricingData: {
    title: "Pricing",
    cards: [
      {
        price: "Rp.1.000.000",
        crossedOutPrice: "Rp.1.700.000",
        title: "Beginner",
        benefits: [
          {
            title: "Website is done within a month",
            class: "",
          },
          {
            title: "Revision only 3x",
            class: "",
          },
          {
            title: "Non-server(Only UI/UX)",
            class: "",
          },
          {
            title: "3-4 Website pages",
            class: "",
          },
        ],
        note: "",
      },
      {
        price: "*Rp.1.500.000",
        crossedOutPrice: "Rp.2.200.000",
        title: "Experienced",
        benefits: [
          {
            title: "Website is done within *2 weeks",
            class: "",
          },
          {
            title: "Revision 7x",
            class: "",
          },
          {
            title: "Non-server(Only UI/UX)",
            class: "",
          },
          {
            title: "Communication Priority",
            class: "",
          },
          {
            title: "7-9 Website pages",
            class: "",
          },
        ],
        note: "*Price and duration may increase as more requests are made",
      },
      {
        price: "*Rp.2.000.000",
        crossedOutPrice: "Rp.2.800.000",
        title: "Advanced",
        benefits: [
          {
            title: "Website is done within *3 month",
            class: "",
          },
          {
            title: "Revision 14x",
            class: "",
          },
          {
            title: "Server-side included",
            class: "",
          },
          {
            title: "Communication Priority",
            class: "",
          },
          {
            title: "15-19 Website pages",
            class: "",
          },
        ],
        note: "*Price and duration may increase as more requests are made",
      },
    ],
    note: "*Promo is only valid for a certain time",
    button: "Consultation for free!",
  },
};

const DataStorageID = {
  AboutData: {
    title1: "Tentang saya",
    subtitle: (
      <>
        Hai perkenalkan nama saya <strong>Adam Harits Abdurrahman</strong> Saya
        masih seorang siswa di Sekolah Menengah Kejuruan(SMK) dan saya sudah
        mengalami banyak hal termasuk mempelajari cara membuat website dari awal
        menggunakan berbagai macam bahasa pemrograman yang unik, dan ini yang
        bisa saya lakukan :
      </>
    ),

    myfrontWebSkills: [
      {
        skill: "Html",
      },
      {
        skill: "Css",
      },
      {
        skill: "Javascript",
      },
      {
        skill: "Tailwind",
      },
      {
        skill: "React JS",
      },
    ],

    mybackWebSkills: [
      {
        skill: "Mysql",
      },
      {
        skill: "MongoDB",
      },
      {
        skill: "NodeJS",
      },
    ],

    title2: (
      <>
        Keahlian dan keterampilan saya <br />
        di bilah kemajuan
      </>
    ),

    mySkillsBar: [
      {
        title: "Mengetik / Menulis",
        value: "80%",
        valueBar: "w-[80%]",
      },
      {
        title: "Html",
        value: "67%",
        valueBar: "w-[67%]",
      },
      {
        title: "Javascript & React Js",
        value: "80%",
        valueBar: "w-[80%]",
      },
      {
        title: "TailwindCss & Css",
        value: "75%",
        valueBar: "w-[75%]",
      },
      {
        title: "My Sql & MongoDb",
        value: "65%",
        valueBar: "w-[65%]",
      },
      {
        title: "NodeJS",
        value: "66%",
        valueBar: "w-[66%]",
      },
    ],
  },

  ContactData: {
    title: "Hubungi Kami",
    form1: "Nama Anda",
    form2: "Nama objek",
    form3: "Pesan anda",
    form4: "Email anda",
    button: "Kirim",
    title2: "Contoh",
    content1: "Dari",
    content2: "Untuk",
    content3: `Pesan: "Hai Bro, bagaimana kabarmu? sudah merasa baik sekarang?"`,
    content4: "Catatan: Email Anda dibutuhkan untuk membalas",
    addition1: "Atau",
    addition2: "Hubungi saya di Whatsapp",
  },

  FooterData: {
    title1: "Sumber Asal",
    title2: "Social Media",
  },

  BenefitsData: [
    {
      title: "85% Ekspetasi dari klien kami terpenuhi",
      img: peopleExited,
      titlePos: "order-2",
      imgPos: "order-1",
      subtitle:
        "Dengan memahami persyaratan unik mereka secara cermat dan memanfaatkan keahlian dengan tepat, kami telah memberikan hasil yang memenuhi 85% dari rata-rata ekspetasi klien.",
      buttonLink: "",
      buttonTitle: "",
    },
    {
      title: "Developer Web Giat",
      img: keenWorker,
      titlePos: "order-1",
      imgPos: "order-2",
      subtitle:
        "Dengan adanya developer kami yang giat, semangat Kami untuk membuat pengalaman online yang luar biasa membuat kami berbeda. Kami memahami bahwa situs web lebih dari sekadar kehadiran digital; itu adalah alat yang ampuh yang mencerminkan identitas merek dan mengkomunikasikan pesannya secara efektif.",
      buttonLink: "ContactSect",
      buttonTitle: "Konsultasi Gratis",
    },
  ],

  HomeData: {
    title: "Mau website yang bagus tapi gak mau repot?",
    subtitle: "Dengan developer profesional & baik hati, serahkan pada kami! Biarkan kami yang mengerjakan dan anda tinggal duduk manis menunggu.",
  },

  ServicesData: {
    title: "Layanan yang tersedia",

    services: [
      {
        title: "Desain Grafis",
        icon: <FaPencilRuler />,
      },
      {
        title: "Desain Web/Template",
        icon: <FaDesktop />,
      },
      {
        title: "Mengembangkan Website (UI/UX-side)",
        icon: <FaLaptopCode />,
      },
      {
        title: "Mengembangkan Website (Server-side)",
        icon: <FaServer />,
      },
    ],
  },

  WorksData: {
    title: "Kerjaan saya",
    subtitle: "Website sisi UI/UX & sisi Server",
  },

  SidebarData: {
    menus: [
      {
        title: "Beranda",
        link: "",
      },

      {
        title: "Hasil Pekerjaan",
        link: "#WorksSect",
      },

      {
        title: "List Harga",
        link: "#PricingSect",
      },

      {
        title: "Tentang",
        link: "#AboutSect",
      },

      {
        title: "Hubungi Kami",
        link: "#ContactSect",
      },
    ],

    buttonTitle1: "Menu",

    buttonTitle2: "Tutup",
  },

  DropdownData: [
    {
      label: "ID",
      value: "1",
      flag: IDFlag,
    },
    {
      label: "EN",
      value: "2",
      flag: USFlag,
    },
  ],

  PricingData: {
    title: "Harga",
    cards: [
      {
        price: "Rp.1.000.000",
        crossedOutPrice: "Rp.1.700.000",
        title: "Beginner",
        benefits: [
          {
            title: "Website jadi dalam 1 bulan",
            class: "",
          },
          {
            title: "Revisi hanya 3x",
            class: "",
          },
          {
            title: "Non-server(hanya UI/UX saja)",
            class: "",
          },
          {
            title: "3-4 Halaman website",
            class: "",
          },
        ],
        note: "",
      },
      {
        price: "*Rp.1.500.000",
        crossedOutPrice: "Rp.2.200.000",
        title: "Experienced",
        benefits: [
          {
            title: "Website jadi dalam *2 minggu",
            class: "",
          },
          {
            title: "Revisi 7x",
            class: "",
          },
          {
            title: "Non-server(hanya UI/UX saja)",
            class: "",
          },
          {
            title: "Prioritas Komunikasi",
            class: "",
          },
          {
            title: "7-9 Halaman website",
            class: "",
          },
        ],
        note: "*Harga dan durasi dapat naik seiring banyaknya permintaan yang diajukan",
      },
      {
        price: "*Rp.2.000.000",
        crossedOutPrice: "Rp.2.800.000",
        title: "Advanced",
        benefits: [
          {
            title: "Website jadi dalam *3 bulan",
            class: "",
          },
          {
            title: "Revisi 14x",
            class: "",
          },
          {
            title: "Termasuk Server",
            class: "",
          },
          {
            title: "Prioritas Komunikasi",
            class: "",
          },
          {
            title: "15-19 Halaman website",
            class: "",
          },
        ],
        note: "*Harga dan durasi dapat naik seiring banyaknya permintaan yang diajukan",
      },
    ],
    note: "*Promo hanya berlaku dalam waktu tertentu",
    button: "Konsultasi Gratis",
  },
};


export { DataStorageEN, DataStorageID };