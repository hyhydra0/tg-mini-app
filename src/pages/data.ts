type Link = {
  id: number;
  name: string;
  title: string;
  text: string;
  url: string;
  img: any;
};

import website from "@/assets/website.png";
import event from "@/assets/event.jpg";
import vision from "@/assets/vision.png";
import roadmap from "@/assets/roadmap.png";
import game from "@/assets/game.png";
import whitepaper from "@/assets/whitepaper.png";

export const LINKS: Link[] = [
  {
    id: 1,
    name: "website",
    title: "Check out our amazing website, powered by CP ventures",
    text: "Open Website in Browser",
    url: "https://projectpolyverse.cpventure.io",
    img: website,
  },
  {
    id: 2,
    name: "event",
    title: " An incredible event is coming up soon, join the event now",
    text: "Open Event in Browser",
    url: "https://eventprojectpolyverse.cpventure.io/pre",
    img: event,
  },
  {
    id: 3,
    name: "vision",
    title: "The vision of a company is crucial, check our vision here",
    text: "Open Vision in Browser",
    url: "https://projectpolyverse.cpventure.io/#vision",
    img: vision,
  },
  {
    id: 4,
    name: "roadmap",
    title: "What is the future of Polyverse? Find out here what’s cooking",
    text: "Open Roadmap in Browser",
    url: "https://projectpolyverse.cpventure.io/#roadmap",
    img: roadmap,
  },
  {
    id: 5,
    name: "game",
    title: "Want to see some game play? Please click here to visit",
    text: "Open Game streaming in Browser",
    url: "https://player.vimeo.com/video/1026098302?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    img: game,
  },
  {
    id: 5,
    name: "whitepaper",
    title: "Want to see our whitepaper? Please check out here",
    text: "Open Whitepaper streaming in Browser",
    url: "https://projectpolyverse.gitbook.io/polyverse-token-economy-whitepaper/tokenomics-breakdown",
    img: whitepaper,
  },
];
