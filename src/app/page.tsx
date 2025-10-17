"use client";

import { useState } from "react";
import { Play, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Video {
  id: string;
  vimeoId: string;
  title: string;
  description: string;
  duration: string;
  chapter: string;
  order: number;
}

const VIDEOS: Video[] = [
  {
    id: "1",
    vimeoId: "445475124",
    title: "Хичээлийн танилцуулга болон програмчлалын орчин ",
    description:
      "Хичээлийн танилцуулга болон програмчлалын орчин (DEV C++) тохируулах",
    duration: "06:10",
    chapter: "Үндэс",
    order: 1,
  },
  {
    id: "2",
    vimeoId: "445475153",
    title: "Програмчлалын орчин (CodeBlocks)",
    description:
      "Хувьсагч, өгөгдлийн төрөл, санах ойн удирдлагын тухай суралцах",
    duration: "03:30",
    chapter: "Үндэс",
    order: 2,
  },
  {
    id: "3",
    vimeoId: "445475150",
    title: "Анхны програм бүтээх нь",
    description: "Hello World програмыг бичиж, ажиллуулах",
    duration: "13:48",
    chapter: "Үндэс",
    order: 3,
  },
  {
    id: "4",
    vimeoId: "446493740",
    title: "Өгөгдлийн төрөл",
    description: "Өгөгдлийн төрөл болон хувиргалтын тухай ойлголт",
    duration: "05:15",
    chapter: "Үндэс",
    order: 4,
  },
  {
    id: "5",
    vimeoId: "446493790",
    title: "Арифметик үйлдлүүд хийх",
    description: "Арифметик үйлдлүүд",
    duration: "07:40",
    chapter: "Үндэс",
    order: 5,
  },
  {
    id: "6",
    vimeoId: "446493803",
    title: "If нөхцөл шалгах үйлдэл",
    description: "Сонголт оператор болон шийдвэр гаргах механизм",
    duration: "05:50",
    chapter: "Нөхцөлт оператор",
    order: 6,
  },
  {
    id: "7",
    vimeoId: "446493838",
    title: "If нөхцөл шалгах үйлдэл 2",
    description: "Сонголт оператор болон шийдвэр гаргах механизм",
    duration: "10:20",
    chapter: "Нөхцөлт оператор",
    order: 7,
  },
  {
    id: "8",
    vimeoId: "446496221",
    title: "Switch сонголтын оператор",
    description: "Switch сонголтын оператор болон олон нөхцөл шалгах",
    duration: "20:45",
    chapter: "Нөхцөлт оператор",
    order: 8,
  },
  {
    id: "9",
    vimeoId: "446498055",
    title: "While нөхцөлт давталт гэж юу вэ?",
    description: "While нөхцөлт давталтын тухай ойлголт",
    duration: "03:48",
    chapter: "Давталт",
    order: 9,
  },
  {
    id: "10",
    vimeoId: "446498966",
    title: "While нөхцөлт давталт ашиглах",
    description: "While нөхцөлт давталтын тухай ойлголт",
    duration: "05:53",
    chapter: "Давталт",
    order: 10,
  },
  {
    id: "11",
    vimeoId: "446500497",
    title: "While нөхцөлт давталт болон Math.h сан",
    description: "While нөхцөлт давталтын тухай ойлголт",
    duration: "07:35",
    chapter: "Давталт",
    order: 11,
  },
  {
    id: "12",
    vimeoId: "446502216",
    title: "For давталт",
    description: "For давталтын тухай ойлголт",
    duration: "04:19",
    chapter: "Давталт",
    order: 12,
  },
  {
    id: "13",
    vimeoId: "446502216",
    title: "Math.h толгой файл болон даалгавар",
    description: "Толгой сан",
    duration: "03:39",
    chapter: "Math.h сан",
    order: 13,
  },
  {
    id: "14",
    vimeoId: "446508513",
    title: "Array массивын тухай",
    description: "Жагсаалт",
    duration: "08:10",
    chapter: "Массив",
    order: 14,
  },
  {
    id: "15",
    vimeoId: "446510307",
    title: "1 хэмжээст жагсаалт",
    description: "Жагсаалт",
    duration: "08:45",
    chapter: "Массив",
    order: 15,
  },
  {
    id: "16",
    vimeoId: "446511766",
    title: "2 хэмжээст жагсаалт",
    description: "Жагсаалт",
    duration: "05:32",
    chapter: "Массив",
    order: 16,
  },
  {
    id: "17",
    vimeoId: "446496172",
    title: "Дэлгэрэнгүй if нөхцөл шалгах үйлдэл - жижиг програм",
    description: "Жагсаалт",
    duration: "11:47",
    chapter: "Массив",
    order: 17,
  },
  {
    id: "18",
    vimeoId: "472117673",
    title: "Онгоц бууддаг тоглоом - жижиг програм",
    description: "Жагсаалт",
    duration: "19:43",
    chapter: "Бүтээл",
    order: 18,
  },
  {
    id: "19",
    vimeoId: "474557869",
    title: "Толь бичгийн програм зохиох - жижиг програм",
    description: "Жагсаалт",
    duration: "30:11",
    chapter: "Бүтээл",
    order: 19,
  },
  {
    id: "20",
    vimeoId: "485933355",
    title: "ATM програм хийцгээе - жижиг програм",
    description: "Жагсаалт",
    duration: "14:25",
    chapter: "Бүтээл",
    order: 20,
  },
];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video>(VIDEOS[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const chapters = Array.from(new Set(VIDEOS.map((v) => v.chapter)));

  const filteredVideos = VIDEOS.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesChapter =
      !selectedChapter || video.chapter === selectedChapter;
    return matchesSearch && matchesChapter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Лого"
                width={120}
                height={48}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Програмчлалын үндэс
                </h1>
                <p className="text-sm text-slate-400">С хэл</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-purple-400">
                {VIDEOS.length}
              </p>
              <p className="text-sm text-slate-400">Хичээлүүд</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Video Player & Details */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Video Player */}
              <div className="aspect-video overflow-hidden rounded-lg border border-slate-800 bg-black shadow-2xl">
                <iframe
                  src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* Video Info */}
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="mb-2 inline-block rounded bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400">
                      {selectedVideo.chapter}
                    </div>
                    <h2 className="mt-3 text-2xl font-bold text-white">
                      {selectedVideo.title}
                    </h2>
                  </div>
                  <span className="text-sm font-medium text-slate-400">
                    {selectedVideo.duration}
                  </span>
                </div>
                <p className="text-slate-300">{selectedVideo.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar - Playlist */}
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Хичээл хайх..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-slate-800 bg-slate-900/50 pl-10 text-white placeholder-slate-500"
              />
            </div>

            {/* Chapter Filters */}
            <div className="space-y-2">
              <button
                onClick={() => setSelectedChapter(null)}
                className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  !selectedChapter
                    ? "bg-purple-500 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Бүх бүлэг
              </button>
              {chapters.map((chapter) => (
                <button
                  key={chapter}
                  onClick={() => setSelectedChapter(chapter)}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    selectedChapter === chapter
                      ? "bg-purple-500 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {chapter}
                </button>
              ))}
            </div>

            {/* Video List */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase text-slate-400">
                Хичээлүүд ({filteredVideos.length})
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {filteredVideos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`w-full rounded-lg border px-4 py-3 text-left transition-all ${
                      selectedVideo.id === video.id
                        ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                        : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Play
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          selectedVideo.id === video.id
                            ? "text-purple-400"
                            : "text-slate-500"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {video.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {video.duration}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-slate-300">Бүх нийтийн боловсролд зориулав</p>
            <a
              href="https://nhs.edu.mn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-400/50 hover:decoration-purple-300/50"
            >
              nhs.edu.mn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
