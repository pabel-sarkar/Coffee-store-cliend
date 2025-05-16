import React, { useState } from "react";


const Footer = () => {
  const [error,setError] = useState('');
  const handleclick = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError('Please fill your name , email and message');
    } else {
      setError('');
      form.reset();
    }
  };

  return (
    <div className="bg-[url('https://media-hosting.imagekit.io/abad3bb29b50413a/FooterBg.png?Expires=1841838654&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eaK3Rjwcz9VlmJmGmzke9vTYl9PbSRJHR5Saq8~CN4If1E-Fvr4kb3MRr2~1iHLdwxSQ74Lkf~j7fXSglnBGNyFMzEJHLgtZ5eG-nDWJ-OQj-ggunOV4WAuZUvL65QBqKTzJ~7Np6uXyR6cF0h~p8ZZrfFMw5FGkwK9iQznvFYoWClgiiYLQkrcskKzhcB-W6qmcliFSPIcLsA6wvYtGjtty12RrKtXXvx0d-f~QOC7LXt6cqessoYs10QuQAKLsvTJ6sCIMKKFE58di-tQW7muUzG7~ZTLsSDmG5fX2im-D3s8nW4pqSCWa~BjxIO2ouPcbakZYMzbCiQXCOxnouQ__')] bg-cover bg-center">
      <div className="w-10/12 mx-auto pt-16 pb-16 grid lg:grid-cols-2 lg:gap-64">
        <div>
          <img
            className="w-8 h-10 float-updown"
            src="https://media-hosting.imagekit.io/0f23902fe28447de/logo1.png?Expires=1841838294&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x-yELpuvTQ8C2JXGZxMJjiAbltnOdSqLQjroi4fIOcu1Xl7myr5DO3L9WdkGw3hSx32wHJtcZuA9ZST7TrDzy5~fmbkjceOZael2EV2ZBB0OP1xd61cOlr-~~tBpjbv9~QtRWY5NyejVSZjvntQ-e8pNumG1W2dcfIcxq2EOF2CaPDS7-QqCjtp866eZ9z2wPSBS0BMlne7MkoNFYremQrRFSaU6L-2UVHlz8qviG2OBJoWpxnDr3rQFVOML2onosXPI8vcv6gbBvxLaVVhGqwBdJIqvsljAMnmb5zzNaKI8XO6A0Q2EDnM58dqVVEXORNJoBwPAPZNSvS-fljsnFg_"
            alt=""
          />
          <h4 className="rancho-regular footer-text mb-4">Espress Emporium</h4>
          <p className="my-4 md:w-[673px]">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-2 my-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
               className="transition transform hover:text-blue-600 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@AtakurRahoman"
              target="_blank"
              rel="noopener noreferrer"
               className="transition transform hover:text-red-600 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/atikurpabel"
              target="_blank"
              rel="noopener noreferrer"
               className="transition transform hover:text-blue-600 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>

          <h4 className="rancho-regular footer-text my-4">Getin Touch</h4>
          <p className="my-2 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 7.004 5.746 12.75 12.75 12.75a.75.75 0 0 0 .75-.75v-2.043a.75.75 0 0 0-.507-.708l-2.482-.827a.75.75 0 0 0-.854.274l-.678.906a10.47 10.47 0 0 1-4.07-4.07l.906-.678a.75.75 0 0 0 .274-.854l-.827-2.482a.75.75 0 0 0-.708-.507H3a.75.75 0 0 0-.75.75z"
              />
            </svg>
            +88 01732880531
          </p>
          <p className="my-2 flex items-center gap-3">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.91l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5a2.25 2.25 0 01-1.07-1.91V6.75"
              />
            </svg>{" "}
            atakurrahoman4@gmail.com
          </p>
          <p className="my-2 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 384 512"
              className="w-6 h-6"
            >
              <path d="M168 0C75.1 0 0 75.1 0 168c0 87.8 136 287.1 168 344 32-56.9 168-256.2 168-344C336 75.1 260.9 0 168 0zm0 256c-48.6 0-88-39.4-88-88s39.4-88 88-88 88 39.4 88 88-39.4 88-88 88z" />
            </svg>{" "}
            Kurigram Rangpur Rangpur city
          </p>
        </div>

        <div className="flex items-center lg:ml-20">
          <div className="">
            <form onSubmit={handleclick} className="p-8 rounded-xl w-full max-w-md space-y-5">
              <h2 className="rancho-regular footer-text">Connect with Us</h2>

              <input
                type="text"
                name="name"
                placeholder="Name"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Name")}
                className="w-full px-4 py-2  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Email")}
                className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
              />

              <textarea
                placeholder="Message"
                name="message"
                rows="4"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Message")}
                className="w-full px-4 py-2  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm resize-none"
              />
             {error && <p className=" text-red-400 text-xs">{error}</p>}

              <button
                type="submit"
                className="rancho-regular px-6 py-2 rounded-full hover:bg-[#ddd2cf] border-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
