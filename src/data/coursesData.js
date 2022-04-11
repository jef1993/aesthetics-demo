class Course {
  constructor(name, url, info) {
    this.name = name;
    this.url = url;
    this.info = info;
  }
}

const coursesData = [
  new Course(
    "Pathway to Aesthetics",
    "https://theaestheticlounge.co.uk/static/media/01.94bdb00b.png",
    [
      "We will require that every trainee and aspiring aesthetician enrol and complete our pathway course, designed to give you the basic qualifications and lay the foundations for your future in the industry.",
      "Upon completion, you will become skilled in anatomy and physiology, as well as trained in delivering select therapies.",
    ]
  ),
  new Course(
    "Introduction to Dermal Fillers",
    "https://theaestheticlounge.co.uk/static/media/02.3e714409.png",
    [
      "We all start somewhere, and we feel that our introductory course on dermal fillers is the perfect way to kickstart your future career.",
      "Here, you will learn how to properly prepare and administer dermal fillers, including the scientific, and health and safety details.",
    ]
  ),
  new Course(
    "Anti-Wrinkle: An Introduction",
    "https://theaestheticlounge.co.uk/static/media/03.bd0b8071.png",
    [
      "This particular course covers the three primary areas comprising the anti-wrinkle treatments we offer at the Aesthetic Lounge.",
      "Master the fundamentals and become well-versed in the implementation, understanding the science behind the anti-wrinkle application, and the advantages and disadvantages of the practise.",
    ]
  ),
  new Course(
    "The Full Works",
    "https://theaestheticlounge.co.uk/static/media/04.34e029bd.png",
    [
      "Our most complete and popular course to date, so we encourage you to sign up fast to avoid disappointment!",
      "The Full Works comprises both our ‘Introduction to Dermal Fillers’ and ‘Basic Anti-Wrinkle’ courses, delivered in a single combined course to give you the complete experience in learning and practising the fundamentals.",
    ]
  ),
  new Course(
    "Platinum Package",
    "https://theaestheticlounge.co.uk/static/media/05.5b33466d.png",
    [
      "If you’re seeking a more hands-on, one-to-one learning experience, then the Aesthetic Lounge has the perfect package for you.",
      "Our platinum package combines all of our ‘Pathway’ and ‘Introduction’ courses into one, but delivered personally to you!",
    ]
  ),
  new Course(
    "Gold Package",
    "https://theaestheticlounge.co.uk/static/media/06.f9baa86d.png",
    [
      "Similar to our Platinum Package, the Gold Package is beneficial for those looking to learn in smaller groups than what we usually cater to.",
      "Here, you will learn everything covered in our ‘Pathway’ and ‘Introduction’ courses, as our specialist educator teaches you in small classes of two or three individuals.",
    ]
  ),
  new Course(
    "Advanced Courses",
    "https://theaestheticlounge.co.uk/static/media/07.04647f76.png",
    [
      "Led by the head practitioner at your chosen Aesthetic Lounge clinic, our advanced courses are tailored for those looking to truly master their skills as an aesthetician.",
    ]
  ),
  new Course(
    "Health Courses",
    "https://theaestheticlounge.co.uk/static/media/08.c4862324.png",
    [
      "Taught by our resident skin expert, these courses are more dedicated to refining your knowledge and expertise in boosting skin, implementing vitamins, and applying weight loss solutions.",
    ]
  ),
  new Course(
    "Refresher Courses",
    "https://theaestheticlounge.co.uk/static/media/09.421305e8.png",
    [
      "Depending on your individual skill and desires, the Aesthetic Lounge offers a wide range of refresher courses covering the content mentioned in our accredited courses.",
      "Enquire today to discover how we can help hone your skills into becoming the perfect practitioner, and even supply you with the opportunity to join both our exclusive help forum and O.R.A (Organisation of Recognised Aestheticians.",
    ]
  ),
];

export default coursesData;
