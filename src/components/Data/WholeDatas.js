import IDFlag from '../../images/CountryFlags/1x1/id.svg';
import USFlag from '../../images/CountryFlags/1x1/us.svg';
import { FaDesktop, FaLaptopCode, FaPencilRuler, FaServer } from 'react-icons/fa'

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
    form1: "Subject's name",
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
    addition2: "Contact me on Whatsapp",
  },

  FooterData: {
    title1: "Resources",
    title2: "Follow Me",
  },

  HomeData: {
    title: "Hi I'm Adam, I design & build Websites.",
    scrollButton: "Scroll down to see what I do",
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
        title: "About",
        link: "#AboutSect",
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
    button: "Contact Now!",
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
    form1: "Nama subjek",
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
    title2: "Ikuti saya di",
  },

  HomeData: {
    title: (
      <>
        Hai saya Adam, saya mendesain <br />& membuat Website
      </>
    ),
    scrollButton: "Gulir ke bawah untuk melihat apa yang bisa saya lakukan",
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
        title: "Tentang",
        link: "#AboutSect",
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
    button: "Kontak sekarang!",
  },
};


export { DataStorageEN, DataStorageID };