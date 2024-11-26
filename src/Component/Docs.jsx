import React from 'react';
import { BookOpen, Code, Settings, Download, ExternalLink } from 'lucide-react';

const SwiperDocumentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl p-10 overflow-hidden">
        {/* Header */}
        <header className="flex items-center gap-6 pb-8 border-b border-gray-200">
          <BookOpen className="text-blue-600" size={56} />
          <div>
            <h1 className="text-5xl font-bold text-gray-800">Swiper Carousel Configuration Guide</h1>
            <p className="text-lg text-gray-500 mt-2">
              Learn how to configure and use Swiper to build stunning, interactive sliders for your projects.
            </p>
          </div>
        </header>

        {/* Installation */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
            <Download className="text-blue-600" size={36} />
            Installation
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Swiper React is available as part of the main Swiper library and can be installed via NPM:
          </p>
          <pre className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-md overflow-x-auto">
            npm i swiper
          </pre>
        </section>

        {/* Usage */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
            <Code className="text-purple-600" size={36} />
            Usage
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            The Swiper library provides two main React components: <code className="bg-gray-100 px-2 py-1 rounded">Swiper</code> 
            and <code className="bg-gray-100 px-2 py-1 rounded">SwiperSlide</code>. Here's a basic example:
          </p>
          <pre className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-md overflow-x-auto">
            {`// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};`}
          </pre>
        </section>

        {/* Key Configuration Options */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
            <Settings className="text-green-600" size={36} />
            Key Configuration Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Basic Properties</h3>
              <ul className="space-y-3">
                <li>
                  <code className="bg-gray-200 px-3 py-2 rounded">grabCursor={'{true}'}</code>
                  <p className="text-gray-600">Enables a 'grab' cursor when hovering over the slider.</p>
                </li>
                <li>
                  <code className="bg-gray-200 px-3 py-2 rounded">loop={'{true}'}</code>
                  <p className="text-gray-600">Allows infinite looping through slides, returning to the first slide after the last.</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Rotation Settings</h3>
              <ul className="space-y-3">
                <li>
                  <code className="bg-gray-200 px-3 py-2 rounded">rotate: 50</code>
                  <p className="text-gray-600">Slides rotate slightly while dragging.</p>
                </li>
                <li>
                  <code className="bg-gray-200 px-3 py-2 rounded">rotate: 0</code>
                  <p className="text-gray-600">No rotation occurs during dragging.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coverflow Effect Configuration */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
            <Code className="text-purple-600" size={36} />
            Coverflow Effect Configuration
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-4">Stretch Parameter</h3>
              <p className="text-gray-600 mb-4">
                Controls horizontal spacing between slides.
              </p>
              <ul className="list-disc pl-8 text-gray-600 space-y-2">
                <li><strong>Value 0:</strong> No additional spacing or overlapping.</li>
                <li><strong>Positive Values:</strong> Increases horizontal spacing between slides.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-4">Depth Parameter</h3>
              <p className="text-gray-600 mb-4">
                Controls perceived Z-axis distance between slides, creating a 3D effect.
              </p>
              <ul className="list-disc pl-8 text-gray-600 space-y-2">
                <li><strong>Positive Values:</strong> Increases the sense of depth.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Modifier Parameter</h3>
              <p className="text-gray-600 mb-4">
                Multiplies the intensity of the 3D effect.
              </p>
              <ul className="list-disc pl-8 text-gray-600 space-y-2">
                <li><strong>Default:</strong> 1 (no scaling).</li>
                <li><strong>Higher Values:</strong> Exaggerates rotation, shift, and stretch.</li>
                <li><strong>Lower Values:</strong> Creates subtler visual effects.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Example */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
            <Code className="text-purple-600" size={36} />
            Advanced Example
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Here's an advanced example that includes the Navigation, Pagination, and Scrollbar modules:
          </p>
          <pre className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-md overflow-x-auto">
            {`// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};`}
          </pre>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-lg">
            Written by <span className="font-bold text-gray-800">Apil Neupane</span>
          </p>
          <a
            href="https://swiperjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-semibold mt-4"
          >
            Learn More <ExternalLink className="ml-2" size={20} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default SwiperDocumentation;
