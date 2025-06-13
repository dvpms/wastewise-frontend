// src/app/(main)/leaderboard/page.js
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// Komponen kecil untuk kartu podium agar kode lebih bersih
function PodiumCard({ user, rank, podiumStyle, emoji }) {
  return (
    <div className={`flex flex-col items-center text-center ${podiumStyle}`}>
      <span className="text-4xl">{emoji}</span>
      {/* <div className="relative mt-2">
        <Image
          className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-lg"
          width={100}
          height={100}
          src="/profile-placeholder.png" // Menggunakan placeholder yang sama
          alt={user.username}
        />
      </div> */}
      <h3 className="mt-4 text-lg font-bold text-gray-800">{user.username}</h3>
      <div className="mt-2 rounded-lg bg-green-100 px-4 py-2">
        <p className="font-bold text-green-800">{user.points} Poin</p>
      </div>
    </div>
  );
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/leaderboard`;
        const response = await axios.get(apiUrl);
        setLeaderboard(response.data.data.users);
      } catch (err) {
        setError("Gagal memuat papan peringkat.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // Pisahkan data untuk podium (top 3) dan sisanya untuk tabel
  const topThree = leaderboard.slice(0, 3);
  const restOfLeaderboard = leaderboard.slice(3);

  // Pastikan ada 3 user untuk ditampilkan di podium, jika tidak, isi dengan data kosong
  const podiumUsers = [
    topThree.find((u, i) => i === 1), // Rank 2
    topThree.find((u, i) => i === 0), // Rank 1
    topThree.find((u, i) => i === 2), // Rank 3
  ];

  if (loading) {
    return <div className="text-center p-10">Memuat Papan Peringkat...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Papan Peringkat
          </h1>
          <p className="text-center text-gray-500 mb-12">
            Lihat kontributor teratas WasteWise!
          </p>

          {/* Bagian Podium untuk Top 3 */}
          {topThree.length > 0 && (
            <div className="flex justify-center items-end gap-4 md:gap-8 mb-16">
              {/* Rank 2 */}
              {podiumUsers[0] && (
                <PodiumCard
                  user={podiumUsers[0]}
                  rank={2}
                  podiumStyle="order-2 md:order-1"
                  emoji="🥈"
                />
              )}
              {/* Rank 1 */}
              {podiumUsers[1] && (
                <PodiumCard
                  user={podiumUsers[1]}
                  rank={1}
                  podiumStyle="order-1 md:order-2 md:mb-8"
                  emoji="🥇"
                />
              )}
              {/* Rank 3 */}
              {podiumUsers[2] && (
                <PodiumCard
                  user={podiumUsers[2]}
                  rank={3}
                  podiumStyle="order-3"
                  emoji="🥉"
                />
              )}
            </div>
          )}

          {/* Tabel untuk Peringkat 4 ke bawah */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Point
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {restOfLeaderboard.map((user, index) => (
                  <tr key={user.username}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 4}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                      {user.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
