import lipFiller from "../assets/img/treatments/lipFiller.jpg";
import energyBooster from "../assets/img/treatments/energyBooster.jpg";
import weightLoss from "../assets/img/treatments/weightLoss.jpg";
import facialDefinition from "../assets/img/treatments/facialDefinition.jpg";
import facialSmoother from "../assets/img/treatments/facialSmoother.jpg";
import antiWrinkle from "../assets/img/treatments/antiWrinkle.jpg";
import skinBooster from "../assets/img/treatments/skinBooster.jpg";
import bodyDefinition from "../assets/img/treatments/bodyDefinition.jpg";
import hipFiller from "../assets/img/treatments/hipFiller.jpg";

class Treatment {
  constructor(name, info, url) {
    this.name = name;
    this.info = info;
    this.url = url;
  }
}

const treatmentData = [
  new Treatment(
    "Lip Filter",
    [
      "If you’re looking for more sumptuous lips and a perfect pout, then lip filler augmentations are perfect for you.",
      "Designed to restore and enhance the shape and volume of your lips, lip fillers are an incredibly popular option for both younger and older individuals. Our bespoke treatment is entirely safe, allowing you to have the lips you desire.",
    ],
    lipFiller
  ),
  new Treatment(
    "Energy Booster",
    [
      "Our boosters are specially designed to provide your structure with the right minerals, vitamins, and amino acids that you need for maximum energy and skin health.",
    ],
    energyBooster
  ),
  new Treatment(
    "Weight Loss",
    [
      "Getting rid of unwanted pockets can be one of life’s many difficulties. And it can be one of those subjects that are sensitive to some.",
      "The Aesthetic Lounge offers the latest techniques to help these deposits disappear and ensure a more secure and confident body.",
    ],
    weightLoss
  ),
  new Treatment(
    "Facial Definition",
    [
      "Many people opt for facial treatment in order to add more definition to their cheekbones and jawline, or sometimes to raise the mid-face and give themselves a more youthful looking appearance.",
      "We here at the Aesthetic Lounge carry this out using only the best quality filler on the market today.",
    ],
    facialDefinition
  ),
  new Treatment(
    "Facial Smoother",
    [
      "If you’re looking to address any facial curves, bumps or lumps, as well as nasal appearance, then the Aesthetic Lounge is here to help.",
      "Dermal fillers are implemented into the nasal area’s skin to smooth out the surface, add height, counterbalance an asymmetrical form, or enhance definition in the area.",
      "Simply attend a consultation and we’ll discuss how much filler will be perfect for you, in order to give you your desired results immediately.",
    ],
    facialSmoother
  ),
  new Treatment(
    "Anti-Wrinkle",
    [
      "We here at the Aesthetic Lounge offer anti-wrinkle treatments to help smoothen out your skin and give your features a much more rounded, natural and subtle look.",
      "This treatment is highly regarded for its ability to smoothen lines and wrinkles in the skin, giving you a younger, much more regenerated appearance.",
      "If you feel like you have frown and worry lines, or perhaps minor features like ‘crows feet’ or a ‘gummy smile’, then our anti-wrinkle solution is for you.",
    ],
    antiWrinkle
  ),
  new Treatment(
    "Skin Boosters",
    [
      "Our skin boosters are the ultimate way to achieve fantastic skin health. Ideal for individuals who either want to avoid fillers or have reached their limit, we combine the highest quality of ingredients to create a cocktail that can give your skin a real glow.",
      "Our boosters are jam-packed with vital amino and hyaluronic acids which impact the skin by plumping it up and restoring radiance and youthfulness to the skin.",
    ],
    skinBooster
  ),
  new Treatment(
    "Body Definition",
    [
      "As we all get older, our body naturally begins to lose volume and tissue elasticity, and for thousands of people, they wish to give their body, hips, and buttocks a much needed restoration.",
      "But there’s no need to worry, as we offer a solution to give you the hips and buttocks you desire! There’s no discomfort, no surgery, and no downtime for recovery at all! You’ll see instant results, as the treatment we offer looks to elevate your buttocks by up to 50%",
    ],
    bodyDefinition
  ),
  new Treatment(
    "Non-Surgical BBL + Hip Filler",
    [
      "For those looking to enhance their figure, our BBL treatment is perfect for you.",
      "Alternatively, you could opt for our hip filler treatment, which is sweeping the industry: just a few small implementations will help smooth and round out the area, giving you your desired look.",
    ],
    hipFiller
  ),
];

export default treatmentData;
