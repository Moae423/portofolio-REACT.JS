export default function HeroSection() {
  return (
    <section className="bg-center  bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-6xl">
          {/* namanya user akan muncul disini ketika di input dari button dibawah */}
          Say Your Name!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Selamat datang di website gw, sebelum scroll kebawah, yuk ketik namamu
          disini supaya kita saling kenal nantinya😁
        </p>
        {/* input */}
        <div className="flex items-center max-w-sm mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ketik Dong Namanya Disini"
              required=""
            />
          </div>
          <button className="ms-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Klik Disini!
          </button>
        </div>

        {/* input end*/}
      </div>
    </section>
  );
}
