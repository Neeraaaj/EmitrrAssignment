// Leaderboard.tsx

import React from 'react';
import { useLeaderboard } from '../LeaderboardContext';
import { Link } from 'react-router-dom';

const Leaderboard: React.FC = () => {
  const { leaderboard } = useLeaderboard();

  return (
    

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-2xl uppercase bg-gray-50 dark:bg-gray-700  text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Score
                </th>
                <th scope="col" className="px-6 py-3">
                    Language
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            {
                leaderboard.map((score, index) => {
                    return(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {score.username}
                            </th>
                            <td className="px-6 py-4">
                                {score.score}
                            </td>
                            <td className="px-6 py-4">
                                {score.language}
                            </td>
                            <td className="px-6 py-4">
                                {score.date.toLocaleString()}
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    <Link to={"/"}>
        Go Back
    </Link>
</div>

  );
};

export default Leaderboard;
