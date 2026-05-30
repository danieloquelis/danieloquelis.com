import type { Project } from "../types/project.types"

import boominResumeCover from "@/assets/projects/boominresume-cover.png"
import boominReachCover from "@/assets/projects/boominreach-cover.png"
import thumbnailedCover from "@/assets/projects/thumbnailed-cover.png"
import paintableMomentsCover from "@/assets/projects/paintablemoments-cover.png"

export const products: Project[] = [
  {
    id: "boomin-resume",
    title: "Boomin'Resume",
    description:
      "AI-powered CV tailoring that rewrites your resume to match any job description in seconds.",
    group: "product",
    tech: ["Next.js", "TypeScript", "AI"],
    coverImage: boominResumeCover,
    links: [{ type: "demo", url: "https://boominresume.com", label: "Visit" }],
  },
  {
    id: "boomin-reach",
    title: "Boomin'Reach",
    description:
      "Outreach automation that helps you find and connect with the right people at scale.",
    group: "product",
    tech: ["Next.js", "TypeScript", "AI"],
    coverImage: boominReachCover,
    links: [{ type: "demo", url: "https://boominreach.com", label: "Visit" }],
  },
  {
    id: "thumbnailed",
    title: "Thumbnailed",
    description:
      "We watch the video, you ship the thumbnail — AI-generated YouTube thumbnails straight from your footage.",
    group: "product",
    tech: ["Python", "AI", "Computer Vision"],
    coverImage: thumbnailedCover,
    links: [{ type: "demo", url: "https://thumbnailed.app", label: "Visit" }],
  },
  {
    id: "paintable-moments",
    title: "PaintableMoments",
    description:
      "Custom figurine kits made from your photo — turn a memory into a 3D figurine you paint yourself.",
    group: "product",
    tech: ["Next.js", "3D", "E-commerce"],
    coverImage: paintableMomentsCover,
    links: [
      { type: "demo", url: "https://paintablemoments.com", label: "Visit" },
    ],
  },
]

export const openSource: Project[] = [
  {
    id: "unity-quest-conversational-ai",
    title: "Unity Quest Conversational AI",
    description:
      "Unity packages for real-time speech-to-speech conversational AI on Meta Quest headsets, powered by OpenAI and ElevenLabs.",
    group: "open-source",
    tech: ["Unity", "C#", "Meta Quest", "OpenAI"],
    gradient: "from-violet-600 to-fuchsia-500",
    badge: "🎙️",
    links: [
      {
        type: "github",
        url: "https://github.com/danieloquelis/Unity-QuestConversationalAI",
        label: "GitHub",
      },
    ],
    stars: 49,
  },
  {
    id: "unity-quest-vision-stream",
    title: "Unity Quest Vision Stream",
    description:
      "Real-time computer vision on Meta Quest using the Passthrough Camera API with WebRTC streaming to external AI inference servers.",
    group: "open-source",
    tech: ["Unity", "C#", "Meta Quest 3", "Computer Vision"],
    gradient: "from-cyan-500 to-blue-600",
    badge: "👁️",
    links: [
      {
        type: "github",
        url: "https://github.com/danieloquelis/Unity-QuestVisionStream",
        label: "GitHub",
      },
    ],
    stars: 46,
  },
  {
    id: "rhubarb-lip-sync-wasm",
    title: "Rhubarb Lip Sync WASM",
    description:
      "WebAssembly port of Rhubarb Lip Sync — automatic mouth animation from audio, optimized for the web with TypeScript support.",
    group: "open-source",
    tech: ["WASM", "C", "TypeScript", "Three.js"],
    gradient: "from-orange-500 to-red-500",
    badge: "👄",
    links: [
      {
        type: "github",
        url: "https://github.com/danieloquelis/rhubarb-lip-sync-wasm",
        label: "GitHub",
      },
    ],
    stars: 29,
  },
  {
    id: "easy-demo",
    title: "EasyDemo",
    description:
      "A free, open-source screen recorder for macOS — professional-quality, styled recordings without the paywall.",
    group: "open-source",
    tech: ["Swift", "macOS"],
    gradient: "from-slate-500 to-gray-700",
    badge: "🎬",
    links: [
      {
        type: "github",
        url: "https://github.com/danieloquelis/EasyDemo",
        label: "GitHub",
      },
    ],
    stars: 24,
  },
  {
    id: "chat-avatar-ai",
    title: "Chat Avatar AI",
    description:
      "An interactive 3D avatar chat experience that puts a face to the generative AI models we use every day.",
    group: "open-source",
    tech: ["TypeScript", "Three.js", "AI"],
    gradient: "from-emerald-500 to-teal-600",
    badge: "🤖",
    links: [
      { type: "demo", url: "https://chat-avatar-ai.vercel.app", label: "Demo" },
      {
        type: "github",
        url: "https://github.com/danieloquelis/chat-avatar-ai",
        label: "GitHub",
      },
    ],
    stars: 9,
  },
]
