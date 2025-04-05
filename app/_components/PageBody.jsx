import React from 'react'

function PageBody() {
  return (
    <section className="bg-gray -mt-20 lg:grid lg:h-screen lg:place-content-center">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Learn 
        <strong className="text-red-500"> whatever </strong>
        you want,
        <strong className="text-red-500"> however </strong> you want
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        PulseTutor generates personalized courses for you.
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-red-500 bg-red-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-600"
          href="#"
        >
          Start Learning
        </a>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default PageBody