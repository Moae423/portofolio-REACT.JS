import gambar from "../assets/git.jpg";
export default function HeroSection() {
  function handleKey(event) {
    const nama = document.getElementById("inputName").value;
    event.key === "Enter"
      ? (event.preventDefault(),
        (document.getElementById(
          "YourName"
        ).innerHTML = `Haii ${nama}, Selamat Datang!`))
      : null;
  }
  function handleClick(e) {
    e.preventDefault();
    const nama = document.getElementById("inputName").value;
    document.getElementById(
      "YourName"
    ).innerHTML = `Haii ${nama}, Selamat Datang!`;
  }
  return (
    <section
      style={{ backgroundImage: `url(${gambar})` }}
      className="min-h-screen  bg-cover bg-gray-700 bg-blend-soft-light flex items-center justify-center"
    >
      <div className="px-4 mx-auto  max-w-screen-xl text-center ">
        <h1
          id="YourName"
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          {/* namanya user akan muncul disini ketika di input dari button dibawah */}
          Say Your Name!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-3xl md:text-2xl sm:text-xl sm:px-16 lg:px-48">
          Selamat datang di website gw, sebelum scroll kebawah, yuk ketik namamu
          disini supaya kita saling kenal nantinya😁
        </p>
        {/* input */}
        <div className="flex items-center max-w-md mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              onKeyDown={handleKey}
              id="inputName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ketik Dong Namanya Disini"
              required=""
            />
            {/* input end*/}
          </div>
          <button
            onClick={handleClick}
            className="ms-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            V
          </button>
        </div>
      </div>
    </section>
  );
}
