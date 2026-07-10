import a1 from "@/assets/agent-1.jpg";
import a2 from "@/assets/agent-2.jpg";
import a3 from "@/assets/agent-3.jpg";

export type Agent = {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  photo: string;
};

export const agents: Agent[] = [
  {
    id: "olivia-hart",
    name: "Olivia Hart",
    role: "Principal Broker",
    phone: "(310) 555-0142",
    email: "olivia@primeestates.com",
    photo: a1,
  },
  {
    id: "daniel-brooks",
    name: "Daniel Brooks",
    role: "Luxury Sales Director",
    phone: "(212) 555-0193",
    email: "daniel@primeestates.com",
    photo: a2,
  },
  {
    id: "sofia-martins",
    name: "Sofia Martins",
    role: "Client Relations Lead",
    phone: "(415) 555-0177",
    email: "sofia@primeestates.com",
    photo: a3,
  },
];