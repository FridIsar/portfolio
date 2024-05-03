function Experience() {
    return (
<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left w-full grid md:grid-cols-3 grid-cols-2 gap-4">
      <div className="bg-green-200 p-4">Under</div>
        <div className="bg-yellow-200 p-4">Construction</div>
        <div className="bg-purple-200 p-4">🚧</div>
        <div className="bg-pink-200 p-4">⚠️</div>
        <div className="bg-red-200">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M40.5,-17.4C46.7,5.8,41.8,28.3,28.3,37.9C14.7,47.5,-7.5,44.2,-26.7,31.4C-45.9,18.7,-62.2,-3.4,-57.3,-24.9C-52.3,-46.4,-26.2,-67.2,-4.5,-65.8C17.2,-64.3,34.4,-40.5,40.5,-17.4Z" transform="translate(100 100)" />
        </svg>
        </div>
        <div className="bg-blue-200 p-4">Software engineer</div>
      </div>
    );
    }

export default Experience;