import React from 'react';
import { NavLink } from 'react-router';
import './nav.css'

const Navbar = () => {

    return (
        <div className="">
        <div className="flex justify-center items-center gap-4 h-24 bg-[url('https://i.ibb.co/ns8rz9fL/15.jpg')] bg-cover bg-center">
        <img
          className="w-10 h-12 object-cover"
          src="https://media-hosting.imagekit.io/0f23902fe28447de/logo1.png?Expires=1841838294&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x-yELpuvTQ8C2JXGZxMJjiAbltnOdSqLQjroi4fIOcu1Xl7myr5DO3L9WdkGw3hSx32wHJtcZuA9ZST7TrDzy5~fmbkjceOZael2EV2ZBB0OP1xd61cOlr-~~tBpjbv9~QtRWY5NyejVSZjvntQ-e8pNumG1W2dcfIcxq2EOF2CaPDS7-QqCjtp866eZ9z2wPSBS0BMlne7MkoNFYremQrRFSaU6L-2UVHlz8qviG2OBJoWpxnDr3rQFVOML2onosXPI8vcv6gbBvxLaVVhGqwBdJIqvsljAMnmb5zzNaKI8XO6A0Q2EDnM58dqVVEXORNJoBwPAPZNSvS-fljsnFg_"
          alt=""
        />
        <h4 className="rancho-regular text-white text-4xl font-extrabold">
          Espresso Emporium
        </h4>
      </div>
      </div>
    );
};

export default Navbar;