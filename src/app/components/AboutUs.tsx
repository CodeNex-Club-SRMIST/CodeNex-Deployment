import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h1 className="text-4xl md:text-5xl text-black text-center mb-12">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Who we Are? Card */}
        <div className="bg-black text-white rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            <Image
              src="/assets/Vector.svg"
              alt="Layers Icon"
              width={24}
              height={24}
              className="absolute top-6 right-6"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Who we are?</h2>
              <p className="text-gray-300 text-sm w-3/4">
                Codenex is the tech club of SRM, driven by passionate students who innovate, collaborate, and push the boundaries of technology.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision and Mission Card */}
        <div className="bg-[#CBF48F] rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            <Image
              src="/assets/icon1.png"
              alt="Network Icon"
              width={24}
              height={24}
              className="absolute top-6 right-6"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-black">
                Our Vision and Mission?
              </h2>
              <p className="text-gray-700 text-sm">
                We aim to foster a thriving tech community by encouraging learning, innovation, and real-world problem-solving through hands-on projects and collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us? Card */}
        <div className="bg-[#FFE17B] rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            <Image
              src="/assets/icon2.png"
              alt="Bookmark Icon"
              width={24}
              height={24}
              className="absolute top-6 right-6"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-black">Why Choose Us?</h2>
              <p className="text-gray-700 text-sm w-3/4">
                At Codenex, we offer a unique environment where students can explore emerging technologies, participate in real-world projects, and gain hands-on experience. Our mentorship-driven approach, collaborative culture, and strong industry connections help members sharpen their skills and stay ahead in the tech world.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {/* What we do? Card */}
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
            <div className="relative p-6 h-full flex flex-col justify-end">
              <Image
                src="/assets/icon3.svg"
                alt="X Icon"
                width={24}
                height={24}
                className="absolute top-6 right-6"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-black">What we do?</h2>
                <p className="text-gray-700 text-sm">
                  We organize workshops, hackathons, and coding challenges to foster a culture of learning and innovation. Our members collaborate on impactful projects, contribute to open-source initiatives, and build solutions that address real-world problems. Whether you&apos;re a beginner or an expert, Codenex provides the perfect space to learn, experiment, and grow.
                </p>
              </div>
            </div>
          </div>

          {/* Team Photo Card */}
          <div className="rounded-3xl overflow-hidden shadow-lg relative aspect-square">
            <Image
              src="/assets/TeamPic.jpg"
              alt="Team photo"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
