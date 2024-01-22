import React from 'react'
import { Link } from 'react-router-dom'

interface CourseProps{
    src: string,
    desc: string,
    title: string
}

const CourseCard:React.FC<CourseProps> = ({src, desc, title}) => {
  return (
    <a className="w-[45vw] relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-xl">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                    {title}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-500">By John Doe</p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                <img
                    alt="Paul Clapton"
                    src={src}
                    className="h-16 w-16 rounded-lg object-cover shadow-xl"
                />
                </div>
            </div>

            <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                    {desc}
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">21 Jan, 2024</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Test time</dt>
                <dd className="text-xs text-gray-500">3 minute</dd>
                </div>
            </dl>
        </a>
  )
}

export default CourseCard